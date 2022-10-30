import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = "Archibald";
    this.description = 'Mon meilleur ami depuis tout petit';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2022/10/26/21/14/leaves-7549449_1280.jpg';
  }

}
