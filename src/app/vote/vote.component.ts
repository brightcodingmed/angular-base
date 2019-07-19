import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input('my-like') like = 0;
  @Input('my-dislike') disLike = 0;

  @Output('onVote') onVoteLikeDislike = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
    this.onVoteLikeDislike.emit({type: 'like', value: this.like})
  }

  incDisLike() {
    this.disLike++;
    this.onVoteLikeDislike.emit({type: 'dislike', value: this.disLike})

  }

  show() {
    console.log('salam')
  }

}
