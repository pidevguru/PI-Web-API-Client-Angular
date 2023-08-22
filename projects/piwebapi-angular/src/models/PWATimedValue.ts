import { PWAPropertyError, PWAWebException } from './models';

export class PWATimedValue {
	public Annotated?: boolean;
	public Errors?: Array<PWAPropertyError>;
	public Good?: boolean;
	public Questionable?: boolean;
	public Substituted?: boolean;
	public Timestamp?: string;
	public UnitsAbbreviation?: string;
	public Value?: any;
	public WebException?: PWAWebException;
	constructor(annotated?: boolean, errors?: Array<PWAPropertyError>, good?: boolean, questionable?: boolean, substituted?: boolean, timestamp?: string, unitsAbbreviation?: string, value?: any, webException?: PWAWebException) {
		if (annotated!=null) {
			this.Annotated=annotated
		}
		if (errors!=null) {
			this.Errors=errors
		}
		if (good!=null) {
			this.Good=good
		}
		if (questionable!=null) {
			this.Questionable=questionable
		}
		if (substituted!=null) {
			this.Substituted=substituted
		}
		if (timestamp!=null) {
			this.Timestamp=timestamp
		}
		if (unitsAbbreviation!=null) {
			this.UnitsAbbreviation=unitsAbbreviation
		}
		if (value!=null) {
			this.Value=value
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
