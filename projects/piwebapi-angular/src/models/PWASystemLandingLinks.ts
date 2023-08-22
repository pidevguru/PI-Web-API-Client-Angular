export class PWASystemLandingLinks {
	public CacheInstances?: string;
	public Configuration?: string;
	public Self?: string;
	public Status?: string;
	public UserInfo?: string;
	public Versions?: string;
	constructor(cacheInstances?: string, configuration?: string, self?: string, status?: string, userInfo?: string, versions?: string) {
		if (cacheInstances!=null) {
			this.CacheInstances=cacheInstances
		}
		if (configuration!=null) {
			this.Configuration=configuration
		}
		if (self!=null) {
			this.Self=self
		}
		if (status!=null) {
			this.Status=status
		}
		if (userInfo!=null) {
			this.UserInfo=userInfo
		}
		if (versions!=null) {
			this.Versions=versions
		}
	}
}
