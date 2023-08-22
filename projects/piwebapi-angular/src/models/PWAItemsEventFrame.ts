import { PWAEventFrame, PWAPaginationLinks } from './models';

export class PWAItemsEventFrame {
	public Items?: Array<PWAEventFrame>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAEventFrame>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
