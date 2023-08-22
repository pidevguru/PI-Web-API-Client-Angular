import { PWAAttributeTemplate, PWAPaginationLinks } from './models';

export class PWAItemsAttributeTemplate {
	public Items?: Array<PWAAttributeTemplate>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAttributeTemplate>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
