import { WebIdError} from './WebIdError';
import { PWAAnalysis, PWAAnalysisCategory, PWAAnalysisRule, PWAAnalysisRulePlugIn, PWAAnalysisTemplate, PWAAssetDatabase, PWAAssetServer, PWAAttribute, PWAAttributeCategory, PWAAttributeTemplate, PWADataServer, PWAElement, PWAElementCategory, PWAElementTemplate, PWAEnumerationSet, PWAEnumerationValue, PWAEventFrame, PWAPoint, PWASecurityIdentity, PWASecurityMapping, PWATable, PWATableCategory, PWATimeRule, PWATimeRulePlugIn, PWAUnit, PWAUnitClass } from '../models/models';

export class WebIdGenerator {        
		public generateWebIdByPath(path : string, type: string, ownerType: string) : string
        {
            this.validateTypeAndOwnerType(type, ownerType);
            let marker : string = this.getMarker(type);
            let ownerMarker : string = this.getOwnerMarker(ownerType);

            if (path.substring(0, 2) == "\\\\")
            {
                path = path.substring(2);
            }
            let encodedPath : string = this.encodeString(path.toUpperCase());
			return ("P1"  + marker +  ownerMarker + encodedPath);
		}
		
		private validateTypeAndOwnerType(type : string, ownerType : string)
        {
            if (type == PWAAttribute.name)
            {
                if ((ownerType != PWAElement.name) && (ownerType != PWAEventFrame.name))
                {
                    throw new WebIdError("PIAttribte owner type must be a PIElement or a PIEventFrame.");
                }
            }
            else if (type == PWAAttributeTemplate.name)
            {
                if ((ownerType != PWAElementTemplate.name))
                {
                    throw new WebIdError("PIElementTemplate owner type must be a PIElementTemplate.");
                }
            }
            else if ((type == PWAEnumerationSet.name) || (type == PWAEnumerationValue.name))
            {
                if ((ownerType != PWADataServer.name) && (ownerType != PWAAssetServer.name))
                {
                    throw new WebIdError("PIEnumerationSet and  PIEnumerationValue owner type must be a PIDataServer or PIAssetServer.");
                }
            }
            else if (type == PWATimeRule.name)
            {
                if ((ownerType != PWAAnalysis.name) && (ownerType != PWAAnalysisTemplate.name))
                {
                    throw new WebIdError("PITimeRule owner type must be a PIAnalysis and PIAnalysisTemplate.");
                }
            }
        }

        private getOwnerMarker(ownerType: string) : string
        {
            let markerOwner = "";
            if (ownerType == null)
            {
                return markerOwner;
            }

            if (ownerType == PWAAssetServer.name)
            {
                markerOwner = "R";
            }
            else if (ownerType == PWADataServer.name)
            {
                markerOwner = "D";
            }
            else if (ownerType == PWAAnalysis.name)
            {
                markerOwner = "X";
            }
            else if (ownerType == PWAAnalysisTemplate.name)
            {
                markerOwner = "T";
            }
            else if (ownerType == PWAElement.name)
            {
                markerOwner = "E";
            }
            if (ownerType == PWAElementTemplate.name)
            {
                markerOwner = "E";
            }
            else if (ownerType == PWAEventFrame.name)
            {
                markerOwner = "F";
            }
            return markerOwner;
        }

        private getMarker( type:string) : string
        {
            let marker = "";
            if (type == PWAAnalysis.name)
            {
                marker = "Xs";
            }
            else if (type == PWAAnalysisCategory.name)
            {
                marker = "XC";
            }
            else if (type == PWAAnalysisTemplate.name)
            {
                marker = "XT";
            }
            else if (type == PWAAnalysisRule.name)
            {
                marker = "XR";
            }
            else if (type == PWAAnalysisRulePlugIn.name)
            {
                marker = "XP";
            }
            else if (type == PWAAttribute.name)
            {
                marker = "Ab";
            }
            else if (type == PWAAttributeCategory.name)
            {
                marker = "AC";
            }
            else if (type == PWAAttributeTemplate.name)
            {
                marker = "AT";
            }
            else if (type == PWAAssetDatabase.name)
            {
                marker = "RD";
            }
            else if (type == PWAAssetServer.name)
            {
                marker = "RS";
            }
            else if (type == PWAElement.name)
            {
                marker = "Em";
            }
            else if (type == PWAElementCategory.name)
            {
                marker = "EC";
            }
            else if (type == PWAElementTemplate.name)
            {
                marker = "ET";
            }
            else if (type == PWAEnumerationSet.name)
            {
                marker = "MS";
            }
            else if (type == PWAEnumerationValue.name)
            {
                marker = "MV";
            }
            else if (type == PWAEventFrame.name)
            {
                marker = "Fm";
            }
            else if (type == PWATimeRule.name)
            {
                marker = "TR";
            }
            else if (type == PWATimeRulePlugIn.name)
            {
                marker = "TP";
            }
            else if (type == PWASecurityIdentity.name)
            {
                marker = "SI";
            }
            else if (type == PWASecurityMapping.name)
            {
                marker = "SM";
            }
            else if (type == PWATable.name)
            {
                marker = "Bl";
            }
            else if (type == PWATableCategory.name)
            {
                marker = "BC";
            }
            else if (type == PWAPoint.name)
            {
                marker = "DP";
            }
            else if (type == PWADataServer.name)
            {
                marker = "DS";
            }
            else if (type == PWAUnit.name)
            {
                marker = "Ut";
            }
            else if (type == PWAUnitClass.name)
            {
                marker = "UC";
            }
            if (!marker)
            {
                throw new WebIdError("Invalid object type.");
            }
            return marker;
        }

        private encodeString(value: string) : string 
        {
            var count = 0;
            var encodedValue = btoa(value.toUpperCase());
            encodedValue = encodedValue.replace('+', '-').replace('/', '_');
            for (var i = (encodedValue.length - 1); i > 0; i--) {
                if (encodedValue[i] == "=") {
                    count++;
                }
                else {
                    break;
                }
            }
            if (count > 0)
            {
                encodedValue = encodedValue.slice(0, -count);
            }
            return encodedValue;
        }
	}

