import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  categoryName: string;
  books = []
  searchTerm$ = new Subject<string>();
  results: Object;
  noBooks: boolean= false;

  constructor(private route: ActivatedRoute, 
              private genreService: GenreService,
              private router:Router) {
               }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryName = params['categoryName'];
    });

    this.genreService.getbooks(this.categoryName).subscribe(res=>{
      this.books = res;
      if(res.length>0){
        this.noBooks = false;
      }else{
        this.noBooks = true;
      }
    })

    this.genreService.search(this.searchTerm$, this.categoryName)
                .subscribe(results => {
                  this.books = results;
                  if(results.length>0){
                    this.noBooks = false;
                  }else{
                    this.noBooks = true;
                  }
                });
  }

  seeBook(book){
    let gotohtml, gotopdf, gototxt;
    if(book.formats){
        for(let key in book.formats){
          if(book.formats[key].includes('.htm')){
            gotohtml = book.formats[key];
          }else if(book.formats[key].includes('.pdf')){
            gotopdf = book.formats[key];
          }else if(book.formats[key].includes('.txt')){
            gototxt = book.formats[key];
          }
        }

        let anchor = document.createElement("A");

        if(gotohtml){
          anchor.setAttribute("href",gotohtml);
          anchor.click();
        }else if(gotopdf){
          anchor.setAttribute("href",gotopdf);
          anchor.click();
        }else if(gototxt){
          anchor.setAttribute("href",gototxt);
          anchor.click();
        }else{
          alert("No viewable version available");
        }
    }
  }

}
