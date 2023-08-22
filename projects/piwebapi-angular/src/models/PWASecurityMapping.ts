import { PWASecurityMappingLinks, PWAWebException } from './models';

export class PWASecurityMapping {
	public Account?: string;
	public Description?: string;
	public Id?: string;
	public Links?: PWASecurityMappingLinks;
	public Name?: string;
	public Path?: string;
	public SecurityIdentityWebId?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(account?: string, description?: string, id?: string, links?: PWASecurityMappingLinks, name?: string, path?: string, securityIdentityWebId?: string, webException?: PWAWebException, webId?: string) {
		if (account!=null) {
			this.Account=account
		}
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
		if (securityIdentityWebId!=null) {
			this.SecurityIdentityWebId=securityIdentityWebId
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
