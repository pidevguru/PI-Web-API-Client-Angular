export class PWASecurityRightsLinks {
	public Owner?: string;
	public Self?: string;
	constructor(owner?: string, self?: string) {
		if (owner!=null) {
			this.Owner=owner
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
