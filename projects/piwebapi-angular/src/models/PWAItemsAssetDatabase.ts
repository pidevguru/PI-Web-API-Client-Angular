import { PWAAssetDatabase, PWAPaginationLinks } from './models';

export class PWAItemsAssetDatabase {
	public Items?: Array<PWAAssetDatabase>;
	public Links?: PWAPaginationLinks;
	constructor(items?: Array<PWAAssetDatabase>, links?: PWAPaginationLinks) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
	}
}
