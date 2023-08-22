import { PWANotificationPlugIn, PWAPaginationLinks } from './models';

export class PWAItemsNotificationPlugIn {
	public Items?: Array<PWANotificationPlugIn>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWANotificationPlugIn>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
