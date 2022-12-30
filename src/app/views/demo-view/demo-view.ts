import { Component, NgZone, OnInit } from '@angular/core';
import { Child, Command, open as ShellOpen } from '@tauri-apps/api/shell'
import { open as DialogOpen } from '@tauri-apps/api/dialog';
import { ApiService, LobbyEventType } from 'src/app/services/api-service/api.service';
import { Packets } from 'src/app/services/api-service/api.packets';
import { ReplaySubject } from 'rxjs';
import { Commands } from 'src/app/services/api-service/api.commands';
@Component({
  selector: 'app-demo-view',
  templateUrl: './demo-view.component.html',
  styleUrls: ['./demo-view.component.scss']
})
export class DemoViewComponent implements OnInit {
  public child: Child | undefined;
  public filename: string = "";
  public output = "";
  public lobbyID?:string;
  public displayName = "AgentSmith"+Math.floor(Math.random()*1000000);
  public password?:string;

  constructor(
    private zone: NgZone,
    private api: ApiService
    ) {}

  ngOnInit(): void {
    let api = new ApiService();

    api.problemList((problemList: any) => {console.log(problemList)});
  }
}