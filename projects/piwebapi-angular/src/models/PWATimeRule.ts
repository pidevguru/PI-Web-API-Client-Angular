import { PWATimeRuleLinks, PWAWebException } from './models';

export class PWATimeRule {
	public ConfigString?: string;
	public ConfigStringStored?: string;
	public Description?: string;
	public DisplayString?: string;
	public EditorType?: string;
	public Id?: string;
	public IsConfigured?: boolean;
	public IsInitializing?: boolean;
	public Links?: PWATimeRuleLinks;
	public MergeDuplicatedItems?: boolean;
	public Name?: string;
	public Path?: string;
	public PlugInName?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(configString?: string, configStringStored?: string, description?: string, displayString?: string, editorType?: string, id?: string, isConfigured?: boolean, isInitializing?: boolean, links?: PWATimeRuleLinks, mergeDuplicatedItems?: boolean, name?: string, path?: string, plugInName?: string, webException?: PWAWebException, webId?: string) {
		if (configString!=null) {
			this.ConfigString=configString
		}
		if (configStringStored!=null) {
			this.ConfigStringStored=configStringStored
		}
		if (description!=null) {
			this.Description=description
		}
		if (displayString!=null) {
			this.DisplayString=displayString
		}
		if (editorType!=null) {
			this.EditorType=editorType
		}
		if (id!=null) {
			this.Id=id
		}
		if (isConfigured!=null) {
			this.IsConfigured=isConfigured
		}
		if (isInitializing!=null) {
			this.IsInitializing=isInitializing
		}
		if (links!=null) {
			this.Links=links
		}
		if (mergeDuplicatedItems!=null) {
			this.MergeDuplicatedItems=mergeDuplicatedItems
		}
		if (name!=null) {
			this.Name=name
		}
		if (path!=null) {
			this.Path=path
		}
		if (plugInName!=null) {
			this.PlugInName=plugInName
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
