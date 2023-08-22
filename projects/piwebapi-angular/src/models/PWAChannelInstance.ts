import { PWAWebException } from './models';

export class PWAChannelInstance {
	public Id?: string;
	public LastMessageSentTime?: string;
	public SentMessageCount?: number;
	public StartTime?: string;
	public WebException?: PWAWebException;
	constructor(id?: string, lastMessageSentTime?: string, sentMessageCount?: number, startTime?: string, webException?: PWAWebException) {
		if (id!=null) {
			this.Id=id
		}
		if (lastMessageSentTime!=null) {
			this.LastMessageSentTime=lastMessageSentTime
		}
		if (sentMessageCount!=null) {
			this.SentMessageCount=sentMessageCount
		}
		if (startTime!=null) {
			this.StartTime=startTime
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
