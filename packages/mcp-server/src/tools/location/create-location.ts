// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'location',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/udl/location',
};

export const tool: Tool = {
  name: 'create_location',
  description:
    'Service operation to take a single location as a POST body and ingest into the database. Locations are specific fixed points on the earth and are used to denote the locations of fixed sensors, operating units, etc. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
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
      name: {
        type: 'string',
        description: 'Location name.',
      },
      source: {
        type: 'string',
        description: 'Source of the data.',
      },
      altitude: {
        type: 'number',
        description: 'Altitude of the location, in kilometers.',
      },
      countryCode: {
        type: 'string',
        description:
          'The country code. This value is typically the ISO 3166 Alpha-2 two-character country code, however it can also represent various consortiums that do not appear in the ISO document. The code must correspond to an existing country in the UDL’s country API. Call udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for the specified country code.',
      },
      idLocation: {
        type: 'string',
        description: 'Unique identifier of the location, auto-generated by the system.',
      },
      lat: {
        type: 'number',
        description:
          'WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values south of equator).',
      },
      lon: {
        type: 'number',
        description:
          'WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative values west of Prime Meridian).',
      },
      origin: {
        type: 'string',
        description:
          'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.',
      },
    },
    required: ['classificationMarking', 'dataMode', 'name', 'source'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.location.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
