export class PWAAnnotationLinks {
	public MediaData?: string;
	public MediaMetadata?: string;
	public Owner?: string;
	public Self?: string;
	constructor(mediaData?: string, mediaMetadata?: string, owner?: string, self?: string) {
		if (mediaData!=null) {
			this.MediaData=mediaData
		}
		if (mediaMetadata!=null) {
			this.MediaMetadata=mediaMetadata
		}
		if (owner!=null) {
			this.Owner=owner
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
