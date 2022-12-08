import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { RouterModule } from '@angular/router';
import { EditorModule } from 'src/app/widgets/editor/editor.module';


const routes = [
  { path: '', component: HomeViewComponent }
];

@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    EditorModule
  ]
})
export class HomeModule { }
