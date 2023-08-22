export class PWATimeRulePlugInLinks {
	public AssetServer?: string;
	public Self?: string;
	constructor(assetServer?: string, self?: string) {
		if (assetServer!=null) {
			this.AssetServer=assetServer
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
