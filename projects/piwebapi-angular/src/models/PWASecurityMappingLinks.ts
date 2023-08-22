export class PWASecurityMappingLinks {
	public AssetServer?: string;
	public Security?: string;
	public SecurityEntries?: string;
	public SecurityIdentity?: string;
	public Self?: string;
	constructor(assetServer?: string, security?: string, securityEntries?: string, securityIdentity?: string, self?: string) {
		if (assetServer!=null) {
			this.AssetServer=assetServer
		}
		if (security!=null) {
			this.Security=security
		}
		if (securityEntries!=null) {
			this.SecurityEntries=securityEntries
		}
		if (securityIdentity!=null) {
			this.SecurityIdentity=securityIdentity
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
