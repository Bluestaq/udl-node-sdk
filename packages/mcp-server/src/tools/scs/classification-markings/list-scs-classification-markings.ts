// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.classification_markings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/getClassificationMarkings',
};

export const tool: Tool = {
  name: 'list_scs_classification_markings',
  description: 'Returns a list of all classification markings appropriate to the current user.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.scs.classificationMarkings.list();
};

export default { metadata, tool, handler };
