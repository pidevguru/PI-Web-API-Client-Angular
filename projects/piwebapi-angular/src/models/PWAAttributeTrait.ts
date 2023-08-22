import { PWAAttributeTraitLinks, PWAWebException } from './models';

export class PWAAttributeTrait {
	public Abbreviation?: string;
	public AllowChildAttributes?: boolean;
	public AllowDuplicates?: boolean;
	public IsAllowedOnRootAttribute?: boolean;
	public IsTypeInherited?: boolean;
	public IsUOMInherited?: boolean;
	public Links?: PWAAttributeTraitLinks;
	public Name?: string;
	public RequireNumeric?: boolean;
	public RequireString?: boolean;
	public WebException?: PWAWebException;
	constructor(abbreviation?: string, allowChildAttributes?: boolean, allowDuplicates?: boolean, isAllowedOnRootAttribute?: boolean, isTypeInherited?: boolean, isUOMInherited?: boolean, links?: PWAAttributeTraitLinks, name?: string, requireNumeric?: boolean, requireString?: boolean, webException?: PWAWebException) {
		if (abbreviation!=null) {
			this.Abbreviation=abbreviation
		}
		if (allowChildAttributes!=null) {
			this.AllowChildAttributes=allowChildAttributes
		}
		if (allowDuplicates!=null) {
			this.AllowDuplicates=allowDuplicates
		}
		if (isAllowedOnRootAttribute!=null) {
			this.IsAllowedOnRootAttribute=isAllowedOnRootAttribute
		}
		if (isTypeInherited!=null) {
			this.IsTypeInherited=isTypeInherited
		}
		if (isUOMInherited!=null) {
			this.IsUOMInherited=isUOMInherited
		}
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (requireNumeric!=null) {
			this.RequireNumeric=requireNumeric
		}
		if (requireString!=null) {
			this.RequireString=requireString
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
