// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'sera_data_comm_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/seradatacommdetails',
};

export const tool: Tool = {
  name: 'list_sera_data_comm_details',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    description: 'Seradata-compiled information on communications payloads.',\n    properties: {\n      classificationMarking: {\n        type: 'string',\n        description: 'Classification marking of the data in IC/CAPCO Portion-marked format.'\n      },\n      dataMode: {\n        type: 'string',\n        description: 'Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:\\n\\nEXERCISE:&nbsp;Data pertaining to a government or military exercise. The data may include both real and simulated data.\\n\\nREAL:&nbsp;Data collected or produced that pertains to real-world objects, events, and analysis.\\n\\nSIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world datasets.\\n\\nTEST:&nbsp;Specific datasets used to evaluate compliance with specifications and requirements, and for validating technical, functional, and performance characteristics.',\n        enum: [          'REAL',\n          'TEST',\n          'SIMULATED',\n          'EXERCISE'\n        ]\n      },\n      source: {\n        type: 'string',\n        description: 'Source of the data.'\n      },\n      id: {\n        type: 'string',\n        description: 'Unique identifier of the record, auto-generated by the system.'\n      },\n      band: {\n        type: 'string',\n        description: 'Name of the band of this RF range (e.g. X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more details and descriptions of each band name.'\n      },\n      bandwidth: {\n        type: 'number',\n        description: 'Comm bandwidth in Mhz.'\n      },\n      createdAt: {\n        type: 'string',\n        description: 'Time the row was created in the database, auto-populated by the system.',\n        format: 'date-time'\n      },\n      createdBy: {\n        type: 'string',\n        description: 'Application user who created the row in the database, auto-populated by the system.'\n      },\n      eirp: {\n        type: 'number',\n        description: 'Effective isotropic radiated power in dB.'\n      },\n      estHtsTotalCapacity: {\n        type: 'number',\n        description: 'Comm estimated HtsTotalCapacity in Gbps.'\n      },\n      estHtsTotalUserDownlinkBandwidthPerBeam: {\n        type: 'number',\n        description: 'Comm estimated HtsTotalUserDownlinkBandwidthPerBeam in Mhz.'\n      },\n      estHtsTotalUserUplinkBandwidthPerBeam: {\n        type: 'number',\n        description: 'Comm estimated HtsTotalUserUplinkBandwidthPerBeam in Mhz.'\n      },\n      gatewayDownlinkFrom: {\n        type: 'number',\n        description: 'Comm gatewayDownlinkFrom in Ghz.'\n      },\n      gatewayDownlinkTo: {\n        type: 'number',\n        description: 'Comm gatewayDownlinkTo in Ghz.'\n      },\n      gatewayUplinkFrom: {\n        type: 'number',\n        description: 'Comm gatewayUplinkFrom in Ghz.'\n      },\n      gatewayUplinkTo: {\n        type: 'number',\n        description: 'Comm gatewayUplinkTo in Ghz.'\n      },\n      hostedForCompanyOrgId: {\n        type: 'string',\n        description: 'Comm hostedForCompanyOrgId.'\n      },\n      htsNumUserSpotBeams: {\n        type: 'integer',\n        description: 'Comm htsNumUserSpotBeams.'\n      },\n      htsUserDownlinkBandwidthPerBeam: {\n        type: 'number',\n        description: 'Comm htsUserDownlinkBandwidthPerBeam in Mhz.'\n      },\n      htsUserUplinkBandwidthPerBeam: {\n        type: 'number',\n        description: 'Comm htsUserUplinkBandwidthPerBeam in Mhz.'\n      },\n      idComm: {\n        type: 'string',\n        description: 'UUID of the parent Comm record.'\n      },\n      manufacturerOrgId: {\n        type: 'string',\n        description: 'Comm manufacturerOrgId.'\n      },\n      num36MhzEquivalentTransponders: {\n        type: 'integer',\n        description: 'Comm num36MhzEquivalentTransponders.'\n      },\n      numOperationalTransponders: {\n        type: 'integer',\n        description: 'Comm numOperationalTransponders.'\n      },\n      numSpareTransponders: {\n        type: 'integer',\n        description: 'Comm numSpareTransponders.'\n      },\n      origin: {\n        type: 'string',\n        description: 'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.'\n      },\n      origNetwork: {\n        type: 'string',\n        description: 'The originating source network on which this record was created, auto-populated by the system.'\n      },\n      payloadNotes: {\n        type: 'string',\n        description: 'Payload notes.'\n      },\n      polarization: {\n        type: 'string',\n        description: 'Comm polarization.'\n      },\n      solidStatePowerAmp: {\n        type: 'number',\n        description: 'Solid state power amplifier, in Watts.'\n      },\n      spacecraftId: {\n        type: 'string',\n        description: 'Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).'\n      },\n      tradeLeaseOrgId: {\n        type: 'string',\n        description: 'Comm tradeLeaseOrgId.'\n      },\n      travelingWaveTubeAmplifier: {\n        type: 'number',\n        description: 'Comm travelingWaveTubeAmplifier in Watts.'\n      },\n      userDownlinkFrom: {\n        type: 'number',\n        description: 'Comm userDownlinkFrom in Ghz.'\n      },\n      userDownlinkTo: {\n        type: 'number',\n        description: 'Comm userDownlinkTo in Ghz.'\n      },\n      userUplinkFrom: {\n        type: 'number',\n        description: 'Comm userUplinkFrom in Ghz.'\n      },\n      userUplinkTo: {\n        type: 'number',\n        description: 'Comm userUplinkTo in Ghz.'\n      }\n    },\n    required: [      'classificationMarking',\n      'dataMode',\n      'source'\n    ]\n  }\n}\n```",
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.seraDataCommDetails.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
