import { PWADataReference, PWAAttributeLinks, PWAWebException } from './models';

export class PWAAttribute {
	public CategoryNames?: Array<string>;
	public ConfigString?: string;
	public DataReference?: PWADataReference;
	public DataReferencePlugIn?: string;
	public DefaultUnitsName?: string;
	public DefaultUnitsNameAbbreviation?: string;
	public Description?: string;
	public DisplayDigits?: number;
	public HasChildren?: boolean;
	public Id?: string;
	public IsConfigurationItem?: boolean;
	public IsExcluded?: boolean;
	public IsHidden?: boolean;
	public IsManualDataEntry?: boolean;
	public Links?: PWAAttributeLinks;
	public Name?: string;
	public Path?: string;
	public Paths?: Array<string>;
	public Span?: number;
	public Step?: boolean;
	public TraitName?: string;
	public Type?: string;
	public TypeQualifier?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	public Zero?: number;
	constructor(categoryNames?: Array<string>, configString?: string, dataReference?: PWADataReference, dataReferencePlugIn?: string, defaultUnitsName?: string, defaultUnitsNameAbbreviation?: string, description?: string, displayDigits?: number, hasChildren?: boolean, id?: string, isConfigurationItem?: boolean, isExcluded?: boolean, isHidden?: boolean, isManualDataEntry?: boolean, links?: PWAAttributeLinks, name?: string, path?: string, paths?: Array<string>, span?: number, step?: boolean, traitName?: string, type?: string, typeQualifier?: string, webException?: PWAWebException, webId?: string, zero?: number) {
		if (categoryNames!=null) {
			this.CategoryNames=categoryNames
		}
		if (configString!=null) {
			this.ConfigString=configString
		}
		if (dataReference!=null) {
			this.DataReference=dataReference
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
		if (description!=null) {
			this.Description=description
		}
		if (displayDigits!=null) {
			this.DisplayDigits=displayDigits
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
		if (paths!=null) {
			this.Paths=paths
		}
		if (span!=null) {
			this.Span=span
		}
		if (step!=null) {
			this.Step=step
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
		if (zero!=null) {
			this.Zero=zero
		}
	}
}
