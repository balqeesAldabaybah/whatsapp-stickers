import { Injectable } from '@angular/core';
import { Sticker } from '../home/sticker.model';

@Injectable({
  providedIn: 'root'
})
export class StickersService {
  private StickersList: Sticker[] = [
    {
      id: '1',
      Name: 'Cuppy',
      nickName: 'Minseung Song',
      sizeByte: 298,
      imagesURL: [
        'https://s1.stickers.cloud/packs/3e19e00b-7293-4bc8-9ebd-4faf83d0fc32/webp/dcae99f5-4414-4ab5-a429-6897ff70a11c.webp',
        'https://s1.stickers.cloud/packs/3e19e00b-7293-4bc8-9ebd-4faf83d0fc32/webp/dcae99f5-4414-4ab5-a429-6897ff70a11c.webp',
        'https://s1.stickers.cloud/packs/3e19e00b-7293-4bc8-9ebd-4faf83d0fc32/webp/dcae99f5-4414-4ab5-a429-6897ff70a11c.webp',
        'https://s1.stickers.cloud/packs/3e19e00b-7293-4bc8-9ebd-4faf83d0fc32/webp/dcae99f5-4414-4ab5-a429-6897ff70a11c.webp',
        'https://s1.stickers.cloud/packs/3e19e00b-7293-4bc8-9ebd-4faf83d0fc32/webp/dcae99f5-4414-4ab5-a429-6897ff70a11c.webp'
      ],
      description: 'Do you want a cup of tea?'
    },
    {
      id: '2',
      Name: 'Opi',
      nickName: 'Oscar Ospina',
      sizeByte: 387,
      imagesURL: [
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp',
     'https://s1.stickers.cloud/packs/5df297e3-a7f0-44e0-a6d1-43bdb09b793c/webp/26f8a48f-9c22-47a5-a767-fe824884356c.webp'
      ],
      description: 'sneak, snooze and celebrate with this loving bar'
    }
];
  constructor() { }

  getAllStickers() {
    return [...this.StickersList];
  }

  getSticker(stickerId: string) {
    return {...this.StickersList.find(sticker => {
      return sticker.id === stickerId;
    })};

  }
}
