import { PWAErrors } from './models';

export class PWAStreamUpdatesRegister {
	public Exception?: PWAErrors;
	public LatestMarker?: string;
	public Source?: string;
	public SourceName?: string;
	public SourcePath?: string;
	public Status?: string;
	constructor(exception?: PWAErrors, latestMarker?: string, source?: string, sourceName?: string, sourcePath?: string, status?: string) {
		if (exception!=null) {
			this.Exception=exception
		}
		if (latestMarker!=null) {
			this.LatestMarker=latestMarker
		}
		if (source!=null) {
			this.Source=source
		}
		if (sourceName!=null) {
			this.SourceName=sourceName
		}
		if (sourcePath!=null) {
			this.SourcePath=sourcePath
		}
		if (status!=null) {
			this.Status=status
		}
	}
}
