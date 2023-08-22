import { PWASecurityMapping, PWAPaginationLinks } from './models';

export class PWAItemsSecurityMapping {
	public Items?: Array<PWASecurityMapping>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWASecurityMapping>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
