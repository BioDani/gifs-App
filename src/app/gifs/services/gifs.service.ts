import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = "pfeexP4EH61Ixb7shkzfuLyWFt5p7bds" ;
  private servicioURL: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];


  public resultados: Gif[] = [];


  get historial(){
    return [...this._historial];
  }
 
  constructor( private http: HttpClient){ 
    if (localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    }
    
  }

  buscarGifs( query: string = ''){

    if (!(this._historial.includes(query))){
      this._historial.unshift(query);
      console.log(this._historial);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set( 'api_key' , this.apiKey ) 
    .set( 'q' , query )
    .set( 'limit' , '10' );


    this.http.get<SearchGifResponse>(`${ this.servicioURL }/search`,{ params})
    .subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data; 
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    });

  }
}
