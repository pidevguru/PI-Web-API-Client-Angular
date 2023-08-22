import { PWAValue, PWAAssetServerLinks, PWAWebException } from './models';

export class PWAAssetServer {
	public Description?: string;
	public ExtendedProperties?: { [key: string]: PWAValue; };
	public Id?: string;
	public IsConnected?: boolean;
	public Links?: PWAAssetServerLinks;
	public Name?: string;
	public Path?: string;
	public ServerTime?: string;
	public ServerVersion?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(description?: string, extendedProperties?: { [key: string]: PWAValue; }, id?: string, isConnected?: boolean, links?: PWAAssetServerLinks, name?: string, path?: string, serverTime?: string, serverVersion?: string, webException?: PWAWebException, webId?: string) {
		if (description!=null) {
			this.Description=description
		}
		if (extendedProperties!=null) {
			this.ExtendedProperties=extendedProperties
		}
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
