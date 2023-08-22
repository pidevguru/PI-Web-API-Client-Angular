export class PWATableCategoryLinks {
	public Database?: string;
	public Security?: string;
	public SecurityEntries?: string;
	public Self?: string;
	constructor(database?: string, security?: string, securityEntries?: string, self?: string) {
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
	}
}
