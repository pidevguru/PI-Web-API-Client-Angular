import { PWAItemElement, PWAPaginationLinks } from './models';

export class PWAItemsItemElement {
	public Items?: Array<PWAItemElement>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAItemElement>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
