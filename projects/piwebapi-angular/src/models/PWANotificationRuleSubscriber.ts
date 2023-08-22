import { PWAWebException } from './models';

export class PWANotificationRuleSubscriber {
	public ConfigString?: string;
	public ContactTemplateName?: string;
	public ContactType?: string;
	public DeliveryFormatName?: string;
	public Description?: string;
	public EscalationTimeout?: string;
	public Id?: string;
	public MaximumRetries?: number;
	public Name?: string;
	public NotifyOption?: string;
	public Path?: string;
	public PlugInName?: string;
	public RetryInterval?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(configString?: string, contactTemplateName?: string, contactType?: string, deliveryFormatName?: string, description?: string, escalationTimeout?: string, id?: string, maximumRetries?: number, name?: string, notifyOption?: string, path?: string, plugInName?: string, retryInterval?: string, webException?: PWAWebException, webId?: string) {
		if (configString!=null) {
			this.ConfigString=configString
		}
		if (contactTemplateName!=null) {
			this.ContactTemplateName=contactTemplateName
		}
		if (contactType!=null) {
			this.ContactType=contactType
		}
		if (deliveryFormatName!=null) {
			this.DeliveryFormatName=deliveryFormatName
		}
		if (description!=null) {
			this.Description=description
		}
		if (escalationTimeout!=null) {
			this.EscalationTimeout=escalationTimeout
		}
		if (id!=null) {
			this.Id=id
		}
		if (maximumRetries!=null) {
			this.MaximumRetries=maximumRetries
		}
		if (name!=null) {
			this.Name=name
		}
		if (notifyOption!=null) {
			this.NotifyOption=notifyOption
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
