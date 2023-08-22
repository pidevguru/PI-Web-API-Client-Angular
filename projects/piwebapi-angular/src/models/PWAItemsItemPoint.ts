import { PWAItemPoint, PWAPaginationLinks } from './models';

export class PWAItemsItemPoint {
	public Items?: Array<PWAItemPoint>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAItemPoint>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
