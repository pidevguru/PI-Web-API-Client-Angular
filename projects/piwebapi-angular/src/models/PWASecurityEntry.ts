import { PWASecurityEntryLinks, PWAWebException } from './models';

export class PWASecurityEntry {
	public AllowRights?: Array<string>;
	public DenyRights?: Array<string>;
	public Links?: PWASecurityEntryLinks;
	public Name?: string;
	public SecurityIdentityName?: string;
	public WebException?: PWAWebException;
	constructor(allowRights?: Array<string>, denyRights?: Array<string>, links?: PWASecurityEntryLinks, name?: string, securityIdentityName?: string, webException?: PWAWebException) {
		if (allowRights!=null) {
			this.AllowRights=allowRights
		}
		if (denyRights!=null) {
			this.DenyRights=denyRights
		}
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (securityIdentityName!=null) {
			this.SecurityIdentityName=securityIdentityName
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
