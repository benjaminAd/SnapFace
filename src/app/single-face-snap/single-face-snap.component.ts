import {Component, OnInit} from '@angular/core';
import {FaceSnap} from '../Models/face-snap.model';
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {


  faceSnap!: FaceSnap;
  buttonText!: string;
  hasUserSnap!: boolean;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
    this.hasUserSnap = false;
    // + permet de transformer une chaîne de caractères contenant des nombres en type number
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapByid(faceSnapId);
  }

  onClickSnap() {
    if (!this.hasUserSnap) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
    this.hasUserSnap = !this.hasUserSnap;
  }

}
