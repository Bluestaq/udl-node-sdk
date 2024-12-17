// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PersonnelRecoveryAPI from './personnel-recovery';
import { PersonnelRecovery, PersonnelRecoveryCreateParams } from './personnel-recovery';

export class MissionOps extends APIResource {
  personnelRecovery: PersonnelRecoveryAPI.PersonnelRecovery = new PersonnelRecoveryAPI.PersonnelRecovery(
    this._client,
  );
}

MissionOps.PersonnelRecovery = PersonnelRecovery;

export declare namespace MissionOps {
  export {
    PersonnelRecovery as PersonnelRecovery,
    type PersonnelRecoveryCreateParams as PersonnelRecoveryCreateParams,
  };
}
