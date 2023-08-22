import { PWAAttributeCategory, PWAPaginationLinks } from './models';

export class PWAItemsAttributeCategory {
	public Items?: Array<PWAAttributeCategory>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAttributeCategory>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
