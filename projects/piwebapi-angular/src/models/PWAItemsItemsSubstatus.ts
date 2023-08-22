import { PWAItemsSubstatus, PWAPaginationLinks } from './models';

export class PWAItemsItemsSubstatus {
	public Items?: Array<PWAItemsSubstatus>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAItemsSubstatus>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
