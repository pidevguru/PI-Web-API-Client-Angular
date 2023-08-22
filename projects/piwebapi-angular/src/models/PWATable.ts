import { PWATableLinks, PWAWebException } from './models';

export class PWATable {
	public CategoryNames?: Array<string>;
	public ConvertToLocalTime?: boolean;
	public Description?: string;
	public Id?: string;
	public Links?: PWATableLinks;
	public Name?: string;
	public Path?: string;
	public TimeZone?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(categoryNames?: Array<string>, convertToLocalTime?: boolean, description?: string, id?: string, links?: PWATableLinks, name?: string, path?: string, timeZone?: string, webException?: PWAWebException, webId?: string) {
		if (categoryNames!=null) {
			this.CategoryNames=categoryNames
		}
		if (convertToLocalTime!=null) {
			this.ConvertToLocalTime=convertToLocalTime
		}
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
		if (timeZone!=null) {
			this.TimeZone=timeZone
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
