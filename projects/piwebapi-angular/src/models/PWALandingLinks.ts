export class PWALandingLinks {
	public AssetServers?: string;
	public DataServers?: string;
	public Search?: string;
	public Self?: string;
	public System?: string;
	constructor(assetServers?: string, dataServers?: string, search?: string, self?: string, system?: string) {
		if (assetServers!=null) {
			this.AssetServers=assetServers
		}
		if (dataServers!=null) {
			this.DataServers=dataServers
		}
		if (search!=null) {
			this.Search=search
		}
		if (self!=null) {
			this.Self=self
		}
		if (system!=null) {
			this.System=system
		}
	}
}
