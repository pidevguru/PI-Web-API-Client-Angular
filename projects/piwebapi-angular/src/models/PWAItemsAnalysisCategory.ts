import { PWAAnalysisCategory, PWAPaginationLinks } from './models';

export class PWAItemsAnalysisCategory {
	public Items?: Array<PWAAnalysisCategory>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAnalysisCategory>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
