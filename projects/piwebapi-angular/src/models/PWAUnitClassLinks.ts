export class PWAUnitClassLinks {
	public AssetServer?: string;
	public CanonicalUnit?: string;
	public Self?: string;
	public Units?: string;
	constructor(assetServer?: string, canonicalUnit?: string, self?: string, units?: string) {
		if (assetServer!=null) {
			this.AssetServer=assetServer
		}
		if (canonicalUnit!=null) {
			this.CanonicalUnit=canonicalUnit
		}
		if (self!=null) {
			this.Self=self
		}
		if (units!=null) {
			this.Units=units
		}
	}
}
