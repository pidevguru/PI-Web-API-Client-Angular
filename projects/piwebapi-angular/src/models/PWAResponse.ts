export class PWAResponse {
	public Content?: any;
	public Headers?: { [key: string]: string; };
	public Status?: number;
	constructor(content?: any, headers?: { [key: string]: string; }, status?: number) {
		if (content!=null) {
			this.Content=content
		}
		if (headers!=null) {
			this.Headers=headers
		}
		if (status!=null) {
			this.Status=status
		}
	}
}
