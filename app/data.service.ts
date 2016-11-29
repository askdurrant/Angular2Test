import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {
    private url = 'https://jsonplaceholder.typicode.com/posts';
    private moreInfoUrl = "https://jsonplaceholder.typicode.com/posts/";

    constructor(private http:Http) {}

    getData(): Promise<any> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getMoreInfo(id): Promise<any>{
        return this.http.get(this.moreInfoUrl + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('error');        
        return Promise.reject(error.message || error);
    }
}