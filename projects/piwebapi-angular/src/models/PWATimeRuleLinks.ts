export class PWATimeRuleLinks {
	public Analysis?: string;
	public AnalysisTemplate?: string;
	public PlugIn?: string;
	public Self?: string;
	constructor(analysis?: string, analysisTemplate?: string, plugIn?: string, self?: string) {
		if (analysis!=null) {
			this.Analysis=analysis
		}
		if (analysisTemplate!=null) {
			this.AnalysisTemplate=analysisTemplate
		}
		if (plugIn!=null) {
			this.PlugIn=plugIn
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
