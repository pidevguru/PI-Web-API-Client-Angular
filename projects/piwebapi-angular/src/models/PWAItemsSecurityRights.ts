import { PWASecurityRights, PWAPaginationLinks } from './models';

export class PWAItemsSecurityRights {
	public Items?: Array<PWASecurityRights>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWASecurityRights>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
