// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'airfield_slots',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/udl/airfieldslot/{id}',
};

export const tool: Tool = {
  name: 'update_airfield_slots',
  description:
    'Service operation to update a single airfieldslot record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      path_id: {
        type: 'string',
      },
      airfieldName: {
        type: 'string',
        description: 'The name of the airfield where this slot is located.',
      },
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
      name: {
        type: 'string',
        description: 'Name of this slot.',
      },
      source: {
        type: 'string',
        description: 'Source of the data.',
      },
      body_id: {
        type: 'string',
        description: 'Unique identifier of the record, auto-generated by the system.',
      },
      acSlotCat: {
        type: 'string',
        description: 'Largest category of aircraft supported in this slot (WIDE, NARROW, HELO, ALL, OTHER).',
        enum: ['WIDE', 'NARROW', 'HELO', 'ALL', 'OTHER'],
      },
      altAirfieldId: {
        type: 'string',
        description: 'Alternate airfield identifier provided by the source.',
      },
      capacity: {
        type: 'integer',
        description: 'Number of aircraft that can fit in this slot at the same time.',
      },
      endTime: {
        type: 'string',
        description:
          'Latest zulu time this slot is available based on daily standard hours. Not applicable to slots with type PARKING. Abnormal hours, such as holidays, should be marked via the AirfieldSlotConsumption schema.',
      },
      icao: {
        type: 'string',
        description: 'The International Civil Aviation Organization (ICAO) code of the airfield.',
      },
      idAirfield: {
        type: 'string',
        description: 'Unique identifier of the Airfield for which this slot information applies.',
      },
      minSeparation: {
        type: 'integer',
        description:
          'Minimum time that must elapse between different aircraft leaving and entering this slot, in minutes.',
      },
      notes: {
        type: 'string',
        description: 'Optional notes/comments for this airfield slot.',
      },
      origin: {
        type: 'string',
        description:
          'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.',
      },
      startTime: {
        type: 'string',
        description:
          'Zulu time this slot is first available based on daily standard hours. Not applicable to slots with type PARKING. Abnormal hours, such as holidays, should be marked via the AirfieldSlotConsumption schema.',
      },
      type: {
        type: 'string',
        description: 'Designates how this slot can be used (WORKING, PARKING, TAKEOFF, LANDING, OTHER).',
        enum: ['WORKING', 'PARKING', 'TAKEOFF', 'LANDING', 'OTHER'],
      },
    },
    required: ['path_id', 'airfieldName', 'classificationMarking', 'dataMode', 'name', 'source'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.airfieldSlots.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
