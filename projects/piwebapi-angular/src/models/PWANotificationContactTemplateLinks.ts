export class PWANotificationContactTemplateLinks {
	public AssetServer?: string;
	public NotificationContactTemplates?: string;
	public NotificationPlugIn?: string;
	public Security?: string;
	public SecurityEntries?: string;
	public Self?: string;
	constructor(assetServer?: string, notificationContactTemplates?: string, notificationPlugIn?: string, security?: string, securityEntries?: string, self?: string) {
		if (assetServer!=null) {
			this.AssetServer=assetServer
		}
		if (notificationContactTemplates!=null) {
			this.NotificationContactTemplates=notificationContactTemplates
		}
		if (notificationPlugIn!=null) {
			this.NotificationPlugIn=notificationPlugIn
		}
		if (security!=null) {
			this.Security=security
		}
		if (securityEntries!=null) {
			this.SecurityEntries=securityEntries
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
