import { PWASummaryValue, PWAStreamSummariesLinks, PWAWebException } from './models';

export class PWAStreamSummaries {
	public Items?: Array<PWASummaryValue>;
	public Links?: PWAStreamSummariesLinks;
	public Name?: string;
	public Path?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(items?: Array<PWASummaryValue>, links?: PWAStreamSummariesLinks, name?: string, path?: string, webException?: PWAWebException, webId?: string) {
		if (items!=null) {
			this.Items=items
		}
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (path!=null) {
			this.Path=path
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
