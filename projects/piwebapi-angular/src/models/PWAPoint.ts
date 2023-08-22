import { PWAPointLinks, PWAWebException } from './models';

export class PWAPoint {
	public Descriptor?: string;
	public DigitalSetName?: string;
	public DisplayDigits?: number;
	public EngineeringUnits?: string;
	public Future?: boolean;
	public Id?: number;
	public Links?: PWAPointLinks;
	public Name?: string;
	public Path?: string;
	public PointClass?: string;
	public PointType?: string;
	public Span?: number;
	public Step?: boolean;
	public WebException?: PWAWebException;
	public WebId?: string;
	public Zero?: number;
	constructor(descriptor?: string, digitalSetName?: string, displayDigits?: number, engineeringUnits?: string, future?: boolean, id?: number, links?: PWAPointLinks, name?: string, path?: string, pointClass?: string, pointType?: string, span?: number, step?: boolean, webException?: PWAWebException, webId?: string, zero?: number) {
		if (descriptor!=null) {
			this.Descriptor=descriptor
		}
		if (digitalSetName!=null) {
			this.DigitalSetName=digitalSetName
		}
		if (displayDigits!=null) {
			this.DisplayDigits=displayDigits
		}
		if (engineeringUnits!=null) {
			this.EngineeringUnits=engineeringUnits
		}
		if (future!=null) {
			this.Future=future
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
		if (path!=null) {
			this.Path=path
		}
		if (pointClass!=null) {
			this.PointClass=pointClass
		}
		if (pointType!=null) {
			this.PointType=pointType
		}
		if (span!=null) {
			this.Span=span
		}
		if (step!=null) {
			this.Step=step
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
		if (zero!=null) {
			this.Zero=zero
		}
	}
}
