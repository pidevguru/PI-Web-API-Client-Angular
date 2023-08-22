import { PWAErrors, PWAPoint } from './models';

export class PWAItemPoint {
	public Exception?: PWAErrors;
	public Identifier?: string;
	public IdentifierType?: string;
	public Object?: PWAPoint;
	constructor(exception?: PWAErrors, identifier?: string, identifierType?: string, object?: PWAPoint) {
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
