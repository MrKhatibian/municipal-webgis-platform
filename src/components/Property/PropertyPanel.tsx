import Graphic from '@arcgis/core/Graphic';

interface PropertyPanelProps{
    visible?: boolean;
    property: Graphic | null;
}

export default function PropertyPanel({
    visible = false, property
}: PropertyPanelProps) {
    if (!visible) {
        return null;
    }

    if (!property) {
        return null;
    }
    console.log(property.attributes);
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
                >
                    ×
                </button>
            </div>

            <div className="property-panel-body">
                <div className="property-item">
                    <span>کد نوسازی</span>
                    <strong>
                        {attributes.Code_nosazi ?? '-'}
                    </strong>
                </div>

                <div className="property-item">
                    <span>کاربری</span>
                    <strong>
                        {attributes.karbari ?? '-'}
                    </strong>
                </div>

                <div className="property-item">
                    <span>قیمت پایه</span>
                    <strong>
                        {attributes.PriseBase ?? '-'}
                    </strong>
                </div>
            </div>
        </div>
    );
}

    