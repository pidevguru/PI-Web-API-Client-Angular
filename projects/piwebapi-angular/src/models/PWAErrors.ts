export class PWAErrors {
	public Errors?: Array<string>;
	constructor(errors?: Array<string>) {
		if (errors!=null) {
			this.Errors=errors
		}
	}
}
