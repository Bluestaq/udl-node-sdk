// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitthrusterstatus',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/udl/onorbitthrusterstatus',
};

export const tool: Tool = {
  name: 'create_onorbitthrusterstatus',
  description:
    'Service operation to take a single OnorbitThrusterStatus record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
      idOnorbitThruster: {
        type: 'string',
        description:
          "ID of the associated OnorbitThruster record. This ID can be used to obtain additional information on an onorbit thruster object using the 'get  by ID' operation (e.g. /udl/onorbitthruster/{id}). For example, the OnorbitThruster object with idOnorbitThruster = abc would be queried as /udl/onorbitthruster/abc.",
      },
      source: {
        type: 'string',
        description: 'Source of the data.',
      },
      statusTime: {
        type: 'string',
        description:
          'Datetime of the thruster status observation in ISO 8601 UTC datetime format with millisecond precision.',
        format: 'date-time',
      },
      id: {
        type: 'string',
        description: 'Unique identifier of the record, auto-generated by the system.',
      },
      estDeltaV: {
        type: 'number',
        description: 'Estimated available delta-velocity for this thruster, in meters per second.',
      },
      fuelMass: {
        type: 'number',
        description: "Total fuel mass available for this thruster's type, in kilograms.",
      },
      fuelMassUnc: {
        type: 'number',
        description:
          '1-sigma uncertainty of the total fuel mass available for this thruster type, in kilograms.',
      },
      isp: {
        type: 'number',
        description: 'Specific impulse for this thruster, in seconds.',
      },
      maxDeltaV: {
        type: 'number',
        description: 'Maximum available delta-velocity for this thruster, in meters per second.',
      },
      minDeltaV: {
        type: 'number',
        description: 'Minimum available delta-velocity for this thruster, in meters per second.',
      },
      name: {
        type: 'string',
        description: 'Identifier of this thruster.',
      },
      operational: {
        type: 'boolean',
        description: 'Flag indicating if this thruster is operational.',
      },
      origin: {
        type: 'string',
        description:
          'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.',
      },
      propMassAvg: {
        type: 'number',
        description: "Average available propellant mass for this thruster's type, in kilograms.",
      },
      propMassMax: {
        type: 'number',
        description: "Maximum available propellant mass for this thruster's type, in kilograms.",
      },
      propMassMedian: {
        type: 'number',
        description: "Median available propellant mass for this thruster's type, in kilograms.",
      },
      propMassMin: {
        type: 'number',
        description: "Minimum available propellant mass for this thruster's type, in kilograms.",
      },
      thrustMax: {
        type: 'number',
        description: 'Maximum available thrust for this thruster, in newtons.',
      },
      totalDeltaV: {
        type: 'number',
        description: "Total delta-velocity available for this thruster's type, in meters per second.",
      },
    },
    required: ['classificationMarking', 'dataMode', 'idOnorbitThruster', 'source', 'statusTime'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.onorbitthrusterstatus.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
