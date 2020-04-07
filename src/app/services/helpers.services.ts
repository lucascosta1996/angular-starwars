import {Injectable} from "@angular/core";

@Injectable()
export class HelperService {
  getUrlParam( url ) {
    if( url === null ) return null
    return new URL( url ).searchParams.get( 'page' )
  }
}