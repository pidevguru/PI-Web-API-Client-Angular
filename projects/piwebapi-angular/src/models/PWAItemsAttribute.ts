import { PWAAttribute, PWAPaginationLinks } from './models';

export class PWAItemsAttribute {
	public Items?: Array<PWAAttribute>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAttribute>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
