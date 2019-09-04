import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipeModule } from 'src/app/pipes/pipe.module';


import { IonicModule } from '@ionic/angular';

import { AnimalsGamePage } from './animals-game.page';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: AnimalsGamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipeModule
  ],
  declarations: [AnimalsGamePage]
})
export class AnimalsGamePageModule {}
