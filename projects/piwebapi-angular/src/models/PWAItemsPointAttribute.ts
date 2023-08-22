import { PWAPointAttribute, PWAPaginationLinks } from './models';

export class PWAItemsPointAttribute {
	public Items?: Array<PWAPointAttribute>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAPointAttribute>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
