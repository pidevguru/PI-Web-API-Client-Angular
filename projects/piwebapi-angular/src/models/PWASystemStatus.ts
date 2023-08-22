import { PWAWebException } from './models';

export class PWASystemStatus {
	public CacheInstances?: number;
	public ServerTime?: string;
	public State?: string;
	public UpTimeInMinutes?: number;
	public WebException?: PWAWebException;
	constructor(cacheInstances?: number, serverTime?: string, state?: string, upTimeInMinutes?: number, webException?: PWAWebException) {
		if (cacheInstances!=null) {
			this.CacheInstances=cacheInstances
		}
		if (serverTime!=null) {
			this.ServerTime=serverTime
		}
		if (state!=null) {
			this.State=state
		}
		if (upTimeInMinutes!=null) {
			this.UpTimeInMinutes=upTimeInMinutes
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
