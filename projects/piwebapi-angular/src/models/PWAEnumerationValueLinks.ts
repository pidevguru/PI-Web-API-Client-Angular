export class PWAEnumerationValueLinks {
	public EnumerationSet?: string;
	public Parent?: string;
	public Self?: string;
	constructor(enumerationSet?: string, parent?: string, self?: string) {
		if (enumerationSet!=null) {
			this.EnumerationSet=enumerationSet
		}
		if (parent!=null) {
			this.Parent=parent
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
