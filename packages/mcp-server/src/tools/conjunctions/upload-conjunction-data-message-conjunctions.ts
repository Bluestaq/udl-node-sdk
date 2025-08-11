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
    'Service to accept multiple CDMs in as zip file or a single CDM as payload. The service converts key-value pair formatted CDMs to UDL formats and stores them. The CDM format is as described in https://ccsds.org document CCSDS 508.0-B-1. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n**Example:** /filedrop/cdms?filename=conj.zip&classification=U&dataMode=TEST&source=Bluestaq&tags=tag1,tag2',
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
      file_content: {
        type: 'string',
      },
      tags: {
        type: 'string',
        description:
          'Optional array of provider/source specific tags for this data, where each element is no longer than 32 characters, used for implementing data owner conditional access controls to restrict access to the data. Should be left null by data providers unless conditional access controls are coordinated with the UDL team.',
      },
    },
    required: ['classification', 'dataMode', 'filename', 'source', 'file_content'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { file_content, ...body } = args as any;
  const response = await client.conjunctions.uploadConjunctionDataMessage(file_content, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
