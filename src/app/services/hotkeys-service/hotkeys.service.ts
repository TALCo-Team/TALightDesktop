import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ProjectsManagerService } from '../project-manager-service/projects-manager.service';

@Injectable({
  providedIn: 'root'
})
export class HotkeysService {
  
  private hotkeysSubject = new Subject<KeyboardEvent>();

  public hotkeysAction = new EventEmitter<any>();
  public onHotkeysReceived = new EventEmitter<any>();
  public configModified = false;

  constructor(private pms: ProjectsManagerService ) {
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

  public getCorrectHotkey(event:KeyboardEvent) {
    let project = this.pms.getCurrentProject();
    if (!project) { return; }
    
    let config = project.config

  // avoid repetition, you can perform the action only once at a time
  if(event.repeat === false){

    if(config != null){

      // check if CTRL is pressed
      if(event.ctrlKey === config.HOTKEY_SAVE.Control || event.ctrlKey === config.HOTKEY_EXPORT.Control){
      
        // check if S is pressed
        if(event.key === config.HOTKEY_SAVE.Key){
          event.preventDefault();
          console.log("CTRL+S pressed");
          this.hotkeysAction.emit('save');
        
        // check if E is pressed
        }else if(event.key === config.HOTKEY_EXPORT.Key){
          event.preventDefault();
          console.log("CTRL+E pressed");
          this.hotkeysAction.emit('export');
        }
      
        // check if F8 is pressed
        }else if(event.key === config.HOTKEY_RUN.Key){
          event.preventDefault();
          console.log("F8 pressed");
          this.hotkeysAction.emit('run');
        
        // check if F9 is pressed 
        }else if(event.key === config.HOTKEY_TEST.Key){
          event.preventDefault();
          console.log("F9 pressed");
          this.hotkeysAction.emit('test');
        }    
      }
    }
  }

  /* public async addToConfig(project: ProjectEnvironment | null) {
    
    project?.config?.parseFile(project.config)
  
    if(project != null && project.config != null){
      if(project.config.CONFIG_PATH != undefined){
        await project.config.save(project.driver);
        //project.driver.writeFile(project.config.CONFIG_PATH, string_config)
      }
    }

    console.log("Updated config file: ", project?.config);
  } */
}
