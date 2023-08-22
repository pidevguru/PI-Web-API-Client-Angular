import { PWATimedValue, PWAWebException } from './models';

export class PWATimedValues {
	public Items?: Array<PWATimedValue>;
	public UnitsAbbreviation?: string;
	public WebException?: PWAWebException;
	constructor(items?: Array<PWATimedValue>, unitsAbbreviation?: string, webException?: PWAWebException) {
		if (items!=null) {
			this.Items=items
		}
		if (unitsAbbreviation!=null) {
			this.UnitsAbbreviation=unitsAbbreviation
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
