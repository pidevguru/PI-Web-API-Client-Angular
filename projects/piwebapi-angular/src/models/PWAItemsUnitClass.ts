import { PWAUnitClass, PWAPaginationLinks } from './models';

export class PWAItemsUnitClass {
	public Items?: Array<PWAUnitClass>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAUnitClass>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
