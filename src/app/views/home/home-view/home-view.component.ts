import { Component, OnInit } from '@angular/core';
import { FsService, FsServiceTest } from 'src/app/services/fs-service/fs.service';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';

@Component({
  selector: 'tal-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  public fs;
  constructor(
    private pythonSrv: PythonCompilerService,
    private _fs:FsService
  ) { 
    this.fs = _fs;
  }

  async ngOnInit(): Promise<void> {
    
  }
  
    /*
    test.createTestFiles().then(() => {
      //alert('done!')
      
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
        import os
        print(os.listdir('/'))
        print(os.listdir('/mnt'))
        import fox
        import mainC
`
      }

      this.pythonSrv.worker.postMessage(messageToSend);

      
    });
    */
    
  

}
