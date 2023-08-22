import { PWANotificationRule, PWAPaginationLinks } from './models';

export class PWAItemsNotificationRule {
	public Items?: Array<PWANotificationRule>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWANotificationRule>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
