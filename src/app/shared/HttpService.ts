import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
// import {timeout} from 'rxjs/operators';
// import { pipe } from 'rxjs';
@Injectable()
export class HttpService{
    constructor( 
        private httpClient:HttpClient
    ){

    }


    /**
     * @description  HTTP get request
     * @param url 
     * @param timeout 
     */
    public get(url: string) : Promise<any>{
        return this.httpClient
        .get(url)
        // .pipe(timeout())
        .toPromise()
    }


    /**
     * @description  HTTP post request
     * @param url 
     * @param params 
     */
    public post(url: string, params:any={}) : Promise<any>{
        return this.httpClient
        .post(url,params)
        .toPromise()
    }

}