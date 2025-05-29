// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
    'Service operation to post/store Ephemeris data. This operation is  intended to be used for automated feeds into UDL. The payload is in Ephemeris format as described by the "Flight Safety Handbook" published by 18th Space Command. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n</br>\n**Example:** /filedrop/ephem?classification=U&dataMode=TEST&source=Bluestaq&satNo=25544&ephemFormatType=NASA&hasMnvr=false&type=ROUTINE&category=EXTERNAL&origin=NASA&tags=tag1,tag2\n',
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
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.ephemeris.fileUpload(body);
};

export default { metadata, tool, handler };
