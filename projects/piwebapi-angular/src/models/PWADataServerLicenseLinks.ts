export class PWADataServerLicenseLinks {
	public Parent?: string;
	public Self?: string;
	constructor(parent?: string, self?: string) {
		if (parent!=null) {
			this.Parent=parent
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
