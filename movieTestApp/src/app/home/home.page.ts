import { ApiService } from './../api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // 映画の情報を入れ込む
  list: any;

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    // (data: any)のようにカッコがないと「resultsなんかないぞ」とエラーくらいます
    this.getMovies().subscribe((data: any) => {
      console.log(data);
      this.list = data.results;
    });
  }

  // api.service.tsのプロパティーを使う
  getMovies() {
    return this.http.get(this.apiService.getNowPlayingURL);
  }
}
