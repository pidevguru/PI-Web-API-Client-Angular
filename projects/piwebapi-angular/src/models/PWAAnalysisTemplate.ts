import { PWAAnalysisTemplateLinks, PWAWebException } from './models';

export class PWAAnalysisTemplate {
	public AnalysisRulePlugInName?: string;
	public CategoryNames?: Array<string>;
	public CreateEnabled?: boolean;
	public Description?: string;
	public GroupId?: number;
	public HasNotificationTemplate?: boolean;
	public HasTarget?: boolean;
	public Id?: string;
	public Links?: PWAAnalysisTemplateLinks;
	public Name?: string;
	public OutputTime?: string;
	public Path?: string;
	public TargetName?: string;
	public TimeRulePlugInName?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(analysisRulePlugInName?: string, categoryNames?: Array<string>, createEnabled?: boolean, description?: string, groupId?: number, hasNotificationTemplate?: boolean, hasTarget?: boolean, id?: string, links?: PWAAnalysisTemplateLinks, name?: string, outputTime?: string, path?: string, targetName?: string, timeRulePlugInName?: string, webException?: PWAWebException, webId?: string) {
		if (analysisRulePlugInName!=null) {
			this.AnalysisRulePlugInName=analysisRulePlugInName
		}
		if (categoryNames!=null) {
			this.CategoryNames=categoryNames
		}
		if (createEnabled!=null) {
			this.CreateEnabled=createEnabled
		}
		if (description!=null) {
			this.Description=description
		}
		if (groupId!=null) {
			this.GroupId=groupId
		}
		if (hasNotificationTemplate!=null) {
			this.HasNotificationTemplate=hasNotificationTemplate
		}
		if (hasTarget!=null) {
			this.HasTarget=hasTarget
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
		if (outputTime!=null) {
			this.OutputTime=outputTime
		}
		if (path!=null) {
			this.Path=path
		}
		if (targetName!=null) {
			this.TargetName=targetName
		}
		if (timeRulePlugInName!=null) {
			this.TimeRulePlugInName=timeRulePlugInName
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
