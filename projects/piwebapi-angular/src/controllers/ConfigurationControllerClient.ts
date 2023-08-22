import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ConfigurationControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public list() : Observable<{[key: string]: any }> {
		const localVarPath = this.basePath + '/system/configuration';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

		return this.http.get<{[key: string]: any }>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public delete(key: string) : Observable<any> {
		const localVarPath = this.basePath + '/system/configuration/{key}'
			.replace('{' + 'key' + '}', String(key));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (key === null || key === undefined) {
			throw new Error('Required parameter key was null or undefined when calling delete.');
		}

		return this.http.delete<any>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public get(key: string) : Observable<any> {
		const localVarPath = this.basePath + '/system/configuration/{key}'
			.replace('{' + 'key' + '}', String(key));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (key === null || key === undefined) {
			throw new Error('Required parameter key was null or undefined when calling get.');
		}

		return this.http.get<any>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
