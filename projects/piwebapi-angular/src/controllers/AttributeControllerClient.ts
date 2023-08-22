import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAAttribute, PWAItemsAttribute, PWAItemsAttributeCategory, PWAItemsItemAttribute, PWATimedValue} from '../models/models';


export class AttributeControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public getByPath(path: string, associations?: string, selectedFields?: string, webIdType?: string) : Observable<PWAAttribute> {
		const localVarPath = this.basePath + '/attributes';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (path === null || path === undefined) {
			throw new Error('Required parameter path was null or undefined when calling getByPath.');
		}

		if ((path !== undefined) && (path !== null)) {
			queryParameters = queryParameters.set('path', <any>path);
		}

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAAttribute>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getMultiple(asParallel?: boolean, associations?: string, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, webIdType?: string) : Observable<PWAItemsItemAttribute> {
		const localVarPath = this.basePath + '/attributes/multiple';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

		if ((asParallel !== undefined) && (asParallel !== null)) {
			queryParameters = queryParameters.set('asParallel', <any>asParallel);
		}

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
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

		return this.http.get<PWAItemsItemAttribute>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAttributesQuery(associations?: string, databaseWebId?: string, maxCount?: number, query?: string, selectedFields?: string, startIndex?: number, webIdType?: string) : Observable<PWAItemsAttribute> {
		const localVarPath = this.basePath + '/attributes/search';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((databaseWebId !== undefined) && (databaseWebId !== null)) {
			queryParameters = queryParameters.set('databaseWebId', <any>databaseWebId);
		}

		if ((maxCount !== undefined) && (maxCount !== null)) {
			queryParameters = queryParameters.set('maxCount', <any>maxCount);
		}

		if ((query !== undefined) && (query !== null)) {
			queryParameters = queryParameters.set('query', <any>query);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((startIndex !== undefined) && (startIndex !== null)) {
			queryParameters = queryParameters.set('startIndex', <any>startIndex);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsAttribute>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public delete(webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/attributes/{webId}'
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



	public get(webId: string, associations?: string, selectedFields?: string, webIdType?: string) : Observable<PWAAttribute> {
		const localVarPath = this.basePath + '/attributes/{webId}'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling get.');
		}

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAAttribute>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public update(webId: string, attribute: PWAAttribute) : Observable<any> {
		const localVarPath = this.basePath + '/attributes/{webId}'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling update.');
		}

			if (attribute === null || attribute === undefined) {
			throw new Error('Required parameter attribute was null or undefined when calling update.');
		}

		return this.http.patch<any>(localVarPath, attribute, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAttributes(webId: string, associations?: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, trait?: Array<string>, traitCategory?: Array<string>, valueType?: string, webIdType?: string) : Observable<PWAItemsAttribute> {
		const localVarPath = this.basePath + '/attributes/{webId}/attributes'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAttributes.');
		}

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((maxCount !== undefined) && (maxCount !== null)) {
			queryParameters = queryParameters.set('maxCount', <any>maxCount);
		}

		if ((nameFilter !== undefined) && (nameFilter !== null)) {
			queryParameters = queryParameters.set('nameFilter', <any>nameFilter);
		}

		if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
			queryParameters = queryParameters.set('searchFullHierarchy', <any>searchFullHierarchy);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((showExcluded !== undefined) && (showExcluded !== null)) {
			queryParameters = queryParameters.set('showExcluded', <any>showExcluded);
		}

		if ((showHidden !== undefined) && (showHidden !== null)) {
			queryParameters = queryParameters.set('showHidden', <any>showHidden);
		}

		if ((sortField !== undefined) && (sortField !== null)) {
			queryParameters = queryParameters.set('sortField', <any>sortField);
		}

		if ((sortOrder !== undefined) && (sortOrder !== null)) {
			queryParameters = queryParameters.set('sortOrder', <any>sortOrder);
		}

		if ((startIndex !== undefined) && (startIndex !== null)) {
			queryParameters = queryParameters.set('startIndex', <any>startIndex);
		}

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((trait !== undefined) && (trait !== null)) {
			for (let item of trait) {
				queryParameters = queryParameters.append('trait', item);
			}
		}

		if ((traitCategory !== undefined) && (traitCategory !== null)) {
			for (let item of traitCategory) {
				queryParameters = queryParameters.append('traitCategory', item);
			}
		}

		if ((valueType !== undefined) && (valueType !== null)) {
			queryParameters = queryParameters.set('valueType', <any>valueType);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsAttribute>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createAttribute(webId: string, attribute: PWAAttribute, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/attributes/{webId}/attributes'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createAttribute.');
		}

			if (attribute === null || attribute === undefined) {
			throw new Error('Required parameter attribute was null or undefined when calling createAttribute.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, attribute, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getCategories(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsAttributeCategory> {
		const localVarPath = this.basePath + '/attributes/{webId}/categories'
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



	public createConfig(webId: string, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/attributes/{webId}/config'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createConfig.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, null, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getValue(webId: string, selectedFields?: string) : Observable<PWATimedValue> {
		const localVarPath = this.basePath + '/attributes/{webId}/value'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getValue.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		return this.http.get<PWATimedValue>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public setValue(webId: string, value: PWATimedValue) : Observable<any> {
		const localVarPath = this.basePath + '/attributes/{webId}/value'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling setValue.');
		}

			if (value === null || value === undefined) {
			throw new Error('Required parameter value was null or undefined when calling setValue.');
		}

		return this.http.put<any>(localVarPath, value, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
