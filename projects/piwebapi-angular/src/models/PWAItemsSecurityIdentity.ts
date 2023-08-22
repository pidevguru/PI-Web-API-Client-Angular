import { PWASecurityIdentity, PWAPaginationLinks } from './models';

export class PWAItemsSecurityIdentity {
	public Items?: Array<PWASecurityIdentity>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWASecurityIdentity>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
