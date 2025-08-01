// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'sar_observation',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/udl/sarobservation',
};

export const tool: Tool = {
  name: 'create_sar_observation',
  description:
    'Service operation to take a single SAR observation as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.',
  inputSchema: {
    type: 'object',
    properties: {
      classificationMarking: {
        type: 'string',
        description: 'Classification marking of the data in IC/CAPCO Portion-marked format.',
      },
      collectionEnd: {
        type: 'string',
        description: 'Collection end time in ISO 8601 UTC format with microsecond precision.',
        format: 'date-time',
      },
      collectionStart: {
        type: 'string',
        description: 'Collection start time in ISO 8601 UTC format with microsecond precision.',
        format: 'date-time',
      },
      dataMode: {
        type: 'string',
        description:
          'Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:\n\nEXERCISE:&nbsp;Data pertaining to a government or military exercise. The data may include both real and simulated data.\n\nREAL:&nbsp;Data collected or produced that pertains to real-world objects, events, and analysis.\n\nSIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world datasets.\n\nTEST:&nbsp;Specific datasets used to evaluate compliance with specifications and requirements, and for validating technical, functional, and performance characteristics.',
        enum: ['REAL', 'TEST', 'SIMULATED', 'EXERCISE'],
      },
      sarMode: {
        type: 'string',
        description: 'Collection mode setting for this collection (e.g. AREA, SPOTLIGHT, STRIP, etc.).',
      },
      source: {
        type: 'string',
        description: 'Source of the data.',
      },
      id: {
        type: 'string',
        description: 'Unique identifier of the record, auto-generated by the system.',
      },
      agjson: {
        type: 'string',
        description:
          "Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON representation of the geometry/geography, of the image as projected on the ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST or PUT request that also specifies a valid 'area' or 'atext' field.",
      },
      andims: {
        type: 'integer',
        description: 'Number of dimensions of the geometry depicted by region.',
      },
      area: {
        type: 'string',
        description:
          'Optional geographical region or polygon (lat/lon pairs) of the area surrounding the image event as projected on the ground.',
      },
      asrid: {
        type: 'integer',
        description: 'Geographical spatial_ref_sys for region.',
      },
      atext: {
        type: 'string',
        description:
          "Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known Text representation of the geometry/geography, of the image as projected on the ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored if included with a POST or PUT request that also specifies a valid 'area' field.",
      },
      atype: {
        type: 'string',
        description: 'Type of region as projected on the ground (POLYGON, POINT, LINE).',
      },
      azimuthAngle: {
        type: 'number',
        description:
          'The azimuth angle, in degrees, of the SAR satellite nadir subpoint measured clockwise from true north at the subpoint.',
      },
      centerTime: {
        type: 'string',
        description:
          'The datetime at the center point of the collection in ISO 8601 UTC format with microsecond precision.',
        format: 'date-time',
      },
      collectionId: {
        type: 'string',
        description:
          'Optional identifier to indicate the specific collection tasking which produced this observation.',
      },
      continuousSpotAngle: {
        type: 'number',
        description: 'Required sweep angle for the continuous spot scene in degrees.',
      },
      coordSys: {
        type: 'string',
        description:
          'The coordinate system used for the sensor velocity and target position vectors for the collection.',
      },
      detectionEnd: {
        type: 'string',
        description: 'The detection end time in ISO 8601 UTC format, with microsecond precision.',
        format: 'date-time',
      },
      detectionId: {
        type: 'string',
        description:
          'Identifier of the specific detection within a collection which produced this observation.',
      },
      detectionStart: {
        type: 'string',
        description: 'The detection start time in ISO 8601 UTC format, with microsecond precision.',
        format: 'date-time',
      },
      dwellTime: {
        type: 'number',
        description: 'The duration, in seconds, of this detection.',
      },
      externalId: {
        type: 'string',
        description:
          'Optional ID from external systems. This field has no meaning within UDL and is provided as a convenience for systems that require tracking of an internal system generated ID.',
      },
      farRange: {
        type: 'number',
        description:
          'Specifies the farthest range, in kilometers, from the flight path to target during the collection.',
      },
      grazeAngle: {
        type: 'number',
        description: 'The graze angle (also referred to as look angle) for the collection in degrees.',
      },
      groundResolutionProjection: {
        type: 'number',
        description:
          'Distance between independent measurements, representing the physical dimension that represents a pixel of the image.',
      },
      idSensor: {
        type: 'string',
        description: 'Unique identifier of the reporting sensor.',
      },
      incidenceAngle: {
        type: 'number',
        description: 'The center incidence angle in degrees.',
      },
      looksAzimuth: {
        type: 'integer',
        description: 'The number of looks in the azimuth direction.',
      },
      looksRange: {
        type: 'integer',
        description: 'The number of looks in the range direction.',
      },
      multilookNumber: {
        type: 'number',
        description:
          'Averages the input synthetic aperture radar (SAR) data by looks in range and azimuth to approximate square pixels, mitigates speckle, and reduces SAR tool processing time.',
      },
      nearRange: {
        type: 'number',
        description:
          'Specifies the closest range, in kilometers, from the flight path to target during the collection.',
      },
      obDirection: {
        type: 'string',
        description: 'The antenna pointing direction (LEFT, RIGHT).',
      },
      operatingBand: {
        type: 'string',
        description:
          'Name of the band containing operating frequency for the collection (e.g. C, E, EHF, HF, K, Ka, Ku, L, Q, S, SHF, UNK, UHF, V, VHF, VLF, W, X). See RFBandType for more details and descriptions of each band name.',
      },
      operatingFreq: {
        type: 'number',
        description: 'The operating frequency, in Mhz, for the collection.',
      },
      orbitState: {
        type: 'string',
        description: 'The orbital direction (ASCENDING, DESCENDING) of the platform during the collection.',
      },
      origin: {
        type: 'string',
        description:
          'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.',
      },
      origObjectId: {
        type: 'string',
        description:
          'Optional identifier provided by the source to indicate the onorbit object hosting the sensor associated with this collection. This may be an internal identifier and not necessarily a valid satellite number.',
      },
      origSensorId: {
        type: 'string',
        description:
          'Optional identifier provided by the source to indicate the sensor for this collection. This may be an internal identifier and not necessarily a valid sensor ID.',
      },
      pulseBandwidth: {
        type: 'number',
        description: 'The bandwidth frequency of the pulse in Mhz.',
      },
      pulseDuration: {
        type: 'number',
        description: 'The duration of a pulse in seconds.',
      },
      resolutionAzimuth: {
        type: 'number',
        description: 'The resolution in the azimuth direction measured in meters.',
      },
      resolutionRange: {
        type: 'number',
        description: 'The resolution in the range direction measured in meters.',
      },
      rxPolarization: {
        type: 'string',
        description:
          "Receive polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand Circularly Polarized) Rotating left relative to the earth's surface, R - (Right Hand Circularly Polarized) Rotating right relative to the earth's surface.",
      },
      satNo: {
        type: 'integer',
        description:
          'Satellite/Catalog number of the spacecraft hosting the sensor associated with this collection.',
      },
      senalt: {
        type: 'number',
        description: 'Sensor altitude during collection in kilometers.',
      },
      senlatEnd: {
        type: 'number',
        description:
          'WGS-84 sensor latitude sub-point at collect end time (collectionEnd), represented as -90 to 90 degrees (negative values south of equator).',
      },
      senlatStart: {
        type: 'number',
        description:
          'WGS-84 sensor latitude sub-point at collect start time (collectionStart), represented as -90 to 90 degrees (negative values south of equator).',
      },
      senlonEnd: {
        type: 'number',
        description:
          'WGS-84 sensor longitude sub-point at collect end time (collectionEnd), represented as -180 to 180 degrees (negative values west of Prime Meridian).',
      },
      senlonStart: {
        type: 'number',
        description:
          'WGS-84 sensor longitude sub-point at collect start time (collectionStart), represented as -180 to 180 degrees (negative values west of Prime Meridian).',
      },
      senvelx: {
        type: 'number',
        description: 'Sensor platform X-velocity during collection in kilometers/second.',
      },
      senvely: {
        type: 'number',
        description: 'Sensor platform Y-velocity during collection in kilometers/second.',
      },
      senvelz: {
        type: 'number',
        description: 'Sensor platform Z-velocity during collection in kilometers/second.',
      },
      slantRange: {
        type: 'number',
        description: 'Slant distance from sensor to center point of imaging event in kilometers.',
      },
      snr: {
        type: 'number',
        description: 'Signal to noise ratio, in dB.',
      },
      spacingAzimuth: {
        type: 'number',
        description: 'The pixel spacing in the azimuth direction measured in meters.',
      },
      spacingRange: {
        type: 'number',
        description: 'The pixel spacing in the range direction measured in meters.',
      },
      squintAngle: {
        type: 'number',
        description: 'The squint angle for the collection in degrees.',
      },
      srcIds: {
        type: 'array',
        description:
          "Array of UUIDs of the UDL data records that are related to the SAR Observation. See the associated 'srcTyps' array for the specific types of data, positionally corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must match in size. See the corresponding srcTyps array element for the data type of the UUID and use the appropriate API operation to retrieve that object (e.g. /udl/sarobservation/{uuid}).",
        items: {
          type: 'string',
        },
      },
      srcTyps: {
        type: 'array',
        description:
          "Array of UDL record types (e.g. ANALYTICMAGERY, ESID, GROUNDIMAGE, NOTIFICATION, POI, SV, TRACK) that are related to the SAR Observation. See the associated 'srcIds' array for the record UUIDs, positionally corresponding to the record types in this array. The 'srcTyps' and 'srcIds' arrays must match in size.",
        items: {
          type: 'string',
        },
      },
      swathLength: {
        type: 'number',
        description: 'The length of the collection as projected on the ground in kilometers.',
      },
      tags: {
        type: 'array',
        description:
          'Optional array of provider/source specific tags for this data, where each element is no longer than 32 characters, used for implementing data owner conditional access controls to restrict access to the data. Should be left null by data providers unless conditional access controls are coordinated with the UDL team.',
        items: {
          type: 'string',
        },
      },
      targetposx: {
        type: 'number',
        description: 'The collection target X position in kilometers.',
      },
      targetposy: {
        type: 'number',
        description: 'The collection target Y position in kilometers.',
      },
      targetposz: {
        type: 'number',
        description: 'The collection target Z position in kilometers.',
      },
      transactionId: {
        type: 'string',
        description:
          'Optional identifier to track a commercial or marketplace transaction executed to produce this data.',
      },
      txPolarization: {
        type: 'string',
        description:
          "Transmit polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand Circularly Polarized) Rotating left relative to the earth's surface, R - (Right Hand Circularly Polarized) Rotating right relative to the earth's surface.",
      },
    },
    required: ['classificationMarking', 'collectionEnd', 'collectionStart', 'dataMode', 'sarMode', 'source'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.sarObservation.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
