import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAItemsItemPoint, PWAItemsPointAttribute, PWAPoint, PWAPointAttribute} from '../models/models';


export class PointControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public getByPath(path: string, selectedFields?: string, webIdType?: string) : Observable<PWAPoint> {
		const localVarPath = this.basePath + '/points';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (path === null || path === undefined) {
			throw new Error('Required parameter path was null or undefined when calling getByPath.');
		}

		if ((path !== undefined) && (path !== null)) {
			queryParameters = queryParameters.set('path', <any>path);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAPoint>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, webIdType?: string) : Observable<PWAItemsItemPoint> {
		const localVarPath = this.basePath + '/points/multiple';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

		if ((asParallel !== undefined) && (asParallel !== null)) {
			queryParameters = queryParameters.set('asParallel', <any>asParallel);
		}

		if ((includeMode !== undefined) && (includeMode !== null)) {
			queryParameters = queryParameters.set('includeMode', <any>includeMode);
		}

		if ((path !== undefined) && (path !== null)) {
			for (let item of path) {
				queryParameters = queryParameters.append('path', item);
			}
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsItemPoint>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public delete(webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/points/{webId}'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling delete.');
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



	public get(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAPoint> {
		const localVarPath = this.basePath + '/points/{webId}'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling get.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAPoint>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public update(webId: string, pointDTO: PWAPoint) : Observable<any> {
		const localVarPath = this.basePath + '/points/{webId}'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling update.');
		}

			if (pointDTO === null || pointDTO === undefined) {
			throw new Error('Required parameter pointDTO was null or undefined when calling update.');
		}

		return this.http.patch<any>(localVarPath, pointDTO, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAttributes(webId: string, name?: Array<string>, nameFilter?: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsPointAttribute> {
		const localVarPath = this.basePath + '/points/{webId}/attributes'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAttributes.');
		}

		if ((name !== undefined) && (name !== null)) {
			for (let item of name) {
				queryParameters = queryParameters.append('name', item);
			}
		}

		if ((nameFilter !== undefined) && (nameFilter !== null)) {
			queryParameters = queryParameters.set('nameFilter', <any>nameFilter);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsPointAttribute>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAttributeByName(name: string, webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAPointAttribute> {
		const localVarPath = this.basePath + '/points/{webId}/attributes/{name}'
			.replace('{' + 'name' + '}', String(name))
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (name === null || name === undefined) {
			throw new Error('Required parameter name was null or undefined when calling getAttributeByName.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAttributeByName.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAPointAttribute>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
