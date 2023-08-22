export class PWAAssetDatabaseLinks {
	public AnalysisCategories?: string;
	public AnalysisTemplates?: string;
	public AssetServer?: string;
	public AttributeCategories?: string;
	public ElementCategories?: string;
	public ElementTemplates?: string;
	public Elements?: string;
	public EnumerationSets?: string;
	public EventFrames?: string;
	public Security?: string;
	public SecurityEntries?: string;
	public Self?: string;
	public TableCategories?: string;
	public Tables?: string;
	constructor(analysisCategories?: string, analysisTemplates?: string, assetServer?: string, attributeCategories?: string, elementCategories?: string, elementTemplates?: string, elements?: string, enumerationSets?: string, eventFrames?: string, security?: string, securityEntries?: string, self?: string, tableCategories?: string, tables?: string) {
		if (analysisCategories!=null) {
			this.AnalysisCategories=analysisCategories
		}
		if (analysisTemplates!=null) {
			this.AnalysisTemplates=analysisTemplates
		}
		if (assetServer!=null) {
			this.AssetServer=assetServer
		}
		if (attributeCategories!=null) {
			this.AttributeCategories=attributeCategories
		}
		if (elementCategories!=null) {
			this.ElementCategories=elementCategories
		}
		if (elementTemplates!=null) {
			this.ElementTemplates=elementTemplates
		}
		if (elements!=null) {
			this.Elements=elements
		}
		if (enumerationSets!=null) {
			this.EnumerationSets=enumerationSets
		}
		if (eventFrames!=null) {
			this.EventFrames=eventFrames
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
		if (tableCategories!=null) {
			this.TableCategories=tableCategories
		}
		if (tables!=null) {
			this.Tables=tables
		}
	}
}
