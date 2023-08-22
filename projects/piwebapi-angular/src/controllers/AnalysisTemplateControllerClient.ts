import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAAnalysisTemplate, PWAItemsAnalysisCategory, PWAItemsAnalysisTemplate, PWAItemsSecurityEntry, PWAItemsSecurityRights, PWASecurityEntry} from '../models/models';


export class AnalysisTemplateControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public getByPath(path: string, selectedFields?: string, webIdType?: string) : Observable<PWAAnalysisTemplate> {
		const localVarPath = this.basePath + '/analysistemplates';

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

		return this.http.get<PWAAnalysisTemplate>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createFromAnalysis(analysisWebId: string, name?: string, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/analysistemplates';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (analysisWebId === null || analysisWebId === undefined) {
			throw new Error('Required parameter analysisWebId was null or undefined when calling createFromAnalysis.');
		}

		if ((analysisWebId !== undefined) && (analysisWebId !== null)) {
			queryParameters = queryParameters.set('analysisWebId', <any>analysisWebId);
		}

		if ((name !== undefined) && (name !== null)) {
			queryParameters = queryParameters.set('name', <any>name);
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



	public getAnalysisTemplatesQuery(databaseWebId?: string, maxCount?: number, query?: string, selectedFields?: string, startIndex?: number, webIdType?: string) : Observable<PWAItemsAnalysisTemplate> {
		const localVarPath = this.basePath + '/analysistemplates/search';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

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

		return this.http.get<PWAItemsAnalysisTemplate>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public delete(webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/analysistemplates/{webId}'
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



	public get(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAAnalysisTemplate> {
		const localVarPath = this.basePath + '/analysistemplates/{webId}'
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

		return this.http.get<PWAAnalysisTemplate>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public update(webId: string, template: PWAAnalysisTemplate) : Observable<any> {
		const localVarPath = this.basePath + '/analysistemplates/{webId}'
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



	public getCategories(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsAnalysisCategory> {
		const localVarPath = this.basePath + '/analysistemplates/{webId}/categories'
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

		return this.http.get<PWAItemsAnalysisCategory>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string) : Observable<PWAItemsSecurityRights> {
		const localVarPath = this.basePath + '/analysistemplates/{webId}/security'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
		}

			if (userIdentity === null || userIdentity === undefined) {
			throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
		}

		if ((userIdentity !== undefined) && (userIdentity !== null)) {
			for (let item of userIdentity) {
				queryParameters = queryParameters.append('userIdentity', item);
			}
		}

		if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
			queryParameters = queryParameters.set('forceRefresh', <any>forceRefresh);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsSecurityRights>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsSecurityEntry> {
		const localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
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

		return this.http.get<PWAItemsSecurityEntry>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createSecurityEntry(webId: string, securityEntry: PWASecurityEntry, applyToChildren?: boolean, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
		}

			if (securityEntry === null || securityEntry === undefined) {
			throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
		}

		if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
			queryParameters = queryParameters.set('applyToChildren', <any>applyToChildren);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, securityEntry, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public deleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean) : Observable<any> {
		const localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries/{name}'
			.replace('{' + 'name' + '}', String(name))
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (name === null || name === undefined) {
			throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
		}

		if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
			queryParameters = queryParameters.set('applyToChildren', <any>applyToChildren);
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



	public getSecurityEntryByName(name: string, webId: string, selectedFields?: string, webIdType?: string) : Observable<PWASecurityEntry> {
		const localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries/{name}'
			.replace('{' + 'name' + '}', String(name))
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (name === null || name === undefined) {
			throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWASecurityEntry>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public updateSecurityEntry(name: string, webId: string, securityEntry: PWASecurityEntry, applyToChildren?: boolean) : Observable<any> {
		const localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries/{name}'
			.replace('{' + 'name' + '}', String(name))
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (name === null || name === undefined) {
			throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
		}

			if (securityEntry === null || securityEntry === undefined) {
			throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
		}

		if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
			queryParameters = queryParameters.set('applyToChildren', <any>applyToChildren);
		}

		return this.http.put<any>(localVarPath, securityEntry, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
