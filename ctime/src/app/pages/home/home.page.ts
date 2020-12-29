import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CityWeather } from 'src/app/shared/models/weather.module';

import * as fromHomeActions from './state/home.actions'
import * as FromHomeSelectors from './state/home.selectors'

@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  cityWeather$: Observable<CityWeather>
  loading$: Observable<boolean>
  error$: Observable<boolean>

  searchControl: FormControl

  text: string

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required)
    this.cityWeather$ = this.store.pipe(select(FromHomeSelectors.selectCurrentWeather))
    this.loading$ = this.store.pipe(select(FromHomeSelectors.selectCurrentWeatherLoading))
    this.error$ = this.store.pipe(select(FromHomeSelectors.selectCurrentWeatherFailed))
  }

  doSearch() {
    const query = this.searchControl.value
    this.store.dispatch(fromHomeActions.loadCurrentWeather({query}))
  }

}
