import { PWAAttributeTrait, PWAPaginationLinks } from './models';

export class PWAItemsAttributeTrait {
	public Items?: Array<PWAAttributeTrait>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAttributeTrait>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
