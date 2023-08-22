import { PWAAnalysisRulePlugIn, PWAPaginationLinks } from './models';

export class PWAItemsAnalysisRulePlugIn {
	public Items?: Array<PWAAnalysisRulePlugIn>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAnalysisRulePlugIn>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
