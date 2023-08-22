export class PWAEnumerationSetLinks {
	public DataServer?: string;
	public Database?: string;
	public Security?: string;
	public SecurityEntries?: string;
	public Self?: string;
	public Values?: string;
	constructor(dataServer?: string, database?: string, security?: string, securityEntries?: string, self?: string, values?: string) {
		if (dataServer!=null) {
			this.DataServer=dataServer
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
		if (values!=null) {
			this.Values=values
		}
	}
}
