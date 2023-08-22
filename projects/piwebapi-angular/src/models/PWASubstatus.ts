import { PWAWebException } from './models';

export class PWASubstatus {
	public Message?: string;
	public Substatus?: number;
	public WebException?: PWAWebException;
	constructor(message?: string, substatus?: number, webException?: PWAWebException) {
		if (message!=null) {
			this.Message=message
		}
		if (substatus!=null) {
			this.Substatus=substatus
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
