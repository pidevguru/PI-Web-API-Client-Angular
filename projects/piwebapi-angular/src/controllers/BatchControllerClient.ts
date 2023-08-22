import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWARequest, PWAResponse} from '../models/models';


export class BatchControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public execute(batch: { [key: string]: PWARequest; }) : Observable<{[key: string]: PWAResponse }> {
		const localVarPath = this.basePath + '/batch';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (batch === null || batch === undefined) {
			throw new Error('Required parameter batch was null or undefined when calling execute.');
		}

		return this.http.post<{[key: string]: PWAResponse }>(localVarPath, batch, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
