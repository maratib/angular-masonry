declare var Masonry: any;
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { getTweetData } from '../utils/data';
import { Tweet } from '../utils/models';

function gridRefresh() {
  var elem = document.querySelector('#masonry-grid');
  var msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    "percentPosition": true
  });
}


@Component({
  selector: 'app-tweet.page',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, AfterViewInit {

  private updated: any;
  public tweetData: Tweet[] = getTweetData;
  constructor() { }
  ngAfterViewInit(): void {
    gridRefresh()
    setTimeout(() => {
      gridRefresh()
    }, 1000);
  }

  ngOnInit(): void {

  }
}


