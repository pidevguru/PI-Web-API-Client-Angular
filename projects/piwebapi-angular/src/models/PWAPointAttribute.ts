import { PWAPointAttributeLinks, PWAWebException } from './models';

export class PWAPointAttribute {
	public Links?: PWAPointAttributeLinks;
	public Name?: string;
	public Value?: any;
	public WebException?: PWAWebException;
	constructor(links?: PWAPointAttributeLinks, name?: string, value?: any, webException?: PWAWebException) {
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (value!=null) {
			this.Value=value
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
