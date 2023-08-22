export class PWAElementTemplateLinks {
	public AnalysisTemplates?: string;
	public AttributeTemplates?: string;
	public BaseTemplate?: string;
	public BaseTemplates?: string;
	public Categories?: string;
	public Database?: string;
	public DefaultAttribute?: string;
	public DerivedTemplates?: string;
	public NotificationRuleTemplates?: string;
	public Security?: string;
	public SecurityEntries?: string;
	public Self?: string;
	constructor(analysisTemplates?: string, attributeTemplates?: string, baseTemplate?: string, baseTemplates?: string, categories?: string, database?: string, defaultAttribute?: string, derivedTemplates?: string, notificationRuleTemplates?: string, security?: string, securityEntries?: string, self?: string) {
		if (analysisTemplates!=null) {
			this.AnalysisTemplates=analysisTemplates
		}
		if (attributeTemplates!=null) {
			this.AttributeTemplates=attributeTemplates
		}
		if (baseTemplate!=null) {
			this.BaseTemplate=baseTemplate
		}
		if (baseTemplates!=null) {
			this.BaseTemplates=baseTemplates
		}
		if (categories!=null) {
			this.Categories=categories
		}
		if (database!=null) {
			this.Database=database
		}
		if (defaultAttribute!=null) {
			this.DefaultAttribute=defaultAttribute
		}
		if (derivedTemplates!=null) {
			this.DerivedTemplates=derivedTemplates
		}
		if (notificationRuleTemplates!=null) {
			this.NotificationRuleTemplates=notificationRuleTemplates
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
