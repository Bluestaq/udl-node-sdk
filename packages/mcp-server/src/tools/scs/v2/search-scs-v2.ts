// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.v2',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/v2/search',
};

export const tool: Tool = {
  name: 'search_scs_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOperation to search for files in the Secure Content Store.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/v2_search_response',\n  $defs: {\n    v2_search_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/scs_entity'\n      }\n    },\n    scs_entity: {\n      type: 'object',\n      description: 'An SCS file or folder.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for document.'\n        },\n        attachment: {\n          $ref: '#/$defs/attachment'\n        },\n        classificationMarking: {\n          type: 'string',\n          description: 'Classification marking of the folder or file in IC/CAPCO portion-marked format.'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'The time at which this document was created, represented in UTC ISO format.'\n        },\n        createdBy: {\n          type: 'string',\n          description: 'The creator of this document. Can be a person or a software entity.'\n        },\n        deleteOn: {\n          type: 'integer',\n          description: 'Time at which this document should be automatically deleted. Represented in milliseconds since Unix epoch.'\n        },\n        description: {\n          type: 'string',\n          description: 'Optional description for the file or folder.'\n        },\n        filename: {\n          type: 'string',\n          description: 'The name of this document. Applicable to files and folders.'\n        },\n        filePath: {\n          type: 'string',\n          description: 'The absolute path to this document.'\n        },\n        keywords: {\n          type: 'string',\n          description: 'Optional. Any keywords associated with this document. Only applicable to files whose contents are indexed (e.g. text files, PDFs).'\n        },\n        parentPath: {\n          type: 'string',\n          description: 'The parent folder of this document. If this document is a root-level folder then the parent path is \"/\".'\n        },\n        pathType: {\n          type: 'string',\n          description: 'The type of this document.',\n          enum: [            'file',\n            'folder'\n          ]\n        },\n        readAcl: {\n          type: 'string',\n          description: 'For folders only. Comma separated list of user and group ids that should have read access on this folder and the items nested in it.'\n        },\n        size: {\n          type: 'integer',\n          description: 'Size of this document in bytes.'\n        },\n        tags: {\n          type: 'array',\n          description: 'Array of provider/source specific tags for this data, used for implementing data owner conditional access controls to restrict access to the data.',\n          items: {\n            type: 'string',\n            description: 'Each tag is a unique string used to associate this data with a specific provider or source.'\n          }\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'The time at which this document was most recently updated, represented in UTC ISO format.'\n        },\n        updatedBy: {\n          type: 'string',\n          description: 'The person or software entity who updated this document most recently.'\n        },\n        writeAcl: {\n          type: 'string',\n          description: 'For folders only. Comma separated list of user and group ids that should have write access on this folder and the items nested in it.'\n        }\n      }\n    },\n    attachment: {\n      type: 'object',\n      properties: {\n        author: {\n          type: 'string',\n          description: 'The creator of this document. Can be a person or a software entity.'\n        },\n        content_length: {\n          type: 'integer',\n          description: 'The length of the document, in bytes.'\n        },\n        content_type: {\n          type: 'string',\n          description: 'The document\\'s MIME-type (if applicable).'\n        },\n        date: {\n          type: 'string',\n          description: 'The time at which this attachment was created, represented in UTC ISO format.'\n        },\n        keywords: {\n          type: 'string',\n          description: 'Any keywords associated with this document. Only applicable to files whose contents are indexed (e.g. text files, PDFs).'\n        },\n        language: {\n          type: 'string',\n          description: 'The human language of the document, if discernible.'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the document.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      order: {
        type: 'string',
        description: 'The order in which entries should be sorted.',
      },
      searchAfter: {
        type: 'string',
        description:
          'The starting point for pagination results, usually set to the value of the SEARCH_AFTER header returned in the previous request.',
      },
      size: {
        type: 'integer',
        description: 'The number of results to retrieve.',
      },
      sort: {
        type: 'string',
        description: 'The field on which to sort entries.',
      },
      query: {
        $ref: '#/$defs/search_criterion',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      search_criterion: {
        anyOf: [
          {
            type: 'object',
            description: 'A search on a specific field with a given value and operator.',
            properties: {
              field: {
                type: 'string',
                description: 'The field to search on (e.g., attachment.content, createdBy).',
              },
              operator: {
                type: 'string',
                description: 'Supported search operators',
                enum: ['EXACT_MATCH', 'WILDCARD', 'FUZZY', 'GTE', 'LTE', 'GT', 'LT'],
              },
              value: {
                type: 'string',
                description: 'The value to compare against (e.g., The Great Gatsby)',
              },
            },
          },
          {
            $ref: '#/$defs/search_logical_criterion',
          },
        ],
        description:
          'A search criterion, which can be a simple field comparison or a logical combination of other criteria.',
      },
      search_logical_criterion: {
        type: 'object',
        description: 'Combines multiple search criteria with a logical operator (AND, OR, NOT).',
        properties: {
          criteria: {
            type: 'array',
            description: 'List of search criteria to combine',
            items: {
              $ref: '#/$defs/search_criterion',
            },
          },
          operator: {
            type: 'string',
            description: 'Supported search operators',
            enum: ['AND', 'OR', 'NOT'],
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.scs.v2.search(body)));
};

export default { metadata, tool, handler };
