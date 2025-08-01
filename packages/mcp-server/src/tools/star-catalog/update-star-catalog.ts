// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'star_catalog',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/udl/starcatalog/{id}',
};

export const tool: Tool = {
  name: 'update_star_catalog',
  description:
    'Service operation to update a single starcatalog record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      path_id: {
        type: 'string',
      },
      astrometryOrigin: {
        type: 'string',
        description: 'Originating astrometric catalog for this object. Enum: [GAIADR3, HIPPARCOS, USNOBSC].',
        enum: ['GAIADR3', 'HIPPARCOS', 'USNOBSC'],
      },
      classificationMarking: {
        type: 'string',
        description: 'Classification marking of the data in IC/CAPCO Portion-marked format.',
      },
      csId: {
        type: 'integer',
        description: 'The ID of this object in the specific catalog associated with this record.',
      },
      dataMode: {
        type: 'string',
        description:
          'Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:\n\nEXERCISE:&nbsp;Data pertaining to a government or military exercise. The data may include both real and simulated data.\n\nREAL:&nbsp;Data collected or produced that pertains to real-world objects, events, and analysis.\n\nSIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world datasets.\n\nTEST:&nbsp;Specific datasets used to evaluate compliance with specifications and requirements, and for validating technical, functional, and performance characteristics.',
        enum: ['REAL', 'TEST', 'SIMULATED', 'EXERCISE'],
      },
      dec: {
        type: 'number',
        description:
          'Barycentric declination of the source in International Celestial Reference System (ICRS) at the reference epoch, in degrees.',
      },
      ra: {
        type: 'number',
        description:
          'Barycentric right ascension of the source in the International Celestial Reference System (ICRS) frame at the reference epoch, in degrees.',
      },
      source: {
        type: 'string',
        description: 'Source of the data.',
      },
      starEpoch: {
        type: 'number',
        description:
          'Reference epoch to which the astrometric source parameters are referred, expressed as Julian Year in Barycentric Coordinate Time (TCB).',
      },
      body_id: {
        type: 'string',
        description: 'Unique identifier of the record, auto-generated by the system.',
      },
      bpmag: {
        type: 'number',
        description: 'Gaia DR3 optical photometric Bp-band magnitude in the Vega scale.',
      },
      bpmagUnc: {
        type: 'number',
        description: 'Gaia DR3 optical Bp-band magnitude uncertainty in the Vega scale.',
      },
      catVersion: {
        type: 'string',
        description: 'The version of the catalog associated with this object.',
      },
      decUnc: {
        type: 'number',
        description:
          'Uncertainty of the declination of the source, in milliarcseconds, at the reference epoch.',
      },
      gaiadr3CatId: {
        type: 'integer',
        description: 'The ID of this object in the Gaia DR3 Catalog.',
      },
      gmag: {
        type: 'number',
        description: 'Gaia DR3 optical photometric G-band magnitude in the Vega scale.',
      },
      gmagUnc: {
        type: 'number',
        description: 'Gaia DR3 optical photometric G-band magnitude uncertainty in the Vega scale.',
      },
      gncCatId: {
        type: 'integer',
        description: 'The ID of this object in the Guidance and Navagation Control (GNC) Catalog.',
      },
      hipCatId: {
        type: 'integer',
        description: 'The ID of this object in the Hipparcos Catalog.',
      },
      hmag: {
        type: 'number',
        description:
          'Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared photometric H-band magnitude in the Vega scale.',
      },
      hmagUnc: {
        type: 'number',
        description:
          'Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared photometric H-band magnitude uncertainty in the Vega scale.',
      },
      jmag: {
        type: 'number',
        description:
          'Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared photometric J-band magnitude in the Vega scale.',
      },
      jmagUnc: {
        type: 'number',
        description:
          'Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared photometric J-band magnitude uncertainty in the Vega scale.',
      },
      kmag: {
        type: 'number',
        description:
          'Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared photometric K-band magnitude in the Vega scale.',
      },
      kmagUnc: {
        type: 'number',
        description:
          'Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared photometric K-band magnitude uncertainty in the Vega scale.',
      },
      multFlag: {
        type: 'boolean',
        description: 'Flag indicating that this is a multiple object source.',
      },
      neighborDistance: {
        type: 'number',
        description: 'Distance between source and nearest neighbor, in arcseconds.',
      },
      neighborFlag: {
        type: 'boolean',
        description: 'Flag indicating that the nearest catalog neighbor is closer than 4.6 arcseconds.',
      },
      neighborId: {
        type: 'integer',
        description: 'The catalog ID of the nearest neighbor to this source.',
      },
      origin: {
        type: 'string',
        description:
          'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.',
      },
      parallax: {
        type: 'number',
        description: 'Absolute stellar parallax of the source, in milliarcseconds.',
      },
      parallaxUnc: {
        type: 'number',
        description: 'Uncertainty of the stellar parallax, in milliarcseconds.',
      },
      pmdec: {
        type: 'number',
        description:
          'Proper motion in declination of the source, in milliarcseconds/year, at the reference epoch.',
      },
      pmdecUnc: {
        type: 'number',
        description: 'Uncertainty of proper motion in declination, in milliarcseconds/year.',
      },
      pmra: {
        type: 'number',
        description:
          'Proper motion in right ascension of the source, in milliarcseconds/year, at the reference epoch.',
      },
      pmraUnc: {
        type: 'number',
        description: 'Uncertainty of proper motion in right ascension, in milliarcseconds/year.',
      },
      pmUncFlag: {
        type: 'boolean',
        description:
          'Flag indicating that the proper motion uncertainty in either ra or dec is greater than 10 milliarcseconds/year.',
      },
      posUncFlag: {
        type: 'boolean',
        description:
          'Flag indicating that the position uncertainty in either ra or dec is greater than 100 milliarcseconds.',
      },
      raUnc: {
        type: 'number',
        description:
          'Uncertainty of the right ascension of the source, in milliarcseconds, at the reference epoch.',
      },
      rpmag: {
        type: 'number',
        description: 'Gaia DR3 optical Rp-band magnitude in the Vega scale.',
      },
      rpmagUnc: {
        type: 'number',
        description: 'Gaia DR3 optical photometric Rp-band magnitude uncertainty in the Vega scale.',
      },
      shift: {
        type: 'number',
        description: 'Photocentric shift caused by neighbors, in arcseconds.',
      },
      shiftFlag: {
        type: 'boolean',
        description: 'Flag indicating that the photocentric shift is greater than 50 milliarcseconds.',
      },
      varFlag: {
        type: 'boolean',
        description: 'Flag indicating that the source exhibits variable magnitude.',
      },
    },
    required: [
      'path_id',
      'astrometryOrigin',
      'classificationMarking',
      'csId',
      'dataMode',
      'dec',
      'ra',
      'source',
      'starEpoch',
    ],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.starCatalog.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
