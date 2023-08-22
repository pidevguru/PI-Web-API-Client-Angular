import { PWAAnalysisTemplate, PWAPaginationLinks } from './models';

export class PWAItemsAnalysisTemplate {
	public Items?: Array<PWAAnalysisTemplate>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAnalysisTemplate>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
