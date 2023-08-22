import { PWAWebException } from './models';

export class PWANotificationRuleTemplate {
	public CategoryNames?: Array<string>;
	public Criteria?: string;
	public Description?: string;
	public Id?: string;
	public MultiTriggerEventOption?: string;
	public Name?: string;
	public NonrepetitionInterval?: string;
	public Path?: string;
	public ResendInterval?: string;
	public Status?: string;
	public TemplateName?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(categoryNames?: Array<string>, criteria?: string, description?: string, id?: string, multiTriggerEventOption?: string, name?: string, nonrepetitionInterval?: string, path?: string, resendInterval?: string, status?: string, templateName?: string, webException?: PWAWebException, webId?: string) {
		if (categoryNames!=null) {
			this.CategoryNames=categoryNames
		}
		if (criteria!=null) {
			this.Criteria=criteria
		}
		if (description!=null) {
			this.Description=description
		}
		if (id!=null) {
			this.Id=id
		}
		if (multiTriggerEventOption!=null) {
			this.MultiTriggerEventOption=multiTriggerEventOption
		}
		if (name!=null) {
			this.Name=name
		}
		if (nonrepetitionInterval!=null) {
			this.NonrepetitionInterval=nonrepetitionInterval
		}
		if (path!=null) {
			this.Path=path
		}
		if (resendInterval!=null) {
			this.ResendInterval=resendInterval
		}
		if (status!=null) {
			this.Status=status
		}
		if (templateName!=null) {
			this.TemplateName=templateName
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
