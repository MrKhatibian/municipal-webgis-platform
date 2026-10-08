# Architecture Overview

## 1. Overview

Municipal WebGIS Platform is currently a frontend-focused WebGIS application built with React and TypeScript and connected to ArcGIS Server services.

IIS hosts the frontend and acts as a reverse proxy between the public web application and the internal ArcGIS Server.

```text
┌──────────────────────────────┐
│          Web Browser         │
│ React + TypeScript           │
│ Bootstrap 5                  │
│ ArcGIS Maps SDK              │
└──────────────┬───────────────┘
               │
               │ /arcgis/*
               ▼
┌──────────────────────────────┐
│            IIS               │
│ React Static Files           │
│ URL Rewrite / ARR            │
└──────────────┬───────────────┘
               │
               │ Reverse Proxy
               ▼
┌──────────────────────────────┐
│        ArcGIS Server         │
│ FeatureServer                │
│ MapServer                    │
│ ImageServer                  │
└──────────────────────────────┘
```

## 2. Frontend Architecture

The frontend is built with React and TypeScript and organized into reusable application components.

```text
src/
├── app/
│   ├── layout/
│   └── providers/
├── components/
│   ├── Header/
│   ├── Layers/
│   ├── Map/
│   ├── Notification/
│   ├── Property/
│   └── Search/
├── config/
├── hooks/
├── types/
├── App.tsx
└── main.tsx
```

## 3. GIS Architecture

ArcGIS Maps SDK communicates with ArcGIS Server services.

```text
FeatureServer
├── Property / parcel data
├── Road data
└── Municipal boundary

MapServer
└── Map services

ImageServer
└── Satellite imagery
```

GIS data remains managed by ArcGIS Server rather than being embedded into the React application.

## 4. Reverse Proxy

The browser requests:

```text
/arcgis/rest/services/...
```

IIS receives the request and forwards it to the internal ArcGIS Server.

```text
Browser
  │
  │ /arcgis/rest/services/...
  ▼
IIS
  │
  │ Reverse Proxy
  ▼
Internal ArcGIS Server
  │
  └── /arcgis/rest/services/...
```

This provides a cleaner deployment boundary and prevents internal ArcGIS Server addresses from being embedded in the public application.

## 5. Environment Configuration

Deployment-specific GIS URLs are supplied through environment variables.

```env
VITE_ARCGIS_IMAGERYLAYER_URL=
VITE_ARCGIS_MAPSERVER_URL=
VITE_ARCGIS_FEATURESERVER_URL=
```

For production, relative `/arcgis` paths can be used through the reverse proxy.

## 6. Current Deployment Model

```text
┌──────────────────────┐
│      Client/User     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Web Server / IIS     │
│ React Application    │
│ Reverse Proxy        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ ArcGIS Server        │
│ Internal GIS Server  │
└──────────────────────┘
```

## 7. Future Architecture

The current MVP intentionally does not require a backend API.

A future version can introduce ASP.NET Core Web API and SQL Server:

```text
                    ┌──────────────────┐
                    │    Web Browser   │
                    └────────┬─────────┘
                             │
                  ┌──────────┴──────────┐
                  ▼                     ▼
           React Frontend       ASP.NET Core API
                                        │
                              ┌─────────┴─────────┐
                              ▼                   ▼
                         SQL Server         Application Logic
                              │
                              ▼
                         ArcGIS Server
```

The backend can later handle:

- Business data
- Authentication
- Authorization
- Reporting
- Municipal workflows
- Application configuration
- Multi-municipality configuration
- SQL Server integration

## 8. Multi-Municipality Direction

The architecture is intended to evolve toward a reusable municipal WebGIS platform.

The application code should remain common while municipality-specific configuration changes.

Potential configuration areas:

```text
Municipality
├── Name
├── Logo
└── Branding

GIS
├── FeatureServer
├── MapServer
└── ImageServer

Layers
├── Layer IDs
├── Titles
└── Search fields

Map
├── Center
├── Zoom
├── Basemap
└── Constraints
```

This is planned for a future release and is not part of the current `v0.1.0` architecture.

## 9. Architectural Principles

1. **Separation of concerns** — UI, GIS configuration, GIS services, and future business logic remain separated.
2. **Reusable components** — GIS and UI functionality is implemented as reusable React components.
3. **Configuration over hard-coding** — deployment-specific values should be configurable.
4. **GIS services remain external to the frontend** — GIS data is provided by ArcGIS Server.
5. **Production separation** — public web hosting and internal GIS services are separated through a reverse proxy.
6. **Incremental architecture** — the MVP remains lightweight while leaving a clear path for backend, database, authentication, and advanced GIS capabilities.
