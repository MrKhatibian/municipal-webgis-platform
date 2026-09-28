import Graphic from '@arcgis/core/Graphic';
import { mapConfig } from '../../config/mapConfig';
interface PropertyPanelProps{
    visible?: boolean;
    property: Graphic | null;
    onClose: () => void;
}

export default function PropertyPanel({
    //visible = false,
    property, onClose
}: PropertyPanelProps) {
    // if (!visible) {
    //     return null;
    // }    
    if (!property) {
        return null;
    }
    const attributes = property.attributes;
   
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
                    <span>کد نوسازی</span>
                    <strong>
                        {attributes[mapConfig.layers.arse.codeNosazi] ?? '-'}
                    </strong>
                </div>

                <div className="property-item">
                    <span>کاربری</span>
                    <strong>
                        {attributes[mapConfig.layers.arse.karbari] ?? '-'}
                    </strong>
                </div>
            </div>
        </div>
    );
}

    