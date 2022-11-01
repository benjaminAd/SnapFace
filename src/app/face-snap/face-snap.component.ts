import {Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from '../Models/face-snap.model';
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  hasUserSnap!: boolean;

  constructor(private faceSnapService: FaceSnapsService, private router: Router) {
  }

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
    this.hasUserSnap = false;
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

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
  }

}
