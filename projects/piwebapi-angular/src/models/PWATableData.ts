import { PWAWebException } from './models';

export class PWATableData {
	public Columns?: { [key: string]: string; };
	public Rows?: Array<{ [key: string]: any; }>;
	public WebException?: PWAWebException;
	constructor(columns?: { [key: string]: string; }, rows?: Array<{ [key: string]: any; }>, webException?: PWAWebException) {
		if (columns!=null) {
			this.Columns=columns
		}
		if (rows!=null) {
			this.Rows=rows
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
