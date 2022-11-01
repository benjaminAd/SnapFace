import {Injectable} from "@angular/core";
import {FaceSnap} from "../Models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    new FaceSnap(
      0,
      'Archibald',
      'Mon meilleur ami depuis tout petit',
      'https://cdn.pixabay.com/photo/2014/11/09/21/44/teddy-bear-524251_1280.jpg',
      new Date(),
      0,
      'Paris'
    ),
    new FaceSnap(
      1,
      'Voyage dans les tribus',
      'Mamie souriante',
      'https://cdn.pixabay.com/photo/2021/05/23/15/12/old-woman-6276484_1280.jpg',
      new Date(),
      0
    ),
    new FaceSnap(
      2,
      'Voyage dans les montagnes',
      'Photo du Sugarloaf Rock',
      'https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389_1280.jpg',
      new Date(),
      150000,
      'La Montagne'
    )
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapByid(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find((element) => element.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    }
    return faceSnap;
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapByid(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}