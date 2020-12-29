import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { homeReducer } from './state/home.reducer'
import { HomeEffects } from './state/home.effects';
import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', {homeReducer}),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule
  ]
})
export class HomeModule { }
