import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAAttributeTrait, PWAItemsAttributeTrait} from '../models/models';


export class AttributeTraitControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public getByCategory(category: Array<string>, selectedFields?: string) : Observable<PWAItemsAttributeTrait> {
		const localVarPath = this.basePath + '/attributetraits';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (category === null || category === undefined) {
			throw new Error('Required parameter category was null or undefined when calling getByCategory.');
		}

		if ((category !== undefined) && (category !== null)) {
			for (let item of category) {
				queryParameters = queryParameters.append('category', item);
			}
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		return this.http.get<PWAItemsAttributeTrait>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public get(name: string, selectedFields?: string) : Observable<PWAAttributeTrait> {
		const localVarPath = this.basePath + '/attributetraits/{name}'
			.replace('{' + 'name' + '}', String(name));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (name === null || name === undefined) {
			throw new Error('Required parameter name was null or undefined when calling get.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		return this.http.get<PWAAttributeTrait>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
