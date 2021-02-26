import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() tweeterHandle: string = '';
  @Input() tweet: string = '';
  @Input() tweetImage: string = '';
  @Input() dated: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
