export class PWADataServerLinks {
	public EnumerationSets?: string;
	public Points?: string;
	public Self?: string;
	constructor(enumerationSets?: string, points?: string, self?: string) {
		if (enumerationSets!=null) {
			this.EnumerationSets=enumerationSets
		}
		if (points!=null) {
			this.Points=points
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
