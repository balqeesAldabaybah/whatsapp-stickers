import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StickerDetailsPageRoutingModule } from './sticker-details-routing.module';

import { StickerDetailsPage } from './sticker-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StickerDetailsPageRoutingModule
  ],
  declarations: [StickerDetailsPage]
})
export class StickerDetailsPageModule {}
