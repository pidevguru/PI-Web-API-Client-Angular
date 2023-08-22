import { PWAAnalysisRulePlugInLinks, PWAWebException } from './models';

export class PWAAnalysisRulePlugIn {
	public AssemblyFileName?: string;
	public AssemblyID?: string;
	public AssemblyLoadProperties?: Array<string>;
	public AssemblyTime?: string;
	public CompatibilityVersion?: number;
	public Description?: string;
	public Id?: string;
	public IsBrowsable?: boolean;
	public IsNonEditableConfig?: boolean;
	public Links?: PWAAnalysisRulePlugInLinks;
	public LoadedAssemblyTime?: string;
	public LoadedVersion?: string;
	public Name?: string;
	public Path?: string;
	public Version?: string;
	public WebException?: PWAWebException;
	public WebId?: string;
	constructor(assemblyFileName?: string, assemblyID?: string, assemblyLoadProperties?: Array<string>, assemblyTime?: string, compatibilityVersion?: number, description?: string, id?: string, isBrowsable?: boolean, isNonEditableConfig?: boolean, links?: PWAAnalysisRulePlugInLinks, loadedAssemblyTime?: string, loadedVersion?: string, name?: string, path?: string, version?: string, webException?: PWAWebException, webId?: string) {
		if (assemblyFileName!=null) {
			this.AssemblyFileName=assemblyFileName
		}
		if (assemblyID!=null) {
			this.AssemblyID=assemblyID
		}
		if (assemblyLoadProperties!=null) {
			this.AssemblyLoadProperties=assemblyLoadProperties
		}
		if (assemblyTime!=null) {
			this.AssemblyTime=assemblyTime
		}
		if (compatibilityVersion!=null) {
			this.CompatibilityVersion=compatibilityVersion
		}
		if (description!=null) {
			this.Description=description
		}
		if (id!=null) {
			this.Id=id
		}
		if (isBrowsable!=null) {
			this.IsBrowsable=isBrowsable
		}
		if (isNonEditableConfig!=null) {
			this.IsNonEditableConfig=isNonEditableConfig
		}
		if (links!=null) {
			this.Links=links
		}
		if (loadedAssemblyTime!=null) {
			this.LoadedAssemblyTime=loadedAssemblyTime
		}
		if (loadedVersion!=null) {
			this.LoadedVersion=loadedVersion
		}
		if (name!=null) {
			this.Name=name
		}
		if (path!=null) {
			this.Path=path
		}
		if (version!=null) {
			this.Version=version
		}
		if (webException!=null) {
			this.WebException=webException
		}
		if (webId!=null) {
			this.WebId=webId
		}
	}
}
