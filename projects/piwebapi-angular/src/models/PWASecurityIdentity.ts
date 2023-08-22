import { PWASecurityIdentityLinks, PWAWebException } from './models';

export class PWASecurityIdentity {
	public Description?: string;
	public Id?: string;
	public IsEnabled?: boolean;
	public Links?: PWASecurityIdentityLinks;
	public Name?: string;
	public Path?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(description?: string, id?: string, isEnabled?: boolean, links?: PWASecurityIdentityLinks, name?: string, path?: string, webException?: PWAWebException, webId?: string) {
		if (description!=null) {
			this.Description=description
		}
		if (id!=null) {
			this.Id=id
		}
		if (isEnabled!=null) {
			this.IsEnabled=isEnabled
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
