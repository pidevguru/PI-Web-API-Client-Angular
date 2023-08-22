import { PWAAssetServer, PWAPaginationLinks } from './models';

export class PWAItemsAssetServer {
	public Items?: Array<PWAAssetServer>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAssetServer>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
