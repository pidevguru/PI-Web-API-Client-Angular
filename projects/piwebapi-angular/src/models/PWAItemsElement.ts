import { PWAElement, PWAPaginationLinks } from './models';

export class PWAItemsElement {
	public Items?: Array<PWAElement>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAElement>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
