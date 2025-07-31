// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'conjunctions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/filedrop/cdms',
  operationId: 'filedrop_cdms_post_id',
};

export const tool: Tool = {
  name: 'upload_conjunction_data_message_conjunctions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService to accept multiple CDMs in as zip file or a single CDM as payload. The service converts key-value pair formatted CDMs to UDL formats and stores them. The CDM format is as described in https://ccsds.org document CCSDS 508.0-B-1. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n**Example:** /filedrop/cdms?filename=conj.zip&classification=U&dataMode=TEST&source=Bluestaq&tags=tag1,tag2\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      classification: {
        type: 'string',
        description: 'Classification marking of the data in IC/CAPCO Portion-marked format.',
      },
      dataMode: {
        type: 'string',
        description: 'Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.',
        enum: ['REAL', 'TEST', 'SIMULATED', 'EXERCISE'],
      },
      filename: {
        type: 'string',
        description: 'Filename of the payload.',
      },
      source: {
        type: 'string',
        description: 'Source of the data.',
      },
      aprams: {
        type: 'string',
      },
      tags: {
        type: 'string',
        description:
          'Optional array of provider/source specific tags for this data, where each element is no longer than 32 characters, used for implementing data owner conditional access controls to restrict access to the data. Should be left null by data providers unless conditional access controls are coordinated with the UDL team.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['classification', 'dataMode', 'filename', 'source', 'aprams'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { aprams, ...body } = args as any;
  const response = await client.conjunctions.uploadConjunctionDataMessage(aprams).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
