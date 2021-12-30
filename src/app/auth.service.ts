import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  graphData(body: string) {
    const url = `${this.baseUrl}`

    return this.http.post(url, body, httpOptions).toPromise().then((data) => {
      return data;
    })
  }
}
