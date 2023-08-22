import { PWADataServerLinks, PWAWebException } from './models';

export class PWADataServer {
	public Id?: string;
	public IsConnected?: boolean;
	public Links?: PWADataServerLinks;
	public Name?: string;
	public Path?: string;
	public ServerTime?: string;
	public ServerVersion?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(id?: string, isConnected?: boolean, links?: PWADataServerLinks, name?: string, path?: string, serverTime?: string, serverVersion?: string, webException?: PWAWebException, webId?: string) {
		if (id!=null) {
			this.Id=id
		}
		if (isConnected!=null) {
			this.IsConnected=isConnected
		}
		if (links!=null) {
			this.Links=links
		}
		if (name!=null) {
			this.Name=name
		}
		if (path!=null) {
			this.Path=path
		}
		if (serverTime!=null) {
			this.ServerTime=serverTime
		}
		if (serverVersion!=null) {
			this.ServerVersion=serverVersion
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
