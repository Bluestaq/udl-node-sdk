// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * These services provide operations for manipulating and querying Aircraft Sortie, Aircraft Mission, Item Tracking, Flight Plan, Air Event, Sortie Prior Permission Required (PPR), Diplomatic Clearance, Diplomatic Clearance Country, Airspace Control Order, Air Tasking Order, Navigational Obstruction, Logistics Support, Track Route, Air Load Plan, and Aviation Risk Management data. Aircraft Sortie information contains static and dynamic aircraft assignments, departure and arrival times, and remarks. Aircraft Mission information contains static data for mission planning to include assigned aircraft and crews, cargo pickup and dropoff locations, unique identifiers, and prioritization. Item Tracking information contains data for tracking an item from its origin to destination and how it may be configured during transport. Flight Plan information contains schedule and route details. Air Event provides information concerning various aerial events such as fuel transfer and air drops, as well as the associated aircraft involved. Sortie PPR information contains details on operational access to a runway, taxiway, or airport service. Diplomatic Clearance information contains details on the issuance and coordination of aircraft clearance requests. Diplomatic Clearance Country provides information such as entry/exit points, requirements, and points of contact for countries diplomatic clearances are being created for. Airspace Control Order provides information concerning the allocation, restriction, and deconfliction of airspace. Air Tasking Order information contains details on the coordination of air missions and their tasks, resources, and timelines. Navigational Obstruction provides the locations, characteristics, and boundaries of obstacles and structures that can restrict or interfere with navigation. Logistics Support contains information regarding the transport and maintenance of resources and equipment to sustain air operations. Track Route information defines specific flight paths used by aircraft during the transport of fuel and other resources. Air Load Plan information provides mission actuals concerning the loading and air transport of cargo and passengers. Aviation Risk Management information help aid in mission planning by accounting for factors such as mission complexity and crew fatigue.
 */
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
