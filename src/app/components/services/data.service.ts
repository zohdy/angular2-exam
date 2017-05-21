import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

    firebaseURL: string = 'https://ng2-exam-project.firebaseio.com/.json';

    constructor(private http: Http) {}

    doGET() {
        return this.http.get(this.firebaseURL)
                        .map(
                            (res)   =>  res.json(),
                            (error) =>  alert(error)
                    );
    }

    doPOST(body) {
        let headers = new Headers({'Content-Type' : 'application/json'});

        return this.http.post(this.firebaseURL, body, headers)
                   .map(
                       (data)   => data.json(),
                       (error)  => alert(error),
                    );
    }
}
