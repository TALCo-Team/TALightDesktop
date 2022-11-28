import { Component, OnInit } from '@angular/core';
import { PythonCompilerMessageInterface, PythonCompilerMessageInterfaceType, PythonCompilerService } from 'src/app/services/python-compiler.service';

@Component({
  selector: 'tal-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(
    private pythonSrv: PythonCompilerService,
  ) { }

  ngOnInit(): void {
    this.pythonSrv.worker.onmessage = ({ data }) => {
      console.log(`page got message: ${data}`);
    }


    const messageInstall: PythonCompilerMessageInterface = {
      type: PythonCompilerMessageInterfaceType.PackageInstall,
      packages: ['fake-traffic'],
    }
    this.pythonSrv.worker.postMessage(messageInstall);

    const messageToSend: PythonCompilerMessageInterface = {
      type: PythonCompilerMessageInterfaceType.ExecuteCode,
      code: `
      import fox
      import sys
      print ("HELLOWORLD")
      print(1+2)`,
      
    }

    this.pythonSrv.worker.postMessage(messageToSend);
  }

}
