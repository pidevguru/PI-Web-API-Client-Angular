export class PWAPointLinks {
	public Attributes?: string;
	public DataServer?: string;
	public EndValue?: string;
	public InterpolatedData?: string;
	public PlotData?: string;
	public RecordedData?: string;
	public Self?: string;
	public SummaryData?: string;
	public Value?: string;
	constructor(attributes?: string, dataServer?: string, endValue?: string, interpolatedData?: string, plotData?: string, recordedData?: string, self?: string, summaryData?: string, value?: string) {
		if (attributes!=null) {
			this.Attributes=attributes
		}
		if (dataServer!=null) {
			this.DataServer=dataServer
		}
		if (endValue!=null) {
			this.EndValue=endValue
		}
		if (interpolatedData!=null) {
			this.InterpolatedData=interpolatedData
		}
		if (plotData!=null) {
			this.PlotData=plotData
		}
		if (recordedData!=null) {
			this.RecordedData=recordedData
		}
		if (self!=null) {
			this.Self=self
		}
		if (summaryData!=null) {
			this.SummaryData=summaryData
		}
		if (value!=null) {
			this.Value=value
		}
	}
}
