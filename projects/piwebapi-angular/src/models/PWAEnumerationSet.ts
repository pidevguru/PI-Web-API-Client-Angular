import { PWAEnumerationSetLinks, PWAWebException } from './models';

export class PWAEnumerationSet {
	public Description?: string;
	public Id?: string;
	public Links?: PWAEnumerationSetLinks;
	public Name?: string;
	public Path?: string;
	public SerializeDescription?: boolean;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(description?: string, id?: string, links?: PWAEnumerationSetLinks, name?: string, path?: string, serializeDescription?: boolean, webException?: PWAWebException, webId?: string) {
		if (description!=null) {
			this.Description=description
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
		if (serializeDescription!=null) {
			this.SerializeDescription=serializeDescription
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
