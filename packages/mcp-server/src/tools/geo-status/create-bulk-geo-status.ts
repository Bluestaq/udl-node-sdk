// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'geo_status',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/udl/geostatus/createBulk',
};

export const tool: Tool = {
  name: 'create_bulk_geo_status',
  description:
    'Service operation intended for initial integration only, to take a list of GEOStatus records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.',
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'array',
        items: {
          type: 'object',
          description:
            'Information for the specified on-orbit GEO spacecraft, including status, expected longitude limits, and drift rates.',
          properties: {
            classificationMarking: {
              type: 'string',
              description: 'Classification marking of the data in IC/CAPCO Portion-marked format.',
            },
            dataMode: {
              type: 'string',
              description:
                'Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:\n\nEXERCISE:&nbsp;Data pertaining to a government or military exercise. The data may include both real and simulated data.\n\nREAL:&nbsp;Data collected or produced that pertains to real-world objects, events, and analysis.\n\nSIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world datasets.\n\nTEST:&nbsp;Specific datasets used to evaluate compliance with specifications and requirements, and for validating technical, functional, and performance characteristics.',
              enum: ['REAL', 'TEST', 'SIMULATED', 'EXERCISE'],
            },
            source: {
              type: 'string',
              description: 'Source of the data.',
            },
            id: {
              type: 'string',
              description: 'Unique identifier of the record, auto-generated by the system.',
            },
            confidenceLevel: {
              type: 'string',
              description: 'Indicates the confidence level in the entry.  (Low, Medium, High).',
            },
            createdAt: {
              type: 'string',
              description: 'Time the row was created in the database, auto-populated by the system.',
              format: 'date-time',
            },
            createdBy: {
              type: 'string',
              description:
                'Application user who created the row in the database, auto-populated by the system.',
            },
            idOnOrbit: {
              type: 'string',
              description: 'Unique identifier of the object on-orbit object.',
            },
            longitudeMax: {
              type: 'number',
              description:
                'Maximum longitude for this object. WGS-84 longitude of the spacecraft position, in degrees. 0 to 360 degrees.',
            },
            longitudeMin: {
              type: 'number',
              description:
                'Minimum longitude for this object.  WGS-84 longitude of the spacecraft position, in degrees. 0 to 360 degrees.',
            },
            longitudeRate: {
              type: 'number',
              description: 'Corrective or overriding long term trend for longitudinal change in degrees/day.',
            },
            lostFlag: {
              type: 'boolean',
              description: 'Lost space object indicator.  (True or False).',
            },
            objectStatus: {
              type: 'string',
              description: 'Space object status.  (Active, Dead, Unknown).',
            },
            origin: {
              type: 'string',
              description:
                'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.',
            },
            origNetwork: {
              type: 'string',
              description:
                'The originating source network on which this record was created, auto-populated by the system.',
            },
            origObjectId: {
              type: 'string',
              description:
                'Optional identifier provided to indicate the target onorbit. This may be an internal identifier and not necessarily map to a valid satellite number.',
            },
            planeChangeStatus: {
              type: 'string',
              description: 'Geosynchronous plane changing status.  (Current, Never, Former, Future).',
            },
            rawFileURI: {
              type: 'string',
              description:
                'Optional URI location in the document repository of the raw file parsed by the system to produce this record. To download the raw file, prepend https://udl-hostname/scs/download?id= to this value.',
            },
            relativeEnergy: {
              type: 'number',
              description: 'Objects displacement from geostationary orbit in deg^2/day^2.',
            },
            satNo: {
              type: 'integer',
              description: 'Satellite/catalog number of the target on-orbit object.',
            },
            sc: {
              type: 'number',
              description: 'Sine of inclination times the cosine of right ascension.',
            },
            semiAnnualCorrFlag: {
              type: 'boolean',
              description: 'Semi-annual correction.  (True or False).',
            },
            ss: {
              type: 'number',
              description: 'Sine of inclination times the sine of right ascension.',
            },
            troughType: {
              type: 'string',
              description:
                'Indicates the trough (gravity well) or drift direction of a space object:\n\n255 - Influenced by 255° longitude trough. \n\n75 - Influenced by 75° longitude trough. \n\nBoth - Oscillating between both 255 and 75 troughs. \n\nEast - Drifting eastward; large relative energy and a period less than 1436.1 minutes. \n\nWest - Drifting westward; large relative energy and a period greater than 1436.2 minutes.',
            },
          },
          required: ['classificationMarking', 'dataMode', 'source'],
        },
      },
    },
    required: ['body'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.geoStatus.createBulk(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
