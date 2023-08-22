import { PWANotificationRuleSubscriber, PWAPaginationLinks } from './models';

export class PWAItemsNotificationRuleSubscriber {
	public Items?: Array<PWANotificationRuleSubscriber>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWANotificationRuleSubscriber>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
