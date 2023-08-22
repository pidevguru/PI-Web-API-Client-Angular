import { PWAEnumerationValueLinks, PWAWebException } from './models';

export class PWAEnumerationValue {
	public Description?: string;
	public Id?: string;
	public Links?: PWAEnumerationValueLinks;
	public Name?: string;
	public Parent?: string;
	public Path?: string;
	public SerializeDescription?: boolean;
	public SerializeId?: boolean;
	public SerializeLinks?: boolean;
	public SerializePath?: boolean;
	public SerializeWebId?: boolean;
	public Value?: number;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(description?: string, id?: string, links?: PWAEnumerationValueLinks, name?: string, parent?: string, path?: string, serializeDescription?: boolean, serializeId?: boolean, serializeLinks?: boolean, serializePath?: boolean, serializeWebId?: boolean, value?: number, webException?: PWAWebException, webId?: string) {
		if (description!=null) {
			this.Description=description
		}
		if (id!=null) {
			this.Id=id
		}
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (parent!=null) {
			this.Parent=parent
		}
		if (path!=null) {
			this.Path=path
		}
		if (serializeDescription!=null) {
			this.SerializeDescription=serializeDescription
		}
		if (serializeId!=null) {
			this.SerializeId=serializeId
		}
		if (serializeLinks!=null) {
			this.SerializeLinks=serializeLinks
		}
		if (serializePath!=null) {
			this.SerializePath=serializePath
		}
		if (serializeWebId!=null) {
			this.SerializeWebId=serializeWebId
		}
		if (value!=null) {
			this.Value=value
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
