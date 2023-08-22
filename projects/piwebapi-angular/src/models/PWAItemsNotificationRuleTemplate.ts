import { PWANotificationRuleTemplate, PWAPaginationLinks } from './models';

export class PWAItemsNotificationRuleTemplate {
	public Items?: Array<PWANotificationRuleTemplate>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWANotificationRuleTemplate>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
