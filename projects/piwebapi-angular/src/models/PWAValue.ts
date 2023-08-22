import { PWAErrors, PWAWebException } from './models';

export class PWAValue {
	public Exception?: PWAErrors;
	public Value?: any;
	public WebException?: PWAWebException;
	constructor(exception?: PWAErrors, value?: any, webException?: PWAWebException) {
		if (exception!=null) {
			this.Exception=exception
		}
		if (value!=null) {
			this.Value=value
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
