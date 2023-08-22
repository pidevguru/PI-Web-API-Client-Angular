import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAAnalysis, PWAAttribute, PWAElement, PWAItemsAnalysis, PWAItemsAttribute, PWAItemsElement, PWAItemsElementCategory, PWAItemsEventFrame, PWAItemsItemElement, PWAItemsNotificationRule, PWAItemsSecurityEntry, PWAItemsSecurityRights, PWAItemsstring, PWANotificationRule, PWASearchByAttribute, PWASecurityEntry} from '../models/models';


export class ElementControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public getByPath(path: string, associations?: string, selectedFields?: string, webIdType?: string) : Observable<PWAElement> {
		const localVarPath = this.basePath + '/elements';

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

		return this.http.get<PWAElement>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getMultiple(asParallel?: boolean, associations?: string, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, webIdType?: string) : Observable<PWAItemsItemElement> {
		const localVarPath = this.basePath + '/elements/multiple';

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

		return this.http.get<PWAItemsItemElement>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getElementsQuery(associations?: string, databaseWebId?: string, maxCount?: number, query?: string, queryDate?: string, selectedFields?: string, startIndex?: number, webIdType?: string) : Observable<PWAItemsElement> {
		const localVarPath = this.basePath + '/elements/search';

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

		if ((queryDate !== undefined) && (queryDate !== null)) {
			queryParameters = queryParameters.set('queryDate', <any>queryDate);
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

		return this.http.get<PWAItemsElement>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createSearchByAttribute(query: PWASearchByAttribute, associations?: string, noResults?: boolean, webIdType?: string) : Observable<PWAItemsElement> {
		const localVarPath = this.basePath + '/elements/searchbyattribute';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (query === null || query === undefined) {
			throw new Error('Required parameter query was null or undefined when calling createSearchByAttribute.');
		}

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((noResults !== undefined) && (noResults !== null)) {
			queryParameters = queryParameters.set('noResults', <any>noResults);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<PWAItemsElement>(localVarPath, query, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public executeSearchByAttribute(searchId: string, associations?: string, categoryName?: string, descriptionFilter?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string) : Observable<PWAItemsElement> {
		const localVarPath = this.basePath + '/elements/searchbyattribute/{searchId}'
			.replace('{' + 'searchId' + '}', String(searchId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (searchId === null || searchId === undefined) {
			throw new Error('Required parameter searchId was null or undefined when calling executeSearchByAttribute.');
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



	public delete(webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/elements/{webId}'
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



	public get(webId: string, associations?: string, selectedFields?: string, webIdType?: string) : Observable<PWAElement> {
		const localVarPath = this.basePath + '/elements/{webId}'
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

		return this.http.get<PWAElement>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public update(webId: string, element: PWAElement) : Observable<any> {
		const localVarPath = this.basePath + '/elements/{webId}'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling update.');
		}

			if (element === null || element === undefined) {
			throw new Error('Required parameter element was null or undefined when calling update.');
		}

		return this.http.patch<any>(localVarPath, element, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAnalyses(webId: string, maxCount?: number, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string) : Observable<PWAItemsAnalysis> {
		const localVarPath = this.basePath + '/elements/{webId}/analyses'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAnalyses.');
		}

		if ((maxCount !== undefined) && (maxCount !== null)) {
			queryParameters = queryParameters.set('maxCount', <any>maxCount);
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



	public createAnalysis(webId: string, analysis: PWAAnalysis, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/elements/{webId}/analyses'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createAnalysis.');
		}

			if (analysis === null || analysis === undefined) {
			throw new Error('Required parameter analysis was null or undefined when calling createAnalysis.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, analysis, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAttributes(webId: string, associations?: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, trait?: Array<string>, traitCategory?: Array<string>, valueType?: string, webIdType?: string) : Observable<PWAItemsAttribute> {
		const localVarPath = this.basePath + '/elements/{webId}/attributes'
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
		const localVarPath = this.basePath + '/elements/{webId}/attributes'
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



	public getCategories(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsElementCategory> {
		const localVarPath = this.basePath + '/elements/{webId}/categories'
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

		return this.http.get<PWAItemsElementCategory>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createConfig(webId: string, includeChildElements?: boolean) : Observable<any> {
		const localVarPath = this.basePath + '/elements/{webId}/config'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createConfig.');
		}

		if ((includeChildElements !== undefined) && (includeChildElements !== null)) {
			queryParameters = queryParameters.set('includeChildElements', <any>includeChildElements);
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



	public findElementAttributes(webId: string, associations?: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, elementCategory?: string, elementDescriptionFilter?: string, elementNameFilter?: string, elementTemplate?: string, elementType?: string, maxCount?: number, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string) : Observable<PWAItemsAttribute> {
		const localVarPath = this.basePath + '/elements/{webId}/elementattributes'
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



	public getElements(webId: string, associations?: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, webIdType?: string) : Observable<PWAItemsElement> {
		const localVarPath = this.basePath + '/elements/{webId}/elements'
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
		const localVarPath = this.basePath + '/elements/{webId}/elements'
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



	public getEventFrames(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string, webIdType?: string) : Observable<PWAItemsEventFrame> {
		const localVarPath = this.basePath + '/elements/{webId}/eventframes'
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



	public getNotificationRules(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsNotificationRule> {
		const localVarPath = this.basePath + '/elements/{webId}/notificationrules'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getNotificationRules.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsNotificationRule>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createNotificationRule(webId: string, notificationRule: PWANotificationRule, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/elements/{webId}/notificationrules'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createNotificationRule.');
		}

			if (notificationRule === null || notificationRule === undefined) {
			throw new Error('Required parameter notificationRule was null or undefined when calling createNotificationRule.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, notificationRule, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getPaths(webId: string, relativePath?: string) : Observable<PWAItemsstring> {
		const localVarPath = this.basePath + '/elements/{webId}/paths'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getPaths.');
		}

		if ((relativePath !== undefined) && (relativePath !== null)) {
			queryParameters = queryParameters.set('relativePath', <any>relativePath);
		}

		return this.http.get<PWAItemsstring>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public removeReferencedElement(webId: string, referencedElementWebId: Array<string>) : Observable<any> {
		const localVarPath = this.basePath + '/elements/{webId}/referencedelements'
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
		const localVarPath = this.basePath + '/elements/{webId}/referencedelements'
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
		const localVarPath = this.basePath + '/elements/{webId}/referencedelements'
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



	public getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string) : Observable<PWAItemsSecurityRights> {
		const localVarPath = this.basePath + '/elements/{webId}/security'
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
		const localVarPath = this.basePath + '/elements/{webId}/securityentries'
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
		const localVarPath = this.basePath + '/elements/{webId}/securityentries'
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
		const localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
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
		const localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
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
		const localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
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
