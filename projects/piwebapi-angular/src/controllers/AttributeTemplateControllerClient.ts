import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAAttributeTemplate, PWAItemsAttributeCategory, PWAItemsAttributeTemplate} from '../models/models';


export class AttributeTemplateControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public getByPath(path: string, selectedFields?: string, webIdType?: string) : Observable<PWAAttributeTemplate> {
		const localVarPath = this.basePath + '/attributetemplates';

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

		return this.http.get<PWAAttributeTemplate>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public delete(webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/attributetemplates/{webId}'
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



	public get(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAAttributeTemplate> {
		const localVarPath = this.basePath + '/attributetemplates/{webId}'
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

		return this.http.get<PWAAttributeTemplate>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public update(webId: string, template: PWAAttributeTemplate) : Observable<any> {
		const localVarPath = this.basePath + '/attributetemplates/{webId}'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling update.');
		}

			if (template === null || template === undefined) {
			throw new Error('Required parameter template was null or undefined when calling update.');
		}

		return this.http.patch<any>(localVarPath, template, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAttributeTemplates(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsAttributeTemplate> {
		const localVarPath = this.basePath + '/attributetemplates/{webId}/attributetemplates'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAttributeTemplates.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsAttributeTemplate>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createAttributeTemplate(webId: string, template: PWAAttributeTemplate, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/attributetemplates/{webId}/attributetemplates'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createAttributeTemplate.');
		}

			if (template === null || template === undefined) {
			throw new Error('Required parameter template was null or undefined when calling createAttributeTemplate.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, template, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getCategories(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsAttributeCategory> {
		const localVarPath = this.basePath + '/attributetemplates/{webId}/categories'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getCategories.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsAttributeCategory>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
