import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import * as fromHomeActions from './state/home.actions'
import * as FromHomeSelectors from './state/home.selectors'

@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  searchControl: FormControl

  text: string

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required)

    this.store.pipe(select(FromHomeSelectors.selectHomeText)).subscribe( text => this.text = text)
    
  }

  doSearch() {
    const text = this.searchControl.value
    this.store.dispatch(fromHomeActions.changeText({ text }))
  }

}
