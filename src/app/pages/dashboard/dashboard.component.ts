import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: NbMenuItem[] = [
    {
      title: 'Overview',
      icon: 'home-outline',
    },
    {
      title: 'Cards',
      icon: 'book-outline',
    },
    {
      title: 'Payments',
      icon: 'credit-card-outline',
      expanded: true,
      children:[
        {
          title: 'Option1'
        },
        {
          title: 'Option2'
        }
      ]
    },
    {
      title: 'Repots',
      icon: 'bar-chart-outline',
      expanded: true,
      children:[
        {
          title: 'Option1'
        },
        {
          title: 'Option2'
        }
      ]
    },
    {
      title: 'Contacts',
      icon: 'people-outline',
    }
  ]
  itemsFooter: NbMenuItem[] = [
    {
      title: 'Settings',
      icon: 'settings-2-outline'
    },
    {
      title: 'Account',
      icon: 'person-outline'
    }
  ]
}
