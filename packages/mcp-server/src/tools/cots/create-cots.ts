// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'cots',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/udl/cot',
};

export const tool: Tool = {
  name: 'create_cots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis service enables posting CoT messages to the UDL TAK server.  CoT data will be persisted in the UDL POI schema as well as federated to connected TAK servers.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      lat: {
        type: 'number',
        description: 'WGS-84 latitude of the POI, in degrees (+N, -S), -90 to 90.',
      },
      lon: {
        type: 'number',
        description: 'WGS-84 longitude of the POI, in degrees (+E, -W), -180 to 180.',
      },
      alt: {
        type: 'number',
        description: 'Point height above ellipsoid (WGS-84), in meters.',
      },
      callSigns: {
        type: 'array',
        description: 'Optional list of call signs to send message to directly.',
        items: {
          type: 'string',
        },
      },
      ce: {
        type: 'number',
        description:
          'Radius of circular area about lat/lon point, in meters (1-sigma, if representing error).',
      },
      cotChatData: {
        type: 'object',
        description: 'Schema for the CotChatData to post.',
        properties: {
          chatMsg: {
            type: 'string',
            description: 'Contents of a chat message.',
          },
          chatRoom: {
            type: 'string',
            description: 'Chat room name to send chat message to.',
          },
          chatSenderCallSign: {
            type: 'string',
            description: 'Callsign of chat sender.',
          },
        },
      },
      cotPositionData: {
        type: 'object',
        description: 'Schema for the CotPositionData to post.',
        properties: {
          callSign: {
            type: 'string',
            description: 'Name of the POI target Object.',
          },
          team: {
            type: 'string',
            description: 'Description of the POI target Object.',
          },
          teamRole: {
            type: 'string',
            description:
              'Team role  (Team Member| Team Lead | HQ | Sniper | Medic | Forward Observer | RTO | K9).',
          },
        },
        required: ['callSign', 'team', 'teamRole'],
      },
      groups: {
        type: 'array',
        description:
          'Optional set of groups to send message to specifically.  If not specified, the message will be sent to the default _ANON_ group.',
        items: {
          type: 'string',
        },
      },
      how: {
        type: 'string',
        description: 'How the event point was generated, in CoT object heirarchy notation (optional, CoT).',
      },
      le: {
        type: 'number',
        description: 'Height above lat/lon point, in meters (1-sigma, if representing linear error).',
      },
      senderUid: {
        type: 'string',
        description:
          'Identifier of the sender of the cot message which should remain the same on subsequent POI records of the same point of interest.',
      },
      stale: {
        type: 'string',
        description: 'Stale timestamp (optional), in ISO8601 UTC format.',
        format: 'date-time',
      },
      start: {
        type: 'string',
        description: 'Start time of event validity (optional), in ISO8601 UTC format.',
        format: 'date-time',
      },
      type: {
        type: 'string',
        description: 'Event type, in CoT object heirarchy notation (optional, CoT).',
      },
      uids: {
        type: 'array',
        description: 'Optional list of TAK user ids to send message to directly.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['lat', 'lon'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.cots.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
