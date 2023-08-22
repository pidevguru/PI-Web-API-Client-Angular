import { PWAEnumerationSet, PWAPaginationLinks } from './models';

export class PWAItemsEnumerationSet {
	public Items?: Array<PWAEnumerationSet>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAEnumerationSet>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
