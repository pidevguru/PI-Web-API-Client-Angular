import { PWAChannelInstance, PWAPaginationLinks } from './models';

export class PWAItemsChannelInstance {
	public Items?: Array<PWAChannelInstance>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAChannelInstance>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
