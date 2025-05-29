// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'ground_imagery',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/filedrop/udl-groundimagery',
  operationId: 'filedrop_udl_groundimagery_post_id',
};

export const tool: Tool = {
  name: 'upload_zip_ground_imagery',
  description:
    'Upload a new image with its metadata.\n\nThe request body requires a zip file containing exactly two files:\\\n1\\) A file with the `.json` file extension whose content conforms to the `GroundImagery_Ingest` schema.\n2\\) A binary image file of the allowed types for this service.\n\nThe JSON and image files will be associated with each other via the `id` field. Query the metadata via `GET /udl/groundimagery` and use `GET /udl/groundimagery/getFile/{id}` to retrieve the binary image file.\n\nThis operation only accepts application/zip media. The application/json request body is documented to provide a convenient reference to the ingest schema.\n\nThis operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
        description: 'Zip file containing files described in the specification',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.groundImagery.uploadZip(body);
};

export default { metadata, tool, handler };
