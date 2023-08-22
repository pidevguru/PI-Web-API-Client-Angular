export class PWAAnalysisTemplateLinks {
	public AnalysisRule?: string;
	public AnalysisRulePlugIn?: string;
	public Categories?: string;
	public Database?: string;
	public Security?: string;
	public SecurityEntries?: string;
	public Self?: string;
	public Target?: string;
	public TimeRule?: string;
	public TimeRulePlugIn?: string;
	constructor(analysisRule?: string, analysisRulePlugIn?: string, categories?: string, database?: string, security?: string, securityEntries?: string, self?: string, target?: string, timeRule?: string, timeRulePlugIn?: string) {
		if (analysisRule!=null) {
			this.AnalysisRule=analysisRule
		}
		if (analysisRulePlugIn!=null) {
			this.AnalysisRulePlugIn=analysisRulePlugIn
		}
		if (categories!=null) {
			this.Categories=categories
		}
		if (database!=null) {
			this.Database=database
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
		if (target!=null) {
			this.Target=target
		}
		if (timeRule!=null) {
			this.TimeRule=timeRule
		}
		if (timeRulePlugIn!=null) {
			this.TimeRulePlugIn=timeRulePlugIn
		}
	}
}
