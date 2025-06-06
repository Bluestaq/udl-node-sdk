// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'video',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/video/getPublisherStreamingInfo',
};

export const tool: Tool = {
  name: 'get_publisher_streaming_info_video',
  description: 'Service operation to retrieve publisher URL and token for given stream name and source.',
  inputSchema: {
    type: 'object',
    properties: {
      sourceName: {
        type: 'string',
        description: 'The video source name.',
      },
      streamName: {
        type: 'string',
        description: 'The video stream name.',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.video.getPublisherStreamingInfo(body));
};

export default { metadata, tool, handler };
