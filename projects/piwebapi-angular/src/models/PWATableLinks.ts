export class PWATableLinks {
	public Categories?: string;
	public Data?: string;
	public Database?: string;
	public Security?: string;
	public SecurityEntries?: string;
	public Self?: string;
	constructor(categories?: string, data?: string, database?: string, security?: string, securityEntries?: string, self?: string) {
		if (categories!=null) {
			this.Categories=categories
		}
		if (data!=null) {
			this.Data=data
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
	}
}
