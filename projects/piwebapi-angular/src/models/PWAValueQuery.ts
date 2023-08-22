import { PWAWebException } from './models';

export class PWAValueQuery {
	public AttributeName?: string;
	public AttributeUOM?: string;
	public AttributeValue?: any;
	public SearchOperator?: string;
	public WebException?: PWAWebException;
	constructor(attributeName?: string, attributeUOM?: string, attributeValue?: any, searchOperator?: string, webException?: PWAWebException) {
		if (attributeName!=null) {
			this.AttributeName=attributeName
		}
		if (attributeUOM!=null) {
			this.AttributeUOM=attributeUOM
		}
		if (attributeValue!=null) {
			this.AttributeValue=attributeValue
		}
		if (searchOperator!=null) {
			this.SearchOperator=searchOperator
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
