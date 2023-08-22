import { PWAAttributeTemplateLinks, PWAWebException } from './models';

export class PWAAttributeTemplate {
	public CategoryNames?: Array<string>;
	public ConfigString?: string;
	public DataReferencePlugIn?: string;
	public DefaultUnitsName?: string;
	public DefaultUnitsNameAbbreviation?: string;
	public DefaultValue?: any;
	public Description?: string;
	public HasChildren?: boolean;
	public Id?: string;
	public IsConfigurationItem?: boolean;
	public IsExcluded?: boolean;
	public IsHidden?: boolean;
	public IsManualDataEntry?: boolean;
	public Links?: PWAAttributeTemplateLinks;
	public Name?: string;
	public Path?: string;
	public TraitName?: string;
	public Type?: string;
	public TypeQualifier?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(categoryNames?: Array<string>, configString?: string, dataReferencePlugIn?: string, defaultUnitsName?: string, defaultUnitsNameAbbreviation?: string, defaultValue?: any, description?: string, hasChildren?: boolean, id?: string, isConfigurationItem?: boolean, isExcluded?: boolean, isHidden?: boolean, isManualDataEntry?: boolean, links?: PWAAttributeTemplateLinks, name?: string, path?: string, traitName?: string, type?: string, typeQualifier?: string, webException?: PWAWebException, webId?: string) {
		if (categoryNames!=null) {
			this.CategoryNames=categoryNames
		}
		if (configString!=null) {
			this.ConfigString=configString
		}
		if (dataReferencePlugIn!=null) {
			this.DataReferencePlugIn=dataReferencePlugIn
		}
		if (defaultUnitsName!=null) {
			this.DefaultUnitsName=defaultUnitsName
		}
		if (defaultUnitsNameAbbreviation!=null) {
			this.DefaultUnitsNameAbbreviation=defaultUnitsNameAbbreviation
		}
		if (defaultValue!=null) {
			this.DefaultValue=defaultValue
		}
		if (description!=null) {
			this.Description=description
		}
		if (hasChildren!=null) {
			this.HasChildren=hasChildren
		}
		if (id!=null) {
			this.Id=id
		}
		if (isConfigurationItem!=null) {
			this.IsConfigurationItem=isConfigurationItem
		}
		if (isExcluded!=null) {
			this.IsExcluded=isExcluded
		}
		if (isHidden!=null) {
			this.IsHidden=isHidden
		}
		if (isManualDataEntry!=null) {
			this.IsManualDataEntry=isManualDataEntry
		}
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (path!=null) {
			this.Path=path
		}
		if (traitName!=null) {
			this.TraitName=traitName
		}
		if (type!=null) {
			this.Type=type
		}
		if (typeQualifier!=null) {
			this.TypeQualifier=typeQualifier
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
