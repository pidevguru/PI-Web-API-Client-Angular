import { PWARequestTemplate } from './models';

export class PWARequest {
	public Content?: string;
	public Headers?: { [key: string]: string; };
	public Method?: string;
	public Parameters?: Array<string>;
	public ParentIds?: Array<string>;
	public RequestTemplate?: PWARequestTemplate;
	public Resource?: string;
	constructor(content?: string, headers?: { [key: string]: string; }, method?: string, parameters?: Array<string>, parentIds?: Array<string>, requestTemplate?: PWARequestTemplate, resource?: string) {
		if (content!=null) {
			this.Content=content
		}
		if (headers!=null) {
			this.Headers=headers
		}
		if (method!=null) {
			this.Method=method
		}
		if (parameters!=null) {
			this.Parameters=parameters
		}
		if (parentIds!=null) {
			this.ParentIds=parentIds
		}
		if (requestTemplate!=null) {
			this.RequestTemplate=requestTemplate
		}
		if (resource!=null) {
			this.Resource=resource
		}
	}
}
