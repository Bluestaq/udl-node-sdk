// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';

export class Eop extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single EOP Record as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  create(body: EopCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/eop', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single EOP record by its unique ID passed as a path
   * parameter.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.EopFull> {
    return this._client.get(`/udl/eop/${id}`, options);
  }

  /**
   * Service operation to update a single EOP Record. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  update(params: EopUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/udl/eop/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: EopListParams, options?: Core.RequestOptions): Core.APIPromise<EopListResponse> {
    return this._client.get('/udl/eop', { query, ...options });
  }

  /**
   * Service operation to delete an EOP Record specified by the passed ID path
   * parameter. Note, delete operations do not remove data from historical or
   * publish/subscribe stores. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/eop/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: EopCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/eop/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data and only return specified
   * columns/fields. Requested columns are specified by the 'columns' query parameter
   * and should be a comma separated list of valid fields for the specified data
   * type. classificationMarking is always returned. See the queryhelp operation
   * (/udl/<datatype>/queryhelp) for more details on valid/required query parameter
   * information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5
   * hours would return the satNo and period of elsets with an epoch greater than 5
   * hours ago.
   */
  listTuple(query: EopListTupleParams, options?: Core.RequestOptions): Core.APIPromise<EopListTupleResponse> {
    return this._client.get('/udl/eop/tuple', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/eop/queryhelp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * Model representation of Earth Orientation Parameters (EOP) produced by the IERS
 * (International Earth Rotation and Reference Systems Service). Earth Orientation
 * Parameters describe the irregularities of the earth's rotation. Technically,
 * they are the parameters which provide the rotation of the ITRS (International
 * Terrestrial Reference System) to the ICRS (International Celestial Reference
 * System) as a function of time. Universal time -- Universal time (UT1) is the
 * time of the earth clock, which performs one revolution in about 24h. It is
 * practically proportional to the sidereal time. The excess revolution time is
 * called length of day (LOD). Coordinates of the pole -- x and y are the
 * coordinates of the Celestial Ephemeris Pole (CEP) relative to the IRP, the IERS
 * Reference Pole. The CEP differs from the instantaneous rotation axis by
 * quasi-diurnal terms with amplitudes under 0.01" (see Seidelmann, 1982). The
 * x-axis is in the direction of the ITRF zero-meridian; the y-axis is in the
 * direction 90 degrees West longitude. Celestial pole offsets -- Celestial pole
 * offsets are described in the IAU Precession and Nutation models. The observed
 * differences with respect to the conventional celestial pole position defined by
 * the models are monitored and reported by the IERS. IERS Bulletins A and B
 * provide current information on the Earth's orientation in the IERS Reference
 * System. This includes Universal Time, coordinates of the terrestrial pole, and
 * celestial pole offsets. Bulletin A gives an advanced solution updated weekly;
 * the standard solution is given monthly in Bulletin B. Fields suffixed with 'B'
 * are Bulletin B values. All solutions are continuous within their respective
 * uncertainties. Bulletin A is issued by the IERS Rapid Service/Prediction Centre
 * at the U.S. Naval Observatory, Washington, DC and Bulletin B is issued by the
 * IERS Earth Orientation Centre at the Paris Observatory. IERS Bulletin A reports
 * the latest determinations for polar motion, UT1-UTC, and nutation offsets at
 * daily intervals based on a combination of contributed analysis results using
 * data from Very Long Baseline Interferometry (VLBI), Satellite Laser Ranging
 * (SLR), Global Positioning System (GPS) satellites, and Lunar Laser Ranging
 * (LLR). Predictions for variations a year into the future are also provided.
 * Meteorological predictions of variations in Atmospheric Angular Momentum (AAM)
 * are used to aid in the prediction of near-term UT1-UTC changes. This publication
 * is prepared by the IERS Rapid Service/Prediction Center.
 */
export interface EopAbridged {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted.
   */
  eopDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * The Bulletin A offset in obliquity dDe1980 with respect to the IAU 1976 Theory
   * of Precession and the IAU 1980 Theory of Nutation, measured in milliseconds of
   * arc. Note: dEpsilon is not used when this record represents IAU 2000 data.
   */
  dEpsilon?: number;

  /**
   * The Bulletin B offset in obliquity dDe1980 with respect to the IAU 1976 Theory
   * of Precession and the IAU 1980 Theory of Nutation, measured in milliseconds of
   * arc. Note: dEpsilonB is not used when this record represents IAU 2000 data.
   */
  dEpsilonB?: number;

  /**
   * The estimated uncertainty/error in the dEpsilon value in milliseconds of arc.
   */
  dEpsilonUnc?: number;

  /**
   * The Bulletin A offset in longitude dDy1980 with respect to the IAU 1976 Theory
   * of Precession and the IAU 1980 Theory of Nutation, measured in milliseconds of
   * arc. Note: dPSI is not used when this record represents IAU 2000 data.
   */
  dPSI?: number;

  /**
   * The Bulletin B offset in longitude dDy1980 with respect to the IAU 1976 Theory
   * of Precession and the IAU 1980 Theory of Nutation, measured in milliseconds of
   * arc. Note: dPSIB is not used when this record represents IAU 2000 data.
   */
  dPSIB?: number;

  /**
   * The estimated uncertainty/error in the dPSI value in milliseconds of arc.
   */
  dPSIUnc?: number;

  /**
   * The Bulletin A celestial pole offset along x-axis with respect to the IAU 2000A
   * Theory of Precession and Nutation, measured in milliseconds of arc. Note: dX is
   * not used when this record represents IAU 1980 data.
   */
  dX?: number;

  /**
   * The Bulletin B celestial pole offset along the X-axis with respect to the IAU
   * 2000A Theory of Precession and Nutation, measured in milliseconds of arc. Note:
   * dXB is not used when this record represents IAU 1980 data.
   */
  dXB?: number;

  /**
   * The estimated uncertainty/error in the Bulletin A dX value, in milliseconds of
   * arc.
   */
  dXUnc?: number;

  /**
   * The Bulletin A celestial pole offset along y-axis with respect to the IAU 2000A
   * Theory of Precession and Nutation, measured in milliseconds of arc. Note: dY is
   * not used when this record represents IAU 1980 data.
   */
  dY?: number;

  /**
   * The Bulletin B celestial pole offset along the Y-axis with respect to the IAU
   * 2000A Theory of Precession and Nutation, measured in milliseconds of arc. Note:
   * dYB is not used when this record represents IAU 1980 data.
   */
  dYB?: number;

  /**
   * The estimated uncertainty/error in the Bulletin A dY value, in milliseconds of
   * arc.
   */
  dYUnc?: number;

  /**
   * Bulletin A length of day or LOD in milliseconds. Universal time (UT1) is the
   * time of the earth clock, which performs one revolution in about 24h. It is
   * practically proportional to the sidereal time. The excess revolution time is
   * called length of day (LOD).
   */
  lod?: number;

  /**
   * The estimated uncertainty/error in the lod value in seconds.
   */
  lodUnc?: number;

  /**
   * Flag indicating Issued (I), or Predicted (P) for this record's nutation values
   * (dPSI and dEpsilon).
   */
  nutationState?: 'I' | 'P';

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * Flag indicating Issued (I), or Predicted (P) for this record's polar motion
   * values.
   */
  polarMotionState?: 'I' | 'P';

  /**
   * The Bulletin A X coordinate value of earth polar motion at eopDate. Polar motion
   * of the Earth is the motion of the Earth's rotational axis relative to its crust.
   * This is measured with respect to a reference frame in which the solid Earth is
   * fixed (a so-called Earth-centered, Earth-fixed or ECEF reference frame).
   * Measured in arc seconds.
   */
  polarMotionX?: number;

  /**
   * Bulletin B X coordinate value of earth polar motion at eopDate. Polar motion of
   * the Earth is the motion of the Earth's rotational axis relative to its crust.
   * This is measured with respect to a reference frame in which the solid Earth is
   * fixed (a so-called Earth-centered, Earth-fixed or ECEF reference frame).
   * Measured in arc seconds.
   */
  polarMotionXB?: number;

  /**
   * Estimated uncertainty/error in polarMotionX value in arc seconds.
   */
  polarMotionXUnc?: number;

  /**
   * The Bulletin A Y coordinate value of earth polar motion at eopDate. Polar motion
   * of the Earth is the motion of the Earth's rotational axis relative to its crust.
   * This is measured with respect to a reference frame in which the solid Earth is
   * fixed (a so-called Earth-centered, Earth-fixed or ECEF reference frame).
   * Measured in arc seconds.
   */
  polarMotionY?: number;

  /**
   * Bulletin B Y coordinate value of earth polar motion at eopDate. Polar motion of
   * the Earth is the motion of the Earth's rotational axis relative to its crust.
   * This is measured with respect to a reference frame in which the solid Earth is
   * fixed (a so-called Earth-centered, Earth-fixed or ECEF reference frame).
   * Measured in arc seconds.
   */
  polarMotionYB?: number;

  /**
   * Estimated uncertainty/error in polarMotionY value in arc seconds.
   */
  polarMotionYUnc?: number;

  /**
   * The IAU Theory of Precession and Theory of Nutation applied to the data in this
   * record. IAU1980 records employ the IAU 1976 Theory of Precession and IAU 1980
   * Theory of Nutation, and IAU2000 records employ the IAU 2000A Theory of
   * Precession and Nutation.
   */
  precessionNutationStd?: string;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The difference between the Bulletin A UT1 and UTC time scales as of eopDate in
   * seconds.
   */
  ut1UTC?: number;

  /**
   * The Bulletin B difference between the UT1 and UTC time scales as of eopDate in
   * seconds.
   */
  ut1UTCB?: number;

  /**
   * Flag indicating Issued (I), or Predicted (P) for this record''s Bulletin A
   * UT1-UTC values.
   */
  ut1UTCState?: 'I' | 'P';

  /**
   * The estimated uncertainty/error in the ut1UTC value in seconds.
   */
  ut1UTCUnc?: number;
}

export type EopListResponse = Array<EopAbridged>;

export type EopCountResponse = string;

export type EopListTupleResponse = Array<Shared.EopFull>;

export interface EopCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted.
   */
  eopDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The Bulletin A offset in obliquity dDe1980 with respect to the IAU 1976 Theory
   * of Precession and the IAU 1980 Theory of Nutation, measured in milliseconds of
   * arc. Note: dEpsilon is not used when this record represents IAU 2000 data.
   */
  dEpsilon?: number;

  /**
   * The Bulletin B offset in obliquity dDe1980 with respect to the IAU 1976 Theory
   * of Precession and the IAU 1980 Theory of Nutation, measured in milliseconds of
   * arc. Note: dEpsilonB is not used when this record represents IAU 2000 data.
   */
  dEpsilonB?: number;

  /**
   * The estimated uncertainty/error in the dEpsilon value in milliseconds of arc.
   */
  dEpsilonUnc?: number;

  /**
   * The Bulletin A offset in longitude dDy1980 with respect to the IAU 1976 Theory
   * of Precession and the IAU 1980 Theory of Nutation, measured in milliseconds of
   * arc. Note: dPSI is not used when this record represents IAU 2000 data.
   */
  dPSI?: number;

  /**
   * The Bulletin B offset in longitude dDy1980 with respect to the IAU 1976 Theory
   * of Precession and the IAU 1980 Theory of Nutation, measured in milliseconds of
   * arc. Note: dPSIB is not used when this record represents IAU 2000 data.
   */
  dPSIB?: number;

  /**
   * The estimated uncertainty/error in the dPSI value in milliseconds of arc.
   */
  dPSIUnc?: number;

  /**
   * The Bulletin A celestial pole offset along x-axis with respect to the IAU 2000A
   * Theory of Precession and Nutation, measured in milliseconds of arc. Note: dX is
   * not used when this record represents IAU 1980 data.
   */
  dX?: number;

  /**
   * The Bulletin B celestial pole offset along the X-axis with respect to the IAU
   * 2000A Theory of Precession and Nutation, measured in milliseconds of arc. Note:
   * dXB is not used when this record represents IAU 1980 data.
   */
  dXB?: number;

  /**
   * The estimated uncertainty/error in the Bulletin A dX value, in milliseconds of
   * arc.
   */
  dXUnc?: number;

  /**
   * The Bulletin A celestial pole offset along y-axis with respect to the IAU 2000A
   * Theory of Precession and Nutation, measured in milliseconds of arc. Note: dY is
   * not used when this record represents IAU 1980 data.
   */
  dY?: number;

  /**
   * The Bulletin B celestial pole offset along the Y-axis with respect to the IAU
   * 2000A Theory of Precession and Nutation, measured in milliseconds of arc. Note:
   * dYB is not used when this record represents IAU 1980 data.
   */
  dYB?: number;

  /**
   * The estimated uncertainty/error in the Bulletin A dY value, in milliseconds of
   * arc.
   */
  dYUnc?: number;

  /**
   * Bulletin A length of day or LOD in milliseconds. Universal time (UT1) is the
   * time of the earth clock, which performs one revolution in about 24h. It is
   * practically proportional to the sidereal time. The excess revolution time is
   * called length of day (LOD).
   */
  lod?: number;

  /**
   * The estimated uncertainty/error in the lod value in seconds.
   */
  lodUnc?: number;

  /**
   * Flag indicating Issued (I), or Predicted (P) for this record's nutation values
   * (dPSI and dEpsilon).
   */
  nutationState?: 'I' | 'P';

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Flag indicating Issued (I), or Predicted (P) for this record's polar motion
   * values.
   */
  polarMotionState?: 'I' | 'P';

  /**
   * The Bulletin A X coordinate value of earth polar motion at eopDate. Polar motion
   * of the Earth is the motion of the Earth's rotational axis relative to its crust.
   * This is measured with respect to a reference frame in which the solid Earth is
   * fixed (a so-called Earth-centered, Earth-fixed or ECEF reference frame).
   * Measured in arc seconds.
   */
  polarMotionX?: number;

  /**
   * Bulletin B X coordinate value of earth polar motion at eopDate. Polar motion of
   * the Earth is the motion of the Earth's rotational axis relative to its crust.
   * This is measured with respect to a reference frame in which the solid Earth is
   * fixed (a so-called Earth-centered, Earth-fixed or ECEF reference frame).
   * Measured in arc seconds.
   */
  polarMotionXB?: number;

  /**
   * Estimated uncertainty/error in polarMotionX value in arc seconds.
   */
  polarMotionXUnc?: number;

  /**
   * The Bulletin A Y coordinate value of earth polar motion at eopDate. Polar motion
   * of the Earth is the motion of the Earth's rotational axis relative to its crust.
   * This is measured with respect to a reference frame in which the solid Earth is
   * fixed (a so-called Earth-centered, Earth-fixed or ECEF reference frame).
   * Measured in arc seconds.
   */
  polarMotionY?: number;

  /**
   * Bulletin B Y coordinate value of earth polar motion at eopDate. Polar motion of
   * the Earth is the motion of the Earth's rotational axis relative to its crust.
   * This is measured with respect to a reference frame in which the solid Earth is
   * fixed (a so-called Earth-centered, Earth-fixed or ECEF reference frame).
   * Measured in arc seconds.
   */
  polarMotionYB?: number;

  /**
   * Estimated uncertainty/error in polarMotionY value in arc seconds.
   */
  polarMotionYUnc?: number;

  /**
   * The IAU Theory of Precession and Theory of Nutation applied to the data in this
   * record. IAU1980 records employ the IAU 1976 Theory of Precession and IAU 1980
   * Theory of Nutation, and IAU2000 records employ the IAU 2000A Theory of
   * Precession and Nutation.
   */
  precessionNutationStd?: string;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The difference between the Bulletin A UT1 and UTC time scales as of eopDate in
   * seconds.
   */
  ut1UTC?: number;

  /**
   * The Bulletin B difference between the UT1 and UTC time scales as of eopDate in
   * seconds.
   */
  ut1UTCB?: number;

  /**
   * Flag indicating Issued (I), or Predicted (P) for this record''s Bulletin A
   * UT1-UTC values.
   */
  ut1UTCState?: 'I' | 'P';

  /**
   * The estimated uncertainty/error in the ut1UTC value in seconds.
   */
  ut1UTCUnc?: number;
}

export interface EopUpdateParams {
  /**
   * Path param: The ID of the EOP to update.
   */
  path_id: string;

  /**
   * Body param: Classification marking of the data in IC/CAPCO Portion-marked
   * format.
   */
  classificationMarking: string;

  /**
   * Body param: Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST
   * data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Body param: Effective date/time for the EOP values in ISO8601 UTC format. The
   * values could be current or predicted.
   */
  eopDate: string;

  /**
   * Body param: Source of the data.
   */
  source: string;

  /**
   * Body param: Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Body param: The Bulletin A offset in obliquity dDe1980 with respect to the IAU
   * 1976 Theory of Precession and the IAU 1980 Theory of Nutation, measured in
   * milliseconds of arc. Note: dEpsilon is not used when this record represents IAU
   * 2000 data.
   */
  dEpsilon?: number;

  /**
   * Body param: The Bulletin B offset in obliquity dDe1980 with respect to the IAU
   * 1976 Theory of Precession and the IAU 1980 Theory of Nutation, measured in
   * milliseconds of arc. Note: dEpsilonB is not used when this record represents IAU
   * 2000 data.
   */
  dEpsilonB?: number;

  /**
   * Body param: The estimated uncertainty/error in the dEpsilon value in
   * milliseconds of arc.
   */
  dEpsilonUnc?: number;

  /**
   * Body param: The Bulletin A offset in longitude dDy1980 with respect to the IAU
   * 1976 Theory of Precession and the IAU 1980 Theory of Nutation, measured in
   * milliseconds of arc. Note: dPSI is not used when this record represents IAU 2000
   * data.
   */
  dPSI?: number;

  /**
   * Body param: The Bulletin B offset in longitude dDy1980 with respect to the IAU
   * 1976 Theory of Precession and the IAU 1980 Theory of Nutation, measured in
   * milliseconds of arc. Note: dPSIB is not used when this record represents IAU
   * 2000 data.
   */
  dPSIB?: number;

  /**
   * Body param: The estimated uncertainty/error in the dPSI value in milliseconds of
   * arc.
   */
  dPSIUnc?: number;

  /**
   * Body param: The Bulletin A celestial pole offset along x-axis with respect to
   * the IAU 2000A Theory of Precession and Nutation, measured in milliseconds of
   * arc. Note: dX is not used when this record represents IAU 1980 data.
   */
  dX?: number;

  /**
   * Body param: The Bulletin B celestial pole offset along the X-axis with respect
   * to the IAU 2000A Theory of Precession and Nutation, measured in milliseconds of
   * arc. Note: dXB is not used when this record represents IAU 1980 data.
   */
  dXB?: number;

  /**
   * Body param: The estimated uncertainty/error in the Bulletin A dX value, in
   * milliseconds of arc.
   */
  dXUnc?: number;

  /**
   * Body param: The Bulletin A celestial pole offset along y-axis with respect to
   * the IAU 2000A Theory of Precession and Nutation, measured in milliseconds of
   * arc. Note: dY is not used when this record represents IAU 1980 data.
   */
  dY?: number;

  /**
   * Body param: The Bulletin B celestial pole offset along the Y-axis with respect
   * to the IAU 2000A Theory of Precession and Nutation, measured in milliseconds of
   * arc. Note: dYB is not used when this record represents IAU 1980 data.
   */
  dYB?: number;

  /**
   * Body param: The estimated uncertainty/error in the Bulletin A dY value, in
   * milliseconds of arc.
   */
  dYUnc?: number;

  /**
   * Body param: Bulletin A length of day or LOD in milliseconds. Universal time
   * (UT1) is the time of the earth clock, which performs one revolution in about
   * 24h. It is practically proportional to the sidereal time. The excess revolution
   * time is called length of day (LOD).
   */
  lod?: number;

  /**
   * Body param: The estimated uncertainty/error in the lod value in seconds.
   */
  lodUnc?: number;

  /**
   * Body param: Flag indicating Issued (I), or Predicted (P) for this record's
   * nutation values (dPSI and dEpsilon).
   */
  nutationState?: 'I' | 'P';

  /**
   * Body param: Originating system or organization which produced the data, if
   * different from the source. The origin may be different than the source if the
   * source was a mediating system which forwarded the data on behalf of the origin
   * system. If null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Body param: Flag indicating Issued (I), or Predicted (P) for this record's polar
   * motion values.
   */
  polarMotionState?: 'I' | 'P';

  /**
   * Body param: The Bulletin A X coordinate value of earth polar motion at eopDate.
   * Polar motion of the Earth is the motion of the Earth's rotational axis relative
   * to its crust. This is measured with respect to a reference frame in which the
   * solid Earth is fixed (a so-called Earth-centered, Earth-fixed or ECEF reference
   * frame). Measured in arc seconds.
   */
  polarMotionX?: number;

  /**
   * Body param: Bulletin B X coordinate value of earth polar motion at eopDate.
   * Polar motion of the Earth is the motion of the Earth's rotational axis relative
   * to its crust. This is measured with respect to a reference frame in which the
   * solid Earth is fixed (a so-called Earth-centered, Earth-fixed or ECEF reference
   * frame). Measured in arc seconds.
   */
  polarMotionXB?: number;

  /**
   * Body param: Estimated uncertainty/error in polarMotionX value in arc seconds.
   */
  polarMotionXUnc?: number;

  /**
   * Body param: The Bulletin A Y coordinate value of earth polar motion at eopDate.
   * Polar motion of the Earth is the motion of the Earth's rotational axis relative
   * to its crust. This is measured with respect to a reference frame in which the
   * solid Earth is fixed (a so-called Earth-centered, Earth-fixed or ECEF reference
   * frame). Measured in arc seconds.
   */
  polarMotionY?: number;

  /**
   * Body param: Bulletin B Y coordinate value of earth polar motion at eopDate.
   * Polar motion of the Earth is the motion of the Earth's rotational axis relative
   * to its crust. This is measured with respect to a reference frame in which the
   * solid Earth is fixed (a so-called Earth-centered, Earth-fixed or ECEF reference
   * frame). Measured in arc seconds.
   */
  polarMotionYB?: number;

  /**
   * Body param: Estimated uncertainty/error in polarMotionY value in arc seconds.
   */
  polarMotionYUnc?: number;

  /**
   * Body param: The IAU Theory of Precession and Theory of Nutation applied to the
   * data in this record. IAU1980 records employ the IAU 1976 Theory of Precession
   * and IAU 1980 Theory of Nutation, and IAU2000 records employ the IAU 2000A Theory
   * of Precession and Nutation.
   */
  precessionNutationStd?: string;

  /**
   * Body param: Optional URI location in the document repository of the raw file
   * parsed by the system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Body param: The difference between the Bulletin A UT1 and UTC time scales as of
   * eopDate in seconds.
   */
  ut1UTC?: number;

  /**
   * Body param: The Bulletin B difference between the UT1 and UTC time scales as of
   * eopDate in seconds.
   */
  ut1UTCB?: number;

  /**
   * Body param: Flag indicating Issued (I), or Predicted (P) for this record''s
   * Bulletin A UT1-UTC values.
   */
  ut1UTCState?: 'I' | 'P';

  /**
   * Body param: The estimated uncertainty/error in the ut1UTC value in seconds.
   */
  ut1UTCUnc?: number;
}

export interface EopListParams {
  /**
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eopDate: string;
}

export interface EopCountParams {
  /**
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eopDate: string;
}

export interface EopListTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eopDate: string;
}

Eop.History = History;

export declare namespace Eop {
  export {
    type EopAbridged as EopAbridged,
    type EopListResponse as EopListResponse,
    type EopCountResponse as EopCountResponse,
    type EopListTupleResponse as EopListTupleResponse,
    type EopCreateParams as EopCreateParams,
    type EopUpdateParams as EopUpdateParams,
    type EopListParams as EopListParams,
    type EopCountParams as EopCountParams,
    type EopListTupleParams as EopListTupleParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
