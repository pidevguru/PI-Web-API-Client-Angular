import { PWAValue, PWAAssetDatabaseLinks, PWAWebException } from './models';

export class PWAAssetDatabase {
	public Description?: string;
	public ExtendedProperties?: { [key: string]: PWAValue; };
	public Id?: string;
	public Links?: PWAAssetDatabaseLinks;
	public Name?: string;
	public Path?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(description?: string, extendedProperties?: { [key: string]: PWAValue; }, id?: string, links?: PWAAssetDatabaseLinks, name?: string, path?: string, webException?: PWAWebException, webId?: string) {
		if (description!=null) {
			this.Description=description
		}
		if (extendedProperties!=null) {
			this.ExtendedProperties=extendedProperties
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
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
