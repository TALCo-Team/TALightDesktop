import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ProjectEnvironment } from '../project-manager-service/project-manager.types';

@Injectable({
  providedIn: 'root'
})
export class HotkeysService {
  
  private hotkeysSubject = new Subject<KeyboardEvent>();

  public hotkeysAction = new EventEmitter<any>();
  public configModified = false;

  constructor(
  ) {
    // register keyboard event listener when the service is initialized
    this.registerHotkeysEvents();
  }

  // emit keyboard events
  public emitHotkeysEvent(event: KeyboardEvent) {
    this.hotkeysSubject.next(event);
  }

  // subscribe to hotkeys events
  public registerHotkeysEvents(): Observable<KeyboardEvent> {
    return this.hotkeysSubject.asObservable();
  }

  public getCorrectHotkey(event:KeyboardEvent, project: ProjectEnvironment | null) {
    
    if (this.configModified != true) {
      this.addToConfig(project)
      console.log("New hotkeys added to config file")
      this.configModified = true;
    }

    //console.log(project?.config?.HOTKEY_SAVE.substring(0,4))
    if(event.ctrlKey === true && event.key === 's'){
      event.preventDefault();
      console.log("CTRL+S pressed");
      this.hotkeysAction.emit('save');
    }else if(event.ctrlKey === true && event.key === 'e'){
      event.preventDefault();
      console.log("CTRL+E pressed");
      this.hotkeysAction.emit('export');
    }else if(event.code === project?.config?.HOTKEY_RUN){
      event.preventDefault();
      console.log("F8 pressed");
      this.hotkeysAction.emit('run'); 
    }else if(event.code === project?.config?.HOTKEY_TEST){
      event.preventDefault();
      console.log("F9 pressed");
      this.hotkeysAction.emit('test');
    }    
  }

  public addToConfig(project: ProjectEnvironment | null) {
    
    var string_config = JSON.stringify(project?.config)
    var config_obj = JSON.parse(string_config);

    delete config_obj.HOTKEY_RUN;
    delete config_obj.HOTKEY_TEST;
    delete config_obj.HOTKEY_SAVE;
     
    config_obj['HOTKEY_RUN'] = 'F8';
    config_obj['HOTKEY_TEST'] = 'F9';
    config_obj['HOTKEY_SAVE'] = 'ctrlKey+s';
    config_obj['HOTKEY_EXPORT'] = 'ctrlKey+e';

    string_config = JSON.stringify(config_obj, null, 4);
        
    if(project != null && project.config != null){
      if(project.config.CONFIG_PATH != undefined){
        // project.config.save(project.driver);
        project.driver.writeFile(project.config.CONFIG_PATH, string_config)
    }
  }

    console.log("Updated config file: ", project?.config);
  }
}
