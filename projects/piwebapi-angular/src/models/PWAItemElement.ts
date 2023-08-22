import { PWAErrors, PWAElement } from './models';

export class PWAItemElement {
	public Exception?: PWAErrors;
	public Identifier?: string;
	public IdentifierType?: string;
	public Object?: PWAElement;
	constructor(exception?: PWAErrors, identifier?: string, identifierType?: string, object?: PWAElement) {
		if (exception!=null) {
			this.Exception=exception
		}
		if (identifier!=null) {
			this.Identifier=identifier
		}
		if (identifierType!=null) {
			this.IdentifierType=identifierType
		}
		if (object!=null) {
			this.Object=object
		}
	}
}
