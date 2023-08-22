import { PWAAnalysisLinks, PWAWebException } from './models';

export class PWAAnalysis {
	public AnalysisRulePlugInName?: string;
	public AutoCreated?: boolean;
	public CategoryNames?: Array<string>;
	public Description?: string;
	public GroupId?: number;
	public HasNotification?: boolean;
	public HasTarget?: boolean;
	public HasTemplate?: boolean;
	public Id?: string;
	public IsConfigured?: boolean;
	public IsTimeRuleDefinedByTemplate?: boolean;
	public Links?: PWAAnalysisLinks;
	public MaximumQueueSize?: number;
	public Name?: string;
	public OutputTime?: string;
	public Path?: string;
	public Priority?: string;
	public PublishResults?: boolean;
	public Status?: string;
	public TargetWebId?: string;
	public TemplateName?: string;
	public TimeRulePlugInName?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(analysisRulePlugInName?: string, autoCreated?: boolean, categoryNames?: Array<string>, description?: string, groupId?: number, hasNotification?: boolean, hasTarget?: boolean, hasTemplate?: boolean, id?: string, isConfigured?: boolean, isTimeRuleDefinedByTemplate?: boolean, links?: PWAAnalysisLinks, maximumQueueSize?: number, name?: string, outputTime?: string, path?: string, priority?: string, publishResults?: boolean, status?: string, targetWebId?: string, templateName?: string, timeRulePlugInName?: string, webException?: PWAWebException, webId?: string) {
		if (analysisRulePlugInName!=null) {
			this.AnalysisRulePlugInName=analysisRulePlugInName
		}
		if (autoCreated!=null) {
			this.AutoCreated=autoCreated
		}
		if (categoryNames!=null) {
			this.CategoryNames=categoryNames
		}
		if (description!=null) {
			this.Description=description
		}
		if (groupId!=null) {
			this.GroupId=groupId
		}
		if (hasNotification!=null) {
			this.HasNotification=hasNotification
		}
		if (hasTarget!=null) {
			this.HasTarget=hasTarget
		}
		if (hasTemplate!=null) {
			this.HasTemplate=hasTemplate
		}
		if (id!=null) {
			this.Id=id
		}
		if (isConfigured!=null) {
			this.IsConfigured=isConfigured
		}
		if (isTimeRuleDefinedByTemplate!=null) {
			this.IsTimeRuleDefinedByTemplate=isTimeRuleDefinedByTemplate
		}
		if (links!=null) {
			this.Links=links
		}
		if (maximumQueueSize!=null) {
			this.MaximumQueueSize=maximumQueueSize
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
		if (priority!=null) {
			this.Priority=priority
		}
		if (publishResults!=null) {
			this.PublishResults=publishResults
		}
		if (status!=null) {
			this.Status=status
		}
		if (targetWebId!=null) {
			this.TargetWebId=targetWebId
		}
		if (templateName!=null) {
			this.TemplateName=templateName
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
