import { PWAPropertyError, PWAWebException } from './models';

export class PWADataPipeEvent {
	public Action?: string;
	public Annotated?: boolean;
	public Errors?: Array<PWAPropertyError>;
	public Good?: boolean;
	public PreviousEventAction?: string;
	public Questionable?: boolean;
	public Substituted?: boolean;
	public Timestamp?: string;
	public UnitsAbbreviation?: string;
	public Value?: any;
	public WebException?: PWAWebException;
	constructor(action?: string, annotated?: boolean, errors?: Array<PWAPropertyError>, good?: boolean, previousEventAction?: string, questionable?: boolean, substituted?: boolean, timestamp?: string, unitsAbbreviation?: string, value?: any, webException?: PWAWebException) {
		if (action!=null) {
			this.Action=action
		}
		if (annotated!=null) {
			this.Annotated=annotated
		}
		if (errors!=null) {
			this.Errors=errors
		}
		if (good!=null) {
			this.Good=good
		}
		if (previousEventAction!=null) {
			this.PreviousEventAction=previousEventAction
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
