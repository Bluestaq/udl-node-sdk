// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'ephemeris',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/filedrop/ephem',
  operationId: 'filedrop_ephem_post_id',
};

export const tool: Tool = {
  name: 'file_upload_ephemeris',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to post/store Ephemeris data. This operation is  intended to be used for automated feeds into UDL. The payload is in Ephemeris format as described by the \"Flight Safety Handbook\" published by 18th Space Command. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n</br>\n**Example:** /filedrop/ephem?classification=U&dataMode=TEST&source=Bluestaq&satNo=25544&ephemFormatType=NASA&hasMnvr=false&type=ROUTINE&category=EXTERNAL&origin=NASA&tags=tag1,tag2\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'string',
        description: 'Ephemeris category.',
      },
      classification: {
        type: 'string',
        description: 'Classification marking of the data in IC/CAPCO Portion-marked format.',
      },
      dataMode: {
        type: 'string',
        description: 'Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.',
        enum: ['REAL', 'TEST', 'SIMULATED', 'EXERCISE'],
      },
      ephemFormatType: {
        type: 'string',
        description: 'Ephemeris format as documented in Flight Safety Handbook.',
        enum: ['ModITC', 'GOO', 'NASA', 'OEM', 'OASYS'],
      },
      hasMnvr: {
        type: 'boolean',
        description: 'Boolean indicating whether maneuver(s) are incorporated into the ephemeris.',
      },
      satNo: {
        type: 'integer',
        description: 'Satellite/Catalog number of the target on-orbit object.',
      },
      source: {
        type: 'string',
        description: 'Source of the Ephemeris data.',
      },
      type: {
        type: 'string',
        description: 'Ephemeris type.',
      },
      body: {
        type: 'string',
      },
      origin: {
        type: 'string',
        description: 'Optional origin of the Ephemeris.',
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
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.ephemeris.fileUpload(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
