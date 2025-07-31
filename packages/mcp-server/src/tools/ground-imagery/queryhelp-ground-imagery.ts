// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'udl-node-sdk';

export const metadata: Metadata = {
  resource: 'ground_imagery',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/groundimagery/queryhelp',
};

export const tool: Tool = {
  name: 'queryhelp_ground_imagery',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to provide detailed information on available dynamic query parameters for a particular data type.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    aodrSupported: {\n      type: 'boolean'\n    },\n    classificationMarking: {\n      type: 'string'\n    },\n    description: {\n      type: 'string'\n    },\n    historySupported: {\n      type: 'boolean'\n    },\n    name: {\n      type: 'string'\n    },\n    parameters: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/param_descriptor'\n      }\n    },\n    requiredRoles: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    restSupported: {\n      type: 'boolean'\n    },\n    sortSupported: {\n      type: 'boolean'\n    },\n    typeName: {\n      type: 'string'\n    },\n    uri: {\n      type: 'string'\n    }\n  },\n  $defs: {\n    param_descriptor: {\n      type: 'object',\n      properties: {\n        classificationMarking: {\n          type: 'string'\n        },\n        derived: {\n          type: 'boolean'\n        },\n        description: {\n          type: 'string'\n        },\n        elemMatch: {\n          type: 'boolean'\n        },\n        format: {\n          type: 'string'\n        },\n        histQuerySupported: {\n          type: 'boolean'\n        },\n        histTupleSupported: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        required: {\n          type: 'boolean'\n        },\n        restQuerySupported: {\n          type: 'boolean'\n        },\n        restTupleSupported: {\n          type: 'boolean'\n        },\n        type: {\n          type: 'string'\n        },\n        unitOfMeasure: {\n          type: 'string'\n        },\n        utcDate: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.groundImagery.queryhelp()));
};

export default { metadata, tool, handler };
