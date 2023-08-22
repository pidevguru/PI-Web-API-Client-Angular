import { PWADataServer, PWAPaginationLinks } from './models';

export class PWAItemsDataServer {
	public Items?: Array<PWADataServer>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWADataServer>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
