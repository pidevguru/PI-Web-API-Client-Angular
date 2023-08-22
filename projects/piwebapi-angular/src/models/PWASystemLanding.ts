import { PWASystemLandingLinks, PWAWebException } from './models';

export class PWASystemLanding {
	public Links?: PWASystemLandingLinks;
	public ProductTitle?: string;
	public ProductVersion?: string;
	public WebException?: PWAWebException;
	constructor(links?: PWASystemLandingLinks, productTitle?: string, productVersion?: string, webException?: PWAWebException) {
		if (links!=null) {
			this.Links=links
		}
		if (productTitle!=null) {
			this.ProductTitle=productTitle
		}
		if (productVersion!=null) {
			this.ProductVersion=productVersion
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
