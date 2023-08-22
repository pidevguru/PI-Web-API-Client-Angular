import { PWAItemAttribute, PWAPaginationLinks } from './models';

export class PWAItemsItemAttribute {
	public Items?: Array<PWAItemAttribute>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAItemAttribute>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
