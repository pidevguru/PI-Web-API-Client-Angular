import { PWAStreamUpdatesRetrieve, PWAPaginationLinks } from './models';

export class PWAItemsStreamUpdatesRetrieve {
	public Items?: Array<PWAStreamUpdatesRetrieve>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAStreamUpdatesRetrieve>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
