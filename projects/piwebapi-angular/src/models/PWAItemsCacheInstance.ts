import { PWACacheInstance, PWAPaginationLinks } from './models';

export class PWAItemsCacheInstance {
	public Items?: Array<PWACacheInstance>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWACacheInstance>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
