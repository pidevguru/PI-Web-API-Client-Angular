import { PWADataPipeEvent, PWAErrors } from './models';

export class PWAStreamUpdatesRetrieve {
	public Events?: Array<PWADataPipeEvent>;
	public Exception?: PWAErrors;
	public LatestMarker?: string;
	public RequestedMarker?: string;
	public Source?: string;
	public SourceName?: string;
	public SourcePath?: string;
	public Status?: string;
	constructor(events?: Array<PWADataPipeEvent>, exception?: PWAErrors, latestMarker?: string, requestedMarker?: string, source?: string, sourceName?: string, sourcePath?: string, status?: string) {
		if (events!=null) {
			this.Events=events
		}
		if (exception!=null) {
			this.Exception=exception
		}
		if (latestMarker!=null) {
			this.LatestMarker=latestMarker
		}
		if (requestedMarker!=null) {
			this.RequestedMarker=requestedMarker
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
