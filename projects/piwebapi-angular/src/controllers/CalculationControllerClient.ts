import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PWAItemsSummaryValue, PWATimedValues} from '../models/models';


export class CalculationControllerClient {

	private basePath : string;
	private defaultHeaders : any;
	private withCredentials : boolean;


	constructor(protected http: HttpClient, basePath: string, defaultHeaders : any, withCredentials: boolean) {
		this.basePath = basePath;
		this.defaultHeaders = defaultHeaders;
		this.withCredentials = withCredentials;
	}



	public getAtIntervals(expression: string, endTime?: string, sampleInterval?: string, selectedFields?: string, startTime?: string, webId?: string) : Observable<PWATimedValues> {
		const localVarPath = this.basePath + '/calculation/intervals';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (expression === null || expression === undefined) {
			throw new Error('Required parameter expression was null or undefined when calling getAtIntervals.');
		}

		if ((expression !== undefined) && (expression !== null)) {
			queryParameters = queryParameters.set('expression', <any>expression);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
			queryParameters = queryParameters.set('sampleInterval', <any>sampleInterval);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((webId !== undefined) && (webId !== null)) {
			queryParameters = queryParameters.set('webId', <any>webId);
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



	public getAtRecorded(expression: string, endTime?: string, selectedFields?: string, startTime?: string, webId?: string) : Observable<PWATimedValues> {
		const localVarPath = this.basePath + '/calculation/recorded';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (expression === null || expression === undefined) {
			throw new Error('Required parameter expression was null or undefined when calling getAtRecorded.');
		}

		if ((expression !== undefined) && (expression !== null)) {
			queryParameters = queryParameters.set('expression', <any>expression);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((startTime !== undefined) && (startTime !== null)) {
			queryParameters = queryParameters.set('startTime', <any>startTime);
		}

		if ((webId !== undefined) && (webId !== null)) {
			queryParameters = queryParameters.set('webId', <any>webId);
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



	public getSummary(expression: string, calculationBasis?: string, endTime?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, webId?: string) : Observable<PWAItemsSummaryValue> {
		const localVarPath = this.basePath + '/calculation/summary';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (expression === null || expression === undefined) {
			throw new Error('Required parameter expression was null or undefined when calling getSummary.');
		}

		if ((expression !== undefined) && (expression !== null)) {
			queryParameters = queryParameters.set('expression', <any>expression);
		}

		if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
			queryParameters = queryParameters.set('calculationBasis', <any>calculationBasis);
		}

		if ((endTime !== undefined) && (endTime !== null)) {
			queryParameters = queryParameters.set('endTime', <any>endTime);
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

		if ((webId !== undefined) && (webId !== null)) {
			queryParameters = queryParameters.set('webId', <any>webId);
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



	public getAtTimes(expression: string, time: Array<string>, selectedFields?: string, sortOrder?: string, webId?: string) : Observable<PWATimedValues> {
		const localVarPath = this.basePath + '/calculation/times';

		let queryParameters = new HttpParams();
		let headers = this.defaultHeaders;

			if (expression === null || expression === undefined) {
			throw new Error('Required parameter expression was null or undefined when calling getAtTimes.');
		}

			if (time === null || time === undefined) {
			throw new Error('Required parameter time was null or undefined when calling getAtTimes.');
		}

		if ((expression !== undefined) && (expression !== null)) {
			queryParameters = queryParameters.set('expression', <any>expression);
		}

		if ((time !== undefined) && (time !== null)) {
			for (let item of time) {
				queryParameters = queryParameters.append('time', item);
			}
		}

		if ((selectedFields !== undefined) && (selectedFields !== null)) {
			queryParameters = queryParameters.set('selectedFields', <any>selectedFields);
		}

		if ((sortOrder !== undefined) && (sortOrder !== null)) {
			queryParameters = queryParameters.set('sortOrder', <any>sortOrder);
		}

		if ((webId !== undefined) && (webId !== null)) {
			queryParameters = queryParameters.set('webId', <any>webId);
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

}
