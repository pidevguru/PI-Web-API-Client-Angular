export class PWAAttributeTemplateLinks {
	public AttributeTemplates?: string;
	public Categories?: string;
	public ElementTemplate?: string;
	public Parent?: string;
	public Self?: string;
	public Trait?: string;
	constructor(attributeTemplates?: string, categories?: string, elementTemplate?: string, parent?: string, self?: string, trait?: string) {
		if (attributeTemplates!=null) {
			this.AttributeTemplates=attributeTemplates
		}
		if (categories!=null) {
			this.Categories=categories
		}
		if (elementTemplate!=null) {
			this.ElementTemplate=elementTemplate
		}
		if (parent!=null) {
			this.Parent=parent
		}
		if (self!=null) {
			this.Self=self
		}
		if (trait!=null) {
			this.Trait=trait
		}
	}
}
