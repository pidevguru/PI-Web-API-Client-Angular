import { PWAStreamSummaries, PWAPaginationLinks } from './models';

export class PWAItemsStreamSummaries {
	public Items?: Array<PWAStreamSummaries>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAStreamSummaries>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
