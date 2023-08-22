import { PWAPropertyError, PWAValue, PWAElementLinks, PWAWebException } from './models';

export class PWAElement {
	public CategoryNames?: Array<string>;
	public Description?: string;
	public Errors?: Array<PWAPropertyError>;
	public ExtendedProperties?: { [key: string]: PWAValue; };
	public HasChildren?: boolean;
	public Id?: string;
	public Links?: PWAElementLinks;
	public Name?: string;
	public Path?: string;
	public Paths?: Array<string>;
	public TemplateName?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(categoryNames?: Array<string>, description?: string, errors?: Array<PWAPropertyError>, extendedProperties?: { [key: string]: PWAValue; }, hasChildren?: boolean, id?: string, links?: PWAElementLinks, name?: string, path?: string, paths?: Array<string>, templateName?: string, webException?: PWAWebException, webId?: string) {
		if (categoryNames!=null) {
			this.CategoryNames=categoryNames
		}
		if (description!=null) {
			this.Description=description
		}
		if (errors!=null) {
			this.Errors=errors
		}
		if (extendedProperties!=null) {
			this.ExtendedProperties=extendedProperties
		}
		if (hasChildren!=null) {
			this.HasChildren=hasChildren
		}
		if (id!=null) {
			this.Id=id
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
		if (templateName!=null) {
			this.TemplateName=templateName
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
