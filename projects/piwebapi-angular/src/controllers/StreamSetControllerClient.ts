import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAItemsItemsSubstatus, PWAItemsStreamSummaries, PWAItemsStreamUpdatesRegister, PWAItemsStreamUpdatesRetrieve, PWAItemsStreamValue, PWAItemsStreamValues, PWAItemsSubstatus, PWAStreamValue, PWAStreamValues} from '../models/models';


export class StreamSetControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public getChannelAdHoc(webId: Array<string>, heartbeatRate?: number, includeInitialValues?: boolean, webIdType?: string) : Observable<PWAItemsStreamValue> {
		const localVarPath = this.basePath + '/streamsets/channel';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getChannelAdHoc.');
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
		}

		if ((heartbeatRate !== undefined) && (heartbeatRate !== null)) {
			queryParameters = queryParameters.set('heartbeatRate', <any>heartbeatRate);
		}

		if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
			queryParameters = queryParameters.set('includeInitialValues', <any>includeInitialValues);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValue>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getEndAdHoc(webId: Array<string>, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/end';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getEndAdHoc.');
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
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

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getInterpolatedAdHoc(webId: Array<string>, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startTime?: string, syncTime?: string, syncTimeBoundaryType?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/interpolated';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAdHoc.');
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((filterExpression !== undefined) && (filterExpression !== null)) {
			queryParameters = queryParameters.set('filterExpression', <any>filterExpression);
		}

		if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
			queryParameters = queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
		}

		if ((interval !== undefined) && (interval !== null)) {
			queryParameters = queryParameters.set('interval', <any>interval);
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

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((syncTime !== undefined) && (syncTime !== null)) {
			queryParameters = queryParameters.set('syncTime', <any>syncTime);
		}

		if ((syncTimeBoundaryType !== undefined) && (syncTimeBoundaryType !== null)) {
			queryParameters = queryParameters.set('syncTimeBoundaryType', <any>syncTimeBoundaryType);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getInterpolatedAtTimesAdHoc(time: Array<string>, webId: Array<string>, filterExpression?: string, includeFilteredValues?: boolean, selectedFields?: string, sortOrder?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/interpolatedattimes';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (time === null || time === undefined) {
			throw new Error('Required parameter time was null or undefined when calling getInterpolatedAtTimesAdHoc.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimesAdHoc.');
		}

		if ((time !== undefined) && (time !== null)) {
			for (let item of time) {
				queryParameters = queryParameters.append('time', item);
			}
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
		}

		if ((filterExpression !== undefined) && (filterExpression !== null)) {
			queryParameters = queryParameters.set('filterExpression', <any>filterExpression);
		}

		if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
			queryParameters = queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((sortOrder !== undefined) && (sortOrder !== null)) {
			queryParameters = queryParameters.set('sortOrder', <any>sortOrder);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getJoined(baseWebId: string, subordinateWebId: Array<string>, boundaryType?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, startTime?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/joined';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (baseWebId === null || baseWebId === undefined) {
			throw new Error('Required parameter baseWebId was null or undefined when calling getJoined.');
		}

			if (subordinateWebId === null || subordinateWebId === undefined) {
			throw new Error('Required parameter subordinateWebId was null or undefined when calling getJoined.');
		}

		if ((baseWebId !== undefined) && (baseWebId !== null)) {
			queryParameters = queryParameters.set('baseWebId', <any>baseWebId);
		}

		if ((subordinateWebId !== undefined) && (subordinateWebId !== null)) {
			for (let item of subordinateWebId) {
				queryParameters = queryParameters.append('subordinateWebId', item);
			}
		}

		if ((boundaryType !== undefined) && (boundaryType !== null)) {
			queryParameters = queryParameters.set('boundaryType', <any>boundaryType);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((filterExpression !== undefined) && (filterExpression !== null)) {
			queryParameters = queryParameters.set('filterExpression', <any>filterExpression);
		}

		if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
			queryParameters = queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
		}

		if ((maxCount !== undefined) && (maxCount !== null)) {
			queryParameters = queryParameters.set('maxCount', <any>maxCount);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getPlotAdHoc(webId: Array<string>, endTime?: string, intervals?: number, selectedFields?: string, sortField?: string, sortOrder?: string, startTime?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/plot';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getPlotAdHoc.');
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((intervals !== undefined) && (intervals !== null)) {
			queryParameters = queryParameters.set('intervals', <any>intervals);
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

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getRecordedAdHoc(webId: Array<string>, boundaryType?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, sortField?: string, sortOrder?: string, startTime?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/recorded';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getRecordedAdHoc.');
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
		}

		if ((boundaryType !== undefined) && (boundaryType !== null)) {
			queryParameters = queryParameters.set('boundaryType', <any>boundaryType);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((filterExpression !== undefined) && (filterExpression !== null)) {
			queryParameters = queryParameters.set('filterExpression', <any>filterExpression);
		}

		if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
			queryParameters = queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
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

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public updateValuesAdHoc(values: Array<PWAStreamValues>, bufferOption?: string, updateOption?: string) : Observable<PWAItemsItemsSubstatus> {
		const localVarPath = this.basePath + '/streamsets/recorded';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (values === null || values === undefined) {
			throw new Error('Required parameter values was null or undefined when calling updateValuesAdHoc.');
		}

		if ((bufferOption !== undefined) && (bufferOption !== null)) {
			queryParameters = queryParameters.set('bufferOption', <any>bufferOption);
		}

		if ((updateOption !== undefined) && (updateOption !== null)) {
			queryParameters = queryParameters.set('updateOption', <any>updateOption);
		}

		return this.http.post<PWAItemsItemsSubstatus>(localVarPath, values, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getRecordedAtTimeAdHoc(time: string, webId: Array<string>, retrievalMode?: string, selectedFields?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValue> {
		const localVarPath = this.basePath + '/streamsets/recordedattime';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (time === null || time === undefined) {
			throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimeAdHoc.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimeAdHoc.');
		}

		if ((time !== undefined) && (time !== null)) {
			queryParameters = queryParameters.set('time', <any>time);
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
		}

		if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
			queryParameters = queryParameters.set('retrievalMode', <any>retrievalMode);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValue>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getRecordedAtTimesAdHoc(time: Array<string>, webId: Array<string>, retrievalMode?: string, selectedFields?: string, sortOrder?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/recordedattimes';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (time === null || time === undefined) {
			throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimesAdHoc.');
		}

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimesAdHoc.');
		}

		if ((time !== undefined) && (time !== null)) {
			for (let item of time) {
				queryParameters = queryParameters.append('time', item);
			}
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
		}

		if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
			queryParameters = queryParameters.set('retrievalMode', <any>retrievalMode);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((sortOrder !== undefined) && (sortOrder !== null)) {
			queryParameters = queryParameters.set('sortOrder', <any>sortOrder);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getSummariesAdHoc(webId: Array<string>, calculationBasis?: string, endTime?: string, filterExpression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamSummaries> {
		const localVarPath = this.basePath + '/streamsets/summary';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSummariesAdHoc.');
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
		}

		if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
			queryParameters = queryParameters.set('calculationBasis', <any>calculationBasis);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((filterExpression !== undefined) && (filterExpression !== null)) {
			queryParameters = queryParameters.set('filterExpression', <any>filterExpression);
		}

		if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
			queryParameters = queryParameters.set('sampleInterval', <any>sampleInterval);
		}

		if ((sampleType !== undefined) && (sampleType !== null)) {
			queryParameters = queryParameters.set('sampleType', <any>sampleType);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((summaryDuration !== undefined) && (summaryDuration !== null)) {
			queryParameters = queryParameters.set('summaryDuration', <any>summaryDuration);
		}

		if ((summaryType !== undefined) && (summaryType !== null)) {
			for (let item of summaryType) {
				queryParameters = queryParameters.append('summaryType', item);
			}
		}

		if ((timeType !== undefined) && (timeType !== null)) {
			queryParameters = queryParameters.set('timeType', <any>timeType);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamSummaries>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public retrieveStreamSetUpdates(marker: Array<string>, selectedFields?: string, webIdType?: string) : Observable<PWAItemsStreamUpdatesRetrieve> {
		const localVarPath = this.basePath + '/streamsets/updates';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (marker === null || marker === undefined) {
			throw new Error('Required parameter marker was null or undefined when calling retrieveStreamSetUpdates.');
		}

		if ((marker !== undefined) && (marker !== null)) {
			for (let item of marker) {
				queryParameters = queryParameters.append('marker', item);
			}
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamUpdatesRetrieve>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public registerStreamSetUpdates(webId: Array<string>, selectedFields?: string, webIdType?: string) : Observable<PWAItemsStreamUpdatesRegister> {
		const localVarPath = this.basePath + '/streamsets/updates';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling registerStreamSetUpdates.');
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<PWAItemsStreamUpdatesRegister>(localVarPath, null, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getValuesAdHoc(webId: Array<string>, selectedFields?: string, sortField?: string, sortOrder?: string, time?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValue> {
		const localVarPath = this.basePath + '/streamsets/value';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getValuesAdHoc.');
		}

		if ((webId !== undefined) && (webId !== null)) {
			for (let item of webId) {
				queryParameters = queryParameters.append('webId', item);
			}
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

		if ((time !== undefined) && (time !== null)) {
			queryParameters = queryParameters.set('time', <any>time);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValue>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public updateValueAdHoc(values: Array<PWAStreamValue>, bufferOption?: string, updateOption?: string) : Observable<PWAItemsSubstatus> {
		const localVarPath = this.basePath + '/streamsets/value';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (values === null || values === undefined) {
			throw new Error('Required parameter values was null or undefined when calling updateValueAdHoc.');
		}

		if ((bufferOption !== undefined) && (bufferOption !== null)) {
			queryParameters = queryParameters.set('bufferOption', <any>bufferOption);
		}

		if ((updateOption !== undefined) && (updateOption !== null)) {
			queryParameters = queryParameters.set('updateOption', <any>updateOption);
		}

		return this.http.post<PWAItemsSubstatus>(localVarPath, values, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getChannel(webId: string, categoryName?: string, heartbeatRate?: number, includeInitialValues?: boolean, nameFilter?: string, searchFullHierarchy?: boolean, showExcluded?: boolean, showHidden?: boolean, templateName?: string, webIdType?: string) : Observable<PWAItemsStreamValue> {
		const localVarPath = this.basePath + '/streamsets/{webId}/channel'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getChannel.');
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((heartbeatRate !== undefined) && (heartbeatRate !== null)) {
			queryParameters = queryParameters.set('heartbeatRate', <any>heartbeatRate);
		}

		if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
			queryParameters = queryParameters.set('includeInitialValues', <any>includeInitialValues);
		}

		if ((nameFilter !== undefined) && (nameFilter !== null)) {
			queryParameters = queryParameters.set('nameFilter', <any>nameFilter);
		}

		if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
			queryParameters = queryParameters.set('searchFullHierarchy', <any>searchFullHierarchy);
		}

		if ((showExcluded !== undefined) && (showExcluded !== null)) {
			queryParameters = queryParameters.set('showExcluded', <any>showExcluded);
		}

		if ((showHidden !== undefined) && (showHidden !== null)) {
			queryParameters = queryParameters.set('showHidden', <any>showHidden);
		}

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValue>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getEnd(webId: string, categoryName?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, templateName?: string, webIdType?: string) : Observable<PWAItemsStreamValue> {
		const localVarPath = this.basePath + '/streamsets/{webId}/end'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getEnd.');
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
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

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValue>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getInterpolated(webId: string, categoryName?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startTime?: string, syncTime?: string, syncTimeBoundaryType?: string, templateName?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/{webId}/interpolated'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getInterpolated.');
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((filterExpression !== undefined) && (filterExpression !== null)) {
			queryParameters = queryParameters.set('filterExpression', <any>filterExpression);
		}

		if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
			queryParameters = queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
		}

		if ((interval !== undefined) && (interval !== null)) {
			queryParameters = queryParameters.set('interval', <any>interval);
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

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((syncTime !== undefined) && (syncTime !== null)) {
			queryParameters = queryParameters.set('syncTime', <any>syncTime);
		}

		if ((syncTimeBoundaryType !== undefined) && (syncTimeBoundaryType !== null)) {
			queryParameters = queryParameters.set('syncTimeBoundaryType', <any>syncTimeBoundaryType);
		}

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getInterpolatedAtTimes(webId: string, time: Array<string>, categoryName?: string, filterExpression?: string, includeFilteredValues?: boolean, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortOrder?: string, templateName?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/{webId}/interpolatedattimes'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimes.');
		}

			if (time === null || time === undefined) {
			throw new Error('Required parameter time was null or undefined when calling getInterpolatedAtTimes.');
		}

		if ((time !== undefined) && (time !== null)) {
			for (let item of time) {
				queryParameters = queryParameters.append('time', item);
			}
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((filterExpression !== undefined) && (filterExpression !== null)) {
			queryParameters = queryParameters.set('filterExpression', <any>filterExpression);
		}

		if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
			queryParameters = queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
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

		if ((sortOrder !== undefined) && (sortOrder !== null)) {
			queryParameters = queryParameters.set('sortOrder', <any>sortOrder);
		}

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getPlot(webId: string, categoryName?: string, endTime?: string, intervals?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startTime?: string, templateName?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/{webId}/plot'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getPlot.');
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((intervals !== undefined) && (intervals !== null)) {
			queryParameters = queryParameters.set('intervals', <any>intervals);
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

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getRecorded(webId: string, boundaryType?: string, categoryName?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startTime?: string, templateName?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/{webId}/recorded'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getRecorded.');
		}

		if ((boundaryType !== undefined) && (boundaryType !== null)) {
			queryParameters = queryParameters.set('boundaryType', <any>boundaryType);
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((filterExpression !== undefined) && (filterExpression !== null)) {
			queryParameters = queryParameters.set('filterExpression', <any>filterExpression);
		}

		if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
			queryParameters = queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
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

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public updateValues(webId: string, values: Array<PWAStreamValues>, bufferOption?: string, updateOption?: string) : Observable<PWAItemsItemsSubstatus> {
		const localVarPath = this.basePath + '/streamsets/{webId}/recorded'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling updateValues.');
		}

			if (values === null || values === undefined) {
			throw new Error('Required parameter values was null or undefined when calling updateValues.');
		}

		if ((bufferOption !== undefined) && (bufferOption !== null)) {
			queryParameters = queryParameters.set('bufferOption', <any>bufferOption);
		}

		if ((updateOption !== undefined) && (updateOption !== null)) {
			queryParameters = queryParameters.set('updateOption', <any>updateOption);
		}

		return this.http.post<PWAItemsItemsSubstatus>(localVarPath, values, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getRecordedAtTime(webId: string, time: string, categoryName?: string, nameFilter?: string, retrievalMode?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValue> {
		const localVarPath = this.basePath + '/streamsets/{webId}/recordedattime'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTime.');
		}

			if (time === null || time === undefined) {
			throw new Error('Required parameter time was null or undefined when calling getRecordedAtTime.');
		}

		if ((time !== undefined) && (time !== null)) {
			queryParameters = queryParameters.set('time', <any>time);
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((nameFilter !== undefined) && (nameFilter !== null)) {
			queryParameters = queryParameters.set('nameFilter', <any>nameFilter);
		}

		if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
			queryParameters = queryParameters.set('retrievalMode', <any>retrievalMode);
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

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValue>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getRecordedAtTimes(webId: string, time: Array<string>, categoryName?: string, nameFilter?: string, retrievalMode?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortOrder?: string, templateName?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streamsets/{webId}/recordedattimes'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimes.');
		}

			if (time === null || time === undefined) {
			throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimes.');
		}

		if ((time !== undefined) && (time !== null)) {
			for (let item of time) {
				queryParameters = queryParameters.append('time', item);
			}
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((nameFilter !== undefined) && (nameFilter !== null)) {
			queryParameters = queryParameters.set('nameFilter', <any>nameFilter);
		}

		if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
			queryParameters = queryParameters.set('retrievalMode', <any>retrievalMode);
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

		if ((sortOrder !== undefined) && (sortOrder !== null)) {
			queryParameters = queryParameters.set('sortOrder', <any>sortOrder);
		}

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getSummaries(webId: string, calculationBasis?: string, categoryName?: string, endTime?: string, filterExpression?: string, nameFilter?: string, sampleInterval?: string, sampleType?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, templateName?: string, timeType?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamSummaries> {
		const localVarPath = this.basePath + '/streamsets/{webId}/summary'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSummaries.');
		}

		if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
			queryParameters = queryParameters.set('calculationBasis', <any>calculationBasis);
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((filterExpression !== undefined) && (filterExpression !== null)) {
			queryParameters = queryParameters.set('filterExpression', <any>filterExpression);
		}

		if ((nameFilter !== undefined) && (nameFilter !== null)) {
			queryParameters = queryParameters.set('nameFilter', <any>nameFilter);
		}

		if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
			queryParameters = queryParameters.set('sampleInterval', <any>sampleInterval);
		}

		if ((sampleType !== undefined) && (sampleType !== null)) {
			queryParameters = queryParameters.set('sampleType', <any>sampleType);
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

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((summaryDuration !== undefined) && (summaryDuration !== null)) {
			queryParameters = queryParameters.set('summaryDuration', <any>summaryDuration);
		}

		if ((summaryType !== undefined) && (summaryType !== null)) {
			for (let item of summaryType) {
				queryParameters = queryParameters.append('summaryType', item);
			}
		}

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((timeType !== undefined) && (timeType !== null)) {
			queryParameters = queryParameters.set('timeType', <any>timeType);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamSummaries>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getValues(webId: string, categoryName?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, templateName?: string, time?: string, timeZone?: string, webIdType?: string) : Observable<PWAItemsStreamValue> {
		const localVarPath = this.basePath + '/streamsets/{webId}/value'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getValues.');
		}

		if ((categoryName !== undefined) && (categoryName !== null)) {
			queryParameters = queryParameters.set('categoryName', <any>categoryName);
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

		if ((templateName !== undefined) && (templateName !== null)) {
			queryParameters = queryParameters.set('templateName', <any>templateName);
		}

		if ((time !== undefined) && (time !== null)) {
			queryParameters = queryParameters.set('time', <any>time);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAItemsStreamValue>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public updateValue(webId: string, values: Array<PWAStreamValue>, bufferOption?: string, updateOption?: string) : Observable<PWAItemsSubstatus> {
		const localVarPath = this.basePath + '/streamsets/{webId}/value'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling updateValue.');
		}

			if (values === null || values === undefined) {
			throw new Error('Required parameter values was null or undefined when calling updateValue.');
		}

		if ((bufferOption !== undefined) && (bufferOption !== null)) {
			queryParameters = queryParameters.set('bufferOption', <any>bufferOption);
		}

		if ((updateOption !== undefined) && (updateOption !== null)) {
			queryParameters = queryParameters.set('updateOption', <any>updateOption);
		}

		return this.http.post<PWAItemsSubstatus>(localVarPath, values, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
