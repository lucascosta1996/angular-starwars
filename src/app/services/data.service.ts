import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ICharacter } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getCharacters( page ) : Observable<ICharacter[]> {
    const url = `https://swapi.co/api/people/?page=${page}`;
    return this.http.get<ICharacter[]>( url )
    .pipe( map(data => {
      return data;
      }) )
  }

}