import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAAssetDatabase, PWAAssetServer, PWAItemsAnalysisRulePlugIn, PWAItemsAssetDatabase, PWAItemsAssetServer, PWAItemsNotificationContactTemplate, PWAItemsNotificationPlugIn, PWAItemsSecurityEntry, PWAItemsSecurityIdentity, PWAItemsSecurityMapping, PWAItemsSecurityRights, PWAItemsTimeRulePlugIn, PWAItemsUnitClass, PWANotificationContactTemplate, PWASecurityEntry, PWASecurityIdentity, PWASecurityMapping, PWAUnitClass} from '../models/models';


export class AssetServerControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public list(selectedFields?: string, webIdType?: string) : Observable<PWAItemsAssetServer> {
		const localVarPath = this.basePath + '/assetservers';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsAssetServer>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getByName(name: string, selectedFields?: string, webIdType?: string) : Observable<PWAAssetServer> {
		const localVarPath = this.basePath + '/assetservers';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (name === null || name === undefined) {
			throw new Error('Required parameter name was null or undefined when calling getByName.');
		}

		if ((name !== undefined) && (name !== null)) {
			queryParameters = queryParameters.set('name', <any>name);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAAssetServer>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getByPath(path: string, selectedFields?: string, webIdType?: string) : Observable<PWAAssetServer> {
		const localVarPath = this.basePath + '/assetservers';

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

		return this.http.get<PWAAssetServer>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public get(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAAssetServer> {
		const localVarPath = this.basePath + '/assetservers/{webId}'
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

		return this.http.get<PWAAssetServer>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAnalysisRulePlugIns(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsAnalysisRulePlugIn> {
		const localVarPath = this.basePath + '/assetservers/{webId}/analysisruleplugins'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAnalysisRulePlugIns.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsAnalysisRulePlugIn>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getDatabases(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsAssetDatabase> {
		const localVarPath = this.basePath + '/assetservers/{webId}/assetdatabases'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getDatabases.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsAssetDatabase>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createAssetDatabase(webId: string, database: PWAAssetDatabase, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetservers/{webId}/assetdatabases'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createAssetDatabase.');
		}

			if (database === null || database === undefined) {
			throw new Error('Required parameter database was null or undefined when calling createAssetDatabase.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, database, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getNotificationContactTemplates(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsNotificationContactTemplate> {
		const localVarPath = this.basePath + '/assetservers/{webId}/notificationcontacttemplates'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getNotificationContactTemplates.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsNotificationContactTemplate>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createNotificationContactTemplate(webId: string, notificationContactTemplate: PWANotificationContactTemplate, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetservers/{webId}/notificationcontacttemplates'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createNotificationContactTemplate.');
		}

			if (notificationContactTemplate === null || notificationContactTemplate === undefined) {
			throw new Error('Required parameter notificationContactTemplate was null or undefined when calling createNotificationContactTemplate.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, notificationContactTemplate, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getNotificationPlugIns(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsNotificationPlugIn> {
		const localVarPath = this.basePath + '/assetservers/{webId}/notificationplugins'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getNotificationPlugIns.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsNotificationPlugIn>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getSecurity(webId: string, securityItem: Array<string>, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string) : Observable<PWAItemsSecurityRights> {
		const localVarPath = this.basePath + '/assetservers/{webId}/security'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
		}

			if (securityItem === null || securityItem === undefined) {
			throw new Error('Required parameter securityItem was null or undefined when calling getSecurity.');
		}

			if (userIdentity === null || userIdentity === undefined) {
			throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
		}

		if ((securityItem !== undefined) && (securityItem !== null)) {
			for (let item of securityItem) {
				queryParameters = queryParameters.append('securityItem', item);
			}
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



	public getSecurityEntries(webId: string, nameFilter?: string, securityItem?: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsSecurityEntry> {
		const localVarPath = this.basePath + '/assetservers/{webId}/securityentries'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
		}

		if ((nameFilter !== undefined) && (nameFilter !== null)) {
			queryParameters = queryParameters.set('nameFilter', <any>nameFilter);
		}

		if ((securityItem !== undefined) && (securityItem !== null)) {
			queryParameters = queryParameters.set('securityItem', <any>securityItem);
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



	public createSecurityEntry(webId: string, securityEntry: PWASecurityEntry, applyToChildren?: boolean, securityItem?: string, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetservers/{webId}/securityentries'
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

		if ((securityItem !== undefined) && (securityItem !== null)) {
			queryParameters = queryParameters.set('securityItem', <any>securityItem);
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



	public deleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, securityItem?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
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

		if ((securityItem !== undefined) && (securityItem !== null)) {
			queryParameters = queryParameters.set('securityItem', <any>securityItem);
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



	public getSecurityEntryByName(name: string, webId: string, securityItem?: string, selectedFields?: string, webIdType?: string) : Observable<PWASecurityEntry> {
		const localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
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

		if ((securityItem !== undefined) && (securityItem !== null)) {
			queryParameters = queryParameters.set('securityItem', <any>securityItem);
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



	public updateSecurityEntry(name: string, webId: string, securityEntry: PWASecurityEntry, applyToChildren?: boolean, securityItem?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
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

		if ((securityItem !== undefined) && (securityItem !== null)) {
			queryParameters = queryParameters.set('securityItem', <any>securityItem);
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



	public getSecurityIdentities(webId: string, field?: string, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string) : Observable<PWAItemsSecurityIdentity> {
		const localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSecurityIdentities.');
		}

		if ((field !== undefined) && (field !== null)) {
			queryParameters = queryParameters.set('field', <any>field);
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

		if ((sortField !== undefined) && (sortField !== null)) {
			queryParameters = queryParameters.set('sortField', <any>sortField);
		}

		if ((sortOrder !== undefined) && (sortOrder !== null)) {
			queryParameters = queryParameters.set('sortOrder', <any>sortOrder);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsSecurityIdentity>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createSecurityIdentity(webId: string, securityIdentity: PWASecurityIdentity, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createSecurityIdentity.');
		}

			if (securityIdentity === null || securityIdentity === undefined) {
			throw new Error('Required parameter securityIdentity was null or undefined when calling createSecurityIdentity.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, securityIdentity, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getSecurityIdentitiesForUser(webId: string, userIdentity: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsSecurityIdentity> {
		const localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSecurityIdentitiesForUser.');
		}

			if (userIdentity === null || userIdentity === undefined) {
			throw new Error('Required parameter userIdentity was null or undefined when calling getSecurityIdentitiesForUser.');
		}

		if ((userIdentity !== undefined) && (userIdentity !== null)) {
			queryParameters = queryParameters.set('userIdentity', <any>userIdentity);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsSecurityIdentity>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getSecurityMappings(webId: string, field?: string, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string) : Observable<PWAItemsSecurityMapping> {
		const localVarPath = this.basePath + '/assetservers/{webId}/securitymappings'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSecurityMappings.');
		}

		if ((field !== undefined) && (field !== null)) {
			queryParameters = queryParameters.set('field', <any>field);
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

		if ((sortField !== undefined) && (sortField !== null)) {
			queryParameters = queryParameters.set('sortField', <any>sortField);
		}

		if ((sortOrder !== undefined) && (sortOrder !== null)) {
			queryParameters = queryParameters.set('sortOrder', <any>sortOrder);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsSecurityMapping>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createSecurityMapping(webId: string, securityMapping: PWASecurityMapping, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetservers/{webId}/securitymappings'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createSecurityMapping.');
		}

			if (securityMapping === null || securityMapping === undefined) {
			throw new Error('Required parameter securityMapping was null or undefined when calling createSecurityMapping.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, securityMapping, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getTimeRulePlugIns(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsTimeRulePlugIn> {
		const localVarPath = this.basePath + '/assetservers/{webId}/timeruleplugins'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getTimeRulePlugIns.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsTimeRulePlugIn>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getUnitClasses(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsUnitClass> {
		const localVarPath = this.basePath + '/assetservers/{webId}/unitclasses'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getUnitClasses.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsUnitClass>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createUnitClass(webId: string, unitClass: PWAUnitClass, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetservers/{webId}/unitclasses'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createUnitClass.');
		}

			if (unitClass === null || unitClass === undefined) {
			throw new Error('Required parameter unitClass was null or undefined when calling createUnitClass.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, unitClass, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
