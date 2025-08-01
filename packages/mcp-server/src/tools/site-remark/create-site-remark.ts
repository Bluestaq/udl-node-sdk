// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'site_remark',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/udl/siteremark',
};

export const tool: Tool = {
  name: 'create_site_remark',
  description:
    'Service operation to take a single remark record as a POST body and ingest into the database.  A specific role is required to perform this service operation.  Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      classificationMarking: {
        type: 'string',
        description: 'Classification marking of the data in IC/CAPCO Portion-marked format.',
      },
      dataMode: {
        type: 'string',
        description:
          'Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:\n\nEXERCISE:&nbsp;Data pertaining to a government or military exercise. The data may include both real and simulated data.\n\nREAL:&nbsp;Data collected or produced that pertains to real-world objects, events, and analysis.\n\nSIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world datasets.\n\nTEST:&nbsp;Specific datasets used to evaluate compliance with specifications and requirements, and for validating technical, functional, and performance characteristics.',
        enum: ['REAL', 'TEST', 'SIMULATED', 'EXERCISE'],
      },
      idSite: {
        type: 'string',
        description: 'The ID of the site to which this remark applies.',
      },
      source: {
        type: 'string',
        description: 'Source of the data.',
      },
      text: {
        type: 'string',
        description: 'The text of the remark.',
      },
      id: {
        type: 'string',
        description: 'Unique identifier of the record, auto-generated by the system.',
      },
      code: {
        type: 'string',
        description:
          'The remark type identifier. \nFor example, the Mobility Air Forces (MAF) remark code, defined in the Airfield Suitability and Restriction Report (ASRR).',
      },
      name: {
        type: 'string',
        description: 'The name of the remark.',
      },
      origin: {
        type: 'string',
        description:
          'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.',
      },
      origRmkId: {
        type: 'string',
        description: 'Unique identifier of the Site Remark record from the originating system.',
      },
      type: {
        type: 'string',
        description: 'The remark type (e.g. Caution, Information, Misc, Restriction, etc.).',
      },
    },
    required: ['classificationMarking', 'dataMode', 'idSite', 'source', 'text'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.siteRemark.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
