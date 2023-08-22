import { PWAItemEventFrame, PWAPaginationLinks } from './models';

export class PWAItemsItemEventFrame {
	public Items?: Array<PWAItemEventFrame>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAItemEventFrame>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
