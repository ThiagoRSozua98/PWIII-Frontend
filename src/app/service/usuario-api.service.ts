import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Usuario } from '../usuario';
import { retry, catchError } from 'rxjs/operator';

@Injectable({
  providedIn: 'root'
})

export class UsuarioAPIService {
  apiURL : string = "http://localhost:8080/api/clientes";
  constructor(private httpClient: HttpClient) { }
  handleError(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //Get client-side error
      errorMessage = error.error.message;
    }else{
      errorMessage = `Código de erro : ${error.status}\nMensagem: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getUsuario(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.apiURL)
                          .pipe(retry(1),
                                catchError(this.handleError))
  }

  createUsuario(uso: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.apiURL}`, uso)
                          .pipe(retry(1),
                                catchError(this.handleError));
  }
}

