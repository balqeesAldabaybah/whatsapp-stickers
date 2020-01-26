import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sticker } from '../home/sticker.model';
import { StickersService } from '../services/stickers.service';

@Component({
  selector: 'app-sticker-details',
  templateUrl: './sticker-details.page.html',
  styleUrls: ['./sticker-details.page.scss'],
})
export class StickerDetailsPage implements OnInit {

  loadedSticker: Sticker;
  numberOfStickerRows: number;
  numberOfStickersInLastRow: number;
  numberOfColsInRow = 4;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private stickerSerice: StickersService) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .subscribe(paramMap => {
      if (!paramMap.has('stickerId')) {
        this.router.navigate(['/stickers']);
        return;
      }
      const stickerID = paramMap.get('stickerId');
      this.loadedSticker = this.stickerSerice.getSticker(stickerID);
      this.numberOfStickerRows = Math.floor( this.loadedSticker.imagesURL.length / this.numberOfColsInRow);
      this.numberOfStickersInLastRow = this.loadedSticker.imagesURL.length % this.numberOfColsInRow;
    });
  }

  counter(i: number) {
    return new Array(i);
}

}
