# Features

## Interactive Map

The application provides an interactive ArcGIS map as the main workspace of the municipal WebGIS.

## Municipal GIS Layers

The current application is designed around municipal GIS services and supports layers such as:

- `عرصه` — Parcel / land information
- `معبر` — Roads / streets
- `محدوده شهر` — Municipal boundary

Additional municipal layers can be added through configuration.

## Layer List

The ArcGIS Layer List allows users to:

- View available layers
- Turn layers on or off
- Inspect the layer structure
- Filter layers

## Layer Legend

The map interface provides a legend for interpreting the symbology of visible GIS layers.

## Property Identification

Users can select a property feature on the map and access its GIS information.

Important current attributes include:

- `Code_nosazi` — Renovation code
- `KarbariM` — Land-use / property use
- `OBJECTID` — GIS object identifier

## Property Search

The property workflow is centered around the municipal renovation code:

```text
Code_nosazi
```

The intended workflow is:

```text
Enter renovation code
        ↓
Find matching property
        ↓
Zoom to property
        ↓
Highlight property
        ↓
Display property information
```

## Basemap

The application supports a custom satellite imagery basemap served through ArcGIS ImageServer and supports switching between available basemaps.

## Map Navigation

Current map tools include:

- Home
- Zoom
- Scale bar
- Basemap switching
- Layer management

## Responsive UI

Bootstrap 5 is used for a responsive interface targeting:

- Desktop
- Tablet
- Mobile

The interface is configured as an RTL Persian application.

## Notifications and Error Handling

The application provides reusable notifications for:

- Success
- Error
- Warning
- Information

Repeated identical notifications can be grouped to avoid flooding the interface.

## ArcGIS Server Integration

The frontend consumes:

- FeatureServer
- MapServer
- ImageServer

In production these services are accessed through an IIS reverse proxy.

## Environment-based Configuration

GIS service URLs are managed through environment configuration rather than being spread across React components.

This also provides a foundation for future multi-municipality deployment.

## Current Scope

The `v0.1.0` MVP focuses on:

```text
Map
  +
Municipal Layers
  +
Layer Management
  +
Property Identification
  +
Property Information
  +
Search
  +
Basemap
  +
Deployment
```

Advanced GIS analysis, backend APIs, authentication, reporting, and multi-municipality runtime configuration are planned for future releases.
