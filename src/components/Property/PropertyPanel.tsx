import Graphic from '@arcgis/core/Graphic';
import { mapConfig } from '../../config/mapConfig';
interface PropertyPanelProps{
    visible?: boolean;
    property: Graphic | null;
    onClose: () => void;
}

export default function PropertyPanel({    
    property, onClose
}: PropertyPanelProps) {    
    if (!property) {
        return null;
    }
    const attributes = property.attributes;
    const arseConfig = mapConfig.layers.arse;
   
    return (
        <div className="property-panel">
            <div className="property-panel-header">
                <div>
                    <span>اطلاعات ملک</span>
                    <small>اطلاعات GIS عرصه</small>
                </div>

                <button
                    type="button"
                    className="property-panel-close"
                    aria-label="بستن"
                    onClick={onClose}
                >
                    ×
                </button>
            </div>

            <div className="property-panel-body">
                <div className="property-item">
                    <span>{arseConfig.fields.codeNosazi.title}</span>
                    <strong>
                        {attributes[arseConfig.fields.codeNosazi.name] ?? '-'}
                    </strong>
                </div>

                <div className="property-item">
                    <span>{arseConfig.fields.karbari.title}</span>
                    <strong>
                        {attributes[arseConfig.fields.karbari.name] ?? '-'}
                    </strong>
                </div>
            </div>
        </div>
    );
}

    