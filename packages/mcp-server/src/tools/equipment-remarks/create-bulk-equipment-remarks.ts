// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'equipment_remarks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/udl/equipmentremark/createBulk',
};

export const tool: Tool = {
  name: 'create_bulk_equipment_remarks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation intended for initial integration only, to take a list of equipmentremark records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'array',
        items: {
          type: 'object',
          description:
            'Remarks contain amplifying information for a specific service. The information may contain context and interpretations for consumer use.',
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
            idEquipment: {
              type: 'string',
              description: 'The ID of the Equipment to which this remark applies.',
            },
            source: {
              type: 'string',
              description: 'Source of the data.',
            },
            text: {
              type: 'string',
              description: 'The text of the remark.',
            },
            id: {
              type: 'string',
              description: 'Unique identifier of the record, auto-generated by the system.',
            },
            altRmkId: {
              type: 'string',
              description: 'Unique identifier of the Equipment Remark record from the originating system.',
            },
            code: {
              type: 'string',
              description:
                'The remark type identifier. For example, the Mobility Air Forces (MAF) remark code, defined in the Airfield Suitability and Restriction Report (ASRR).',
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
            name: {
              type: 'string',
              description: 'The name of the remark.',
            },
            origin: {
              type: 'string',
              description:
                'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.',
            },
            type: {
              type: 'string',
              description: 'The remark type (e.g. Caution, Information, Misc, Restriction, etc.).',
            },
          },
          required: ['classificationMarking', 'dataMode', 'idEquipment', 'source', 'text'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.equipmentRemarks.createBulk(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
