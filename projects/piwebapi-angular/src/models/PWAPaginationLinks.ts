export class PWAPaginationLinks {
	public First?: string;
	public Last?: string;
	public Next?: string;
	public Previous?: string;
	constructor(first?: string, last?: string, next?: string, previous?: string) {
		if (first!=null) {
			this.First=first
		}
		if (last!=null) {
			this.Last=last
		}
		if (next!=null) {
			this.Next=next
		}
		if (previous!=null) {
			this.Previous=previous
		}
	}
}
