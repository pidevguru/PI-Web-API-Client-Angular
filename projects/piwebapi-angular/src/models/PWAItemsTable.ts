import { PWATable, PWAPaginationLinks } from './models';

export class PWAItemsTable {
	public Items?: Array<PWATable>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWATable>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
