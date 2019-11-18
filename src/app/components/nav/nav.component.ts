import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavItem } from './nav.types';
import { NAV_ITEMS } from './nav.constants';

@Component({
  selector: 'af-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navItems: NavItem[] = NAV_ITEMS;
  activeNavItem: NavItem | undefined;
  showNavItems: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(navItem: NavItem) {
    this.activeNavItem = navItem;
    this.router.navigate([navItem]);
  }

}
