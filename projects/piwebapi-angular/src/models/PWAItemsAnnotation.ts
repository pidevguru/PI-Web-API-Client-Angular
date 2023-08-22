import { PWAAnnotation, PWAPaginationLinks } from './models';

export class PWAItemsAnnotation {
	public Items?: Array<PWAAnnotation>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAnnotation>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
