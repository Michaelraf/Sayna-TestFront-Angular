import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards: Card[] = [
    {
      sum: 1242.42,
      currency: "USD",
      type: "Paypal",
      num: "5495 7381 3756 2321",
      used: "04",
      total: 24
    },
    {
      sum: 249.00,
      currency: "EUR",
      type: "Visa",
      num: "4535 8933 1673 6770",
      used: "05",
      total: 25
    },
    {
      sum: 249.00,
      currency: "EUR",
      type: "Paypal",
      num: "5363 7205 7398 4138",
      used: "01",
      total: 25
    },
  ]
  
}
