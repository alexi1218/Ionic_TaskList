import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { AddPage } from '../add/add';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  //tab2Root = AboutPage;
  tab2Root = AddPage;

  constructor() {

  }
}
