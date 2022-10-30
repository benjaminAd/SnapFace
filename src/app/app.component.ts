import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!:FaceSnap[];

  mySnap!:FaceSnap;
  otherSnap!: FaceSnap;
  lastSnap!:FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis tout petit',
        'https://cdn.pixabay.com/photo/2014/11/09/21/44/teddy-bear-524251_1280.jpg',
        new Date(),
        0,
        'Paris'
      ),
      new FaceSnap(
        'Voyage dans les tribus',
        'Mamie souriante',
        'https://cdn.pixabay.com/photo/2021/05/23/15/12/old-woman-6276484_1280.jpg',
        new Date(),
        0
      ),
      new FaceSnap(
        'Voyage dans les montagnes',
        'Photo du Sugarloaf Rock',
        'https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389_1280.jpg',
        new Date(),
        150000,
        'La Montagne'
      )
    ];
    
  }

}
