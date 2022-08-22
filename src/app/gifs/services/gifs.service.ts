import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = "pfeexP4EH61Ixb7shkzfuLyWFt5p7bds" ;
  private _historial: string[] = [];


  public resultados: any[] = [];


  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient){

  }

  buscarGifs( query: string){

    if (!(this._historial.includes(query))){
      this._historial.unshift(query);
      console.log(this._historial);
    }

  this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=pfeexP4EH61Ixb7shkzfuLyWFt5p7bds&q=${query}&limit =10`)
   .subscribe((resp: any) => {
    console.log(resp.data);
    this.resultados = resp.data; 
  });

  }
}
