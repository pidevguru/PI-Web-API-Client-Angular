import { PWAPIPointDataReference, PWAWebException } from './models';

export class PWADataReference {
	public PIPoint?: PWAPIPointDataReference;
	public Type?: string;
	public WebException?: PWAWebException;
	constructor(pIPoint?: PWAPIPointDataReference, type?: string, webException?: PWAWebException) {
		if (pIPoint!=null) {
			this.PIPoint=pIPoint
		}
		if (type!=null) {
			this.Type=type
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
