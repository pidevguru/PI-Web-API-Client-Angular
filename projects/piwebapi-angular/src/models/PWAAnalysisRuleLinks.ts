export class PWAAnalysisRuleLinks {
	public Analysis?: string;
	public AnalysisRules?: string;
	public AnalysisTemplate?: string;
	public Parent?: string;
	public PlugIn?: string;
	public Self?: string;
	constructor(analysis?: string, analysisRules?: string, analysisTemplate?: string, parent?: string, plugIn?: string, self?: string) {
		if (analysis!=null) {
			this.Analysis=analysis
		}
		if (analysisRules!=null) {
			this.AnalysisRules=analysisRules
		}
		if (analysisTemplate!=null) {
			this.AnalysisTemplate=analysisTemplate
		}
		if (parent!=null) {
			this.Parent=parent
		}
		if (plugIn!=null) {
			this.PlugIn=plugIn
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
