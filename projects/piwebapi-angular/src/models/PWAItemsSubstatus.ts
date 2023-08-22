import { PWASubstatus, PWAPaginationLinks } from './models';

export class PWAItemsSubstatus {
	public Items?: Array<PWASubstatus>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWASubstatus>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
