import { PWATableCategory, PWAPaginationLinks } from './models';

export class PWAItemsTableCategory {
	public Items?: Array<PWATableCategory>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWATableCategory>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
