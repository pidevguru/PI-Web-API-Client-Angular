import { PWAEnumerationValue, PWAPaginationLinks } from './models';

export class PWAItemsEnumerationValue {
	public Items?: Array<PWAEnumerationValue>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAEnumerationValue>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
