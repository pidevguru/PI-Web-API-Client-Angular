import { PWANotificationContactTemplateLinks, PWAWebException } from './models';

export class PWANotificationContactTemplate {
	public Available?: boolean;
	public ConfigString?: string;
	public ContactType?: string;
	public Description?: string;
	public EscalationTimeout?: string;
	public HasChildren?: boolean;
	public Id?: string;
	public Links?: PWANotificationContactTemplateLinks;
	public MaximumRetries?: number;
	public MinimumAcknowledgements?: number;
	public Name?: string;
	public NotifyWhenInstanceEnded?: boolean;
	public Path?: string;
	public PlugInName?: string;
	public RetryInterval?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(available?: boolean, configString?: string, contactType?: string, description?: string, escalationTimeout?: string, hasChildren?: boolean, id?: string, links?: PWANotificationContactTemplateLinks, maximumRetries?: number, minimumAcknowledgements?: number, name?: string, notifyWhenInstanceEnded?: boolean, path?: string, plugInName?: string, retryInterval?: string, webException?: PWAWebException, webId?: string) {
		if (available!=null) {
			this.Available=available
		}
		if (configString!=null) {
			this.ConfigString=configString
		}
		if (contactType!=null) {
			this.ContactType=contactType
		}
		if (description!=null) {
			this.Description=description
		}
		if (escalationTimeout!=null) {
			this.EscalationTimeout=escalationTimeout
		}
		if (hasChildren!=null) {
			this.HasChildren=hasChildren
		}
		if (id!=null) {
			this.Id=id
		}
		if (links!=null) {
			this.Links=links
		}
		if (maximumRetries!=null) {
			this.MaximumRetries=maximumRetries
		}
		if (minimumAcknowledgements!=null) {
			this.MinimumAcknowledgements=minimumAcknowledgements
		}
		if (name!=null) {
			this.Name=name
		}
		if (notifyWhenInstanceEnded!=null) {
			this.NotifyWhenInstanceEnded=notifyWhenInstanceEnded
		}
		if (path!=null) {
			this.Path=path
		}
		if (plugInName!=null) {
			this.PlugInName=plugInName
		}
		if (retryInterval!=null) {
			this.RetryInterval=retryInterval
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
