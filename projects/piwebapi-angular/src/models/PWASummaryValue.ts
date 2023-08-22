import { PWATimedValue, PWAWebException } from './models';

export class PWASummaryValue {
	public Type?: string;
	public Value?: PWATimedValue;
	public WebException?: PWAWebException;
	constructor(type?: string, value?: PWATimedValue, webException?: PWAWebException) {
		if (type!=null) {
			this.Type=type
		}
		if (value!=null) {
			this.Value=value
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
