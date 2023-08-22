import { PWAWebException } from './models';

export class PWACacheInstance {
	public Id?: string;
	public LastRefreshTime?: string;
	public ScheduledExpirationTime?: string;
	public User?: string;
	public WebException?: PWAWebException;
	public WillRefreshAfter?: string;
	constructor(id?: string, lastRefreshTime?: string, scheduledExpirationTime?: string, user?: string, webException?: PWAWebException, willRefreshAfter?: string) {
		if (id!=null) {
			this.Id=id
		}
		if (lastRefreshTime!=null) {
			this.LastRefreshTime=lastRefreshTime
		}
		if (scheduledExpirationTime!=null) {
			this.ScheduledExpirationTime=scheduledExpirationTime
		}
		if (user!=null) {
			this.User=user
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (willRefreshAfter!=null) {
			this.WillRefreshAfter=willRefreshAfter
		}
	}
}
