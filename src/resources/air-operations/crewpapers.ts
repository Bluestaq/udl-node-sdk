// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Crewpapers extends APIResource {
  /**
   * Service operation to remove supporting PDF from an aircraft sortie or sorties. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airOperations.crewpapers.unpublish({
   *   ids: 'ids',
   * });
   * ```
   */
  unpublish(params: CrewpaperUnpublishParams, options?: RequestOptions): APIPromise<void> {
    const { ids } = params;
    return this._client.post('/udl/crewpapers/unpublish', {
      query: { ids },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to upload a supporting PDF for the aircraft sortie. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   *
   * @example
   * ```ts
   * await client.airOperations.crewpapers.uploadPdf(
   *   fs.createReadStream('path/to/file'),
   *   {
   *     aircraftSortieIds: 'aircraftSortieIds',
   *     classificationMarking: 'x',
   *     paperStatus: 'PUBLISHED',
   *     papersVersion: 'x',
   *   },
   * );
   * ```
   */
  uploadPdf(
    fileContent: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: CrewpaperUploadPdfParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { aircraftSortieIds, classificationMarking, paperStatus, papersVersion } = params;
    return this._client.post('/filedrop/crewpapers', {
      body: fileContent,
      query: { aircraftSortieIds, classificationMarking, paperStatus, papersVersion },
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/pdf', Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CrewpaperUnpublishParams {
  /**
   * Comma-separated list of AircraftSortie IDs where Crew Papers are unpublished.
   */
  ids: string;
}

export interface CrewpaperUploadPdfParams {
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
}

export declare namespace Crewpapers {
  export {
    type CrewpaperUnpublishParams as CrewpaperUnpublishParams,
    type CrewpaperUploadPdfParams as CrewpaperUploadPdfParams,
  };
}
