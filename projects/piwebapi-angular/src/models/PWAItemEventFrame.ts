import { PWAErrors, PWAEventFrame } from './models';

export class PWAItemEventFrame {
	public Exception?: PWAErrors;
	public Identifier?: string;
	public IdentifierType?: string;
	public Object?: PWAEventFrame;
	constructor(exception?: PWAErrors, identifier?: string, identifierType?: string, object?: PWAEventFrame) {
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
