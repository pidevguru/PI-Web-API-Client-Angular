import { PWAPropertyError, PWAWebException } from './models';

export class PWAStreamAnnotation {
	public CreationDate?: string;
	public Creator?: string;
	public Description?: string;
	public Errors?: Array<PWAPropertyError>;
	public Id?: string;
	public Modifier?: string;
	public ModifyDate?: string;
	public Name?: string;
	public Value?: any;
	public WebException?: PWAWebException;
	constructor(creationDate?: string, creator?: string, description?: string, errors?: Array<PWAPropertyError>, id?: string, modifier?: string, modifyDate?: string, name?: string, value?: any, webException?: PWAWebException) {
		if (creationDate!=null) {
			this.CreationDate=creationDate
		}
		if (creator!=null) {
			this.Creator=creator
		}
		if (description!=null) {
			this.Description=description
		}
		if (errors!=null) {
			this.Errors=errors
		}
		if (id!=null) {
			this.Id=id
		}
		if (modifier!=null) {
			this.Modifier=modifier
		}
		if (modifyDate!=null) {
			this.ModifyDate=modifyDate
		}
		if (name!=null) {
			this.Name=name
		}
		if (value!=null) {
			this.Value=value
		}
		if (webException!=null) {
			this.WebException=webException
		}
	}
}
