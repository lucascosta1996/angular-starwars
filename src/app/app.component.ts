import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { HelperService } from './services/helpers.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dragon';
  characters: any[];
  nextPage: any = 2;
  currentPage: any = 1;
  previousPage: any = null;
  loadingCharacters: boolean = true;
  
  constructor( private dataService: DataService, private helperService: HelperService ) {}
  
  ngOnInit() {
    this.updateListAndPagination( 1 )
  }

  updateListAndPagination( page ) {
    this.loadingCharacters = true;

    this.dataService.getCharacters( page )
      .subscribe(data => {
        const currentPage = parseInt( this.helperService.getUrlParam( data[ 'next' ] ) )
        this.characters = data['results'];
        this.nextPage = this.helperService.getUrlParam( data[ 'next' ] );
        this.previousPage = this.helperService.getUrlParam( data[ 'previous' ] );
        this.currentPage = currentPage - 1
        this.loadingCharacters = false;
      });
  }
}
