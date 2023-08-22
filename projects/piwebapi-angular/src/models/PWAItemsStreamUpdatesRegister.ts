import { PWAStreamUpdatesRegister, PWAPaginationLinks } from './models';

export class PWAItemsStreamUpdatesRegister {
	public Items?: Array<PWAStreamUpdatesRegister>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAStreamUpdatesRegister>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
