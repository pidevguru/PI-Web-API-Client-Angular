import { PWAAnalysisRuleLinks, PWAWebException } from './models';

export class PWAAnalysisRule {
	public ConfigString?: string;
	public Description?: string;
	public DisplayString?: string;
	public EditorType?: string;
	public HasChildren?: boolean;
	public Id?: string;
	public IsConfigured?: boolean;
	public IsInitializing?: boolean;
	public Links?: PWAAnalysisRuleLinks;
	public Name?: string;
	public Path?: string;
	public PlugInName?: string;
	public SupportedBehaviors?: Array<string>;
	public VariableMapping?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(configString?: string, description?: string, displayString?: string, editorType?: string, hasChildren?: boolean, id?: string, isConfigured?: boolean, isInitializing?: boolean, links?: PWAAnalysisRuleLinks, name?: string, path?: string, plugInName?: string, supportedBehaviors?: Array<string>, variableMapping?: string, webException?: PWAWebException, webId?: string) {
		if (configString!=null) {
			this.ConfigString=configString
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
		if (hasChildren!=null) {
			this.HasChildren=hasChildren
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
		if (name!=null) {
			this.Name=name
		}
		if (path!=null) {
			this.Path=path
		}
		if (plugInName!=null) {
			this.PlugInName=plugInName
		}
		if (supportedBehaviors!=null) {
			this.SupportedBehaviors=supportedBehaviors
		}
		if (variableMapping!=null) {
			this.VariableMapping=variableMapping
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
