import { PWAErrors, PWAAttribute } from './models';

export class PWAItemAttribute {
	public Exception?: PWAErrors;
	public Identifier?: string;
	public IdentifierType?: string;
	public Object?: PWAAttribute;
	constructor(exception?: PWAErrors, identifier?: string, identifierType?: string, object?: PWAAttribute) {
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
