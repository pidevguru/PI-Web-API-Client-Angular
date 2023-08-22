import { PWASecurityRightsLinks, PWAWebException } from './models';

export class PWASecurityRights {
	public CanAnnotate?: boolean;
	public CanDelete?: boolean;
	public CanExecute?: boolean;
	public CanRead?: boolean;
	public CanReadData?: boolean;
	public CanSubscribe?: boolean;
	public CanSubscribeOthers?: boolean;
	public CanWrite?: boolean;
	public CanWriteData?: boolean;
	public HasAdmin?: boolean;
	public Links?: PWASecurityRightsLinks;
	public OwnerWebId?: string;
	public Rights?: Array<string>;
	public SecurityItem?: string;
	public UserIdentity?: string;
	public WebException?: PWAWebException;
	constructor(canAnnotate?: boolean, canDelete?: boolean, canExecute?: boolean, canRead?: boolean, canReadData?: boolean, canSubscribe?: boolean, canSubscribeOthers?: boolean, canWrite?: boolean, canWriteData?: boolean, hasAdmin?: boolean, links?: PWASecurityRightsLinks, ownerWebId?: string, rights?: Array<string>, securityItem?: string, userIdentity?: string, webException?: PWAWebException) {
		if (canAnnotate!=null) {
			this.CanAnnotate=canAnnotate
		}
		if (canDelete!=null) {
			this.CanDelete=canDelete
		}
		if (canExecute!=null) {
			this.CanExecute=canExecute
		}
		if (canRead!=null) {
			this.CanRead=canRead
		}
		if (canReadData!=null) {
			this.CanReadData=canReadData
		}
		if (canSubscribe!=null) {
			this.CanSubscribe=canSubscribe
		}
		if (canSubscribeOthers!=null) {
			this.CanSubscribeOthers=canSubscribeOthers
		}
		if (canWrite!=null) {
			this.CanWrite=canWrite
		}
		if (canWriteData!=null) {
			this.CanWriteData=canWriteData
		}
		if (hasAdmin!=null) {
			this.HasAdmin=hasAdmin
		}
		if (links!=null) {
			this.Links=links
		}
		if (ownerWebId!=null) {
			this.OwnerWebId=ownerWebId
		}
		if (rights!=null) {
			this.Rights=rights
		}
		if (securityItem!=null) {
			this.SecurityItem=securityItem
		}
		if (userIdentity!=null) {
			this.UserIdentity=userIdentity
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
