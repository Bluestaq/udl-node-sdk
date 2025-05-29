// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'air_operations.crewpapers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/filedrop/crewpapers',
  operationId: 'filedrop_udl_crewPapers_post_id',
};

export const tool: Tool = {
  name: 'upload_pdf_air_operations_crewpapers',
  description:
    'Service operation to upload a supporting PDF for the aircraft sortie. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n',
  inputSchema: {
    type: 'object',
    properties: {
      aircraftSortieIds: {
        type: 'string',
        description: 'Comma-separated list of AircraftSortie IDs the Crew Papers are being added to.',
      },
      classificationMarking: {
        type: 'string',
        description: 'classificationMarking of the Crew Papers.',
      },
      paperStatus: {
        type: 'string',
        description: 'The status of the supporting document.',
        enum: ['PUBLISHED', 'DELETED', 'UPDATED', 'READ'],
      },
      papersVersion: {
        type: 'string',
        description: 'The version number of the crew paper.',
      },
      body: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.airOperations.crewpapers.uploadPdf(body);
};

export default { metadata, tool, handler };
