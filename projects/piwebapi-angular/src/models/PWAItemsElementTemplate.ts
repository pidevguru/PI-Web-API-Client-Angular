import { PWAElementTemplate, PWAPaginationLinks } from './models';

export class PWAItemsElementTemplate {
	public Items?: Array<PWAElementTemplate>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAElementTemplate>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
