import { PWAUnitClassLinks, PWAWebException } from './models';

export class PWAUnitClass {
	public CanonicalUnitAbbreviation?: string;
	public CanonicalUnitName?: string;
	public Description?: string;
	public Id?: string;
	public Links?: PWAUnitClassLinks;
	public Name?: string;
	public Path?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(canonicalUnitAbbreviation?: string, canonicalUnitName?: string, description?: string, id?: string, links?: PWAUnitClassLinks, name?: string, path?: string, webException?: PWAWebException, webId?: string) {
		if (canonicalUnitAbbreviation!=null) {
			this.CanonicalUnitAbbreviation=canonicalUnitAbbreviation
		}
		if (canonicalUnitName!=null) {
			this.CanonicalUnitName=canonicalUnitName
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
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
