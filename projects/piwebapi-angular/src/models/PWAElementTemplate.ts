import { PWAValue, PWAElementTemplateLinks, PWAWebException } from './models';

export class PWAElementTemplate {
	public AllowElementToExtend?: boolean;
	public BaseTemplate?: string;
	public CanBeAcknowledged?: boolean;
	public CategoryNames?: Array<string>;
	public Description?: string;
	public ExtendedProperties?: { [key: string]: PWAValue; };
	public Id?: string;
	public InstanceType?: string;
	public Links?: PWAElementTemplateLinks;
	public Name?: string;
	public NamingPattern?: string;
	public Path?: string;
	public Severity?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(allowElementToExtend?: boolean, baseTemplate?: string, canBeAcknowledged?: boolean, categoryNames?: Array<string>, description?: string, extendedProperties?: { [key: string]: PWAValue; }, id?: string, instanceType?: string, links?: PWAElementTemplateLinks, name?: string, namingPattern?: string, path?: string, severity?: string, webException?: PWAWebException, webId?: string) {
		if (allowElementToExtend!=null) {
			this.AllowElementToExtend=allowElementToExtend
		}
		if (baseTemplate!=null) {
			this.BaseTemplate=baseTemplate
		}
		if (canBeAcknowledged!=null) {
			this.CanBeAcknowledged=canBeAcknowledged
		}
		if (categoryNames!=null) {
			this.CategoryNames=categoryNames
		}
		if (description!=null) {
			this.Description=description
		}
		if (extendedProperties!=null) {
			this.ExtendedProperties=extendedProperties
		}
		if (id!=null) {
			this.Id=id
		}
		if (instanceType!=null) {
			this.InstanceType=instanceType
		}
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (namingPattern!=null) {
			this.NamingPattern=namingPattern
		}
		if (path!=null) {
			this.Path=path
		}
		if (severity!=null) {
			this.Severity=severity
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
