import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = 'f295cde57de6626dba292a61cd672197';
  // 最後に &language=ja をつけると日本語に
  getNowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=ja`;

  constructor() { }
}