export class PWASecurityEntryLinks {
	public SecurableObject?: string;
	public SecurityIdentity?: string;
	public Self?: string;
	constructor(securableObject?: string, securityIdentity?: string, self?: string) {
		if (securableObject!=null) {
			this.SecurableObject=securableObject
		}
		if (securityIdentity!=null) {
			this.SecurityIdentity=securityIdentity
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
