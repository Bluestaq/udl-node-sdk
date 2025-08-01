// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'launch_site_details',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/udl/launchsitedetails/{id}',
};

export const tool: Tool = {
  name: 'update_launch_site_details',
  description:
    'Service operation to update a LaunchSiteDetails. A LaunchSiteDetails represents details compiled/collected on a launch site by a particular source. A launch site may have several details records. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      path_id: {
        type: 'string',
      },
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
      idLaunchSite: {
        type: 'string',
        description: 'Identifier of the parent launch site record.',
      },
      source: {
        type: 'string',
        description: 'Source of the data.',
      },
      body_id: {
        type: 'string',
        description: 'Unique identifier of the record, auto-generated by the system.',
      },
      availableInclinations: {
        type: 'array',
        description:
          'Array of supported launch inclinations known for this site. The array is always sized as a multiple of two and includes start/end values to support ranges.  For example, if a site support inclinations of 10 and 12-14, the array would have the following values: [10,10, 12,14].',
        items: {
          type: 'number',
        },
      },
      description: {
        type: 'string',
        description: 'Notes/description of the launch site.',
      },
      idLocation: {
        type: 'string',
        description:
          'ID of the location data for the launch site, or null if mobile (e.g. sea launch platform in international waters).',
      },
      launchGroup: {
        type: 'string',
        description:
          "Launch site group name. Multiple launch sites may be colocated within a launch ''group''.",
      },
      location: {
        $ref: '#/$defs/location_ingest',
      },
      origin: {
        type: 'string',
        description:
          'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.',
      },
    },
    required: ['path_id', 'classificationMarking', 'dataMode', 'idLaunchSite', 'source'],
    $defs: {
      location_ingest: {
        type: 'object',
        description:
          'Model representation of a location, which is a specific fixed point on the earth and is used to denote the locations of fixed sensors, operating units, etc.',
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
          origNetwork: {
            type: 'string',
            description:
              'The originating source network on which this record was created, auto-populated by the system.',
          },
        },
        required: ['classificationMarking', 'dataMode', 'name', 'source'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.launchSiteDetails.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
