// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/file',
};

export const tool: Tool = {
  name: 'file_upload_scs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOperation to upload a file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      classificationMarking: {
        type: 'string',
        description: 'Classification (ex. U//FOUO)',
      },
      fileName: {
        type: 'string',
        description: 'FileName (ex. dog.jpg)',
      },
      path: {
        type: 'string',
        description: 'The base path to upload file (ex. images)',
      },
      file_content: {
        type: 'string',
      },
      deleteAfter: {
        type: 'string',
        description: 'Length of time after which to automatically delete the file.',
      },
      description: {
        type: 'string',
        description: 'Description ',
      },
      overwrite: {
        type: 'boolean',
        description: 'Whether or not to overwrite a file with the same name and path, if one exists.',
      },
      sendNotification: {
        type: 'boolean',
        description: 'Whether or not to send a notification that this file was uploaded.',
      },
      tags: {
        type: 'string',
        description: 'Tags',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['classificationMarking', 'fileName', 'path', 'file_content'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { file_content, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.scs.fileUpload(file_content, body)));
};

export default { metadata, tool, handler };
