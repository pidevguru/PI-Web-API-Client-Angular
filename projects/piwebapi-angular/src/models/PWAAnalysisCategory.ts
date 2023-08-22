import { PWAAnalysisCategoryLinks, PWAWebException } from './models';

export class PWAAnalysisCategory {
	public Description?: string;
	public Id?: string;
	public Links?: PWAAnalysisCategoryLinks;
	public Name?: string;
	public Path?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(description?: string, id?: string, links?: PWAAnalysisCategoryLinks, name?: string, path?: string, webException?: PWAWebException, webId?: string) {
		if (description!=null) {
			this.Description=description
		}
		if (id!=null) {
			this.Id=id
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
