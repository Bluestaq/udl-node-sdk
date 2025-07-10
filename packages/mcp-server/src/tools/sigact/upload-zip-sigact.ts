// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'sigact',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/filedrop/udl-sigact-text',
  operationId: 'filedrop_udl_sigact_text_post_id',
};

export const tool: Tool = {
  name: 'upload_zip_sigact',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload a text file with its metadata. This operation bypasses the length constraints of the `eventDescription` field.\n\nThe request body requires a zip file containing exactly two files:\\\n1\\) A file with the `.json` file extension whose content conforms to the `SigAct_Ingest` schema.\\\n2\\) A UTF-8 encoded file with the `.txt` file extension.\n\nThe JSON and text files will be associated with each other via the `id` field. Query the metadata via `GET /udl/sigact` and use `GET /udl/sigact/getFile/{id}` to retrieve the text file.\n\nThis operation only accepts application/zip media. The application/json request body is documented to provide a convenient reference to the ingest schema.\n\nThis operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
        description: 'Zip file containing files described in the specification',
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
  const response = await client.sigact.uploadZip(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
