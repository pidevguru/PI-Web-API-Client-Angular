import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAExtendedTimedValue, PWAExtendedTimedValues, PWAItemsStreamValues, PWAItemsSubstatus, PWAItemsSummaryValue, PWAStreamUpdatesRegister, PWAStreamUpdatesRetrieve, PWATimedValue, PWATimedValues} from '../models/models';


export class StreamControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public retrieveStreamUpdate(marker: string, desiredUnits?: string, selectedFields?: string, webIdType?: string) : Observable<PWAStreamUpdatesRetrieve> {
		const localVarPath = this.basePath + '/streams/updates/{marker}'
			.replace('{' + 'marker' + '}', String(marker));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (marker === null || marker === undefined) {
			throw new Error('Required parameter marker was null or undefined when calling retrieveStreamUpdate.');
		}

		if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
			queryParameters = queryParameters.set('desiredUnits', <any>desiredUnits);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.get<PWAStreamUpdatesRetrieve>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getChannel(webId: string, heartbeatRate?: number, includeInitialValues?: boolean, webIdType?: string) : Observable<PWAItemsStreamValues> {
		const localVarPath = this.basePath + '/streams/{webId}/channel'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getChannel.');
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

		return this.http.get<PWAItemsStreamValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getEnd(webId: string, desiredUnits?: string, selectedFields?: string) : Observable<PWATimedValue> {
		const localVarPath = this.basePath + '/streams/{webId}/end'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getEnd.');
		}

		if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
			queryParameters = queryParameters.set('desiredUnits', <any>desiredUnits);
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



	public getInterpolated(webId: string, desiredUnits?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, selectedFields?: string, startTime?: string, syncTime?: string, syncTimeBoundaryType?: string, timeZone?: string) : Observable<PWATimedValues> {
		const localVarPath = this.basePath + '/streams/{webId}/interpolated'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getInterpolated.');
		}

		if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
			queryParameters = queryParameters.set('desiredUnits', <any>desiredUnits);
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

		return this.http.get<PWATimedValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getInterpolatedAtTimes(webId: string, time: Array<string>, desiredUnits?: string, filterExpression?: string, includeFilteredValues?: boolean, selectedFields?: string, sortOrder?: string, timeZone?: string) : Observable<PWATimedValues> {
		const localVarPath = this.basePath + '/streams/{webId}/interpolatedattimes'
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

		if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
			queryParameters = queryParameters.set('desiredUnits', <any>desiredUnits);
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

		return this.http.get<PWATimedValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getPlot(webId: string, desiredUnits?: string, endTime?: string, intervals?: number, selectedFields?: string, startTime?: string, timeZone?: string) : Observable<PWATimedValues> {
		const localVarPath = this.basePath + '/streams/{webId}/plot'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getPlot.');
		}

		if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
			queryParameters = queryParameters.set('desiredUnits', <any>desiredUnits);
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

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
		}

		return this.http.get<PWATimedValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getRecorded(webId: string, associations?: string, boundaryType?: string, desiredUnits?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, startTime?: string, timeZone?: string) : Observable<PWAExtendedTimedValues> {
		const localVarPath = this.basePath + '/streams/{webId}/recorded'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getRecorded.');
		}

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((boundaryType !== undefined) && (boundaryType !== null)) {
			queryParameters = queryParameters.set('boundaryType', <any>boundaryType);
		}

		if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
			queryParameters = queryParameters.set('desiredUnits', <any>desiredUnits);
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

		return this.http.get<PWAExtendedTimedValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public updateValues(webId: string, values: Array<PWATimedValue>, bufferOption?: string, updateOption?: string) : Observable<PWAItemsSubstatus> {
		const localVarPath = this.basePath + '/streams/{webId}/recorded'
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

		return this.http.post<PWAItemsSubstatus>(localVarPath, values, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getRecordedAtTime(webId: string, time: string, associations?: string, desiredUnits?: string, retrievalMode?: string, selectedFields?: string, timeZone?: string) : Observable<PWAExtendedTimedValue> {
		const localVarPath = this.basePath + '/streams/{webId}/recordedattime'
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

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
			queryParameters = queryParameters.set('desiredUnits', <any>desiredUnits);
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

		return this.http.get<PWAExtendedTimedValue>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getRecordedAtTimes(webId: string, time: Array<string>, associations?: string, desiredUnits?: string, retrievalMode?: string, selectedFields?: string, sortOrder?: string, timeZone?: string) : Observable<PWAExtendedTimedValues> {
		const localVarPath = this.basePath + '/streams/{webId}/recordedattimes'
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

		if ((associations !== undefined) && (associations !== null)) {
			queryParameters = queryParameters.set('associations', <any>associations);
		}

		if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
			queryParameters = queryParameters.set('desiredUnits', <any>desiredUnits);
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

		return this.http.get<PWAExtendedTimedValues>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getSummary(webId: string, calculationBasis?: string, endTime?: string, filterExpression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, timeZone?: string) : Observable<PWAItemsSummaryValue> {
		const localVarPath = this.basePath + '/streams/{webId}/summary'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getSummary.');
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

		return this.http.get<PWAItemsSummaryValue>(localVarPath, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public registerStreamUpdate(webId: string, selectedFields?: string, webIdType?: string) : Observable<PWAStreamUpdatesRegister> {
		const localVarPath = this.basePath + '/streams/{webId}/updates'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling registerStreamUpdate.');
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<PWAStreamUpdatesRegister>(localVarPath, null, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}



	public getValue(webId: string, desiredUnits?: string, selectedFields?: string, time?: string, timeZone?: string) : Observable<PWATimedValue> {
		const localVarPath = this.basePath + '/streams/{webId}/value'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling getValue.');
		}

		if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
			queryParameters = queryParameters.set('desiredUnits', <any>desiredUnits);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((time !== undefined) && (time !== null)) {
			queryParameters = queryParameters.set('time', <any>time);
		}

		if ((timeZone !== undefined) && (timeZone !== null)) {
			queryParameters = queryParameters.set('timeZone', <any>timeZone);
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



	public updateValue(webId: string, value: PWATimedValue, bufferOption?: string, updateOption?: string, webIdType?: string) : Observable<any> {
		const localVarPath = this.basePath + '/streams/{webId}/value'
			.replace('{' + 'webId' + '}', String(webId));

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (webId === null || webId === undefined) {
			throw new Error('Required parameter webId was null or undefined when calling updateValue.');
		}

			if (value === null || value === undefined) {
			throw new Error('Required parameter value was null or undefined when calling updateValue.');
		}

		if ((bufferOption !== undefined) && (bufferOption !== null)) {
			queryParameters = queryParameters.set('bufferOption', <any>bufferOption);
		}

		if ((updateOption !== undefined) && (updateOption !== null)) {
			queryParameters = queryParameters.set('updateOption', <any>updateOption);
		}

		if ((webIdType !== undefined) && (webIdType !== null)) {
			queryParameters = queryParameters.set('webIdType', <any>webIdType);
		}

		return this.http.post<any>(localVarPath, value, 
		{
			params: queryParameters,
			withCredentials: this.withCredentials,
			headers: headers,
			observe: 'body',
			reportProgress: false,
		});
	}

}
