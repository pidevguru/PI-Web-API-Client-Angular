import { PWADataServerLicenseLinks, PWAWebException } from './models';

export class PWADataServerLicense {
	public AmountLeft?: string;
	public AmountUsed?: string;
	public Links?: PWADataServerLicenseLinks;
	public Name?: string;
	public TotalAmount?: string;
	public WebException?: PWAWebException;
	constructor(amountLeft?: string, amountUsed?: string, links?: PWADataServerLicenseLinks, name?: string, totalAmount?: string, webException?: PWAWebException) {
		if (amountLeft!=null) {
			this.AmountLeft=amountLeft
		}
		if (amountUsed!=null) {
			this.AmountUsed=amountUsed
		}
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (totalAmount!=null) {
			this.TotalAmount=totalAmount
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
