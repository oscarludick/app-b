import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentBModule } from '@test/lib-a/components';
import { AppBOneComponent } from './app-b-one.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentBModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppBOneComponent,
      },
    ]),
  ],
  declarations: [AppBOneComponent],
  exports: [RouterModule],
})
export class AppBOneModule {
  constructor(){
  }
}
