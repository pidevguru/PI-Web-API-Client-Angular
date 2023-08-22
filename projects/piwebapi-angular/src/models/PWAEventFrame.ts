import { PWAValue, PWAEventFrameLinks, PWASecurity, PWAWebException } from './models';

export class PWAEventFrame {
	public AcknowledgedBy?: string;
	public AcknowledgedDate?: string;
	public AreValuesCaptured?: boolean;
	public CanBeAcknowledged?: boolean;
	public CategoryNames?: Array<string>;
	public Description?: string;
	public EndTime?: string;
	public ExtendedProperties?: { [key: string]: PWAValue; };
	public HasChildren?: boolean;
	public Id?: string;
	public IsAcknowledged?: boolean;
	public IsAnnotated?: boolean;
	public IsLocked?: boolean;
	public Links?: PWAEventFrameLinks;
	public Name?: string;
	public Path?: string;
	public RefElementWebIds?: Array<string>;
	public Security?: PWASecurity;
	public Severity?: string;
	public StartTime?: string;
	public TemplateName?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(acknowledgedBy?: string, acknowledgedDate?: string, areValuesCaptured?: boolean, canBeAcknowledged?: boolean, categoryNames?: Array<string>, description?: string, endTime?: string, extendedProperties?: { [key: string]: PWAValue; }, hasChildren?: boolean, id?: string, isAcknowledged?: boolean, isAnnotated?: boolean, isLocked?: boolean, links?: PWAEventFrameLinks, name?: string, path?: string, refElementWebIds?: Array<string>, security?: PWASecurity, severity?: string, startTime?: string, templateName?: string, webException?: PWAWebException, webId?: string) {
		if (acknowledgedBy!=null) {
			this.AcknowledgedBy=acknowledgedBy
		}
		if (acknowledgedDate!=null) {
			this.AcknowledgedDate=acknowledgedDate
		}
		if (areValuesCaptured!=null) {
			this.AreValuesCaptured=areValuesCaptured
		}
		if (canBeAcknowledged!=null) {
			this.CanBeAcknowledged=canBeAcknowledged
		}
		if (categoryNames!=null) {
			this.CategoryNames=categoryNames
		}
		if (description!=null) {
			this.Description=description
		}
		if (endTime!=null) {
			this.EndTime=endTime
		}
		if (extendedProperties!=null) {
			this.ExtendedProperties=extendedProperties
		}
		if (hasChildren!=null) {
			this.HasChildren=hasChildren
		}
		if (id!=null) {
			this.Id=id
		}
		if (isAcknowledged!=null) {
			this.IsAcknowledged=isAcknowledged
		}
		if (isAnnotated!=null) {
			this.IsAnnotated=isAnnotated
		}
		if (isLocked!=null) {
			this.IsLocked=isLocked
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
		if (refElementWebIds!=null) {
			this.RefElementWebIds=refElementWebIds
		}
		if (security!=null) {
			this.Security=security
		}
		if (severity!=null) {
			this.Severity=severity
		}
		if (startTime!=null) {
			this.StartTime=startTime
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
