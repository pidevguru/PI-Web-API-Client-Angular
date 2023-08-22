import { PWAAnalysisRule, PWAPaginationLinks } from './models';

export class PWAItemsAnalysisRule {
	public Items?: Array<PWAAnalysisRule>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAnalysisRule>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
