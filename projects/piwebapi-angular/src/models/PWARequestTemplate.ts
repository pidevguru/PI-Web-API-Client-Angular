export class PWARequestTemplate {
	public Resource?: string;
	constructor(resource?: string) {
		if (resource!=null) {
			this.Resource=resource
		}
	}
}
