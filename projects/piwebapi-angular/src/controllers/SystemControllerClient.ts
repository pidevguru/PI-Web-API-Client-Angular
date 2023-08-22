import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAItemsCacheInstance, PWASystemLanding, PWASystemStatus, PWAUserInfo, PWAVersion} from '../models/models';


export class SystemControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public landing() : Observable<PWASystemLanding> {
		const localVarPath = this.basePath + '/system';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

		return this.http.get<PWASystemLanding>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public cacheInstances() : Observable<PWAItemsCacheInstance> {
		const localVarPath = this.basePath + '/system/cacheinstances';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

		return this.http.get<PWAItemsCacheInstance>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public status() : Observable<PWASystemStatus> {
		const localVarPath = this.basePath + '/system/status';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

		return this.http.get<PWASystemStatus>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public userInfo() : Observable<PWAUserInfo> {
		const localVarPath = this.basePath + '/system/userinfo';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

		return this.http.get<PWAUserInfo>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public versions() : Observable<{[key: string]: PWAVersion }> {
		const localVarPath = this.basePath + '/system/versions';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

		return this.http.get<{[key: string]: PWAVersion }>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
