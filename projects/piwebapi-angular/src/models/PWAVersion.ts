import { PWAWebException } from './models';

export class PWAVersion {
	public Build?: string;
	public FullVersion?: string;
	public MajorMinorRevision?: string;
	public WebException?: PWAWebException;
	constructor(build?: string, fullVersion?: string, majorMinorRevision?: string, webException?: PWAWebException) {
		if (build!=null) {
			this.Build=build
		}
		if (fullVersion!=null) {
			this.FullVersion=fullVersion
		}
		if (majorMinorRevision!=null) {
			this.MajorMinorRevision=majorMinorRevision
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
