import { PWASecurityEntry, PWAPaginationLinks } from './models';

export class PWAItemsSecurityEntry {
	public Items?: Array<PWASecurityEntry>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWASecurityEntry>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
