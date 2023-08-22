import { PWAValueQuery, PWAWebException } from './models';

export class PWASearchByAttribute {
	public ElementTemplate?: string;
	public SearchRoot?: string;
	public ValueQueries?: Array<PWAValueQuery>;
	public WebException?: PWAWebException;
	constructor(elementTemplate?: string, searchRoot?: string, valueQueries?: Array<PWAValueQuery>, webException?: PWAWebException) {
		if (elementTemplate!=null) {
			this.ElementTemplate=elementTemplate
		}
		if (searchRoot!=null) {
			this.SearchRoot=searchRoot
		}
		if (valueQueries!=null) {
			this.ValueQueries=valueQueries
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
