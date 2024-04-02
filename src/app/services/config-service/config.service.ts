import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ConfigService {
    private configUrl = 'src/app/services/config-service/config.service.ts'

    constructor(private http: HttpClient) {}

    getConfig(): Observable<any> {
        //alert('ritorno il file');
        return this.http.get(this.configUrl);
    }

    updateConfig(newConfig: any): Observable<any> {
        //alert(this.configUrl);
        return this.http.put(this.configUrl, newConfig);
    }
}