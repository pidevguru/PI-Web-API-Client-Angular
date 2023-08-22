import { PWAWebException } from './models';

export class PWAUserInfo {
	public IdentityType?: string;
	public ImpersonationLevel?: string;
	public IsAuthenticated?: boolean;
	public Name?: string;
	public SID?: string;
	public WebException?: PWAWebException;
	constructor(identityType?: string, impersonationLevel?: string, isAuthenticated?: boolean, name?: string, sID?: string, webException?: PWAWebException) {
		if (identityType!=null) {
			this.IdentityType=identityType
		}
		if (impersonationLevel!=null) {
			this.ImpersonationLevel=impersonationLevel
		}
		if (isAuthenticated!=null) {
			this.IsAuthenticated=isAuthenticated
		}
		if (name!=null) {
			this.Name=name
		}
		if (sID!=null) {
			this.SID=sID
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
