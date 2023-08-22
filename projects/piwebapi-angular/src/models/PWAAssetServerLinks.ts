export class PWAAssetServerLinks {
	public AnalysisRulePlugIns?: string;
	public Databases?: string;
	public NotificationContactTemplates?: string;
	public NotificationPlugIns?: string;
	public Security?: string;
	public SecurityEntries?: string;
	public SecurityIdentities?: string;
	public SecurityMappings?: string;
	public Self?: string;
	public TimeRulePlugIns?: string;
	public UnitClasses?: string;
	constructor(analysisRulePlugIns?: string, databases?: string, notificationContactTemplates?: string, notificationPlugIns?: string, security?: string, securityEntries?: string, securityIdentities?: string, securityMappings?: string, self?: string, timeRulePlugIns?: string, unitClasses?: string) {
		if (analysisRulePlugIns!=null) {
			this.AnalysisRulePlugIns=analysisRulePlugIns
		}
		if (databases!=null) {
			this.Databases=databases
		}
		if (notificationContactTemplates!=null) {
			this.NotificationContactTemplates=notificationContactTemplates
		}
		if (notificationPlugIns!=null) {
			this.NotificationPlugIns=notificationPlugIns
		}
		if (security!=null) {
			this.Security=security
		}
		if (securityEntries!=null) {
			this.SecurityEntries=securityEntries
		}
		if (securityIdentities!=null) {
			this.SecurityIdentities=securityIdentities
		}
		if (securityMappings!=null) {
			this.SecurityMappings=securityMappings
		}
		if (self!=null) {
			this.Self=self
		}
		if (timeRulePlugIns!=null) {
			this.TimeRulePlugIns=timeRulePlugIns
		}
		if (unitClasses!=null) {
			this.UnitClasses=unitClasses
		}
	}
}
