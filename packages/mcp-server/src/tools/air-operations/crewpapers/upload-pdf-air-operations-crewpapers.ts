// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'air_operations.crewpapers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/filedrop/crewpapers',
  operationId: 'filedrop_udl_crewPapers_post_id',
};

export const tool: Tool = {
  name: 'upload_pdf_air_operations_crewpapers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to upload a supporting PDF for the aircraft sortie. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      aircraftSortieIds: {
        type: 'string',
        description: 'Comma-separated list of AircraftSortie IDs the Crew Papers are being added to.',
      },
      classificationMarking: {
        type: 'string',
        description: 'classificationMarking of the Crew Papers.',
      },
      paperStatus: {
        type: 'string',
        description: 'The status of the supporting document.',
        enum: ['PUBLISHED', 'DELETED', 'UPDATED', 'READ'],
      },
      papersVersion: {
        type: 'string',
        description: 'The version number of the crew paper.',
      },
      body: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['aircraftSortieIds', 'classificationMarking', 'paperStatus', 'papersVersion', 'body'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.airOperations.crewpapers.uploadPdf(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
