// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitbattery',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/udl/onorbitbattery/{id}',
};

export const tool: Tool = {
  name: 'update_onorbitbattery',
  description:
    'Service operation to update a single OnorbitBattery. OnorbitBattery is the association between on-orbit spacecraft batteries and a particular on-orbit spacecraft. A Battery may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
      idBattery: {
        type: 'string',
        description: 'ID of the battery.',
      },
      idOnOrbit: {
        type: 'string',
        description: 'ID of the on-orbit object.',
      },
      source: {
        type: 'string',
        description: 'Source of the data.',
      },
      body_id: {
        type: 'string',
        description: 'Unique identifier of the record, auto-generated by the system.',
      },
      battery: {
        type: 'object',
        description: 'Model representation of specific spacecraft battery types.',
        properties: {
          dataMode: {
            type: 'string',
            description:
              'Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:\n\nEXERCISE:&nbsp;Data pertaining to a government or military exercise. The data may include both real and simulated data.\n\nREAL:&nbsp;Data collected or produced that pertains to real-world objects, events, and analysis.\n\nSIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world datasets.\n\nTEST:&nbsp;Specific datasets used to evaluate compliance with specifications and requirements, and for validating technical, functional, and performance characteristics.',
            enum: ['REAL', 'TEST', 'SIMULATED', 'EXERCISE'],
          },
          name: {
            type: 'string',
            description: 'Battery name.',
          },
          source: {
            type: 'string',
            description: 'Source of the data.',
          },
          id: {
            type: 'string',
            description: 'Unique identifier of the record, auto-generated by the system.',
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
        required: ['dataMode', 'name', 'source'],
      },
      origin: {
        type: 'string',
        description:
          'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.',
      },
      quantity: {
        type: 'integer',
        description: 'The number of batteries on the spacecraft of the type identified by idBattery.',
      },
    },
    required: ['path_id', 'classificationMarking', 'dataMode', 'idBattery', 'idOnOrbit', 'source'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.onorbitbattery.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
