// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class IonOobservation extends APIResource {
  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: IonOobservationListParams,
    options?: RequestOptions,
  ): PagePromise<IonOobservationListResponsesOffsetPage, IonOobservationListResponse> {
    return this._client.getAPIList('/udl/ionoobservation', OffsetPage<IonOobservationListResponse>, {
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
  count(query: IonOobservationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/ionoobservation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * IonoObservation records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(params: IonOobservationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/ionoobservation/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<IonOobservationQueryhelpResponse> {
    return this._client.get('/udl/ionoobservation/queryhelp', options);
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
    query: IonOobservationTupleParams,
    options?: RequestOptions,
  ): APIPromise<IonOobservationTupleResponse> {
    return this._client.get('/udl/ionoobservation/tuple', { query, ...options });
  }

  /**
   * Service operation to take Ionospheric Observation entries as a POST body and
   * ingest into the database with or without dupe detection. Default is no dupe
   * checking. This operation is intended to be used for automated feeds into UDL. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   */
  unvalidatedPublish(
    params: IonOobservationUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-ionoobs', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type IonOobservationListResponsesOffsetPage = OffsetPage<IonOobservationListResponse>;

/**
 * These services provide operations for posting and querying ionospheric
 * observation data. Characteristics are defined by the CHARS: URSI IIWG format for
 * archiving monthly ionospheric characteristics, INAG Bulletin No. 62
 * specification. Qualifying and Descriptive letters are defined by the URSI
 * Handbook for Ionogram Interpretation and reduction, Report UAG, No. 23A
 * specification.
 */
export interface IonOobservationListResponse {
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
   * Sounding Start time in ISO8601 UTC format.
   */
  startTimeUTC: string;

  /**
   * URSI code for station or stations producing the ionosonde.
   */
  stationId: string;

  /**
   * Ionosonde hardware type or data collection type together with possible
   * additional descriptors.
   */
  system: string;

  /**
   * Names of settings.
   */
  systemInfo: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  amplitude?: IonOobservationListResponse.Amplitude;

  antennaElementPosition?: IonOobservationListResponse.AntennaElementPosition;

  /**
   * Enums: J2000, ECR/ECEF, TEME, GCRF, WGS84 (GEODetic lat, long, alt), GEOCentric
   * (lat, long, radii).
   */
  antennaElementPositionCoordinateSystem?:
    | 'J2000'
    | 'ECR/ECEF'
    | 'TEME'
    | 'GCRF'
    | 'WGS84 (GEODetic lat, long, alt)'
    | 'GEOCentric (lat, long, radii)';

  /**
   * Array of Legacy Artist Flags.
   */
  artistFlags?: Array<number>;

  azimuth?: IonOobservationListResponse.Azimuth;

  /**
   * IRI thickness parameter in km. URSI ID: D0.
   */
  b0?: number;

  /**
   * IRI profile shape parameter. URSI ID: D1.
   */
  b1?: number;

  /**
   * List of attributes that are associated with the specified characteristics.
   * Characteristics are defined by the CHARS: URSI IIWG format for archiving monthly
   * ionospheric characteristics, INAG Bulletin No. 62 specification. Qualifying and
   * Descriptive letters are defined by the URSI Handbook for Ionogram Interpretation
   * and reduction, Report UAG, No. 23A specification.
   */
  charAtts?: Array<IonOobservationListResponse.CharAtt>;

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
   * Distance for MUF calculation in km.
   */
  d?: number;

  /**
   * IRI profile shape parameter, F1 layer. URSI ID: D2.
   */
  d1?: number;

  datum?: IonOobservationListResponse.Datum;

  /**
   * Adjustment to the scaled foF2 during profile inversion in MHz.
   */
  deltafoF2?: number;

  /**
   * Profile of electron densities in the ionosphere associated with an
   * IonoObservation.
   */
  densityProfile?: IonOobservationListResponse.DensityProfile;

  doppler?: IonOobservationListResponse.Doppler;

  /**
   * Lowering of E trace to the leading edge in km.
   */
  downE?: number;

  /**
   * Lowering of Es trace to the leading edge in km.
   */
  downEs?: number;

  /**
   * Lowering of F trace to the leading edge in km.
   */
  downF?: number;

  /**
   * Array of electron densities in cm^-3 (must match the size of the height and
   * plasmaFrequency arrays).
   */
  electronDensity?: Array<number>;

  /**
   * Uncertainty in specifying the electron density at each height point of the
   * profile (must match the size of the electronDensity array).
   */
  electronDensityUncertainty?: Array<number>;

  elevation?: IonOobservationListResponse.Elevation;

  /**
   * The blanketing frequency of layer used to derive foEs in MHz. URSI ID: 32.
   */
  fbEs?: number;

  /**
   * Frequency spread beyond foE in MHz. URSI ID: 87.
   */
  fe?: number;

  /**
   * Frequency spread between fxF2 and FxI in MHz. URSI ID: 86.
   */
  ff?: number;

  /**
   * The frequency at which hprimeF is measured in MHz. URSI ID: 61.
   */
  fhprimeF?: number;

  /**
   * The frequency at which hprimeF2 is measured in MHz. URSI ID: 60.
   */
  fhprimeF2?: number;

  /**
   * Lowest frequency at which echo traces are observed on the ionogram, in MHz. URSI
   * ID: 42.
   */
  fmin?: number;

  /**
   * Minimum frequency of E layer echoes in MHz. URSI ID: 81.
   */
  fminE?: number;

  /**
   * Minimum frequency of Es layer in MHz.
   */
  fminEs?: number;

  /**
   * Minimum frequency of F layer echoes in MHz. URSI ID: 80.
   */
  fminF?: number;

  /**
   * MUF/OblFactor in MHz.
   */
  fmuf?: number;

  /**
   * The ordinary wave critical frequency of the lowest thick layer which causes a
   * discontinuity, in MHz. URSI ID: 20.
   */
  foE?: number;

  /**
   * Critical frequency of night time auroral E layer in MHz. URSI ID: 23.
   */
  foEa?: number;

  /**
   * Predicted value of foE in MHz.
   */
  foEp?: number;

  /**
   * Highest ordinary wave frequency at which a mainly continuous Es trace is
   * observed, in MHz. URSI ID: 30.
   */
  foEs?: number;

  /**
   * The ordinary wave F1 critical frequency, in MHz. URSI ID: 10.
   */
  foF1?: number;

  /**
   * Predicted value of foF1 in MHz.
   */
  foF1p?: number;

  /**
   * The ordinary wave critical frequency of the highest stratification in the F
   * region, specified in MHz. URSI ID: 00.
   */
  foF2?: number;

  /**
   * Predicted value of foF2 in MHz.
   */
  foF2p?: number;

  /**
   * Highest ordinary wave critical frequency of F region patch trace in MHz. URSI
   * ID: 55.
   */
  foP?: number;

  frequency?: IonOobservationListResponse.Frequency;

  /**
   * The extraordinary wave E critical frequency, in MHz. URSI ID: 21.
   */
  fxE?: number;

  /**
   * The extraordinary wave F1 critical frequency, in MHz. URSI ID: 11.
   */
  fxF1?: number;

  /**
   * The extraordinary wave F2 critical frequency, in MHz. URSI ID: 01.
   */
  fxF2?: number;

  /**
   * The highest frequency of F-trace in MHz. Note: fxI is with capital i. URSI
   * ID: 51.
   */
  fxI?: number;

  /**
   * Array of altitudes above station level for plasma frequency/density arrays in km
   * (must match the size of the plasmaFrequency and electronDensity Arrays).
   */
  height?: Array<number>;

  /**
   * True height of the E peak in km. URSI ID: CE.
   */
  hmE?: number;

  /**
   * True height of the F1 peak in km. URSI ID: BE.
   */
  hmF1?: number;

  /**
   * True height of the F2 peak in km. URSI ID: AE.
   */
  hmF2?: number;

  /**
   * The minimum virtual height of the normal E layer trace in km. URSI ID: 24.
   */
  hprimeE?: number;

  /**
   * Minimum virtual height of night time auroral E layer trace in km. URSI ID: 27.
   */
  hprimeEa?: number;

  /**
   * The minimum height of the trace used to give foEs in km. URSI ID: 34.
   */
  hprimeEs?: number;

  /**
   * The minimum virtual height of the ordinary wave trace taken as a whole, in km.
   * URSI ID: 16.
   */
  hprimeF?: number;

  /**
   * The minimum virtual height of reflection at a point where the trace is
   * horizontal in the F region in km. URSI ID: 14.
   */
  hprimeF1?: number;

  /**
   * The minimum virtual height of ordinary wave trace for the highest stable
   * stratification in the F region in km. URSI ID: 4.
   */
  hprimeF2?: number;

  /**
   * Virtual height at MUF/OblFactor frequency in MHz.
   */
  hprimefMUF?: number;

  /**
   * Minimum virtual height of the trace used to determine foP in km. URSI ID: 56.
   */
  hprimeP?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * Lowest usable frequency.
   */
  luf?: number;

  /**
   * MUF(D)/foF2.
   */
  md?: number;

  /**
   * Maximum Usable Frequency for ground distance D in MHz.
   */
  mufd?: number;

  /**
   * Name of the algorithm used for the electron density profile.
   */
  neProfileName?: string;

  /**
   * Version of the algorithm used for the electron density profile.
   */
  neProfileVersion?: number;

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
   * Optional identifier provided by observation source to indicate the sensor
   * identifier which produced this observation. This may be an internal identifier
   * and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  phase?: IonOobservationListResponse.Phase;

  /**
   * Array of plasma frequencies in MHz (must match the size of the height and
   * electronDensity arrays).
   */
  plasmaFrequency?: Array<number>;

  /**
   * Uncertainty in specifying the electron plasma frequency at each height point of
   * the profile (must match the size of the plasmaFrequency array).
   */
  plasmaFrequencyUncertainty?: Array<number>;

  /**
   * Equipment location.
   */
  platformName?: string;

  polarization?: IonOobservationListResponse.Polarization;

  power?: IonOobservationListResponse.Power;

  /**
   * Average range spread of E layer in km. URSI ID: 85.
   */
  qe?: number;

  /**
   * Average range spread of F layer in km. URSI ID: 84.
   */
  qf?: number;

  range?: IonOobservationListResponse.Range;

  /**
   * List of Geodetic Latitude, Longitude, and Altitude coordinates in km of the
   * receiver. Coordinates List must always have 3 elements. Valid ranges are -90.0
   * to 90.0 for Latitude and -180.0 to 180.0 for Longitude. Altitude is in km and
   * its value must be 0 or greater.
   */
  receiveCoordinates?: Array<Array<number>>;

  /**
   * Enums: Mobile, Static.
   */
  receiveSensorType?: 'Mobile' | 'Static';

  /**
   * Array of restricted frequencies.
   */
  restrictedFrequency?: Array<number>;

  /**
   * Notes for the restrictedFrequency data.
   */
  restrictedFrequencyNotes?: string;

  /**
   * Effective scale height at hmF2 Titheridge method in km. URSI ID: 69.
   */
  scaleHeightF2Peak?: number;

  /**
   * The ScalerInfo record describes the person or system who interpreted the
   * ionogram in IonoObservation.
   */
  scalerInfo?: IonOobservationListResponse.ScalerInfo;

  stokes?: IonOobservationListResponse.Stokes;

  /**
   * Details concerning the composition/intention/interpretation/audience/etc. of any
   * data recorded here. This field may contain all of the intended information e.g.
   * info on signal waveforms used, antenna setup, etc. OR may describe the
   * data/settings to be provided in the “data” field.
   */
  systemNotes?: string;

  /**
   * Total Ionospheric Electron Content \*10^16e/m^2. 1 TEC Unit (TECU) = 10^16
   * electrons/m^2. URSI ID: 72.
   */
  tec?: number;

  /**
   * Array of degrees clockwise from true North of the TID.
   */
  tidAzimuth?: Array<number>;

  /**
   * Array of 1/frequency of the TID wave.
   */
  tidPeriods?: Array<number>;

  /**
   * Array of speed in m/s at which the disturbance travels through the ionosphere.
   */
  tidPhaseSpeeds?: Array<number>;

  time?: IonOobservationListResponse.Time;

  traceGeneric?: IonOobservationListResponse.TraceGeneric;

  /**
   * List of Geodetic Latitude, Longitude, and Altitude coordinates in km of the
   * receiver. Coordinates List must always have 3 elements. Valid ranges are -90.0
   * to 90.0 for Latitude and -180.0 to 180.0 for Longitude. Altitude is in km and
   * its value must be 0 or greater.
   */
  transmitCoordinates?: Array<Array<number>>;

  /**
   * Enums: Mobile, Static.
   */
  transmitSensorType?: 'Mobile' | 'Static';

  /**
   * Characterization of the shape of Es trace. URSI ID: 36.
   */
  typeEs?: string;

  /**
   * Time the row was updated in the database, auto-populated by the system, example
   * = 2018-01-01T16:00:00.123Z.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;

  /**
   * Parabolic E layer semi-thickness in km. URSI ID: 83.
   */
  yE?: number;

  /**
   * Parabolic F1 layer semi-thickness in km. URSI ID: 95.
   */
  yF1?: number;

  /**
   * Parabolic F2 layer semi-thickness in km. URSI ID: 94.
   */
  yF2?: number;

  /**
   * True height at half peak electron density in the F2 layer in km. URSI ID: 93.
   */
  zhalfNm?: number;

  /**
   * Peak height of E-layer in km. URSI ID: 90.
   */
  zmE?: number;
}

export namespace IonOobservationListResponse {
  export interface Amplitude {
    /**
     * Array of amplitude data.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

    /**
     * Array of names for dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers for amplitude dimensions.
     */
    dimensions?: Array<number>;

    /**
     * Notes for the amplitude data.
     */
    notes?: string;
  }

  export interface AntennaElementPosition {
    /**
     * Array of 3-element tuples (x,y,z) in km.
     */
    data?: Array<Array<number>>;

    /**
     * Array of names for dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers of the antenna_element dimensions.
     */
    dimensions?: Array<number>;
  }

  export interface Azimuth {
    /**
     * Array of incoming azimuth at the receiver.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

    /**
     * Array of names for dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers of the azimuth array dimensions.
     */
    dimensions?: Array<number>;

    /**
     * Notes for the azimuth data.
     */
    notes?: string;
  }

  /**
   * Characteristic attributes of a IonoObservation.
   */
  export interface CharAtt {
    /**
     * Characteristic name. This value should reflect the UDL field name for the
     * corresponding characteristic.
     */
    charName?: string;

    /**
     * Input parameters for the climate model.
     */
    climateModelInputParams?: Array<string>;

    /**
     * Name of the climate model.
     */
    climateModelName?: string;

    /**
     * List of options for the climate model.
     */
    climateModelOptions?: Array<string>;

    /**
     * Descriptive letter (D) for the characteristic specified by URSI ID. Describes
     * specific ionospheric conditions, beyond numerical values.
     */
    d?: string;

    /**
     * Specified characteristic's lower bound. Should be less than or equal to the
     * characteristic's current value as set in this record.
     */
    lowerBound?: number;

    /**
     * Qualifying letter (Q) for the characteristic specified by URSI ID. Describes
     * specific ionospheric conditions, beyond numerical values.
     */
    q?: string;

    /**
     * Uncertainty Bounds (lower and upper) define an interval around reported value
     * that contains true value at the specified probability level. Probability levels
     * are specified in terms of percentile (from 1 to 100) or the standard deviation,
     * sigma (e.g. 1sigma, 2sigma, 3sigma, 5percentile, 10percentile, 25percentile).
     */
    uncertaintyBoundType?: string;

    /**
     * Specified characteristic's upper bound. Should be greater than or equal to the
     * characteristic's current value as set in this record.
     */
    upperBound?: number;

    /**
     * Characteristic's URSI ID. See the characteristic's description for its
     * corresponding URSI ID.
     */
    ursiID?: string;
  }

  export interface Datum {
    /**
     * Array to support sparse data collections.
     */
    data?: Array<number>;

    /**
     * Notes for the datum with details of what the data is, units, etc.
     */
    notes?: string;
  }

  /**
   * Profile of electron densities in the ionosphere associated with an
   * IonoObservation.
   */
  export interface DensityProfile {
    /**
     * Full set of the IRI formalism coefficients.
     */
    iri?: DensityProfile.Iri;

    /**
     * Coefficients to describe the E, F1, and F2 layers as parabolic-shape segments.
     */
    parabolic?: DensityProfile.Parabolic;

    /**
     * Coefficients to describe profile shape as quasi-parabolic segments.
     */
    quasiParabolic?: DensityProfile.QuasiParabolic;

    /**
     * Coefficients to describe either the E, F1, and bottomside F2 profile shapes or
     * the height uncertainty boundaries.
     */
    shiftedChebyshev?: DensityProfile.ShiftedChebyshev;

    /**
     * Parameters of the constant-scale-height Chapman layer.
     */
    topsideExtensionChapmanConst?: DensityProfile.TopsideExtensionChapmanConst;

    /**
     * Varying scale height Chapman topside layer.
     */
    topsideExtensionVaryChap?: DensityProfile.TopsideExtensionVaryChap;

    /**
     * Array of valley model coefficients.
     */
    valleyModelCoeffs?: Array<number>;

    /**
     * Description of the valley model and parameters.
     */
    valleyModelDescription?: string;
  }

  export namespace DensityProfile {
    /**
     * Full set of the IRI formalism coefficients.
     */
    export interface Iri {
      /**
       * B0 parameter of the F2 layer shape.
       */
      b0?: number;

      /**
       * B1 parameter of the F2 layer shape.
       */
      b1?: number;

      /**
       * Peak Density Thickness (PDT) for description of the flat-nose shape, in
       * kilometers.
       */
      chi?: number;

      /**
       * D1 parameter of the F1 layer shape.
       */
      d1?: number;

      /**
       * Description of IRI implementation.
       */
      description?: string;

      /**
       * TBD.
       */
      fp1?: number;

      /**
       * TBD.
       */
      fp2?: number;

      /**
       * TBD.
       */
      fp30?: number;

      /**
       * TBD.
       */
      fp3U?: number;

      /**
       * Starting height of the D layer, in kilometers.
       */
      ha?: number;

      /**
       * Height of the intermediate region at the top of D region, in kilometers.
       */
      hdx?: number;

      /**
       * Peak height of the D layer, in kilometers.
       */
      hmD?: number;

      /**
       * Peak height of the F2 layer, in kilometers.
       */
      hmE?: number;

      /**
       * Peak height of the F1 layer, in kilometers.
       */
      hmF1?: number;

      /**
       * Peak height of F2 layer, in kilometers.
       */
      hmF2?: number;

      /**
       * The valley height, in kilometers.
       */
      hValTop?: number;

      /**
       * Height HZ of the interim layer, in kilometers.
       */
      hz?: number;

      /**
       * Peak density of the D layer, in per cubic centimeter.
       */
      nmD?: number;

      /**
       * Peak density of the E layer, in per cubic centimeter.
       */
      nmE?: number;

      /**
       * Peak density of the F1 layer, in grams per cubic centimeter.
       */
      nmF1?: number;

      /**
       * Peak density of F2 layer, in grams per cubic centimeter.
       */
      nmF2?: number;

      /**
       * The valley depth, in grams per cubic centimeter.
       */
      nValB?: number;
    }

    /**
     * Coefficients to describe the E, F1, and F2 layers as parabolic-shape segments.
     */
    export interface Parabolic {
      /**
       * General description of the QP computation algorithm.
       */
      description?: string;

      /**
       * Describes the E, F1, and F2 layers as parabolic-shape segments.
       */
      parabolicItems?: Array<Parabolic.ParabolicItem>;
    }

    export namespace Parabolic {
      /**
       * Describes the E, F1, and F2 layers as parabolic-shape segments.
       */
      export interface ParabolicItem {
        /**
         * Plasma frequency at the layer peak, in MHz.
         */
        f?: number;

        /**
         * Ionospheric plasma layer (E, F1, or F2).
         */
        layer?: string;

        /**
         * Half-thickness of the layer, in kilometers.
         */
        y?: number;

        /**
         * Height of the layer peak, in kilometers.
         */
        z?: number;
      }
    }

    /**
     * Coefficients to describe profile shape as quasi-parabolic segments.
     */
    export interface QuasiParabolic {
      /**
       * General description of the quasi-parabolic computation algorithm.
       */
      description?: string;

      /**
       * Value of the Earth's radius, in kilometers, used for computations.
       */
      earthRadius?: number;

      /**
       * Array of quasi-parabolic segments. Each segment is the best-fit 3-parameter
       * quasi-parabolas defined via A, B, C coefficients, f^2=A/r^2+B/r+C”. Usually 3
       * groups for E, F1, and F2 layers, but additional segments may be used to improve
       * accuracy.
       */
      quasiParabolicSegments?: Array<QuasiParabolic.QuasiParabolicSegment>;
    }

    export namespace QuasiParabolic {
      /**
       * A quasi-parabolic segment is the best-fit 3-parameter quasi-parabolas defined
       * via A, B, C coefficients, f^2=A/r^2+B/r+C”. Usually 3 groups for E, F1, and F2
       * layers, but additional segments may be used to improve accuracy.
       */
      export interface QuasiParabolicSegment {
        /**
         * Coefficient A.
         */
        a?: number;

        /**
         * Coefficient B.
         */
        b?: number;

        /**
         * Coefficient C.
         */
        c?: number;

        /**
         * Best-fit error.
         */
        error?: number;

        /**
         * The index of this segment in the list, from 1 to NumSegments.
         */
        index?: number;

        /**
         * Starting range of the segment, in kilometers from the Earth's center.
         */
        rb?: number;

        /**
         * Ending range of the segment, in kilometers from the Earth's center.
         */
        re?: number;
      }
    }

    /**
     * Coefficients to describe either the E, F1, and bottomside F2 profile shapes or
     * the height uncertainty boundaries.
     */
    export interface ShiftedChebyshev {
      /**
       * Description of the computation technique.
       */
      description?: string;

      /**
       * Up to 3 groups of coefficients, using “shiftedChebyshev” sub-field, to describe
       * E, F1, and bottomside F2 profile shapes, or up to 6 groups of coefficients to
       * describe height uncertainty boundaries (upper and lower).
       */
      shiftedChebyshevs?: Array<ShiftedChebyshev.ShiftedChebyshev>;
    }

    export namespace ShiftedChebyshev {
      /**
       * Coefficients, using ‘shiftedChebyshev’ sub-field, to describe E, F1, and
       * bottomside F2 profile shapes, or height uncertainty boundaries (upper and
       * lower).
       */
      export interface ShiftedChebyshev {
        /**
         * Array of coefficients.
         */
        coeffs?: Array<number>;

        /**
         * Best fit error.
         */
        error?: number;

        /**
         * Start frequency of the layer, in MHz.
         */
        fstart?: number;

        /**
         * Stop frequency of the layer, in MHz.
         */
        fstop?: number;

        /**
         * The ionospheric plasma layer.
         */
        layer?: string;

        /**
         * Number of coefficients in the expansion.
         */
        n?: number;

        /**
         * Peak height of the layer, in kilometers.
         */
        peakheight?: number;

        /**
         * Height at which density is half of the peak Nm, in kilometers.
         */
        zhalfNm?: number;
      }
    }

    /**
     * Parameters of the constant-scale-height Chapman layer.
     */
    export interface TopsideExtensionChapmanConst {
      /**
       * Peak Density Thickness (PDT) for description of the flat-nose shape, in
       * kilometers.
       */
      chi?: number;

      /**
       * Description of the Chapman computation technique.
       */
      description?: string;

      /**
       * Peak height of F2 layer, in kilometers.
       */
      hmF2?: number;

      /**
       * Peak density of F2 layer, in grams per cubic centimeter.
       */
      nmF2?: number;

      /**
       * Scale height if F2 layer at the peak, in kilometers.
       */
      scaleF2?: number;
    }

    /**
     * Varying scale height Chapman topside layer.
     */
    export interface TopsideExtensionVaryChap {
      /**
       * Alpha parameter of the profile shape.
       */
      alpha?: number;

      /**
       * Beta parameter of the profile shape.
       */
      beta?: number;

      /**
       * Peak Density Thickness (PDT) for description of the flat-nose shape, in
       * kilometers.
       */
      chi?: number;

      /**
       * Description of the Chapman computation technique.
       */
      description?: string;

      /**
       * Peak height of F2 layer, in kilometers.
       */
      hmF2?: number;

      /**
       * Transition height, in kilometers.
       */
      ht?: number;

      /**
       * Peak density of F2 layer, in grams per cubic centimeter.
       */
      nmF2?: number;

      /**
       * Scale height if F2 layer at the peak, in kilometers.
       */
      scaleF2?: number;
    }
  }

  export interface Doppler {
    /**
     * Array of received doppler shifts in Hz.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

    /**
     * Array of names for dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers of the doppler array dimensions.
     */
    dimensions?: Array<number>;

    /**
     * Notes for the doppler data.
     */
    notes?: string;
  }

  export interface Elevation {
    /**
     * Array of incoming elevation at the receiver.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

    /**
     * Array of names for dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers of the elevation array dimensions.
     */
    dimensions?: Array<number>;

    /**
     * Notes for the elevation data.
     */
    notes?: string;
  }

  export interface Frequency {
    /**
     * Array of frequency data.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

    /**
     * Array of names for frequency dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers of the frequency array dimensions.
     */
    dimensions?: Array<number>;

    /**
     * Notes for the frequency data.
     */
    notes?: string;
  }

  export interface Phase {
    /**
     * Array of phase data.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

    /**
     * Array of names for phase dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers of the phase array dimensions.
     */
    dimensions?: Array<number>;

    /**
     * Notes for the phase data. Orientation and position for each antenna element
     * across the antenna_element dimension.
     */
    notes?: string;
  }

  export interface Polarization {
    /**
     * Array of polarization data.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<'X' | 'O'>>>>>>>;

    /**
     * Array of names for dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers for polarization dimensions.
     */
    dimensions?: Array<number>;

    /**
     * Notes for the polarization data.
     */
    notes?: string;
  }

  export interface Power {
    /**
     * Array of received power in db.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

    /**
     * Array of names for dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers of the power array dimensions.
     */
    dimensions?: Array<number>;

    /**
     * Notes for the power data.
     */
    notes?: string;
  }

  export interface Range {
    /**
     * Array of range data.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

    /**
     * Array of names for range dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers of the range array dimensions.
     */
    dimensions?: Array<number>;

    /**
     * Notes for the range data.
     */
    notes?: string;
  }

  /**
   * The ScalerInfo record describes the person or system who interpreted the
   * ionogram in IonoObservation.
   */
  export interface ScalerInfo {
    /**
     * Scaler confidence level.
     */
    confidenceLevel?: number;

    /**
     * Scaler confidence score.
     */
    confidenceScore?: number;

    /**
     * Scaler name.
     */
    name?: string;

    /**
     * Scaler organization.
     */
    organization?: string;

    /**
     * Scaler type (MANUAL, AUTOMATIC or UNKNOWN).
     */
    type?: string;

    /**
     * Scaler version.
     */
    version?: number;
  }

  export interface Stokes {
    /**
     * Array of received stokes data.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

    /**
     * Array of names for dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers of the stoke array dimensions.
     */
    dimensions?: Array<number>;

    /**
     * Notes for the stokes data.
     */
    notes?: string;

    /**
     * S1, S2, and S3 (the normalized Stokes parameters 1, 2, and 3).
     */
    s?: Array<number>;
  }

  export interface Time {
    /**
     * Array of times in number of seconds passed since January 1st, 1970 with the same
     * dimensions as power.
     */
    data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

    /**
     * Array of names for dimensions.
     */
    dimensionName?: Array<string>;

    /**
     * Array of integers of the time array dimensions.
     */
    dimensions?: Array<number>;

    /**
     * The notes indicate the scheme and accuracy.
     */
    notes?: string;
  }

  export interface TraceGeneric {
    /**
     * Multi-dimensional Array. The 1st dimension spans points along the trace while
     * the 2nd dimension spans frequency-range pairs.
     */
    data?: Array<Array<Array<number>>>;

    /**
     * Array of dimension names for trace generic data.
     */
    dimensionName?: Array<string>;

    /**
     * Notes for the trace generic data.
     */
    notes?: string;
  }
}

export type IonOobservationCountResponse = string;

export interface IonOobservationQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<Shared.ParamDescriptor>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export type IonOobservationTupleResponse =
  Array<IonOobservationTupleResponse.IonOobservationTupleResponseItem>;

export namespace IonOobservationTupleResponse {
  /**
   * These services provide operations for posting and querying ionospheric
   * observation data. Characteristics are defined by the CHARS: URSI IIWG format for
   * archiving monthly ionospheric characteristics, INAG Bulletin No. 62
   * specification. Qualifying and Descriptive letters are defined by the URSI
   * Handbook for Ionogram Interpretation and reduction, Report UAG, No. 23A
   * specification.
   */
  export interface IonOobservationTupleResponseItem {
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
     * Sounding Start time in ISO8601 UTC format.
     */
    startTimeUTC: string;

    /**
     * URSI code for station or stations producing the ionosonde.
     */
    stationId: string;

    /**
     * Ionosonde hardware type or data collection type together with possible
     * additional descriptors.
     */
    system: string;

    /**
     * Names of settings.
     */
    systemInfo: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    amplitude?: IonOobservationTupleResponseItem.Amplitude;

    antennaElementPosition?: IonOobservationTupleResponseItem.AntennaElementPosition;

    /**
     * Enums: J2000, ECR/ECEF, TEME, GCRF, WGS84 (GEODetic lat, long, alt), GEOCentric
     * (lat, long, radii).
     */
    antennaElementPositionCoordinateSystem?:
      | 'J2000'
      | 'ECR/ECEF'
      | 'TEME'
      | 'GCRF'
      | 'WGS84 (GEODetic lat, long, alt)'
      | 'GEOCentric (lat, long, radii)';

    /**
     * Array of Legacy Artist Flags.
     */
    artistFlags?: Array<number>;

    azimuth?: IonOobservationTupleResponseItem.Azimuth;

    /**
     * IRI thickness parameter in km. URSI ID: D0.
     */
    b0?: number;

    /**
     * IRI profile shape parameter. URSI ID: D1.
     */
    b1?: number;

    /**
     * List of attributes that are associated with the specified characteristics.
     * Characteristics are defined by the CHARS: URSI IIWG format for archiving monthly
     * ionospheric characteristics, INAG Bulletin No. 62 specification. Qualifying and
     * Descriptive letters are defined by the URSI Handbook for Ionogram Interpretation
     * and reduction, Report UAG, No. 23A specification.
     */
    charAtts?: Array<IonOobservationTupleResponseItem.CharAtt>;

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
     * Distance for MUF calculation in km.
     */
    d?: number;

    /**
     * IRI profile shape parameter, F1 layer. URSI ID: D2.
     */
    d1?: number;

    datum?: IonOobservationTupleResponseItem.Datum;

    /**
     * Adjustment to the scaled foF2 during profile inversion in MHz.
     */
    deltafoF2?: number;

    /**
     * Profile of electron densities in the ionosphere associated with an
     * IonoObservation.
     */
    densityProfile?: IonOobservationTupleResponseItem.DensityProfile;

    doppler?: IonOobservationTupleResponseItem.Doppler;

    /**
     * Lowering of E trace to the leading edge in km.
     */
    downE?: number;

    /**
     * Lowering of Es trace to the leading edge in km.
     */
    downEs?: number;

    /**
     * Lowering of F trace to the leading edge in km.
     */
    downF?: number;

    /**
     * Array of electron densities in cm^-3 (must match the size of the height and
     * plasmaFrequency arrays).
     */
    electronDensity?: Array<number>;

    /**
     * Uncertainty in specifying the electron density at each height point of the
     * profile (must match the size of the electronDensity array).
     */
    electronDensityUncertainty?: Array<number>;

    elevation?: IonOobservationTupleResponseItem.Elevation;

    /**
     * The blanketing frequency of layer used to derive foEs in MHz. URSI ID: 32.
     */
    fbEs?: number;

    /**
     * Frequency spread beyond foE in MHz. URSI ID: 87.
     */
    fe?: number;

    /**
     * Frequency spread between fxF2 and FxI in MHz. URSI ID: 86.
     */
    ff?: number;

    /**
     * The frequency at which hprimeF is measured in MHz. URSI ID: 61.
     */
    fhprimeF?: number;

    /**
     * The frequency at which hprimeF2 is measured in MHz. URSI ID: 60.
     */
    fhprimeF2?: number;

    /**
     * Lowest frequency at which echo traces are observed on the ionogram, in MHz. URSI
     * ID: 42.
     */
    fmin?: number;

    /**
     * Minimum frequency of E layer echoes in MHz. URSI ID: 81.
     */
    fminE?: number;

    /**
     * Minimum frequency of Es layer in MHz.
     */
    fminEs?: number;

    /**
     * Minimum frequency of F layer echoes in MHz. URSI ID: 80.
     */
    fminF?: number;

    /**
     * MUF/OblFactor in MHz.
     */
    fmuf?: number;

    /**
     * The ordinary wave critical frequency of the lowest thick layer which causes a
     * discontinuity, in MHz. URSI ID: 20.
     */
    foE?: number;

    /**
     * Critical frequency of night time auroral E layer in MHz. URSI ID: 23.
     */
    foEa?: number;

    /**
     * Predicted value of foE in MHz.
     */
    foEp?: number;

    /**
     * Highest ordinary wave frequency at which a mainly continuous Es trace is
     * observed, in MHz. URSI ID: 30.
     */
    foEs?: number;

    /**
     * The ordinary wave F1 critical frequency, in MHz. URSI ID: 10.
     */
    foF1?: number;

    /**
     * Predicted value of foF1 in MHz.
     */
    foF1p?: number;

    /**
     * The ordinary wave critical frequency of the highest stratification in the F
     * region, specified in MHz. URSI ID: 00.
     */
    foF2?: number;

    /**
     * Predicted value of foF2 in MHz.
     */
    foF2p?: number;

    /**
     * Highest ordinary wave critical frequency of F region patch trace in MHz. URSI
     * ID: 55.
     */
    foP?: number;

    frequency?: IonOobservationTupleResponseItem.Frequency;

    /**
     * The extraordinary wave E critical frequency, in MHz. URSI ID: 21.
     */
    fxE?: number;

    /**
     * The extraordinary wave F1 critical frequency, in MHz. URSI ID: 11.
     */
    fxF1?: number;

    /**
     * The extraordinary wave F2 critical frequency, in MHz. URSI ID: 01.
     */
    fxF2?: number;

    /**
     * The highest frequency of F-trace in MHz. Note: fxI is with capital i. URSI
     * ID: 51.
     */
    fxI?: number;

    /**
     * Array of altitudes above station level for plasma frequency/density arrays in km
     * (must match the size of the plasmaFrequency and electronDensity Arrays).
     */
    height?: Array<number>;

    /**
     * True height of the E peak in km. URSI ID: CE.
     */
    hmE?: number;

    /**
     * True height of the F1 peak in km. URSI ID: BE.
     */
    hmF1?: number;

    /**
     * True height of the F2 peak in km. URSI ID: AE.
     */
    hmF2?: number;

    /**
     * The minimum virtual height of the normal E layer trace in km. URSI ID: 24.
     */
    hprimeE?: number;

    /**
     * Minimum virtual height of night time auroral E layer trace in km. URSI ID: 27.
     */
    hprimeEa?: number;

    /**
     * The minimum height of the trace used to give foEs in km. URSI ID: 34.
     */
    hprimeEs?: number;

    /**
     * The minimum virtual height of the ordinary wave trace taken as a whole, in km.
     * URSI ID: 16.
     */
    hprimeF?: number;

    /**
     * The minimum virtual height of reflection at a point where the trace is
     * horizontal in the F region in km. URSI ID: 14.
     */
    hprimeF1?: number;

    /**
     * The minimum virtual height of ordinary wave trace for the highest stable
     * stratification in the F region in km. URSI ID: 4.
     */
    hprimeF2?: number;

    /**
     * Virtual height at MUF/OblFactor frequency in MHz.
     */
    hprimefMUF?: number;

    /**
     * Minimum virtual height of the trace used to determine foP in km. URSI ID: 56.
     */
    hprimeP?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * Lowest usable frequency.
     */
    luf?: number;

    /**
     * MUF(D)/foF2.
     */
    md?: number;

    /**
     * Maximum Usable Frequency for ground distance D in MHz.
     */
    mufd?: number;

    /**
     * Name of the algorithm used for the electron density profile.
     */
    neProfileName?: string;

    /**
     * Version of the algorithm used for the electron density profile.
     */
    neProfileVersion?: number;

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
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    phase?: IonOobservationTupleResponseItem.Phase;

    /**
     * Array of plasma frequencies in MHz (must match the size of the height and
     * electronDensity arrays).
     */
    plasmaFrequency?: Array<number>;

    /**
     * Uncertainty in specifying the electron plasma frequency at each height point of
     * the profile (must match the size of the plasmaFrequency array).
     */
    plasmaFrequencyUncertainty?: Array<number>;

    /**
     * Equipment location.
     */
    platformName?: string;

    polarization?: IonOobservationTupleResponseItem.Polarization;

    power?: IonOobservationTupleResponseItem.Power;

    /**
     * Average range spread of E layer in km. URSI ID: 85.
     */
    qe?: number;

    /**
     * Average range spread of F layer in km. URSI ID: 84.
     */
    qf?: number;

    range?: IonOobservationTupleResponseItem.Range;

    /**
     * List of Geodetic Latitude, Longitude, and Altitude coordinates in km of the
     * receiver. Coordinates List must always have 3 elements. Valid ranges are -90.0
     * to 90.0 for Latitude and -180.0 to 180.0 for Longitude. Altitude is in km and
     * its value must be 0 or greater.
     */
    receiveCoordinates?: Array<Array<number>>;

    /**
     * Enums: Mobile, Static.
     */
    receiveSensorType?: 'Mobile' | 'Static';

    /**
     * Array of restricted frequencies.
     */
    restrictedFrequency?: Array<number>;

    /**
     * Notes for the restrictedFrequency data.
     */
    restrictedFrequencyNotes?: string;

    /**
     * Effective scale height at hmF2 Titheridge method in km. URSI ID: 69.
     */
    scaleHeightF2Peak?: number;

    /**
     * The ScalerInfo record describes the person or system who interpreted the
     * ionogram in IonoObservation.
     */
    scalerInfo?: IonOobservationTupleResponseItem.ScalerInfo;

    stokes?: IonOobservationTupleResponseItem.Stokes;

    /**
     * Details concerning the composition/intention/interpretation/audience/etc. of any
     * data recorded here. This field may contain all of the intended information e.g.
     * info on signal waveforms used, antenna setup, etc. OR may describe the
     * data/settings to be provided in the “data” field.
     */
    systemNotes?: string;

    /**
     * Total Ionospheric Electron Content \*10^16e/m^2. 1 TEC Unit (TECU) = 10^16
     * electrons/m^2. URSI ID: 72.
     */
    tec?: number;

    /**
     * Array of degrees clockwise from true North of the TID.
     */
    tidAzimuth?: Array<number>;

    /**
     * Array of 1/frequency of the TID wave.
     */
    tidPeriods?: Array<number>;

    /**
     * Array of speed in m/s at which the disturbance travels through the ionosphere.
     */
    tidPhaseSpeeds?: Array<number>;

    time?: IonOobservationTupleResponseItem.Time;

    traceGeneric?: IonOobservationTupleResponseItem.TraceGeneric;

    /**
     * List of Geodetic Latitude, Longitude, and Altitude coordinates in km of the
     * receiver. Coordinates List must always have 3 elements. Valid ranges are -90.0
     * to 90.0 for Latitude and -180.0 to 180.0 for Longitude. Altitude is in km and
     * its value must be 0 or greater.
     */
    transmitCoordinates?: Array<Array<number>>;

    /**
     * Enums: Mobile, Static.
     */
    transmitSensorType?: 'Mobile' | 'Static';

    /**
     * Characterization of the shape of Es trace. URSI ID: 36.
     */
    typeEs?: string;

    /**
     * Time the row was updated in the database, auto-populated by the system, example
     * = 2018-01-01T16:00:00.123Z.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;

    /**
     * Parabolic E layer semi-thickness in km. URSI ID: 83.
     */
    yE?: number;

    /**
     * Parabolic F1 layer semi-thickness in km. URSI ID: 95.
     */
    yF1?: number;

    /**
     * Parabolic F2 layer semi-thickness in km. URSI ID: 94.
     */
    yF2?: number;

    /**
     * True height at half peak electron density in the F2 layer in km. URSI ID: 93.
     */
    zhalfNm?: number;

    /**
     * Peak height of E-layer in km. URSI ID: 90.
     */
    zmE?: number;
  }

  export namespace IonOobservationTupleResponseItem {
    export interface Amplitude {
      /**
       * Array of amplitude data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers for amplitude dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the amplitude data.
       */
      notes?: string;
    }

    export interface AntennaElementPosition {
      /**
       * Array of 3-element tuples (x,y,z) in km.
       */
      data?: Array<Array<number>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the antenna_element dimensions.
       */
      dimensions?: Array<number>;
    }

    export interface Azimuth {
      /**
       * Array of incoming azimuth at the receiver.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the azimuth array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the azimuth data.
       */
      notes?: string;
    }

    /**
     * Characteristic attributes of a IonoObservation.
     */
    export interface CharAtt {
      /**
       * Characteristic name. This value should reflect the UDL field name for the
       * corresponding characteristic.
       */
      charName?: string;

      /**
       * Input parameters for the climate model.
       */
      climateModelInputParams?: Array<string>;

      /**
       * Name of the climate model.
       */
      climateModelName?: string;

      /**
       * List of options for the climate model.
       */
      climateModelOptions?: Array<string>;

      /**
       * Descriptive letter (D) for the characteristic specified by URSI ID. Describes
       * specific ionospheric conditions, beyond numerical values.
       */
      d?: string;

      /**
       * Specified characteristic's lower bound. Should be less than or equal to the
       * characteristic's current value as set in this record.
       */
      lowerBound?: number;

      /**
       * Qualifying letter (Q) for the characteristic specified by URSI ID. Describes
       * specific ionospheric conditions, beyond numerical values.
       */
      q?: string;

      /**
       * Uncertainty Bounds (lower and upper) define an interval around reported value
       * that contains true value at the specified probability level. Probability levels
       * are specified in terms of percentile (from 1 to 100) or the standard deviation,
       * sigma (e.g. 1sigma, 2sigma, 3sigma, 5percentile, 10percentile, 25percentile).
       */
      uncertaintyBoundType?: string;

      /**
       * Specified characteristic's upper bound. Should be greater than or equal to the
       * characteristic's current value as set in this record.
       */
      upperBound?: number;

      /**
       * Characteristic's URSI ID. See the characteristic's description for its
       * corresponding URSI ID.
       */
      ursiID?: string;
    }

    export interface Datum {
      /**
       * Array to support sparse data collections.
       */
      data?: Array<number>;

      /**
       * Notes for the datum with details of what the data is, units, etc.
       */
      notes?: string;
    }

    /**
     * Profile of electron densities in the ionosphere associated with an
     * IonoObservation.
     */
    export interface DensityProfile {
      /**
       * Full set of the IRI formalism coefficients.
       */
      iri?: DensityProfile.Iri;

      /**
       * Coefficients to describe the E, F1, and F2 layers as parabolic-shape segments.
       */
      parabolic?: DensityProfile.Parabolic;

      /**
       * Coefficients to describe profile shape as quasi-parabolic segments.
       */
      quasiParabolic?: DensityProfile.QuasiParabolic;

      /**
       * Coefficients to describe either the E, F1, and bottomside F2 profile shapes or
       * the height uncertainty boundaries.
       */
      shiftedChebyshev?: DensityProfile.ShiftedChebyshev;

      /**
       * Parameters of the constant-scale-height Chapman layer.
       */
      topsideExtensionChapmanConst?: DensityProfile.TopsideExtensionChapmanConst;

      /**
       * Varying scale height Chapman topside layer.
       */
      topsideExtensionVaryChap?: DensityProfile.TopsideExtensionVaryChap;

      /**
       * Array of valley model coefficients.
       */
      valleyModelCoeffs?: Array<number>;

      /**
       * Description of the valley model and parameters.
       */
      valleyModelDescription?: string;
    }

    export namespace DensityProfile {
      /**
       * Full set of the IRI formalism coefficients.
       */
      export interface Iri {
        /**
         * B0 parameter of the F2 layer shape.
         */
        b0?: number;

        /**
         * B1 parameter of the F2 layer shape.
         */
        b1?: number;

        /**
         * Peak Density Thickness (PDT) for description of the flat-nose shape, in
         * kilometers.
         */
        chi?: number;

        /**
         * D1 parameter of the F1 layer shape.
         */
        d1?: number;

        /**
         * Description of IRI implementation.
         */
        description?: string;

        /**
         * TBD.
         */
        fp1?: number;

        /**
         * TBD.
         */
        fp2?: number;

        /**
         * TBD.
         */
        fp30?: number;

        /**
         * TBD.
         */
        fp3U?: number;

        /**
         * Starting height of the D layer, in kilometers.
         */
        ha?: number;

        /**
         * Height of the intermediate region at the top of D region, in kilometers.
         */
        hdx?: number;

        /**
         * Peak height of the D layer, in kilometers.
         */
        hmD?: number;

        /**
         * Peak height of the F2 layer, in kilometers.
         */
        hmE?: number;

        /**
         * Peak height of the F1 layer, in kilometers.
         */
        hmF1?: number;

        /**
         * Peak height of F2 layer, in kilometers.
         */
        hmF2?: number;

        /**
         * The valley height, in kilometers.
         */
        hValTop?: number;

        /**
         * Height HZ of the interim layer, in kilometers.
         */
        hz?: number;

        /**
         * Peak density of the D layer, in per cubic centimeter.
         */
        nmD?: number;

        /**
         * Peak density of the E layer, in per cubic centimeter.
         */
        nmE?: number;

        /**
         * Peak density of the F1 layer, in grams per cubic centimeter.
         */
        nmF1?: number;

        /**
         * Peak density of F2 layer, in grams per cubic centimeter.
         */
        nmF2?: number;

        /**
         * The valley depth, in grams per cubic centimeter.
         */
        nValB?: number;
      }

      /**
       * Coefficients to describe the E, F1, and F2 layers as parabolic-shape segments.
       */
      export interface Parabolic {
        /**
         * General description of the QP computation algorithm.
         */
        description?: string;

        /**
         * Describes the E, F1, and F2 layers as parabolic-shape segments.
         */
        parabolicItems?: Array<Parabolic.ParabolicItem>;
      }

      export namespace Parabolic {
        /**
         * Describes the E, F1, and F2 layers as parabolic-shape segments.
         */
        export interface ParabolicItem {
          /**
           * Plasma frequency at the layer peak, in MHz.
           */
          f?: number;

          /**
           * Ionospheric plasma layer (E, F1, or F2).
           */
          layer?: string;

          /**
           * Half-thickness of the layer, in kilometers.
           */
          y?: number;

          /**
           * Height of the layer peak, in kilometers.
           */
          z?: number;
        }
      }

      /**
       * Coefficients to describe profile shape as quasi-parabolic segments.
       */
      export interface QuasiParabolic {
        /**
         * General description of the quasi-parabolic computation algorithm.
         */
        description?: string;

        /**
         * Value of the Earth's radius, in kilometers, used for computations.
         */
        earthRadius?: number;

        /**
         * Array of quasi-parabolic segments. Each segment is the best-fit 3-parameter
         * quasi-parabolas defined via A, B, C coefficients, f^2=A/r^2+B/r+C”. Usually 3
         * groups for E, F1, and F2 layers, but additional segments may be used to improve
         * accuracy.
         */
        quasiParabolicSegments?: Array<QuasiParabolic.QuasiParabolicSegment>;
      }

      export namespace QuasiParabolic {
        /**
         * A quasi-parabolic segment is the best-fit 3-parameter quasi-parabolas defined
         * via A, B, C coefficients, f^2=A/r^2+B/r+C”. Usually 3 groups for E, F1, and F2
         * layers, but additional segments may be used to improve accuracy.
         */
        export interface QuasiParabolicSegment {
          /**
           * Coefficient A.
           */
          a?: number;

          /**
           * Coefficient B.
           */
          b?: number;

          /**
           * Coefficient C.
           */
          c?: number;

          /**
           * Best-fit error.
           */
          error?: number;

          /**
           * The index of this segment in the list, from 1 to NumSegments.
           */
          index?: number;

          /**
           * Starting range of the segment, in kilometers from the Earth's center.
           */
          rb?: number;

          /**
           * Ending range of the segment, in kilometers from the Earth's center.
           */
          re?: number;
        }
      }

      /**
       * Coefficients to describe either the E, F1, and bottomside F2 profile shapes or
       * the height uncertainty boundaries.
       */
      export interface ShiftedChebyshev {
        /**
         * Description of the computation technique.
         */
        description?: string;

        /**
         * Up to 3 groups of coefficients, using “shiftedChebyshev” sub-field, to describe
         * E, F1, and bottomside F2 profile shapes, or up to 6 groups of coefficients to
         * describe height uncertainty boundaries (upper and lower).
         */
        shiftedChebyshevs?: Array<ShiftedChebyshev.ShiftedChebyshev>;
      }

      export namespace ShiftedChebyshev {
        /**
         * Coefficients, using ‘shiftedChebyshev’ sub-field, to describe E, F1, and
         * bottomside F2 profile shapes, or height uncertainty boundaries (upper and
         * lower).
         */
        export interface ShiftedChebyshev {
          /**
           * Array of coefficients.
           */
          coeffs?: Array<number>;

          /**
           * Best fit error.
           */
          error?: number;

          /**
           * Start frequency of the layer, in MHz.
           */
          fstart?: number;

          /**
           * Stop frequency of the layer, in MHz.
           */
          fstop?: number;

          /**
           * The ionospheric plasma layer.
           */
          layer?: string;

          /**
           * Number of coefficients in the expansion.
           */
          n?: number;

          /**
           * Peak height of the layer, in kilometers.
           */
          peakheight?: number;

          /**
           * Height at which density is half of the peak Nm, in kilometers.
           */
          zhalfNm?: number;
        }
      }

      /**
       * Parameters of the constant-scale-height Chapman layer.
       */
      export interface TopsideExtensionChapmanConst {
        /**
         * Peak Density Thickness (PDT) for description of the flat-nose shape, in
         * kilometers.
         */
        chi?: number;

        /**
         * Description of the Chapman computation technique.
         */
        description?: string;

        /**
         * Peak height of F2 layer, in kilometers.
         */
        hmF2?: number;

        /**
         * Peak density of F2 layer, in grams per cubic centimeter.
         */
        nmF2?: number;

        /**
         * Scale height if F2 layer at the peak, in kilometers.
         */
        scaleF2?: number;
      }

      /**
       * Varying scale height Chapman topside layer.
       */
      export interface TopsideExtensionVaryChap {
        /**
         * Alpha parameter of the profile shape.
         */
        alpha?: number;

        /**
         * Beta parameter of the profile shape.
         */
        beta?: number;

        /**
         * Peak Density Thickness (PDT) for description of the flat-nose shape, in
         * kilometers.
         */
        chi?: number;

        /**
         * Description of the Chapman computation technique.
         */
        description?: string;

        /**
         * Peak height of F2 layer, in kilometers.
         */
        hmF2?: number;

        /**
         * Transition height, in kilometers.
         */
        ht?: number;

        /**
         * Peak density of F2 layer, in grams per cubic centimeter.
         */
        nmF2?: number;

        /**
         * Scale height if F2 layer at the peak, in kilometers.
         */
        scaleF2?: number;
      }
    }

    export interface Doppler {
      /**
       * Array of received doppler shifts in Hz.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the doppler array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the doppler data.
       */
      notes?: string;
    }

    export interface Elevation {
      /**
       * Array of incoming elevation at the receiver.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the elevation array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the elevation data.
       */
      notes?: string;
    }

    export interface Frequency {
      /**
       * Array of frequency data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for frequency dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the frequency array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the frequency data.
       */
      notes?: string;
    }

    export interface Phase {
      /**
       * Array of phase data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for phase dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the phase array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the phase data. Orientation and position for each antenna element
       * across the antenna_element dimension.
       */
      notes?: string;
    }

    export interface Polarization {
      /**
       * Array of polarization data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<'X' | 'O'>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers for polarization dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the polarization data.
       */
      notes?: string;
    }

    export interface Power {
      /**
       * Array of received power in db.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the power array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the power data.
       */
      notes?: string;
    }

    export interface Range {
      /**
       * Array of range data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for range dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the range array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the range data.
       */
      notes?: string;
    }

    /**
     * The ScalerInfo record describes the person or system who interpreted the
     * ionogram in IonoObservation.
     */
    export interface ScalerInfo {
      /**
       * Scaler confidence level.
       */
      confidenceLevel?: number;

      /**
       * Scaler confidence score.
       */
      confidenceScore?: number;

      /**
       * Scaler name.
       */
      name?: string;

      /**
       * Scaler organization.
       */
      organization?: string;

      /**
       * Scaler type (MANUAL, AUTOMATIC or UNKNOWN).
       */
      type?: string;

      /**
       * Scaler version.
       */
      version?: number;
    }

    export interface Stokes {
      /**
       * Array of received stokes data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the stoke array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the stokes data.
       */
      notes?: string;

      /**
       * S1, S2, and S3 (the normalized Stokes parameters 1, 2, and 3).
       */
      s?: Array<number>;
    }

    export interface Time {
      /**
       * Array of times in number of seconds passed since January 1st, 1970 with the same
       * dimensions as power.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the time array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * The notes indicate the scheme and accuracy.
       */
      notes?: string;
    }

    export interface TraceGeneric {
      /**
       * Multi-dimensional Array. The 1st dimension spans points along the trace while
       * the 2nd dimension spans frequency-range pairs.
       */
      data?: Array<Array<Array<number>>>;

      /**
       * Array of dimension names for trace generic data.
       */
      dimensionName?: Array<string>;

      /**
       * Notes for the trace generic data.
       */
      notes?: string;
    }
  }
}

export interface IonOobservationListParams extends OffsetPageParams {
  /**
   * Sounding Start time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTimeUTC: string;
}

export interface IonOobservationCountParams {
  /**
   * Sounding Start time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTimeUTC: string;

  firstResult?: number;

  maxResults?: number;
}

export interface IonOobservationCreateBulkParams {
  body: Array<IonOobservationCreateBulkParams.Body>;
}

export namespace IonOobservationCreateBulkParams {
  /**
   * These services provide operations for posting and querying ionospheric
   * observation data. Characteristics are defined by the CHARS: URSI IIWG format for
   * archiving monthly ionospheric characteristics, INAG Bulletin No. 62
   * specification. Qualifying and Descriptive letters are defined by the URSI
   * Handbook for Ionogram Interpretation and reduction, Report UAG, No. 23A
   * specification.
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
     * Sounding Start time in ISO8601 UTC format.
     */
    startTimeUTC: string;

    /**
     * URSI code for station or stations producing the ionosonde.
     */
    stationId: string;

    /**
     * Ionosonde hardware type or data collection type together with possible
     * additional descriptors.
     */
    system: string;

    /**
     * Names of settings.
     */
    systemInfo: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    amplitude?: Body.Amplitude;

    antennaElementPosition?: Body.AntennaElementPosition;

    /**
     * Enums: J2000, ECR/ECEF, TEME, GCRF, WGS84 (GEODetic lat, long, alt), GEOCentric
     * (lat, long, radii).
     */
    antennaElementPositionCoordinateSystem?:
      | 'J2000'
      | 'ECR/ECEF'
      | 'TEME'
      | 'GCRF'
      | 'WGS84 (GEODetic lat, long, alt)'
      | 'GEOCentric (lat, long, radii)';

    /**
     * Array of Legacy Artist Flags.
     */
    artistFlags?: Array<number>;

    azimuth?: Body.Azimuth;

    /**
     * IRI thickness parameter in km. URSI ID: D0.
     */
    b0?: number;

    /**
     * IRI profile shape parameter. URSI ID: D1.
     */
    b1?: number;

    /**
     * List of attributes that are associated with the specified characteristics.
     * Characteristics are defined by the CHARS: URSI IIWG format for archiving monthly
     * ionospheric characteristics, INAG Bulletin No. 62 specification. Qualifying and
     * Descriptive letters are defined by the URSI Handbook for Ionogram Interpretation
     * and reduction, Report UAG, No. 23A specification.
     */
    charAtts?: Array<Body.CharAtt>;

    /**
     * Distance for MUF calculation in km.
     */
    d?: number;

    /**
     * IRI profile shape parameter, F1 layer. URSI ID: D2.
     */
    d1?: number;

    datum?: Body.Datum;

    /**
     * Adjustment to the scaled foF2 during profile inversion in MHz.
     */
    deltafoF2?: number;

    /**
     * Profile of electron densities in the ionosphere associated with an
     * IonoObservation.
     */
    densityProfile?: Body.DensityProfile;

    doppler?: Body.Doppler;

    /**
     * Lowering of E trace to the leading edge in km.
     */
    downE?: number;

    /**
     * Lowering of Es trace to the leading edge in km.
     */
    downEs?: number;

    /**
     * Lowering of F trace to the leading edge in km.
     */
    downF?: number;

    /**
     * Array of electron densities in cm^-3 (must match the size of the height and
     * plasmaFrequency arrays).
     */
    electronDensity?: Array<number>;

    /**
     * Uncertainty in specifying the electron density at each height point of the
     * profile (must match the size of the electronDensity array).
     */
    electronDensityUncertainty?: Array<number>;

    elevation?: Body.Elevation;

    /**
     * The blanketing frequency of layer used to derive foEs in MHz. URSI ID: 32.
     */
    fbEs?: number;

    /**
     * Frequency spread beyond foE in MHz. URSI ID: 87.
     */
    fe?: number;

    /**
     * Frequency spread between fxF2 and FxI in MHz. URSI ID: 86.
     */
    ff?: number;

    /**
     * The frequency at which hprimeF is measured in MHz. URSI ID: 61.
     */
    fhprimeF?: number;

    /**
     * The frequency at which hprimeF2 is measured in MHz. URSI ID: 60.
     */
    fhprimeF2?: number;

    /**
     * Lowest frequency at which echo traces are observed on the ionogram, in MHz. URSI
     * ID: 42.
     */
    fmin?: number;

    /**
     * Minimum frequency of E layer echoes in MHz. URSI ID: 81.
     */
    fminE?: number;

    /**
     * Minimum frequency of Es layer in MHz.
     */
    fminEs?: number;

    /**
     * Minimum frequency of F layer echoes in MHz. URSI ID: 80.
     */
    fminF?: number;

    /**
     * MUF/OblFactor in MHz.
     */
    fmuf?: number;

    /**
     * The ordinary wave critical frequency of the lowest thick layer which causes a
     * discontinuity, in MHz. URSI ID: 20.
     */
    foE?: number;

    /**
     * Critical frequency of night time auroral E layer in MHz. URSI ID: 23.
     */
    foEa?: number;

    /**
     * Predicted value of foE in MHz.
     */
    foEp?: number;

    /**
     * Highest ordinary wave frequency at which a mainly continuous Es trace is
     * observed, in MHz. URSI ID: 30.
     */
    foEs?: number;

    /**
     * The ordinary wave F1 critical frequency, in MHz. URSI ID: 10.
     */
    foF1?: number;

    /**
     * Predicted value of foF1 in MHz.
     */
    foF1p?: number;

    /**
     * The ordinary wave critical frequency of the highest stratification in the F
     * region, specified in MHz. URSI ID: 00.
     */
    foF2?: number;

    /**
     * Predicted value of foF2 in MHz.
     */
    foF2p?: number;

    /**
     * Highest ordinary wave critical frequency of F region patch trace in MHz. URSI
     * ID: 55.
     */
    foP?: number;

    frequency?: Body.Frequency;

    /**
     * The extraordinary wave E critical frequency, in MHz. URSI ID: 21.
     */
    fxE?: number;

    /**
     * The extraordinary wave F1 critical frequency, in MHz. URSI ID: 11.
     */
    fxF1?: number;

    /**
     * The extraordinary wave F2 critical frequency, in MHz. URSI ID: 01.
     */
    fxF2?: number;

    /**
     * The highest frequency of F-trace in MHz. Note: fxI is with capital i. URSI
     * ID: 51.
     */
    fxI?: number;

    /**
     * Array of altitudes above station level for plasma frequency/density arrays in km
     * (must match the size of the plasmaFrequency and electronDensity Arrays).
     */
    height?: Array<number>;

    /**
     * True height of the E peak in km. URSI ID: CE.
     */
    hmE?: number;

    /**
     * True height of the F1 peak in km. URSI ID: BE.
     */
    hmF1?: number;

    /**
     * True height of the F2 peak in km. URSI ID: AE.
     */
    hmF2?: number;

    /**
     * The minimum virtual height of the normal E layer trace in km. URSI ID: 24.
     */
    hprimeE?: number;

    /**
     * Minimum virtual height of night time auroral E layer trace in km. URSI ID: 27.
     */
    hprimeEa?: number;

    /**
     * The minimum height of the trace used to give foEs in km. URSI ID: 34.
     */
    hprimeEs?: number;

    /**
     * The minimum virtual height of the ordinary wave trace taken as a whole, in km.
     * URSI ID: 16.
     */
    hprimeF?: number;

    /**
     * The minimum virtual height of reflection at a point where the trace is
     * horizontal in the F region in km. URSI ID: 14.
     */
    hprimeF1?: number;

    /**
     * The minimum virtual height of ordinary wave trace for the highest stable
     * stratification in the F region in km. URSI ID: 4.
     */
    hprimeF2?: number;

    /**
     * Virtual height at MUF/OblFactor frequency in MHz.
     */
    hprimefMUF?: number;

    /**
     * Minimum virtual height of the trace used to determine foP in km. URSI ID: 56.
     */
    hprimeP?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * Lowest usable frequency.
     */
    luf?: number;

    /**
     * MUF(D)/foF2.
     */
    md?: number;

    /**
     * Maximum Usable Frequency for ground distance D in MHz.
     */
    mufd?: number;

    /**
     * Name of the algorithm used for the electron density profile.
     */
    neProfileName?: string;

    /**
     * Version of the algorithm used for the electron density profile.
     */
    neProfileVersion?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    phase?: Body.Phase;

    /**
     * Array of plasma frequencies in MHz (must match the size of the height and
     * electronDensity arrays).
     */
    plasmaFrequency?: Array<number>;

    /**
     * Uncertainty in specifying the electron plasma frequency at each height point of
     * the profile (must match the size of the plasmaFrequency array).
     */
    plasmaFrequencyUncertainty?: Array<number>;

    /**
     * Equipment location.
     */
    platformName?: string;

    polarization?: Body.Polarization;

    power?: Body.Power;

    /**
     * Average range spread of E layer in km. URSI ID: 85.
     */
    qe?: number;

    /**
     * Average range spread of F layer in km. URSI ID: 84.
     */
    qf?: number;

    range?: Body.Range;

    /**
     * List of Geodetic Latitude, Longitude, and Altitude coordinates in km of the
     * receiver. Coordinates List must always have 3 elements. Valid ranges are -90.0
     * to 90.0 for Latitude and -180.0 to 180.0 for Longitude. Altitude is in km and
     * its value must be 0 or greater.
     */
    receiveCoordinates?: Array<Array<number>>;

    /**
     * Enums: Mobile, Static.
     */
    receiveSensorType?: 'Mobile' | 'Static';

    /**
     * Array of restricted frequencies.
     */
    restrictedFrequency?: Array<number>;

    /**
     * Notes for the restrictedFrequency data.
     */
    restrictedFrequencyNotes?: string;

    /**
     * Effective scale height at hmF2 Titheridge method in km. URSI ID: 69.
     */
    scaleHeightF2Peak?: number;

    /**
     * The ScalerInfo record describes the person or system who interpreted the
     * ionogram in IonoObservation.
     */
    scalerInfo?: Body.ScalerInfo;

    stokes?: Body.Stokes;

    /**
     * Details concerning the composition/intention/interpretation/audience/etc. of any
     * data recorded here. This field may contain all of the intended information e.g.
     * info on signal waveforms used, antenna setup, etc. OR may describe the
     * data/settings to be provided in the “data” field.
     */
    systemNotes?: string;

    /**
     * Total Ionospheric Electron Content \*10^16e/m^2. 1 TEC Unit (TECU) = 10^16
     * electrons/m^2. URSI ID: 72.
     */
    tec?: number;

    /**
     * Array of degrees clockwise from true North of the TID.
     */
    tidAzimuth?: Array<number>;

    /**
     * Array of 1/frequency of the TID wave.
     */
    tidPeriods?: Array<number>;

    /**
     * Array of speed in m/s at which the disturbance travels through the ionosphere.
     */
    tidPhaseSpeeds?: Array<number>;

    time?: Body.Time;

    traceGeneric?: Body.TraceGeneric;

    /**
     * List of Geodetic Latitude, Longitude, and Altitude coordinates in km of the
     * receiver. Coordinates List must always have 3 elements. Valid ranges are -90.0
     * to 90.0 for Latitude and -180.0 to 180.0 for Longitude. Altitude is in km and
     * its value must be 0 or greater.
     */
    transmitCoordinates?: Array<Array<number>>;

    /**
     * Enums: Mobile, Static.
     */
    transmitSensorType?: 'Mobile' | 'Static';

    /**
     * Characterization of the shape of Es trace. URSI ID: 36.
     */
    typeEs?: string;

    /**
     * Parabolic E layer semi-thickness in km. URSI ID: 83.
     */
    yE?: number;

    /**
     * Parabolic F1 layer semi-thickness in km. URSI ID: 95.
     */
    yF1?: number;

    /**
     * Parabolic F2 layer semi-thickness in km. URSI ID: 94.
     */
    yF2?: number;

    /**
     * True height at half peak electron density in the F2 layer in km. URSI ID: 93.
     */
    zhalfNm?: number;

    /**
     * Peak height of E-layer in km. URSI ID: 90.
     */
    zmE?: number;
  }

  export namespace Body {
    export interface Amplitude {
      /**
       * Array of amplitude data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers for amplitude dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the amplitude data.
       */
      notes?: string;
    }

    export interface AntennaElementPosition {
      /**
       * Array of 3-element tuples (x,y,z) in km.
       */
      data?: Array<Array<number>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the antenna_element dimensions.
       */
      dimensions?: Array<number>;
    }

    export interface Azimuth {
      /**
       * Array of incoming azimuth at the receiver.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the azimuth array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the azimuth data.
       */
      notes?: string;
    }

    /**
     * Characteristic attributes of a IonoObservation.
     */
    export interface CharAtt {
      /**
       * Characteristic name. This value should reflect the UDL field name for the
       * corresponding characteristic.
       */
      charName?: string;

      /**
       * Input parameters for the climate model.
       */
      climateModelInputParams?: Array<string>;

      /**
       * Name of the climate model.
       */
      climateModelName?: string;

      /**
       * List of options for the climate model.
       */
      climateModelOptions?: Array<string>;

      /**
       * Descriptive letter (D) for the characteristic specified by URSI ID. Describes
       * specific ionospheric conditions, beyond numerical values.
       */
      d?: string;

      /**
       * Specified characteristic's lower bound. Should be less than or equal to the
       * characteristic's current value as set in this record.
       */
      lowerBound?: number;

      /**
       * Qualifying letter (Q) for the characteristic specified by URSI ID. Describes
       * specific ionospheric conditions, beyond numerical values.
       */
      q?: string;

      /**
       * Uncertainty Bounds (lower and upper) define an interval around reported value
       * that contains true value at the specified probability level. Probability levels
       * are specified in terms of percentile (from 1 to 100) or the standard deviation,
       * sigma (e.g. 1sigma, 2sigma, 3sigma, 5percentile, 10percentile, 25percentile).
       */
      uncertaintyBoundType?: string;

      /**
       * Specified characteristic's upper bound. Should be greater than or equal to the
       * characteristic's current value as set in this record.
       */
      upperBound?: number;

      /**
       * Characteristic's URSI ID. See the characteristic's description for its
       * corresponding URSI ID.
       */
      ursiID?: string;
    }

    export interface Datum {
      /**
       * Array to support sparse data collections.
       */
      data?: Array<number>;

      /**
       * Notes for the datum with details of what the data is, units, etc.
       */
      notes?: string;
    }

    /**
     * Profile of electron densities in the ionosphere associated with an
     * IonoObservation.
     */
    export interface DensityProfile {
      /**
       * Full set of the IRI formalism coefficients.
       */
      iri?: DensityProfile.Iri;

      /**
       * Coefficients to describe the E, F1, and F2 layers as parabolic-shape segments.
       */
      parabolic?: DensityProfile.Parabolic;

      /**
       * Coefficients to describe profile shape as quasi-parabolic segments.
       */
      quasiParabolic?: DensityProfile.QuasiParabolic;

      /**
       * Coefficients to describe either the E, F1, and bottomside F2 profile shapes or
       * the height uncertainty boundaries.
       */
      shiftedChebyshev?: DensityProfile.ShiftedChebyshev;

      /**
       * Parameters of the constant-scale-height Chapman layer.
       */
      topsideExtensionChapmanConst?: DensityProfile.TopsideExtensionChapmanConst;

      /**
       * Varying scale height Chapman topside layer.
       */
      topsideExtensionVaryChap?: DensityProfile.TopsideExtensionVaryChap;

      /**
       * Array of valley model coefficients.
       */
      valleyModelCoeffs?: Array<number>;

      /**
       * Description of the valley model and parameters.
       */
      valleyModelDescription?: string;
    }

    export namespace DensityProfile {
      /**
       * Full set of the IRI formalism coefficients.
       */
      export interface Iri {
        /**
         * B0 parameter of the F2 layer shape.
         */
        b0?: number;

        /**
         * B1 parameter of the F2 layer shape.
         */
        b1?: number;

        /**
         * Peak Density Thickness (PDT) for description of the flat-nose shape, in
         * kilometers.
         */
        chi?: number;

        /**
         * D1 parameter of the F1 layer shape.
         */
        d1?: number;

        /**
         * Description of IRI implementation.
         */
        description?: string;

        /**
         * TBD.
         */
        fp1?: number;

        /**
         * TBD.
         */
        fp2?: number;

        /**
         * TBD.
         */
        fp30?: number;

        /**
         * TBD.
         */
        fp3U?: number;

        /**
         * Starting height of the D layer, in kilometers.
         */
        ha?: number;

        /**
         * Height of the intermediate region at the top of D region, in kilometers.
         */
        hdx?: number;

        /**
         * Peak height of the D layer, in kilometers.
         */
        hmD?: number;

        /**
         * Peak height of the F2 layer, in kilometers.
         */
        hmE?: number;

        /**
         * Peak height of the F1 layer, in kilometers.
         */
        hmF1?: number;

        /**
         * Peak height of F2 layer, in kilometers.
         */
        hmF2?: number;

        /**
         * The valley height, in kilometers.
         */
        hValTop?: number;

        /**
         * Height HZ of the interim layer, in kilometers.
         */
        hz?: number;

        /**
         * Peak density of the D layer, in per cubic centimeter.
         */
        nmD?: number;

        /**
         * Peak density of the E layer, in per cubic centimeter.
         */
        nmE?: number;

        /**
         * Peak density of the F1 layer, in grams per cubic centimeter.
         */
        nmF1?: number;

        /**
         * Peak density of F2 layer, in grams per cubic centimeter.
         */
        nmF2?: number;

        /**
         * The valley depth, in grams per cubic centimeter.
         */
        nValB?: number;
      }

      /**
       * Coefficients to describe the E, F1, and F2 layers as parabolic-shape segments.
       */
      export interface Parabolic {
        /**
         * General description of the QP computation algorithm.
         */
        description?: string;

        /**
         * Describes the E, F1, and F2 layers as parabolic-shape segments.
         */
        parabolicItems?: Array<Parabolic.ParabolicItem>;
      }

      export namespace Parabolic {
        /**
         * Describes the E, F1, and F2 layers as parabolic-shape segments.
         */
        export interface ParabolicItem {
          /**
           * Plasma frequency at the layer peak, in MHz.
           */
          f?: number;

          /**
           * Ionospheric plasma layer (E, F1, or F2).
           */
          layer?: string;

          /**
           * Half-thickness of the layer, in kilometers.
           */
          y?: number;

          /**
           * Height of the layer peak, in kilometers.
           */
          z?: number;
        }
      }

      /**
       * Coefficients to describe profile shape as quasi-parabolic segments.
       */
      export interface QuasiParabolic {
        /**
         * General description of the quasi-parabolic computation algorithm.
         */
        description?: string;

        /**
         * Value of the Earth's radius, in kilometers, used for computations.
         */
        earthRadius?: number;

        /**
         * Array of quasi-parabolic segments. Each segment is the best-fit 3-parameter
         * quasi-parabolas defined via A, B, C coefficients, f^2=A/r^2+B/r+C”. Usually 3
         * groups for E, F1, and F2 layers, but additional segments may be used to improve
         * accuracy.
         */
        quasiParabolicSegments?: Array<QuasiParabolic.QuasiParabolicSegment>;
      }

      export namespace QuasiParabolic {
        /**
         * A quasi-parabolic segment is the best-fit 3-parameter quasi-parabolas defined
         * via A, B, C coefficients, f^2=A/r^2+B/r+C”. Usually 3 groups for E, F1, and F2
         * layers, but additional segments may be used to improve accuracy.
         */
        export interface QuasiParabolicSegment {
          /**
           * Coefficient A.
           */
          a?: number;

          /**
           * Coefficient B.
           */
          b?: number;

          /**
           * Coefficient C.
           */
          c?: number;

          /**
           * Best-fit error.
           */
          error?: number;

          /**
           * The index of this segment in the list, from 1 to NumSegments.
           */
          index?: number;

          /**
           * Starting range of the segment, in kilometers from the Earth's center.
           */
          rb?: number;

          /**
           * Ending range of the segment, in kilometers from the Earth's center.
           */
          re?: number;
        }
      }

      /**
       * Coefficients to describe either the E, F1, and bottomside F2 profile shapes or
       * the height uncertainty boundaries.
       */
      export interface ShiftedChebyshev {
        /**
         * Description of the computation technique.
         */
        description?: string;

        /**
         * Up to 3 groups of coefficients, using “shiftedChebyshev” sub-field, to describe
         * E, F1, and bottomside F2 profile shapes, or up to 6 groups of coefficients to
         * describe height uncertainty boundaries (upper and lower).
         */
        shiftedChebyshevs?: Array<ShiftedChebyshev.ShiftedChebyshev>;
      }

      export namespace ShiftedChebyshev {
        /**
         * Coefficients, using ‘shiftedChebyshev’ sub-field, to describe E, F1, and
         * bottomside F2 profile shapes, or height uncertainty boundaries (upper and
         * lower).
         */
        export interface ShiftedChebyshev {
          /**
           * Array of coefficients.
           */
          coeffs?: Array<number>;

          /**
           * Best fit error.
           */
          error?: number;

          /**
           * Start frequency of the layer, in MHz.
           */
          fstart?: number;

          /**
           * Stop frequency of the layer, in MHz.
           */
          fstop?: number;

          /**
           * The ionospheric plasma layer.
           */
          layer?: string;

          /**
           * Number of coefficients in the expansion.
           */
          n?: number;

          /**
           * Peak height of the layer, in kilometers.
           */
          peakheight?: number;

          /**
           * Height at which density is half of the peak Nm, in kilometers.
           */
          zhalfNm?: number;
        }
      }

      /**
       * Parameters of the constant-scale-height Chapman layer.
       */
      export interface TopsideExtensionChapmanConst {
        /**
         * Peak Density Thickness (PDT) for description of the flat-nose shape, in
         * kilometers.
         */
        chi?: number;

        /**
         * Description of the Chapman computation technique.
         */
        description?: string;

        /**
         * Peak height of F2 layer, in kilometers.
         */
        hmF2?: number;

        /**
         * Peak density of F2 layer, in grams per cubic centimeter.
         */
        nmF2?: number;

        /**
         * Scale height if F2 layer at the peak, in kilometers.
         */
        scaleF2?: number;
      }

      /**
       * Varying scale height Chapman topside layer.
       */
      export interface TopsideExtensionVaryChap {
        /**
         * Alpha parameter of the profile shape.
         */
        alpha?: number;

        /**
         * Beta parameter of the profile shape.
         */
        beta?: number;

        /**
         * Peak Density Thickness (PDT) for description of the flat-nose shape, in
         * kilometers.
         */
        chi?: number;

        /**
         * Description of the Chapman computation technique.
         */
        description?: string;

        /**
         * Peak height of F2 layer, in kilometers.
         */
        hmF2?: number;

        /**
         * Transition height, in kilometers.
         */
        ht?: number;

        /**
         * Peak density of F2 layer, in grams per cubic centimeter.
         */
        nmF2?: number;

        /**
         * Scale height if F2 layer at the peak, in kilometers.
         */
        scaleF2?: number;
      }
    }

    export interface Doppler {
      /**
       * Array of received doppler shifts in Hz.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the doppler array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the doppler data.
       */
      notes?: string;
    }

    export interface Elevation {
      /**
       * Array of incoming elevation at the receiver.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the elevation array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the elevation data.
       */
      notes?: string;
    }

    export interface Frequency {
      /**
       * Array of frequency data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for frequency dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the frequency array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the frequency data.
       */
      notes?: string;
    }

    export interface Phase {
      /**
       * Array of phase data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for phase dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the phase array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the phase data. Orientation and position for each antenna element
       * across the antenna_element dimension.
       */
      notes?: string;
    }

    export interface Polarization {
      /**
       * Array of polarization data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<'X' | 'O'>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers for polarization dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the polarization data.
       */
      notes?: string;
    }

    export interface Power {
      /**
       * Array of received power in db.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the power array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the power data.
       */
      notes?: string;
    }

    export interface Range {
      /**
       * Array of range data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for range dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the range array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the range data.
       */
      notes?: string;
    }

    /**
     * The ScalerInfo record describes the person or system who interpreted the
     * ionogram in IonoObservation.
     */
    export interface ScalerInfo {
      /**
       * Scaler confidence level.
       */
      confidenceLevel?: number;

      /**
       * Scaler confidence score.
       */
      confidenceScore?: number;

      /**
       * Scaler name.
       */
      name?: string;

      /**
       * Scaler organization.
       */
      organization?: string;

      /**
       * Scaler type (MANUAL, AUTOMATIC or UNKNOWN).
       */
      type?: string;

      /**
       * Scaler version.
       */
      version?: number;
    }

    export interface Stokes {
      /**
       * Array of received stokes data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the stoke array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the stokes data.
       */
      notes?: string;

      /**
       * S1, S2, and S3 (the normalized Stokes parameters 1, 2, and 3).
       */
      s?: Array<number>;
    }

    export interface Time {
      /**
       * Array of times in number of seconds passed since January 1st, 1970 with the same
       * dimensions as power.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the time array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * The notes indicate the scheme and accuracy.
       */
      notes?: string;
    }

    export interface TraceGeneric {
      /**
       * Multi-dimensional Array. The 1st dimension spans points along the trace while
       * the 2nd dimension spans frequency-range pairs.
       */
      data?: Array<Array<Array<number>>>;

      /**
       * Array of dimension names for trace generic data.
       */
      dimensionName?: Array<string>;

      /**
       * Notes for the trace generic data.
       */
      notes?: string;
    }
  }
}

export interface IonOobservationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Sounding Start time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTimeUTC: string;

  firstResult?: number;

  maxResults?: number;
}

export interface IonOobservationUnvalidatedPublishParams {
  body: Array<IonOobservationUnvalidatedPublishParams.Body>;
}

export namespace IonOobservationUnvalidatedPublishParams {
  /**
   * These services provide operations for posting and querying ionospheric
   * observation data. Characteristics are defined by the CHARS: URSI IIWG format for
   * archiving monthly ionospheric characteristics, INAG Bulletin No. 62
   * specification. Qualifying and Descriptive letters are defined by the URSI
   * Handbook for Ionogram Interpretation and reduction, Report UAG, No. 23A
   * specification.
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
     * Sounding Start time in ISO8601 UTC format.
     */
    startTimeUTC: string;

    /**
     * URSI code for station or stations producing the ionosonde.
     */
    stationId: string;

    /**
     * Ionosonde hardware type or data collection type together with possible
     * additional descriptors.
     */
    system: string;

    /**
     * Names of settings.
     */
    systemInfo: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    amplitude?: Body.Amplitude;

    antennaElementPosition?: Body.AntennaElementPosition;

    /**
     * Enums: J2000, ECR/ECEF, TEME, GCRF, WGS84 (GEODetic lat, long, alt), GEOCentric
     * (lat, long, radii).
     */
    antennaElementPositionCoordinateSystem?:
      | 'J2000'
      | 'ECR/ECEF'
      | 'TEME'
      | 'GCRF'
      | 'WGS84 (GEODetic lat, long, alt)'
      | 'GEOCentric (lat, long, radii)';

    /**
     * Array of Legacy Artist Flags.
     */
    artistFlags?: Array<number>;

    azimuth?: Body.Azimuth;

    /**
     * IRI thickness parameter in km. URSI ID: D0.
     */
    b0?: number;

    /**
     * IRI profile shape parameter. URSI ID: D1.
     */
    b1?: number;

    /**
     * List of attributes that are associated with the specified characteristics.
     * Characteristics are defined by the CHARS: URSI IIWG format for archiving monthly
     * ionospheric characteristics, INAG Bulletin No. 62 specification. Qualifying and
     * Descriptive letters are defined by the URSI Handbook for Ionogram Interpretation
     * and reduction, Report UAG, No. 23A specification.
     */
    charAtts?: Array<Body.CharAtt>;

    /**
     * Distance for MUF calculation in km.
     */
    d?: number;

    /**
     * IRI profile shape parameter, F1 layer. URSI ID: D2.
     */
    d1?: number;

    datum?: Body.Datum;

    /**
     * Adjustment to the scaled foF2 during profile inversion in MHz.
     */
    deltafoF2?: number;

    /**
     * Profile of electron densities in the ionosphere associated with an
     * IonoObservation.
     */
    densityProfile?: Body.DensityProfile;

    doppler?: Body.Doppler;

    /**
     * Lowering of E trace to the leading edge in km.
     */
    downE?: number;

    /**
     * Lowering of Es trace to the leading edge in km.
     */
    downEs?: number;

    /**
     * Lowering of F trace to the leading edge in km.
     */
    downF?: number;

    /**
     * Array of electron densities in cm^-3 (must match the size of the height and
     * plasmaFrequency arrays).
     */
    electronDensity?: Array<number>;

    /**
     * Uncertainty in specifying the electron density at each height point of the
     * profile (must match the size of the electronDensity array).
     */
    electronDensityUncertainty?: Array<number>;

    elevation?: Body.Elevation;

    /**
     * The blanketing frequency of layer used to derive foEs in MHz. URSI ID: 32.
     */
    fbEs?: number;

    /**
     * Frequency spread beyond foE in MHz. URSI ID: 87.
     */
    fe?: number;

    /**
     * Frequency spread between fxF2 and FxI in MHz. URSI ID: 86.
     */
    ff?: number;

    /**
     * The frequency at which hprimeF is measured in MHz. URSI ID: 61.
     */
    fhprimeF?: number;

    /**
     * The frequency at which hprimeF2 is measured in MHz. URSI ID: 60.
     */
    fhprimeF2?: number;

    /**
     * Lowest frequency at which echo traces are observed on the ionogram, in MHz. URSI
     * ID: 42.
     */
    fmin?: number;

    /**
     * Minimum frequency of E layer echoes in MHz. URSI ID: 81.
     */
    fminE?: number;

    /**
     * Minimum frequency of Es layer in MHz.
     */
    fminEs?: number;

    /**
     * Minimum frequency of F layer echoes in MHz. URSI ID: 80.
     */
    fminF?: number;

    /**
     * MUF/OblFactor in MHz.
     */
    fmuf?: number;

    /**
     * The ordinary wave critical frequency of the lowest thick layer which causes a
     * discontinuity, in MHz. URSI ID: 20.
     */
    foE?: number;

    /**
     * Critical frequency of night time auroral E layer in MHz. URSI ID: 23.
     */
    foEa?: number;

    /**
     * Predicted value of foE in MHz.
     */
    foEp?: number;

    /**
     * Highest ordinary wave frequency at which a mainly continuous Es trace is
     * observed, in MHz. URSI ID: 30.
     */
    foEs?: number;

    /**
     * The ordinary wave F1 critical frequency, in MHz. URSI ID: 10.
     */
    foF1?: number;

    /**
     * Predicted value of foF1 in MHz.
     */
    foF1p?: number;

    /**
     * The ordinary wave critical frequency of the highest stratification in the F
     * region, specified in MHz. URSI ID: 00.
     */
    foF2?: number;

    /**
     * Predicted value of foF2 in MHz.
     */
    foF2p?: number;

    /**
     * Highest ordinary wave critical frequency of F region patch trace in MHz. URSI
     * ID: 55.
     */
    foP?: number;

    frequency?: Body.Frequency;

    /**
     * The extraordinary wave E critical frequency, in MHz. URSI ID: 21.
     */
    fxE?: number;

    /**
     * The extraordinary wave F1 critical frequency, in MHz. URSI ID: 11.
     */
    fxF1?: number;

    /**
     * The extraordinary wave F2 critical frequency, in MHz. URSI ID: 01.
     */
    fxF2?: number;

    /**
     * The highest frequency of F-trace in MHz. Note: fxI is with capital i. URSI
     * ID: 51.
     */
    fxI?: number;

    /**
     * Array of altitudes above station level for plasma frequency/density arrays in km
     * (must match the size of the plasmaFrequency and electronDensity Arrays).
     */
    height?: Array<number>;

    /**
     * True height of the E peak in km. URSI ID: CE.
     */
    hmE?: number;

    /**
     * True height of the F1 peak in km. URSI ID: BE.
     */
    hmF1?: number;

    /**
     * True height of the F2 peak in km. URSI ID: AE.
     */
    hmF2?: number;

    /**
     * The minimum virtual height of the normal E layer trace in km. URSI ID: 24.
     */
    hprimeE?: number;

    /**
     * Minimum virtual height of night time auroral E layer trace in km. URSI ID: 27.
     */
    hprimeEa?: number;

    /**
     * The minimum height of the trace used to give foEs in km. URSI ID: 34.
     */
    hprimeEs?: number;

    /**
     * The minimum virtual height of the ordinary wave trace taken as a whole, in km.
     * URSI ID: 16.
     */
    hprimeF?: number;

    /**
     * The minimum virtual height of reflection at a point where the trace is
     * horizontal in the F region in km. URSI ID: 14.
     */
    hprimeF1?: number;

    /**
     * The minimum virtual height of ordinary wave trace for the highest stable
     * stratification in the F region in km. URSI ID: 4.
     */
    hprimeF2?: number;

    /**
     * Virtual height at MUF/OblFactor frequency in MHz.
     */
    hprimefMUF?: number;

    /**
     * Minimum virtual height of the trace used to determine foP in km. URSI ID: 56.
     */
    hprimeP?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * Lowest usable frequency.
     */
    luf?: number;

    /**
     * MUF(D)/foF2.
     */
    md?: number;

    /**
     * Maximum Usable Frequency for ground distance D in MHz.
     */
    mufd?: number;

    /**
     * Name of the algorithm used for the electron density profile.
     */
    neProfileName?: string;

    /**
     * Version of the algorithm used for the electron density profile.
     */
    neProfileVersion?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    phase?: Body.Phase;

    /**
     * Array of plasma frequencies in MHz (must match the size of the height and
     * electronDensity arrays).
     */
    plasmaFrequency?: Array<number>;

    /**
     * Uncertainty in specifying the electron plasma frequency at each height point of
     * the profile (must match the size of the plasmaFrequency array).
     */
    plasmaFrequencyUncertainty?: Array<number>;

    /**
     * Equipment location.
     */
    platformName?: string;

    polarization?: Body.Polarization;

    power?: Body.Power;

    /**
     * Average range spread of E layer in km. URSI ID: 85.
     */
    qe?: number;

    /**
     * Average range spread of F layer in km. URSI ID: 84.
     */
    qf?: number;

    range?: Body.Range;

    /**
     * List of Geodetic Latitude, Longitude, and Altitude coordinates in km of the
     * receiver. Coordinates List must always have 3 elements. Valid ranges are -90.0
     * to 90.0 for Latitude and -180.0 to 180.0 for Longitude. Altitude is in km and
     * its value must be 0 or greater.
     */
    receiveCoordinates?: Array<Array<number>>;

    /**
     * Enums: Mobile, Static.
     */
    receiveSensorType?: 'Mobile' | 'Static';

    /**
     * Array of restricted frequencies.
     */
    restrictedFrequency?: Array<number>;

    /**
     * Notes for the restrictedFrequency data.
     */
    restrictedFrequencyNotes?: string;

    /**
     * Effective scale height at hmF2 Titheridge method in km. URSI ID: 69.
     */
    scaleHeightF2Peak?: number;

    /**
     * The ScalerInfo record describes the person or system who interpreted the
     * ionogram in IonoObservation.
     */
    scalerInfo?: Body.ScalerInfo;

    stokes?: Body.Stokes;

    /**
     * Details concerning the composition/intention/interpretation/audience/etc. of any
     * data recorded here. This field may contain all of the intended information e.g.
     * info on signal waveforms used, antenna setup, etc. OR may describe the
     * data/settings to be provided in the “data” field.
     */
    systemNotes?: string;

    /**
     * Total Ionospheric Electron Content \*10^16e/m^2. 1 TEC Unit (TECU) = 10^16
     * electrons/m^2. URSI ID: 72.
     */
    tec?: number;

    /**
     * Array of degrees clockwise from true North of the TID.
     */
    tidAzimuth?: Array<number>;

    /**
     * Array of 1/frequency of the TID wave.
     */
    tidPeriods?: Array<number>;

    /**
     * Array of speed in m/s at which the disturbance travels through the ionosphere.
     */
    tidPhaseSpeeds?: Array<number>;

    time?: Body.Time;

    traceGeneric?: Body.TraceGeneric;

    /**
     * List of Geodetic Latitude, Longitude, and Altitude coordinates in km of the
     * receiver. Coordinates List must always have 3 elements. Valid ranges are -90.0
     * to 90.0 for Latitude and -180.0 to 180.0 for Longitude. Altitude is in km and
     * its value must be 0 or greater.
     */
    transmitCoordinates?: Array<Array<number>>;

    /**
     * Enums: Mobile, Static.
     */
    transmitSensorType?: 'Mobile' | 'Static';

    /**
     * Characterization of the shape of Es trace. URSI ID: 36.
     */
    typeEs?: string;

    /**
     * Parabolic E layer semi-thickness in km. URSI ID: 83.
     */
    yE?: number;

    /**
     * Parabolic F1 layer semi-thickness in km. URSI ID: 95.
     */
    yF1?: number;

    /**
     * Parabolic F2 layer semi-thickness in km. URSI ID: 94.
     */
    yF2?: number;

    /**
     * True height at half peak electron density in the F2 layer in km. URSI ID: 93.
     */
    zhalfNm?: number;

    /**
     * Peak height of E-layer in km. URSI ID: 90.
     */
    zmE?: number;
  }

  export namespace Body {
    export interface Amplitude {
      /**
       * Array of amplitude data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers for amplitude dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the amplitude data.
       */
      notes?: string;
    }

    export interface AntennaElementPosition {
      /**
       * Array of 3-element tuples (x,y,z) in km.
       */
      data?: Array<Array<number>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the antenna_element dimensions.
       */
      dimensions?: Array<number>;
    }

    export interface Azimuth {
      /**
       * Array of incoming azimuth at the receiver.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the azimuth array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the azimuth data.
       */
      notes?: string;
    }

    /**
     * Characteristic attributes of a IonoObservation.
     */
    export interface CharAtt {
      /**
       * Characteristic name. This value should reflect the UDL field name for the
       * corresponding characteristic.
       */
      charName?: string;

      /**
       * Input parameters for the climate model.
       */
      climateModelInputParams?: Array<string>;

      /**
       * Name of the climate model.
       */
      climateModelName?: string;

      /**
       * List of options for the climate model.
       */
      climateModelOptions?: Array<string>;

      /**
       * Descriptive letter (D) for the characteristic specified by URSI ID. Describes
       * specific ionospheric conditions, beyond numerical values.
       */
      d?: string;

      /**
       * Specified characteristic's lower bound. Should be less than or equal to the
       * characteristic's current value as set in this record.
       */
      lowerBound?: number;

      /**
       * Qualifying letter (Q) for the characteristic specified by URSI ID. Describes
       * specific ionospheric conditions, beyond numerical values.
       */
      q?: string;

      /**
       * Uncertainty Bounds (lower and upper) define an interval around reported value
       * that contains true value at the specified probability level. Probability levels
       * are specified in terms of percentile (from 1 to 100) or the standard deviation,
       * sigma (e.g. 1sigma, 2sigma, 3sigma, 5percentile, 10percentile, 25percentile).
       */
      uncertaintyBoundType?: string;

      /**
       * Specified characteristic's upper bound. Should be greater than or equal to the
       * characteristic's current value as set in this record.
       */
      upperBound?: number;

      /**
       * Characteristic's URSI ID. See the characteristic's description for its
       * corresponding URSI ID.
       */
      ursiID?: string;
    }

    export interface Datum {
      /**
       * Array to support sparse data collections.
       */
      data?: Array<number>;

      /**
       * Notes for the datum with details of what the data is, units, etc.
       */
      notes?: string;
    }

    /**
     * Profile of electron densities in the ionosphere associated with an
     * IonoObservation.
     */
    export interface DensityProfile {
      /**
       * Full set of the IRI formalism coefficients.
       */
      iri?: DensityProfile.Iri;

      /**
       * Coefficients to describe the E, F1, and F2 layers as parabolic-shape segments.
       */
      parabolic?: DensityProfile.Parabolic;

      /**
       * Coefficients to describe profile shape as quasi-parabolic segments.
       */
      quasiParabolic?: DensityProfile.QuasiParabolic;

      /**
       * Coefficients to describe either the E, F1, and bottomside F2 profile shapes or
       * the height uncertainty boundaries.
       */
      shiftedChebyshev?: DensityProfile.ShiftedChebyshev;

      /**
       * Parameters of the constant-scale-height Chapman layer.
       */
      topsideExtensionChapmanConst?: DensityProfile.TopsideExtensionChapmanConst;

      /**
       * Varying scale height Chapman topside layer.
       */
      topsideExtensionVaryChap?: DensityProfile.TopsideExtensionVaryChap;

      /**
       * Array of valley model coefficients.
       */
      valleyModelCoeffs?: Array<number>;

      /**
       * Description of the valley model and parameters.
       */
      valleyModelDescription?: string;
    }

    export namespace DensityProfile {
      /**
       * Full set of the IRI formalism coefficients.
       */
      export interface Iri {
        /**
         * B0 parameter of the F2 layer shape.
         */
        b0?: number;

        /**
         * B1 parameter of the F2 layer shape.
         */
        b1?: number;

        /**
         * Peak Density Thickness (PDT) for description of the flat-nose shape, in
         * kilometers.
         */
        chi?: number;

        /**
         * D1 parameter of the F1 layer shape.
         */
        d1?: number;

        /**
         * Description of IRI implementation.
         */
        description?: string;

        /**
         * TBD.
         */
        fp1?: number;

        /**
         * TBD.
         */
        fp2?: number;

        /**
         * TBD.
         */
        fp30?: number;

        /**
         * TBD.
         */
        fp3U?: number;

        /**
         * Starting height of the D layer, in kilometers.
         */
        ha?: number;

        /**
         * Height of the intermediate region at the top of D region, in kilometers.
         */
        hdx?: number;

        /**
         * Peak height of the D layer, in kilometers.
         */
        hmD?: number;

        /**
         * Peak height of the F2 layer, in kilometers.
         */
        hmE?: number;

        /**
         * Peak height of the F1 layer, in kilometers.
         */
        hmF1?: number;

        /**
         * Peak height of F2 layer, in kilometers.
         */
        hmF2?: number;

        /**
         * The valley height, in kilometers.
         */
        hValTop?: number;

        /**
         * Height HZ of the interim layer, in kilometers.
         */
        hz?: number;

        /**
         * Peak density of the D layer, in per cubic centimeter.
         */
        nmD?: number;

        /**
         * Peak density of the E layer, in per cubic centimeter.
         */
        nmE?: number;

        /**
         * Peak density of the F1 layer, in grams per cubic centimeter.
         */
        nmF1?: number;

        /**
         * Peak density of F2 layer, in grams per cubic centimeter.
         */
        nmF2?: number;

        /**
         * The valley depth, in grams per cubic centimeter.
         */
        nValB?: number;
      }

      /**
       * Coefficients to describe the E, F1, and F2 layers as parabolic-shape segments.
       */
      export interface Parabolic {
        /**
         * General description of the QP computation algorithm.
         */
        description?: string;

        /**
         * Describes the E, F1, and F2 layers as parabolic-shape segments.
         */
        parabolicItems?: Array<Parabolic.ParabolicItem>;
      }

      export namespace Parabolic {
        /**
         * Describes the E, F1, and F2 layers as parabolic-shape segments.
         */
        export interface ParabolicItem {
          /**
           * Plasma frequency at the layer peak, in MHz.
           */
          f?: number;

          /**
           * Ionospheric plasma layer (E, F1, or F2).
           */
          layer?: string;

          /**
           * Half-thickness of the layer, in kilometers.
           */
          y?: number;

          /**
           * Height of the layer peak, in kilometers.
           */
          z?: number;
        }
      }

      /**
       * Coefficients to describe profile shape as quasi-parabolic segments.
       */
      export interface QuasiParabolic {
        /**
         * General description of the quasi-parabolic computation algorithm.
         */
        description?: string;

        /**
         * Value of the Earth's radius, in kilometers, used for computations.
         */
        earthRadius?: number;

        /**
         * Array of quasi-parabolic segments. Each segment is the best-fit 3-parameter
         * quasi-parabolas defined via A, B, C coefficients, f^2=A/r^2+B/r+C”. Usually 3
         * groups for E, F1, and F2 layers, but additional segments may be used to improve
         * accuracy.
         */
        quasiParabolicSegments?: Array<QuasiParabolic.QuasiParabolicSegment>;
      }

      export namespace QuasiParabolic {
        /**
         * A quasi-parabolic segment is the best-fit 3-parameter quasi-parabolas defined
         * via A, B, C coefficients, f^2=A/r^2+B/r+C”. Usually 3 groups for E, F1, and F2
         * layers, but additional segments may be used to improve accuracy.
         */
        export interface QuasiParabolicSegment {
          /**
           * Coefficient A.
           */
          a?: number;

          /**
           * Coefficient B.
           */
          b?: number;

          /**
           * Coefficient C.
           */
          c?: number;

          /**
           * Best-fit error.
           */
          error?: number;

          /**
           * The index of this segment in the list, from 1 to NumSegments.
           */
          index?: number;

          /**
           * Starting range of the segment, in kilometers from the Earth's center.
           */
          rb?: number;

          /**
           * Ending range of the segment, in kilometers from the Earth's center.
           */
          re?: number;
        }
      }

      /**
       * Coefficients to describe either the E, F1, and bottomside F2 profile shapes or
       * the height uncertainty boundaries.
       */
      export interface ShiftedChebyshev {
        /**
         * Description of the computation technique.
         */
        description?: string;

        /**
         * Up to 3 groups of coefficients, using “shiftedChebyshev” sub-field, to describe
         * E, F1, and bottomside F2 profile shapes, or up to 6 groups of coefficients to
         * describe height uncertainty boundaries (upper and lower).
         */
        shiftedChebyshevs?: Array<ShiftedChebyshev.ShiftedChebyshev>;
      }

      export namespace ShiftedChebyshev {
        /**
         * Coefficients, using ‘shiftedChebyshev’ sub-field, to describe E, F1, and
         * bottomside F2 profile shapes, or height uncertainty boundaries (upper and
         * lower).
         */
        export interface ShiftedChebyshev {
          /**
           * Array of coefficients.
           */
          coeffs?: Array<number>;

          /**
           * Best fit error.
           */
          error?: number;

          /**
           * Start frequency of the layer, in MHz.
           */
          fstart?: number;

          /**
           * Stop frequency of the layer, in MHz.
           */
          fstop?: number;

          /**
           * The ionospheric plasma layer.
           */
          layer?: string;

          /**
           * Number of coefficients in the expansion.
           */
          n?: number;

          /**
           * Peak height of the layer, in kilometers.
           */
          peakheight?: number;

          /**
           * Height at which density is half of the peak Nm, in kilometers.
           */
          zhalfNm?: number;
        }
      }

      /**
       * Parameters of the constant-scale-height Chapman layer.
       */
      export interface TopsideExtensionChapmanConst {
        /**
         * Peak Density Thickness (PDT) for description of the flat-nose shape, in
         * kilometers.
         */
        chi?: number;

        /**
         * Description of the Chapman computation technique.
         */
        description?: string;

        /**
         * Peak height of F2 layer, in kilometers.
         */
        hmF2?: number;

        /**
         * Peak density of F2 layer, in grams per cubic centimeter.
         */
        nmF2?: number;

        /**
         * Scale height if F2 layer at the peak, in kilometers.
         */
        scaleF2?: number;
      }

      /**
       * Varying scale height Chapman topside layer.
       */
      export interface TopsideExtensionVaryChap {
        /**
         * Alpha parameter of the profile shape.
         */
        alpha?: number;

        /**
         * Beta parameter of the profile shape.
         */
        beta?: number;

        /**
         * Peak Density Thickness (PDT) for description of the flat-nose shape, in
         * kilometers.
         */
        chi?: number;

        /**
         * Description of the Chapman computation technique.
         */
        description?: string;

        /**
         * Peak height of F2 layer, in kilometers.
         */
        hmF2?: number;

        /**
         * Transition height, in kilometers.
         */
        ht?: number;

        /**
         * Peak density of F2 layer, in grams per cubic centimeter.
         */
        nmF2?: number;

        /**
         * Scale height if F2 layer at the peak, in kilometers.
         */
        scaleF2?: number;
      }
    }

    export interface Doppler {
      /**
       * Array of received doppler shifts in Hz.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the doppler array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the doppler data.
       */
      notes?: string;
    }

    export interface Elevation {
      /**
       * Array of incoming elevation at the receiver.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the elevation array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the elevation data.
       */
      notes?: string;
    }

    export interface Frequency {
      /**
       * Array of frequency data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for frequency dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the frequency array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the frequency data.
       */
      notes?: string;
    }

    export interface Phase {
      /**
       * Array of phase data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for phase dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the phase array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the phase data. Orientation and position for each antenna element
       * across the antenna_element dimension.
       */
      notes?: string;
    }

    export interface Polarization {
      /**
       * Array of polarization data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<'X' | 'O'>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers for polarization dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the polarization data.
       */
      notes?: string;
    }

    export interface Power {
      /**
       * Array of received power in db.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the power array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the power data.
       */
      notes?: string;
    }

    export interface Range {
      /**
       * Array of range data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for range dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the range array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the range data.
       */
      notes?: string;
    }

    /**
     * The ScalerInfo record describes the person or system who interpreted the
     * ionogram in IonoObservation.
     */
    export interface ScalerInfo {
      /**
       * Scaler confidence level.
       */
      confidenceLevel?: number;

      /**
       * Scaler confidence score.
       */
      confidenceScore?: number;

      /**
       * Scaler name.
       */
      name?: string;

      /**
       * Scaler organization.
       */
      organization?: string;

      /**
       * Scaler type (MANUAL, AUTOMATIC or UNKNOWN).
       */
      type?: string;

      /**
       * Scaler version.
       */
      version?: number;
    }

    export interface Stokes {
      /**
       * Array of received stokes data.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the stoke array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * Notes for the stokes data.
       */
      notes?: string;

      /**
       * S1, S2, and S3 (the normalized Stokes parameters 1, 2, and 3).
       */
      s?: Array<number>;
    }

    export interface Time {
      /**
       * Array of times in number of seconds passed since January 1st, 1970 with the same
       * dimensions as power.
       */
      data?: Array<Array<Array<Array<Array<Array<Array<number>>>>>>>;

      /**
       * Array of names for dimensions.
       */
      dimensionName?: Array<string>;

      /**
       * Array of integers of the time array dimensions.
       */
      dimensions?: Array<number>;

      /**
       * The notes indicate the scheme and accuracy.
       */
      notes?: string;
    }

    export interface TraceGeneric {
      /**
       * Multi-dimensional Array. The 1st dimension spans points along the trace while
       * the 2nd dimension spans frequency-range pairs.
       */
      data?: Array<Array<Array<number>>>;

      /**
       * Array of dimension names for trace generic data.
       */
      dimensionName?: Array<string>;

      /**
       * Notes for the trace generic data.
       */
      notes?: string;
    }
  }
}

export declare namespace IonOobservation {
  export {
    type IonOobservationListResponse as IonOobservationListResponse,
    type IonOobservationCountResponse as IonOobservationCountResponse,
    type IonOobservationQueryhelpResponse as IonOobservationQueryhelpResponse,
    type IonOobservationTupleResponse as IonOobservationTupleResponse,
    type IonOobservationListResponsesOffsetPage as IonOobservationListResponsesOffsetPage,
    type IonOobservationListParams as IonOobservationListParams,
    type IonOobservationCountParams as IonOobservationCountParams,
    type IonOobservationCreateBulkParams as IonOobservationCreateBulkParams,
    type IonOobservationTupleParams as IonOobservationTupleParams,
    type IonOobservationUnvalidatedPublishParams as IonOobservationUnvalidatedPublishParams,
  };
}
