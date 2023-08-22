import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAAnnotation, PWAAttribute, PWAEventFrame, PWAItemsAnnotation, PWAItemsAttribute, PWAItemsElement, PWAItemsElementCategory, PWAItemsEventFrame, PWAItemsItemEventFrame, PWAItemsSecurityEntry, PWAItemsSecurityRights, PWAMediaMetadata, PWASearchByAttribute, PWASecurityEntry} from '../models/models';


export class EventFrameControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public getByPath(path: string, selectedFields?: string, webIdType?: string) : Observable<PWAEventFrame> {
		const localVarPath = this.basePath + '/eventframes';

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

		return this.http.get<PWAEventFrame>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, webIdType?: string) : Observable<PWAItemsItemEventFrame> {
		const localVarPath = this.basePath + '/eventframes/multiple';

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

		return this.http.get<PWAItemsItemEventFrame>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getEventFramesQuery(databaseWebId?: string, maxCount?: number, query?: string, selectedFields?: string, startIndex?: number, webIdType?: string) : Observable<PWAItemsEventFrame> {
		const localVarPath = this.basePath + '/eventframes/search';

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

		return this.http.get<PWAItemsEventFrame>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createSearchByAttribute(query: PWASearchByAttribute, noResults?: boolean, selectedFields?: string, webIdType?: string) : Observable<PWAItemsEventFrame> {
		const localVarPath = this.basePath + '/eventframes/searchbyattribute';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (query === null || query === undefined) {
			throw new Error('Required parameter query was null or undefined when calling createSearchByAttribute.');
		}

		if ((noResults !== undefined) && (noResults !== null)) {
			queryParameters = queryParameters.set('noResults', <any>noResults);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<PWAItemsEventFrame>(localVarPath, query, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public executeSearchByAttribute(searchId: string, canBeAcknowledged?: boolean, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, webIdType?: string) : Observable<PWAItemsEventFrame> {
		const localVarPath = this.basePath + '/eventframes/searchbyattribute/{searchId}'
			.replace('{' + 'searchId' + '}', String(searchId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (searchId === null || searchId === undefined) {
			throw new Error('Required parameter searchId was null or undefined when calling executeSearchByAttribute.');
		}

		if ((canBeAcknowledged !== undefined) && (canBeAcknowledged !== null)) {
			queryParameters = queryParameters.set('canBeAcknowledged', <any>canBeAcknowledged);
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



	public delete(webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/eventframes/{webId}'
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



	public get(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAEventFrame> {
		const localVarPath = this.basePath + '/eventframes/{webId}'
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

		return this.http.get<PWAEventFrame>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public update(webId: string, eventFrame: PWAEventFrame) : Observable<any> {
		const localVarPath = this.basePath + '/eventframes/{webId}'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling update.');
		}

			if (eventFrame === null || eventFrame === undefined) {
			throw new Error('Required parameter eventFrame was null or undefined when calling update.');
		}

		return this.http.patch<any>(localVarPath, eventFrame, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public acknowledge(webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/eventframes/{webId}/acknowledge'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling acknowledge.');
		}

		return this.http.patch<any>(localVarPath, null, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAnnotations(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsAnnotation> {
		const localVarPath = this.basePath + '/eventframes/{webId}/annotations'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAnnotations.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsAnnotation>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public createAnnotation(webId: string, annotation: PWAAnnotation, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/eventframes/{webId}/annotations'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling createAnnotation.');
		}

			if (annotation === null || annotation === undefined) {
			throw new Error('Required parameter annotation was null or undefined when calling createAnnotation.');
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, annotation, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public deleteAnnotation(id: string, webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
			.replace('{' + 'id' + '}', String(id))
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling deleteAnnotation.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling deleteAnnotation.');
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



	public getAnnotationById(id: string, webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAAnnotation> {
		const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
			.replace('{' + 'id' + '}', String(id))
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling getAnnotationById.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAnnotationById.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAAnnotation>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public updateAnnotation(id: string, webId: string, annotation: PWAAnnotation) : Observable<any> {
		const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
			.replace('{' + 'id' + '}', String(id))
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling updateAnnotation.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling updateAnnotation.');
		}

			if (annotation === null || annotation === undefined) {
			throw new Error('Required parameter annotation was null or undefined when calling updateAnnotation.');
		}

		return this.http.patch<any>(localVarPath, annotation, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public deleteAnnotationAttachmentMediaById(id: string, webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}/attachment/media'
			.replace('{' + 'id' + '}', String(id))
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling deleteAnnotationAttachmentMediaById.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling deleteAnnotationAttachmentMediaById.');
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



	public getAnnotationAttachmentMediaMetadataById(id: string, webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAMediaMetadata> {
		const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}/attachment/media/metadata'
			.replace('{' + 'id' + '}', String(id))
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling getAnnotationAttachmentMediaMetadataById.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getAnnotationAttachmentMediaMetadataById.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAMediaMetadata>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getAttributes(webId: string, associations?: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, trait?: Array<string>, traitCategory?: Array<string>, valueType?: string, webIdType?: string) : Observable<PWAItemsAttribute> {
		const localVarPath = this.basePath + '/eventframes/{webId}/attributes'
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
		const localVarPath = this.basePath + '/eventframes/{webId}/attributes'
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



	public captureValues(webId: string) : Observable<any> {
		const localVarPath = this.basePath + '/eventframes/{webId}/attributes/capture'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling captureValues.');
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



	public getCategories(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsElementCategory> {
		const localVarPath = this.basePath + '/eventframes/{webId}/categories'
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
		const localVarPath = this.basePath + '/eventframes/{webId}/config'
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



	public findEventFrameAttributes(webId: string, associations?: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, endTime?: string, eventFrameCategory?: string, eventFrameDescriptionFilter?: string, eventFrameNameFilter?: string, eventFrameTemplate?: string, maxCount?: number, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, webIdType?: string) : Observable<PWAItemsAttribute> {
		const localVarPath = this.basePath + '/eventframes/{webId}/eventframeattributes'
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
		const localVarPath = this.basePath + '/eventframes/{webId}/eventframes'
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
		const localVarPath = this.basePath + '/eventframes/{webId}/eventframes'
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



	public getReferencedElements(webId: string, associations?: string, selectedFields?: string, webIdType?: string) : Observable<PWAItemsElement> {
		const localVarPath = this.basePath + '/eventframes/{webId}/referencedelements'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getReferencedElements.');
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

		return this.http.get<PWAItemsElement>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string) : Observable<PWAItemsSecurityRights> {
		const localVarPath = this.basePath + '/eventframes/{webId}/security'
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
		const localVarPath = this.basePath + '/eventframes/{webId}/securityentries'
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
		const localVarPath = this.basePath + '/eventframes/{webId}/securityentries'
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
		const localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
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
		const localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
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
		const localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
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
