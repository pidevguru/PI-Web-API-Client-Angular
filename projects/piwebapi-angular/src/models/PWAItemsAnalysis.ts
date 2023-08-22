import { PWAAnalysis, PWAPaginationLinks } from './models';

export class PWAItemsAnalysis {
	public Items?: Array<PWAAnalysis>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAnalysis>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
