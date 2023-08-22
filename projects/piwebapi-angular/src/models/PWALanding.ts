import { PWALandingLinks, PWAWebException } from './models';

export class PWALanding {
	public Links?: PWALandingLinks;
	public WebException?: PWAWebException;
	constructor(links?: PWALandingLinks, webException?: PWAWebException) {
		if (links!=null) {
			this.Links=links
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
