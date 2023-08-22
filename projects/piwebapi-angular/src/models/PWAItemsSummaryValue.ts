import { PWASummaryValue, PWAPaginationLinks } from './models';

export class PWAItemsSummaryValue {
	public Items?: Array<PWASummaryValue>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWASummaryValue>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
