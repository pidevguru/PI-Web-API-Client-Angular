import { PWAExtendedTimedValue, PWAWebException } from './models';

export class PWAExtendedTimedValues {
	public Items?: Array<PWAExtendedTimedValue>;
	public UnitsAbbreviation?: string;
	public WebException?: PWAWebException;
	constructor(items?: Array<PWAExtendedTimedValue>, unitsAbbreviation?: string, webException?: PWAWebException) {
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
