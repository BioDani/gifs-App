import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = "pfeexP4EH61Ixb7shkzfuLyWFt5p7bds" ;
  private _historial: string[] = [];


  get historial(){
    return [...this._historial];
  }

  async buscarGifs( query: string){

    if (!(this._historial.includes(query))){
      
      this._historial.unshift(query);
      console.log(this._historial);
    }

    // Llamado en javascript
    // Inicio llamado
    /*
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=pfeexP4EH61Ixb7shkzfuLyWFt5p7bds&q=${query}&limit =10`)
    .then( resp => {
      resp.json().then(data => {
        console.log(data)
      })
    })
    */
    // Fin llamado

    // Llamado usando await
    // Inicio llamado
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=pfeexP4EH61Ixb7shkzfuLyWFt5p7bds&q=${query}&limit =10`);
    const data = await resp.json();
    console.log(data);
    // Fin llamado

  }

}
