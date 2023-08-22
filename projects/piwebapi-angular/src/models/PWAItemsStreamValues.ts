import { PWAStreamValues, PWAPaginationLinks } from './models';

export class PWAItemsStreamValues {
	public Items?: Array<PWAStreamValues>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAStreamValues>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
