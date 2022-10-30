import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  hasUserSnap!: boolean;

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
    this.hasUserSnap = false;
  }

  onClickSnap(){
    if(!this.hasUserSnap){
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    }else{
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
    this.hasUserSnap = !this.hasUserSnap;
    
  }

}
