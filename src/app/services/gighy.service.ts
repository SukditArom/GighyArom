import { Injectable } from '@angular/core';

import { Inputdatagighy } from "../content/inputdatagighy";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class GighyService {
    apiUrl = "https://api.giphy.com/v1/gifs/search?api_key=";
    apiKey = "Hi7jBKQmUxIzWPkynKEVQ9H8Dhr5ovCU";
    
  constructor(private http: Http) { }

    get_gighy_by_search(search): Observable<Inputdatagighy[]>{
      return this.http.get(this.apiUrl+this.apiKey+"&q="+search+"&limit=27")
      .map((res:Response)=><Inputdatagighy[]> res.json())
      .catch(this.handelError);
    }
    private handelError(error: any) {
      return Observable.throw(error.json().message) || "Service error";
    }
}
