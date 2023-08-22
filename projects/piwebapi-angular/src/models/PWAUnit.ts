import { PWAUnitLinks, PWAWebException } from './models';

export class PWAUnit {
	public Abbreviation?: string;
	public Description?: string;
	public Factor?: number;
	public Id?: string;
	public Links?: PWAUnitLinks;
	public Name?: string;
	public Offset?: number;
	public Path?: string;
	public ReferenceFactor?: number;
	public ReferenceOffset?: number;
	public ReferenceUnitAbbreviation?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(abbreviation?: string, description?: string, factor?: number, id?: string, links?: PWAUnitLinks, name?: string, offset?: number, path?: string, referenceFactor?: number, referenceOffset?: number, referenceUnitAbbreviation?: string, webException?: PWAWebException, webId?: string) {
		if (abbreviation!=null) {
			this.Abbreviation=abbreviation
		}
		if (description!=null) {
			this.Description=description
		}
		if (factor!=null) {
			this.Factor=factor
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
		if (offset!=null) {
			this.Offset=offset
		}
		if (path!=null) {
			this.Path=path
		}
		if (referenceFactor!=null) {
			this.ReferenceFactor=referenceFactor
		}
		if (referenceOffset!=null) {
			this.ReferenceOffset=referenceOffset
		}
		if (referenceUnitAbbreviation!=null) {
			this.ReferenceUnitAbbreviation=referenceUnitAbbreviation
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
