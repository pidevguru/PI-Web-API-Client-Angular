export class PWAPropertyError {
	public FieldName?: string;
	public Message?: Array<string>;
	constructor(fieldName?: string, message?: Array<string>) {
		if (fieldName!=null) {
			this.FieldName=fieldName
		}
		if (message!=null) {
			this.Message=message
		}
	}
}
