export class PWAWebException {
	public Errors?: Array<string>;
	public StatusCode?: number;
	constructor(errors?: Array<string>, statusCode?: number) {
		if (errors!=null) {
			this.Errors=errors
		}
		if (statusCode!=null) {
			this.StatusCode=statusCode
		}
	}
}
