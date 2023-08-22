import { PWATimeRulePlugIn, PWAPaginationLinks } from './models';

export class PWAItemsTimeRulePlugIn {
	public Items?: Array<PWATimeRulePlugIn>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWATimeRulePlugIn>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
