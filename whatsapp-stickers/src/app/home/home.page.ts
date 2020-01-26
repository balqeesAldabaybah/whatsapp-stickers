import { Component } from '@angular/core';
import {Sticker} from './sticker.model';
import { ActivatedRoute } from '@angular/router';
import { StickersService } from '../services/stickers.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segStatus = 'AllSticker';
  StickersList: Sticker[];

  constructor(private activatedRoute: ActivatedRoute,
              private stickerService: StickersService) {
      this.activatedRoute.params.subscribe(val => {
      this.StickersList = this.stickerService.getAllStickers();
    });
  }

  segmentChange(e) {
   this.segStatus = e.target.value ;
  }
}
