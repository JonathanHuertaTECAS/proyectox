import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  event_list = [
    {
      event:' Event 6',
      eventLocation:'Mumbai',
      eventDescription:'Mumbai is hub of startups',
      img: 'https://i.ibb.co/h1j6rc5/pal-apuro-2.png',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
    {
      event:' Event 7',
      eventLocation:'Barcelona',
      eventDescription:'Barcelona is another good city',
      img: 'https://i.ibb.co/GQN7WZS/pal-negocio-2.png',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
  ]

  current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())))
  
  constructor() { }

  ngOnInit(): void {
  }

}
