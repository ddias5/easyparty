import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MinhasFestasPage } from '../home/minhas-festas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MinhasFestasPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
