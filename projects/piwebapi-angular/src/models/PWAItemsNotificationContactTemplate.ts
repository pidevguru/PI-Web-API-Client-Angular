import { PWANotificationContactTemplate, PWAPaginationLinks } from './models';

export class PWAItemsNotificationContactTemplate {
	public Items?: Array<PWANotificationContactTemplate>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWANotificationContactTemplate>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
