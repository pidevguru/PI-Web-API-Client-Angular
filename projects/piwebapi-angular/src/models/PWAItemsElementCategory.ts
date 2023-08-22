import { PWAElementCategory, PWAPaginationLinks } from './models';

export class PWAItemsElementCategory {
	public Items?: Array<PWAElementCategory>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAElementCategory>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
