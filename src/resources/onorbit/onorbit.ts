// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AntennaDetailsAPI from './antenna-details';
import {
  AntennaDetailCreateParams,
  AntennaDetailDeleteParams,
  AntennaDetailListResponse,
  AntennaDetailRetrieveParams,
  AntennaDetailUpdateParams,
  AntennaDetails,
  AntennaDetailsAbridged,
  AntennaDetailsFull,
} from './antenna-details';
import * as DriftHistoryAPI from './drift-history';
import { DriftHistory, DrifthistoryAbridged, DrifthistoryFull } from './drift-history';

export class Onorbit extends APIResource {
  antennaDetails: AntennaDetailsAPI.AntennaDetails = new AntennaDetailsAPI.AntennaDetails(this._client);
  driftHistory: DriftHistoryAPI.DriftHistory = new DriftHistoryAPI.DriftHistory(this._client);
}

Onorbit.AntennaDetails = AntennaDetails;
Onorbit.DriftHistory = DriftHistory;

export declare namespace Onorbit {
  export {
    AntennaDetails as AntennaDetails,
    type AntennaDetailsAbridged as AntennaDetailsAbridged,
    type AntennaDetailsFull as AntennaDetailsFull,
    type AntennaDetailListResponse as AntennaDetailListResponse,
    type AntennaDetailCreateParams as AntennaDetailCreateParams,
    type AntennaDetailRetrieveParams as AntennaDetailRetrieveParams,
    type AntennaDetailUpdateParams as AntennaDetailUpdateParams,
    type AntennaDetailDeleteParams as AntennaDetailDeleteParams,
  };

  export {
    DriftHistory as DriftHistory,
    type DrifthistoryAbridged as DrifthistoryAbridged,
    type DrifthistoryFull as DrifthistoryFull,
  };
}
