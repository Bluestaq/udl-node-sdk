// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'supporting_data.provider_metadata',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/dataowner/providerMetadata',
};

export const tool: Tool = {
  name: 'retrieve_supporting_data_provider_metadata',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/dataowner_abridged'\n  },\n  $defs: {\n    dataowner_abridged: {\n      type: 'object',\n      description: 'Information pertaining to UDL data owners.',\n      properties: {\n        classificationMarking: {\n          type: 'string',\n          description: 'Classification marking of the data in IC/CAPCO Portion-marked format.'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of this data owner.'\n        },\n        doName: {\n          type: 'string',\n          description: 'The name of the data owner.'\n        },\n        idContact: {\n          type: 'string',\n          description: 'Unique identifier of the contact for this data owner.'\n        },\n        source: {\n          type: 'string',\n          description: 'Source of the data.'\n        },\n        comingSoon: {\n          type: 'boolean',\n          description: 'Boolean indicating if the data owner is coming soon or not yet available.'\n        },\n        control: {\n          type: 'string',\n          description: 'Optional control required to access this data type from this owner.'\n        },\n        countryCode: {\n          type: 'string',\n          description: 'The country code. This value is typically the ISO 3166 Alpha-2 two-character country code, however it can also represent various consortiums that do not appear in the ISO document. The code must correspond to an existing country in the UDL’s country API. Call udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for the specified country code.'\n        },\n        dataType: {\n          type: 'string',\n          description: 'Type of data this data owner owns (e.g. EPHEMERIS, IMAGERY, MANEUVER, etc.).'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Boolean indicating if the data owner is enabled (if not enabled, they should not appear on the data products screen on the storefront).'\n        },\n        ownerType: {\n          type: 'string',\n          description: 'Type of organization which this data owner belongs to (e.g. Commercial, Government, Academic, Consortium, etc.).'\n        },\n        provider: {\n          type: 'string',\n          description: 'Organization name for the data provider.'\n        }\n      },\n      required: [        'classificationMarking',\n        'description',\n        'doName',\n        'idContact',\n        'source'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.supportingData.providerMetadata.retrieve(body)),
  );
};

export default { metadata, tool, handler };
