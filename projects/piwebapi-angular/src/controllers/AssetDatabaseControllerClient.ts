import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAAnalysisCategory, PWAAnalysisTemplate, PWAAssetDatabase, PWAAttributeCategory, PWAElement, PWAElementCategory, PWAElementTemplate, PWAEnumerationSet, PWAEventFrame, PWAItemsAnalysis, PWAItemsAnalysisCategory, PWAItemsAnalysisTemplate, PWAItemsAttribute, PWAItemsAttributeCategory, PWAItemsElement, PWAItemsElementCategory, PWAItemsElementTemplate, PWAItemsEnumerationSet, PWAItemsEventFrame, PWAItemsSecurityEntry, PWAItemsSecurityRights, PWAItemsTable, PWAItemsTableCategory, PWASecurityEntry, PWATable, PWATableCategory} from '../models/models';


export class AssetDatabaseControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public getByPath(path: string, selectedFields?: string, webIdType?: string) : Observable<PWAAssetDatabase> {
		const localVarPath = this.basePath + '/assetdatabases';

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

		return this.http.get<PWAAssetDatabase>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public delete(webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}'
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



	public get(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAAssetDatabase> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}'
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

		return this.http.get<PWAAssetDatabase>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public update(webId: string, database: PWAAssetDatabase) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling update.');
		}

			if (database === null || database === undefined) {
			throw new Error('Required parameter database was null or undefined when calling update.');
		}

		return this.http.patch<any>(localVarPath, database, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public findAnalyses(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string) : Observable<PWAItemsAnalysis> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/analyses'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling findAnalyses.');
		}

			if (field === null || field === undefined) {
			throw new Error('Required parameter field was null or undefined when calling findAnalyses.');
		}

		if ((field !== undefined) && (field !== null)) {
			for (let item of field) {
				queryParameters = queryParameters.append('field', item);
			}
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

		if ((startIndex !== undefined) && (startIndex !== null)) {
			queryParameters = queryParameters.set('startIndex', <any>startIndex);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsAnalysis>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAnalysisCategories(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsAnalysisCategory> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/analysiscategories'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAnalysisCategories.');
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



	public createAnalysisCategory(webId: string, analysisCategory: PWAAnalysisCategory, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/analysiscategories'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createAnalysisCategory.');
		}

			if (analysisCategory === null || analysisCategory === undefined) {
			throw new Error('Required parameter analysisCategory was null or undefined when calling createAnalysisCategory.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, analysisCategory, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAnalysisTemplates(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string) : Observable<PWAItemsAnalysisTemplate> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/analysistemplates'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAnalysisTemplates.');
		}

			if (field === null || field === undefined) {
			throw new Error('Required parameter field was null or undefined when calling getAnalysisTemplates.');
		}

		if ((field !== undefined) && (field !== null)) {
			for (let item of field) {
				queryParameters = queryParameters.append('field', item);
			}
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

		return this.http.get<PWAItemsAnalysisTemplate>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createAnalysisTemplate(webId: string, template: PWAAnalysisTemplate, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/analysistemplates'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createAnalysisTemplate.');
		}

			if (template === null || template === undefined) {
			throw new Error('Required parameter template was null or undefined when calling createAnalysisTemplate.');
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



	public getAttributeCategories(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsAttributeCategory> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/attributecategories'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAttributeCategories.');
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



	public createAttributeCategory(webId: string, attributeCategory: PWAAttributeCategory, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/attributecategories'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createAttributeCategory.');
		}

			if (attributeCategory === null || attributeCategory === undefined) {
			throw new Error('Required parameter attributeCategory was null or undefined when calling createAttributeCategory.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, attributeCategory, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public findElementAttributes(webId: string, associations?: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, elementCategory?: string, elementDescriptionFilter?: string, elementNameFilter?: string, elementTemplate?: string, elementType?: string, maxCount?: number, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string) : Observable<PWAItemsAttribute> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/elementattributes'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling findElementAttributes.');
		}

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((attributeCategory !== undefined) && (attributeCategory !== null)) {
			queryParameters = queryParameters.set('attributeCategory', <any>attributeCategory);
		}

		if ((attributeDescriptionFilter !== undefined) && (attributeDescriptionFilter !== null)) {
			queryParameters = queryParameters.set('attributeDescriptionFilter', <any>attributeDescriptionFilter);
		}

		if ((attributeNameFilter !== undefined) && (attributeNameFilter !== null)) {
			queryParameters = queryParameters.set('attributeNameFilter', <any>attributeNameFilter);
		}

		if ((attributeType !== undefined) && (attributeType !== null)) {
			queryParameters = queryParameters.set('attributeType', <any>attributeType);
		}

		if ((elementCategory !== undefined) && (elementCategory !== null)) {
			queryParameters = queryParameters.set('elementCategory', <any>elementCategory);
		}

		if ((elementDescriptionFilter !== undefined) && (elementDescriptionFilter !== null)) {
			queryParameters = queryParameters.set('elementDescriptionFilter', <any>elementDescriptionFilter);
		}

		if ((elementNameFilter !== undefined) && (elementNameFilter !== null)) {
			queryParameters = queryParameters.set('elementNameFilter', <any>elementNameFilter);
		}

		if ((elementTemplate !== undefined) && (elementTemplate !== null)) {
			queryParameters = queryParameters.set('elementTemplate', <any>elementTemplate);
		}

		if ((elementType !== undefined) && (elementType !== null)) {
			queryParameters = queryParameters.set('elementType', <any>elementType);
		}

		if ((maxCount !== undefined) && (maxCount !== null)) {
			queryParameters = queryParameters.set('maxCount', <any>maxCount);
		}

		if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
			queryParameters = queryParameters.set('searchFullHierarchy', <any>searchFullHierarchy);
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



	public getElementCategories(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsElementCategory> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/elementcategories'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getElementCategories.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsElementCategory>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createElementCategory(webId: string, elementCategory: PWAElementCategory, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/elementcategories'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createElementCategory.');
		}

			if (elementCategory === null || elementCategory === undefined) {
			throw new Error('Required parameter elementCategory was null or undefined when calling createElementCategory.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, elementCategory, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getElements(webId: string, associations?: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, webIdType?: string) : Observable<PWAItemsElement> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/elements'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getElements.');
		}

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
			queryParameters = queryParameters.set('descriptionFilter', <any>descriptionFilter);
		}

		if ((elementType !== undefined) && (elementType !== null)) {
			queryParameters = queryParameters.set('elementType', <any>elementType);
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

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsElement>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createElement(webId: string, element: PWAElement, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/elements'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createElement.');
		}

			if (element === null || element === undefined) {
			throw new Error('Required parameter element was null or undefined when calling createElement.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, element, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getElementTemplates(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string) : Observable<PWAItemsElementTemplate> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/elementtemplates'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getElementTemplates.');
		}

			if (field === null || field === undefined) {
			throw new Error('Required parameter field was null or undefined when calling getElementTemplates.');
		}

		if ((field !== undefined) && (field !== null)) {
			for (let item of field) {
				queryParameters = queryParameters.append('field', item);
			}
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

		return this.http.get<PWAItemsElementTemplate>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createElementTemplate(webId: string, template: PWAElementTemplate, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/elementtemplates'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createElementTemplate.');
		}

			if (template === null || template === undefined) {
			throw new Error('Required parameter template was null or undefined when calling createElementTemplate.');
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



	public getEnumerationSets(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsEnumerationSet> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/enumerationsets'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getEnumerationSets.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsEnumerationSet>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createEnumerationSet(webId: string, enumerationSet: PWAEnumerationSet, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/enumerationsets'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createEnumerationSet.');
		}

			if (enumerationSet === null || enumerationSet === undefined) {
			throw new Error('Required parameter enumerationSet was null or undefined when calling createEnumerationSet.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, enumerationSet, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public findEventFrameAttributes(webId: string, associations?: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, endTime?: string, eventFrameCategory?: string, eventFrameDescriptionFilter?: string, eventFrameNameFilter?: string, eventFrameTemplate?: string, maxCount?: number, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, webIdType?: string) : Observable<PWAItemsAttribute> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/eventframeattributes'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling findEventFrameAttributes.');
		}

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((attributeCategory !== undefined) && (attributeCategory !== null)) {
			queryParameters = queryParameters.set('attributeCategory', <any>attributeCategory);
		}

		if ((attributeDescriptionFilter !== undefined) && (attributeDescriptionFilter !== null)) {
			queryParameters = queryParameters.set('attributeDescriptionFilter', <any>attributeDescriptionFilter);
		}

		if ((attributeNameFilter !== undefined) && (attributeNameFilter !== null)) {
			queryParameters = queryParameters.set('attributeNameFilter', <any>attributeNameFilter);
		}

		if ((attributeType !== undefined) && (attributeType !== null)) {
			queryParameters = queryParameters.set('attributeType', <any>attributeType);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((eventFrameCategory !== undefined) && (eventFrameCategory !== null)) {
			queryParameters = queryParameters.set('eventFrameCategory', <any>eventFrameCategory);
		}

		if ((eventFrameDescriptionFilter !== undefined) && (eventFrameDescriptionFilter !== null)) {
			queryParameters = queryParameters.set('eventFrameDescriptionFilter', <any>eventFrameDescriptionFilter);
		}

		if ((eventFrameNameFilter !== undefined) && (eventFrameNameFilter !== null)) {
			queryParameters = queryParameters.set('eventFrameNameFilter', <any>eventFrameNameFilter);
		}

		if ((eventFrameTemplate !== undefined) && (eventFrameTemplate !== null)) {
			queryParameters = queryParameters.set('eventFrameTemplate', <any>eventFrameTemplate);
		}

		if ((maxCount !== undefined) && (maxCount !== null)) {
			queryParameters = queryParameters.set('maxCount', <any>maxCount);
		}

		if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
			queryParameters = queryParameters.set('referencedElementNameFilter', <any>referencedElementNameFilter);
		}

		if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
			queryParameters = queryParameters.set('searchFullHierarchy', <any>searchFullHierarchy);
		}

		if ((searchMode !== undefined) && (searchMode !== null)) {
			queryParameters = queryParameters.set('searchMode', <any>searchMode);
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

		if ((startIndex !== undefined) && (startIndex !== null)) {
			queryParameters = queryParameters.set('startIndex', <any>startIndex);
		}

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
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



	public getEventFrames(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, referencedElementTemplateName?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string, webIdType?: string) : Observable<PWAItemsEventFrame> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/eventframes'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getEventFrames.');
		}

		if ((canBeAcknowledged !== undefined) && (canBeAcknowledged !== null)) {
			queryParameters = queryParameters.set('canBeAcknowledged', <any>canBeAcknowledged);
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((isAcknowledged !== undefined) && (isAcknowledged !== null)) {
			queryParameters = queryParameters.set('isAcknowledged', <any>isAcknowledged);
		}

		if ((maxCount !== undefined) && (maxCount !== null)) {
			queryParameters = queryParameters.set('maxCount', <any>maxCount);
		}

		if ((nameFilter !== undefined) && (nameFilter !== null)) {
			queryParameters = queryParameters.set('nameFilter', <any>nameFilter);
		}

		if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
			queryParameters = queryParameters.set('referencedElementNameFilter', <any>referencedElementNameFilter);
		}

		if ((referencedElementTemplateName !== undefined) && (referencedElementTemplateName !== null)) {
			queryParameters = queryParameters.set('referencedElementTemplateName', <any>referencedElementTemplateName);
		}

		if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
			queryParameters = queryParameters.set('searchFullHierarchy', <any>searchFullHierarchy);
		}

		if ((searchMode !== undefined) && (searchMode !== null)) {
			queryParameters = queryParameters.set('searchMode', <any>searchMode);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((severity !== undefined) && (severity !== null)) {
			for (let item of severity) {
				queryParameters = queryParameters.append('severity', item);
			}
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

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsEventFrame>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createEventFrame(webId: string, eventFrame: PWAEventFrame, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/eventframes'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createEventFrame.');
		}

			if (eventFrame === null || eventFrame === undefined) {
			throw new Error('Required parameter eventFrame was null or undefined when calling createEventFrame.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, eventFrame, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public export(webId: string, endTime?: string, exportMode?: Array<string>, startTime?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/export'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling export.');
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((exportMode !== undefined) && (exportMode !== null)) {
			for (let item of exportMode) {
				queryParameters = queryParameters.append('exportMode', item);
			}
		}

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
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



	public import(webId: string, importMode?: Array<string>) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/import'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling import.');
		}

		if ((importMode !== undefined) && (importMode !== null)) {
			for (let item of importMode) {
				queryParameters = queryParameters.append('importMode', item);
			}
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



	public removeReferencedElement(webId: string, referencedElementWebId: Array<string>) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling removeReferencedElement.');
		}

			if (referencedElementWebId === null || referencedElementWebId === undefined) {
			throw new Error('Required parameter referencedElementWebId was null or undefined when calling removeReferencedElement.');
		}

		if ((referencedElementWebId !== undefined) && (referencedElementWebId !== null)) {
			for (let item of referencedElementWebId) {
				queryParameters = queryParameters.append('referencedElementWebId', item);
			}
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



	public getReferencedElements(webId: string, associations?: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, webIdType?: string) : Observable<PWAItemsElement> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getReferencedElements.');
		}

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
			queryParameters = queryParameters.set('descriptionFilter', <any>descriptionFilter);
		}

		if ((elementType !== undefined) && (elementType !== null)) {
			queryParameters = queryParameters.set('elementType', <any>elementType);
		}

		if ((maxCount !== undefined) && (maxCount !== null)) {
			queryParameters = queryParameters.set('maxCount', <any>maxCount);
		}

		if ((nameFilter !== undefined) && (nameFilter !== null)) {
			queryParameters = queryParameters.set('nameFilter', <any>nameFilter);
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

		if ((startIndex !== undefined) && (startIndex !== null)) {
			queryParameters = queryParameters.set('startIndex', <any>startIndex);
		}

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsElement>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public addReferencedElement(webId: string, referencedElementWebId: Array<string>, referenceType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling addReferencedElement.');
		}

			if (referencedElementWebId === null || referencedElementWebId === undefined) {
			throw new Error('Required parameter referencedElementWebId was null or undefined when calling addReferencedElement.');
		}

		if ((referencedElementWebId !== undefined) && (referencedElementWebId !== null)) {
			for (let item of referencedElementWebId) {
				queryParameters = queryParameters.append('referencedElementWebId', item);
			}
		}

		if ((referenceType !== undefined) && (referenceType !== null)) {
			queryParameters = queryParameters.set('referenceType', <any>referenceType);
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



	public getSecurity(webId: string, securityItem: Array<string>, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string) : Observable<PWAItemsSecurityRights> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/security'
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
		const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries'
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
		const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries'
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
		const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
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
		const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
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
		const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
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



	public getTableCategories(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsTableCategory> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/tablecategories'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getTableCategories.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsTableCategory>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createTableCategory(webId: string, tableCategory: PWATableCategory, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/tablecategories'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createTableCategory.');
		}

			if (tableCategory === null || tableCategory === undefined) {
			throw new Error('Required parameter tableCategory was null or undefined when calling createTableCategory.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, tableCategory, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getTables(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsTable> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/tables'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getTables.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsTable>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createTable(webId: string, table: PWATable, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/assetdatabases/{webId}/tables'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createTable.');
		}

			if (table === null || table === undefined) {
			throw new Error('Required parameter table was null or undefined when calling createTable.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, table, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
