// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.v2',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/v2/file',
};

export const tool: Tool = {
  name: 'file_upload_scs_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOperation to upload a file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      classificationMarking: {
        type: 'string',
        description:
          'Classification marking of uploaded document. If folders are created, they will also have this classification marking.',
      },
      path: {
        type: 'string',
        description:
          "The complete path for the upload including filename. Will attempt to create folders in path if necessary. Must start with '/'.",
      },
      body: {
        type: 'string',
      },
      deleteAfter: {
        type: 'string',
        description: 'Length of time after which to automatically delete the file.',
      },
      description: {
        type: 'string',
        description: 'Optional description of uploaded document.',
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
        description:
          'Optional array of provider/source specific tags for this data, used for implementing data owner conditional access controls to restrict access to the data.',
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
  const response = await client.scs.v2.fileUpload(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
