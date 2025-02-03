// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type BlobLike } from '../../uploads';

export class Crewpapers extends APIResource {
  /**
   * Service operation to upload a supporting PDF for the aircraft sortie. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   */
  create(params: CrewpaperCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { aircraftSortieIds, classificationMarking, paperStatus, papersVersion, body } = params;
    return this._client.post('/filedrop/crewpapers', {
      query: { aircraftSortieIds, classificationMarking, paperStatus, papersVersion },
      body: body,
      ...options,
      headers: { 'Content-Type': 'application/pdf', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }

  /**
   * Service operation to remove supporting PDF from an aircraft sortie or sorties. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   */
  unpublish(params: CrewpaperUnpublishParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { ids } = params;
    return this._client.post('/udl/crewpapers/unpublish', {
      query: { ids },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CrewpaperCreateParams {
  /**
   * Query param: Comma-separated list of AircraftSortie IDs the Crew Papers are
   * being added to.
   */
  aircraftSortieIds: string;

  /**
   * Query param: classificationMarking of the Crew Papers.
   */
  classificationMarking: string;

  /**
   * Query param: The status of the supporting document.
   */
  paperStatus: 'PUBLISHED' | 'DELETED' | 'UPDATED' | 'READ';

  /**
   * Query param: The version number of the crew paper.
   */
  papersVersion: string;

  /**
   * Body param:
   */
  body: string | ArrayBufferView | ArrayBuffer | BlobLike;
}

export interface CrewpaperUnpublishParams {
  /**
   * Comma-separated list of AircraftSortie IDs where Crew Papers are unpublished.
   */
  ids: string;
}

export declare namespace Crewpapers {
  export {
    type CrewpaperCreateParams as CrewpaperCreateParams,
    type CrewpaperUnpublishParams as CrewpaperUnpublishParams,
  };
}
