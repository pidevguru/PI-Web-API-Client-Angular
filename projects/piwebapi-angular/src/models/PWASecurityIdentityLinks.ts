export class PWASecurityIdentityLinks {
	public AssetServer?: string;
	public Security?: string;
	public SecurityEntries?: string;
	public SecurityMappings?: string;
	public Self?: string;
	constructor(assetServer?: string, security?: string, securityEntries?: string, securityMappings?: string, self?: string) {
		if (assetServer!=null) {
			this.AssetServer=assetServer
		}
		if (security!=null) {
			this.Security=security
		}
		if (securityEntries!=null) {
			this.SecurityEntries=securityEntries
		}
		if (securityMappings!=null) {
			this.SecurityMappings=securityMappings
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
