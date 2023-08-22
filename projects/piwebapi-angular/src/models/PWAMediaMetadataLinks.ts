export class PWAMediaMetadataLinks {
	public MediaData?: string;
	public Owner?: string;
	public Self?: string;
	constructor(mediaData?: string, owner?: string, self?: string) {
		if (mediaData!=null) {
			this.MediaData=mediaData
		}
		if (owner!=null) {
			this.Owner=owner
		}
		if (self!=null) {
			this.Self=self
		}
	}
}
