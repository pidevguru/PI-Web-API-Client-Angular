import { PWAStreamValueLinks, PWATimedValue, PWAWebException } from './models';

export class PWAStreamValue {
	public Links?: PWAStreamValueLinks;
	public Name?: string;
	public Path?: string;
	public Value?: PWATimedValue;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(links?: PWAStreamValueLinks, name?: string, path?: string, value?: PWATimedValue, webException?: PWAWebException, webId?: string) {
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (path!=null) {
			this.Path=path
		}
		if (value!=null) {
			this.Value=value
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
