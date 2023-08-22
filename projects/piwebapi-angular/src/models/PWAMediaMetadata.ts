import { PWAMediaMetadataLinks, PWAWebException } from './models';

export class PWAMediaMetadata {
	public Author?: string;
	public ChangeDate?: string;
	public Description?: string;
	public Links?: PWAMediaMetadataLinks;
	public Name?: string;
	public Size?: number;
	public WebException?: PWAWebException;
	constructor(author?: string, changeDate?: string, description?: string, links?: PWAMediaMetadataLinks, name?: string, size?: number, webException?: PWAWebException) {
		if (author!=null) {
			this.Author=author
		}
		if (changeDate!=null) {
			this.ChangeDate=changeDate
		}
		if (description!=null) {
			this.Description=description
		}
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (size!=null) {
			this.Size=size
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
