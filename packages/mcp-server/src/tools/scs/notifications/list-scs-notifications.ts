// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.notifications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/notifications/{offset}',
};

export const tool: Tool = {
  name: 'list_scs_notifications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of notifications for items in a specific folder.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/notification_list_response'\n  },\n  $defs: {\n    notification_list_response: {\n      type: 'object',\n      description: 'SCS Event Notification',\n      properties: {\n        actions: {\n          type: 'array',\n          items: {\n            type: 'string',\n            enum: [              'ROOT_WRITE',\n              'UPLOAD_FILE',\n              'CREATE_FOLDER',\n              'DOWNLOAD_FILE',\n              'DOWNLOAD_FOLDER',\n              'MOVE_RENAME_FILE',\n              'MOVE_RENAME_FOLDER',\n              'COPY_FILE',\n              'COPY_FOLDER',\n              'UPDATE_FILE',\n              'UPDATE_FOLDER',\n              'DELETE_FILE',\n              'DELETE_FOLDER',\n              'DELETE_EMPTY_FOLDER',\n              'CROSS_DOMAIN',\n              'SEND_NOTIFICATION',\n              'DELETE_READ_ACL',\n              'DELETE_WRITE_ACL',\n              'DELETE_FILE_TAGS',\n              'DELETE_FOLDER_TAGS'\n            ]\n          }\n        },\n        classificationMarking: {\n          type: 'string'\n        },\n        crossDomainTo: {\n          type: 'string'\n        },\n        expires: {\n          type: 'string'\n        },\n        overwrite: {\n          type: 'boolean'\n        },\n        path: {\n          type: 'string'\n        },\n        timestamp: {\n          type: 'string'\n        },\n        user: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      offset: {
        type: 'string',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      path: {
        type: 'string',
        description:
          'Path of the folder to retrieve notification for. Must start and end with /. If no path is specified, all notifications will be returned.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['offset'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { offset, jq_filter, ...body } = args as any;
  const response = await client.scs.notifications.list(offset, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
