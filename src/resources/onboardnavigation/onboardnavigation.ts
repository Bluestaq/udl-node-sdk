// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/onboardnavigation/history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
} from 'bluestaq@unified-data-library/resources/onboardnavigation/history';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';

export class Onboardnavigation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: OnboardnavigationListParams,
    options?: RequestOptions,
  ): PagePromise<OnboardnavigationListResponsesOffsetPage, OnboardnavigationListResponse> {
    return this._client.getAPIList('/udl/onboardnavigation', OffsetPage<OnboardnavigationListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: OnboardnavigationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/onboardnavigation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * OnboardNavigation records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(params: OnboardnavigationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/onboardnavigation/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<OnboardnavigationQueryhelpResponse> {
    return this._client.get('/udl/onboardnavigation/queryhelp', options);
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
  tuple(
    query: OnboardnavigationTupleParams,
    options?: RequestOptions,
  ): APIPromise<OnboardnavigationTupleResponse> {
    return this._client.get('/udl/onboardnavigation/tuple', { query, ...options });
  }

  /**
   * Service operation to take a list of onboard navigation records as a POST body
   * and ingest into the database. This operation is intended to be used for
   * automated feeds into UDL. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: OnboardnavigationUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-onboardnavigation', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type OnboardnavigationListResponsesOffsetPage = OffsetPage<OnboardnavigationListResponse>;

/**
 * These services provide spacecraft positional data derived from on-board
 * navigational sensors. Navigational points are provided in kilometers and in a
 * user specified reference frame, with ECI J2K being preferred.
 */
export interface OnboardnavigationListResponse {
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
   * Source of the data.
   */
  source: string;

  /**
   * Start time of the sensor data, in ISO 8601 UTC format.
   */
  startTime: string;

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
   * Arrays of spacecraft delta position (X, Y, Z), in km, in the specified
   * referenceFrame, between the onboard state and the last accepted sensor position.
   */
  deltaPos?: Array<Array<number>>;

  /**
   * End time of the sensor data, in ISO 8601 UTC format.
   */
  endTime?: string;

  /**
   * Unique identifier of the parent EphemerisSet, if this data is correlated with an
   * Ephemeris. If multiple nav sensor records are required, this ID may be
   * associated with each of those records if each is synced to the ephemeris points.
   */
  esId?: string;

  /**
   * Unique identifier of the primary satellite on-orbit object.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the last onboard state vector.
   */
  idStateVector?: string;

  /**
   * Arrays of spacecraft position (X, Y, Z), in km, in the specified referenceFrame,
   * based on the onboard magnetometer, at each epoch.
   */
  mag?: Array<Array<number>>;

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
   * Optional identifier provided by the data source to indicate the target object of
   * this record. This may be an internal identifier and not necessarily map to a
   * valid satellite number.
   */
  origObjectId?: string;

  /**
   * The reference frame in which the sensor derived positions are provided. If the
   * referenceFrame is null it is assumed to be J2000. Note that this frame is
   * assumed to apply to all of the sensor data in this record. If onboard sensors
   * process positional estimates in different frames then separate records should be
   * generated.
   */
  referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The last load time of the current star catalog onboard this spacecraft.
   */
  starCatLoadTime?: string;

  /**
   * The name or identifier the star catalog in use.
   */
  starCatName?: string;

  /**
   * Arrays of spacecraft position (X, Y, Z), in km, in the specified referenceFrame,
   * based on the onboard star tracker, at each epoch.
   */
  starTracker?: Array<Array<number>>;

  /**
   * Arrays of spacecraft position (X, Y, Z), in km, in the specified referenceFrame,
   * based on the onboard sun sensor, at each epoch.
   */
  sunSensor?: Array<Array<number>>;

  /**
   * Array of epochs of the observations, in ISO 8601 UTC format. The epochs are
   * assumed to correspond to all sensor data in this record. If sensors do not share
   * a common epoch then separate records should be generated.
   */
  ts?: Array<string>;
}

export type OnboardnavigationCountResponse = string;

export interface OnboardnavigationQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<OnboardnavigationQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace OnboardnavigationQueryhelpResponse {
  export interface Parameter {
    classificationMarking?: string;

    derived?: boolean;

    description?: string;

    elemMatch?: boolean;

    format?: string;

    histQuerySupported?: boolean;

    histTupleSupported?: boolean;

    name?: string;

    required?: boolean;

    restQuerySupported?: boolean;

    restTupleSupported?: boolean;

    type?: string;

    unitOfMeasure?: string;

    utcDate?: boolean;
  }
}

export type OnboardnavigationTupleResponse = Array<Shared.OnboardnavigationFull>;

export interface OnboardnavigationListParams extends OffsetPageParams {
  /**
   * Start time of the sensor data, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

export interface OnboardnavigationCountParams {
  /**
   * Start time of the sensor data, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface OnboardnavigationCreateBulkParams {
  body: Array<OnboardnavigationCreateBulkParams.Body>;
}

export namespace OnboardnavigationCreateBulkParams {
  /**
   * These services provide spacecraft positional data derived from on-board
   * navigational sensors. Navigational points are provided in kilometers and in a
   * user specified reference frame, with ECI J2K being preferred.
   */
  export interface Body {
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
     * Source of the data.
     */
    source: string;

    /**
     * Start time of the sensor data, in ISO 8601 UTC format.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Arrays of spacecraft delta position (X, Y, Z), in km, in the specified
     * referenceFrame, between the onboard state and the last accepted sensor position.
     */
    deltaPos?: Array<Array<number>>;

    /**
     * End time of the sensor data, in ISO 8601 UTC format.
     */
    endTime?: string;

    /**
     * Unique identifier of the parent EphemerisSet, if this data is correlated with an
     * Ephemeris. If multiple nav sensor records are required, this ID may be
     * associated with each of those records if each is synced to the ephemeris points.
     */
    esId?: string;

    /**
     * Unique identifier of the last onboard state vector.
     */
    idStateVector?: string;

    /**
     * Arrays of spacecraft position (X, Y, Z), in km, in the specified referenceFrame,
     * based on the onboard magnetometer, at each epoch.
     */
    mag?: Array<Array<number>>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the data source to indicate the target object of
     * this record. This may be an internal identifier and not necessarily map to a
     * valid satellite number.
     */
    origObjectId?: string;

    /**
     * The reference frame in which the sensor derived positions are provided. If the
     * referenceFrame is null it is assumed to be J2000. Note that this frame is
     * assumed to apply to all of the sensor data in this record. If onboard sensors
     * process positional estimates in different frames then separate records should be
     * generated.
     */
    referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The last load time of the current star catalog onboard this spacecraft.
     */
    starCatLoadTime?: string;

    /**
     * The name or identifier the star catalog in use.
     */
    starCatName?: string;

    /**
     * Arrays of spacecraft position (X, Y, Z), in km, in the specified referenceFrame,
     * based on the onboard star tracker, at each epoch.
     */
    starTracker?: Array<Array<number>>;

    /**
     * Arrays of spacecraft position (X, Y, Z), in km, in the specified referenceFrame,
     * based on the onboard sun sensor, at each epoch.
     */
    sunSensor?: Array<Array<number>>;

    /**
     * Array of epochs of the observations, in ISO 8601 UTC format. The epochs are
     * assumed to correspond to all sensor data in this record. If sensors do not share
     * a common epoch then separate records should be generated.
     */
    ts?: Array<string>;
  }
}

export interface OnboardnavigationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Start time of the sensor data, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface OnboardnavigationUnvalidatedPublishParams {
  body: Array<OnboardnavigationUnvalidatedPublishParams.Body>;
}

export namespace OnboardnavigationUnvalidatedPublishParams {
  /**
   * These services provide spacecraft positional data derived from on-board
   * navigational sensors. Navigational points are provided in kilometers and in a
   * user specified reference frame, with ECI J2K being preferred.
   */
  export interface Body {
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
     * Source of the data.
     */
    source: string;

    /**
     * Start time of the sensor data, in ISO 8601 UTC format.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Arrays of spacecraft delta position (X, Y, Z), in km, in the specified
     * referenceFrame, between the onboard state and the last accepted sensor position.
     */
    deltaPos?: Array<Array<number>>;

    /**
     * End time of the sensor data, in ISO 8601 UTC format.
     */
    endTime?: string;

    /**
     * Unique identifier of the parent EphemerisSet, if this data is correlated with an
     * Ephemeris. If multiple nav sensor records are required, this ID may be
     * associated with each of those records if each is synced to the ephemeris points.
     */
    esId?: string;

    /**
     * Unique identifier of the last onboard state vector.
     */
    idStateVector?: string;

    /**
     * Arrays of spacecraft position (X, Y, Z), in km, in the specified referenceFrame,
     * based on the onboard magnetometer, at each epoch.
     */
    mag?: Array<Array<number>>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the data source to indicate the target object of
     * this record. This may be an internal identifier and not necessarily map to a
     * valid satellite number.
     */
    origObjectId?: string;

    /**
     * The reference frame in which the sensor derived positions are provided. If the
     * referenceFrame is null it is assumed to be J2000. Note that this frame is
     * assumed to apply to all of the sensor data in this record. If onboard sensors
     * process positional estimates in different frames then separate records should be
     * generated.
     */
    referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The last load time of the current star catalog onboard this spacecraft.
     */
    starCatLoadTime?: string;

    /**
     * The name or identifier the star catalog in use.
     */
    starCatName?: string;

    /**
     * Arrays of spacecraft position (X, Y, Z), in km, in the specified referenceFrame,
     * based on the onboard star tracker, at each epoch.
     */
    starTracker?: Array<Array<number>>;

    /**
     * Arrays of spacecraft position (X, Y, Z), in km, in the specified referenceFrame,
     * based on the onboard sun sensor, at each epoch.
     */
    sunSensor?: Array<Array<number>>;

    /**
     * Array of epochs of the observations, in ISO 8601 UTC format. The epochs are
     * assumed to correspond to all sensor data in this record. If sensors do not share
     * a common epoch then separate records should be generated.
     */
    ts?: Array<string>;
  }
}

Onboardnavigation.History = History;

export declare namespace Onboardnavigation {
  export {
    type OnboardnavigationListResponse as OnboardnavigationListResponse,
    type OnboardnavigationCountResponse as OnboardnavigationCountResponse,
    type OnboardnavigationQueryhelpResponse as OnboardnavigationQueryhelpResponse,
    type OnboardnavigationTupleResponse as OnboardnavigationTupleResponse,
    type OnboardnavigationListResponsesOffsetPage as OnboardnavigationListResponsesOffsetPage,
    type OnboardnavigationListParams as OnboardnavigationListParams,
    type OnboardnavigationCountParams as OnboardnavigationCountParams,
    type OnboardnavigationCreateBulkParams as OnboardnavigationCreateBulkParams,
    type OnboardnavigationTupleParams as OnboardnavigationTupleParams,
    type OnboardnavigationUnvalidatedPublishParams as OnboardnavigationUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
