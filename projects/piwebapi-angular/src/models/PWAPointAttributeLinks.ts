export class PWAPointAttributeLinks {
	public Point?: string;
	public Self?: string;
	constructor(point?: string, self?: string) {
		if (point!=null) {
			this.Point=point
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
