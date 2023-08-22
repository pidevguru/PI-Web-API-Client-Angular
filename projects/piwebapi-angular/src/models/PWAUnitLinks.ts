export class PWAUnitLinks {
	public Class?: string;
	public ReferenceUnit?: string;
	public Self?: string;
	constructor(classValue?: string, referenceUnit?: string, self?: string) {
		if (classValue!=null) {
			this.Class=classValue
		}
		if (referenceUnit!=null) {
			this.ReferenceUnit=referenceUnit
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
