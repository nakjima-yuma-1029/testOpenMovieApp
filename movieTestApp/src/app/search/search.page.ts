import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-first-register',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  query?: string;
  movies?: any[];

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  search() {
    console.log(this.query);
    if (this.query) {
      const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiService.apiKey}&query=${this.query}`;
      return this.http.jsonp(searchURL, 'callback').subscribe((data: any) => {
        this.movies = data.results;
      });
    } else {
      return false;
      console.log('もうあるよ！');
    }
  }

}
