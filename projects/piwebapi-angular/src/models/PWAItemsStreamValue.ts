import { PWAStreamValue, PWAPaginationLinks } from './models';

export class PWAItemsStreamValue {
	public Items?: Array<PWAStreamValue>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAStreamValue>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
