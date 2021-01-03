import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genres = [
    'Fiction',
    'Drama',
    'Humour',
    'Politics',
    'Philosophy',
    'History',
    'Adventure'
  ]

  private URL = "http://skunkworks.ignitesol.com:8000/books/";
  queryUrl: string = '?search=';
  

  constructor(private http: HttpClient) { }

  getGenres(){
    return [...this.genres];
  }

  getbooks(category){
    return this.http.get(`${this.URL}`)
           .pipe(
              map((response:any)=>{
                return this.filteredData(response,category)
              }),
              tap(console.log)
            )
  }

  filteredData(response,category){
    let data = response.results;
    let filteredData = [];
    data.forEach(element => {
      for(let index = 0; index< element.subjects.length; index++){
        if(element.subjects[index].includes(category)){
          filteredData.push(element);
          break;
        }
        
      }
    });
    return filteredData;
  }

  search(terms, category) {
    return terms.pipe(debounceTime(400),
      distinctUntilChanged(),
      switchMap(searchTerm => ajax(`${this.URL}${this.queryUrl}${searchTerm}`)),
      map((response:any)=>{
        return this.filteredData(response.response,category)
      }),
      tap(console.log)
      );
  }

}
