import { PWATimedValue, PWAStreamValuesLinks, PWAWebException } from './models';

export class PWAStreamValues {
	public Items?: Array<PWATimedValue>;
	public Links?: PWAStreamValuesLinks;
	public Name?: string;
	public Path?: string;
	public UnitsAbbreviation?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(items?: Array<PWATimedValue>, links?: PWAStreamValuesLinks, name?: string, path?: string, unitsAbbreviation?: string, webException?: PWAWebException, webId?: string) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (path!=null) {
			this.Path=path
		}
		if (unitsAbbreviation!=null) {
			this.UnitsAbbreviation=unitsAbbreviation
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
