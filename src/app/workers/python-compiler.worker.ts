/// <reference lib="webworker" />

importScripts("https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js");
declare var pyodide: any;
declare var loadPyodide: any;
declare var micropip: any;
async function loadPyodideAndPackages() {
  self.pyodide = await loadPyodide();
  await self.pyodide.loadPackage(["micropip"]);
  self.pyodide.FS.mkdir("/mnt");
  self.pyodide.FS.mount(self.pyodide.FS.filesystems.IDBFS, { root: "." }, "/mnt");

  self.pyodide.FS.writeFile("fox.py", `print("HELLOWORLDFOX")`, { encoding: "utf8" });
  // await self.pyodide.loadPackage(["numpy", "pytz"]);
}
let pyodideReadyPromise = loadPyodideAndPackages();

addEventListener("message", async ({ data }) => {
  if (data.type === "PackageInstall") {
    await pyodideReadyPromise;
    for (const pkg of data.packages) {
      self.pyodide.runPythonAsync(`
      import micropip
      await micropip.install("${pkg}")
      package_list = micropip.list()
      print(package_list)
      `).then((result: any) => {
        postMessage(result);
      })
        .catch((error: any) => {
          postMessage(error);
        });
    }
  }
  if (data.type === "ExecuteCode") {
    await pyodideReadyPromise;
    const result = await self.pyodide.runPythonAsync(data.code);
    postMessage(result);
  }
});

// addEventListener('message', async ({ data }) => {
//   data
//   // pyodide.loadPackage(['pandas', 'numpy']).then(() => {
//   //   // console.log(pyodide);

//   //   let print_code = `
//   //     print("HELLOWORLD")

//   //     `
//   //   pyodide.runPython(print_code)
//   //   postMessage("HELLOWORLD");


//   // });

// }
// );