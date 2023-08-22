import { PWAPoint, PWAPaginationLinks } from './models';

export class PWAItemsPoint {
	public Items?: Array<PWAPoint>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAPoint>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
