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
    const { body } = params;
    return this._client.post('/filedrop/crewpapers', {
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
  unpublish(body: CrewpaperUnpublishParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/crewpapers/unpublish', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CrewpaperCreateParams {
  /**
   * Comma-separated list of AircraftSortie IDs the Crew Papers are being added to.
   */
  aircraftSortieIds: string;

  body: string | ArrayBufferView | ArrayBuffer | BlobLike;

  /**
   * classificationMarking of the Crew Papers.
   */
  classificationMarking: string;

  /**
   * The status of the supporting document.
   */
  paperStatus: string;

  /**
   * The version number of the crew paper.
   */
  papersVersion: string;
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
