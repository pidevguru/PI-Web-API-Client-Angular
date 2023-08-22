import { Injectable } from '@angular/core';
import { AnalysisControllerClient } from './controllers/AnalysisControllerClient'
import { AnalysisCategoryControllerClient } from './controllers/AnalysisCategoryControllerClient'
import { AnalysisRuleControllerClient } from './controllers/AnalysisRuleControllerClient'
import { AnalysisRulePlugInControllerClient } from './controllers/AnalysisRulePlugInControllerClient'
import { AnalysisTemplateControllerClient } from './controllers/AnalysisTemplateControllerClient'
import { AssetDatabaseControllerClient } from './controllers/AssetDatabaseControllerClient'
import { AssetServerControllerClient } from './controllers/AssetServerControllerClient'
import { AttributeControllerClient } from './controllers/AttributeControllerClient'
import { AttributeCategoryControllerClient } from './controllers/AttributeCategoryControllerClient'
import { AttributeTemplateControllerClient } from './controllers/AttributeTemplateControllerClient'
import { AttributeTraitControllerClient } from './controllers/AttributeTraitControllerClient'
import { BatchControllerClient } from './controllers/BatchControllerClient'
import { CalculationControllerClient } from './controllers/CalculationControllerClient'
import { ConfigurationControllerClient } from './controllers/ConfigurationControllerClient'
import { DataServerControllerClient } from './controllers/DataServerControllerClient'
import { ElementControllerClient } from './controllers/ElementControllerClient'
import { ElementCategoryControllerClient } from './controllers/ElementCategoryControllerClient'
import { ElementTemplateControllerClient } from './controllers/ElementTemplateControllerClient'
import { EnumerationSetControllerClient } from './controllers/EnumerationSetControllerClient'
import { EnumerationValueControllerClient } from './controllers/EnumerationValueControllerClient'
import { EventFrameControllerClient } from './controllers/EventFrameControllerClient'
import { HomeControllerClient } from './controllers/HomeControllerClient'
import { PointControllerClient } from './controllers/PointControllerClient'
import { SecurityIdentityControllerClient } from './controllers/SecurityIdentityControllerClient'
import { SecurityMappingControllerClient } from './controllers/SecurityMappingControllerClient'
import { StreamControllerClient } from './controllers/StreamControllerClient'
import { StreamSetControllerClient } from './controllers/StreamSetControllerClient'
import { SystemControllerClient } from './controllers/SystemControllerClient'
import { TableControllerClient } from './controllers/TableControllerClient'
import { TableCategoryControllerClient } from './controllers/TableCategoryControllerClient'
import { TimeRuleControllerClient } from './controllers/TimeRuleControllerClient'
import { TimeRulePlugInControllerClient } from './controllers/TimeRulePlugInControllerClient'
import { UnitControllerClient } from './controllers/UnitControllerClient'
import { UnitClassControllerClient } from './controllers/UnitClassControllerClient'
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class PIWebApi {
    public analysis!: AnalysisControllerClient;
    public analysisCategory!: AnalysisCategoryControllerClient;
    public analysisRule!: AnalysisRuleControllerClient;
    public analysisRulePlugIn!: AnalysisRulePlugInControllerClient;
    public analysisTemplate!: AnalysisTemplateControllerClient;
    public assetDatabase!: AssetDatabaseControllerClient;
    public assetServer!: AssetServerControllerClient;
    public attribute!: AttributeControllerClient;
    public attributeCategory!: AttributeCategoryControllerClient;
    public attributeTemplate!: AttributeTemplateControllerClient;
    public attributeTrait!: AttributeTraitControllerClient;
    public batch!: BatchControllerClient;
    public calculation!: CalculationControllerClient;
    public configuration!: ConfigurationControllerClient;
    public dataServer!: DataServerControllerClient
    public element!: ElementControllerClient
    public elementCategory!: ElementCategoryControllerClient;
    public elementTemplate!: ElementTemplateControllerClient;
    public enumerationSet!: EnumerationSetControllerClient
    public enumerationValue!: EnumerationValueControllerClient
    public eventFrame!: EventFrameControllerClient
    public home!: HomeControllerClient
    public point!: PointControllerClient
    public securityIdentity!: SecurityIdentityControllerClient
    public securityMapping!: SecurityMappingControllerClient
    public stream!: StreamControllerClient
    public streamSet!: StreamSetControllerClient
    public system!: SystemControllerClient
    public table!: TableControllerClient
    public tableCategory!: TableCategoryControllerClient
    public timeRule!: TimeRuleControllerClient
    public timeRulePlugIn!: TimeRulePlugInControllerClient
    public unit!: UnitControllerClient
    public unitClass!: UnitClassControllerClient
    private username?: string;
    private password?: string;
    public defaultHeaders?: HttpHeaders;

    constructor(private http: HttpClient) {

    }

    public setKerberosAuth(basePath: string, cacheHeader?: string) {
        this.defaultHeaders = new HttpHeaders();
        this.defaultHeaders = this.defaultHeaders.append('Content-Type', 'application/json');
        this.defaultHeaders = this.defaultHeaders.append('X-Requested-With', 'PIWebApiClient');
        this.createControllers(basePath, true, cacheHeader);
    }

    public setBasicAuth(basePath: string, username: string, password: string, cacheHeader?: string) {
        this.defaultHeaders = new HttpHeaders();
        this.defaultHeaders = this.defaultHeaders.append('Content-Type', 'application/json');
        this.defaultHeaders = this.defaultHeaders.append('X-Requested-With', 'PIWebApiClient');
        this.username = username;
        this.password = password;
        this.defaultHeaders = this.defaultHeaders.append('Authorization', ('Basic ' + btoa(this.username + ":" + this.password)));
        this.createControllers(basePath, false, cacheHeader);
    }



    public createControllers(basePath: string, withCredentials: boolean, cacheHeader?: string) {
        if (cacheHeader)
        {
            this.defaultHeaders?.append('Cache-Control', cacheHeader);
        }     

        this.analysis = new AnalysisControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.analysisCategory = new AnalysisCategoryControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.analysisRule = new AnalysisRuleControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.analysisRulePlugIn = new AnalysisRulePlugInControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.analysisTemplate = new AnalysisTemplateControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.assetDatabase = new AssetDatabaseControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.assetServer = new AssetServerControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.attribute = new AttributeControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.attributeCategory = new AttributeCategoryControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.attributeTemplate = new AttributeTemplateControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.attributeTrait= new AttributeTraitControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.batch = new BatchControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.calculation= new CalculationControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.configuration = new ConfigurationControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.dataServer = new DataServerControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.element = new ElementControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.elementCategory= new ElementCategoryControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.elementTemplate = new ElementTemplateControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.enumerationSet = new EnumerationSetControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.enumerationValue = new EnumerationValueControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.eventFrame = new EventFrameControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.home = new HomeControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.point = new PointControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.securityIdentity = new SecurityIdentityControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.securityMapping = new SecurityMappingControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.stream = new StreamControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.streamSet = new StreamSetControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.system = new SystemControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.table = new TableControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.tableCategory = new TableCategoryControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.timeRule = new TimeRuleControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.timeRulePlugIn = new TimeRulePlugInControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.unit = new UnitControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
        this.unitClass = new UnitClassControllerClient(this.http, basePath, this.defaultHeaders, withCredentials);
    }
}
