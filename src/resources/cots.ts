// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';

export class Cots extends APIResource {
  /**
   * This service enables posting CoT messages to the UDL TAK server. CoT data will
   * be persisted in the UDL POI schema as well as federated to connected TAK
   * servers.
   *
   * @example
   * ```ts
   * await client.cots.create({ lat: 45.23, lon: 45.23 });
   * ```
   */
  create(body: CotCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/cot', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CotCreateParams {
  /**
   * WGS-84 latitude of the POI, in degrees (+N, -S), -90 to 90.
   */
  lat: number;

  /**
   * WGS-84 longitude of the POI, in degrees (+E, -W), -180 to 180.
   */
  lon: number;

  /**
   * Point height above ellipsoid (WGS-84), in meters.
   */
  alt?: number;

  /**
   * Optional list of call signs to send message to directly.
   */
  callSigns?: Array<string>;

  /**
   * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
   * error).
   */
  ce?: number;

  /**
   * Schema for the CotChatData to post.
   */
  cotChatData?: CotCreateParams.CotChatData;

  /**
   * Schema for the CotPositionData to post.
   */
  cotPositionData?: CotCreateParams.CotPositionData;

  /**
   * Optional set of groups to send message to specifically. If not specified, the
   * message will be sent to the default _ANON_ group.
   */
  groups?: Array<string>;

  /**
   * How the event point was generated, in CoT object heirarchy notation (optional,
   * CoT).
   */
  how?: string;

  /**
   * Height above lat/lon point, in meters (1-sigma, if representing linear error).
   */
  le?: number;

  /**
   * Identifier of the sender of the cot message which should remain the same on
   * subsequent POI records of the same point of interest.
   */
  senderUid?: string;

  /**
   * Stale timestamp (optional), in ISO8601 UTC format.
   */
  stale?: string;

  /**
   * Start time of event validity (optional), in ISO8601 UTC format.
   */
  start?: string;

  /**
   * Event type, in CoT object heirarchy notation (optional, CoT).
   */
  type?: string;

  /**
   * Optional list of TAK user ids to send message to directly.
   */
  uids?: Array<string>;
}

export namespace CotCreateParams {
  /**
   * Schema for the CotChatData to post.
   */
  export interface CotChatData {
    /**
     * Contents of a chat message.
     */
    chatMsg?: string;

    /**
     * Chat room name to send chat message to.
     */
    chatRoom?: string;

    /**
     * Callsign of chat sender.
     */
    chatSenderCallSign?: string;
  }

  /**
   * Schema for the CotPositionData to post.
   */
  export interface CotPositionData {
    /**
     * Name of the POI target Object.
     */
    callSign: string;

    /**
     * Description of the POI target Object.
     */
    team: string;

    /**
     * Team role (Team Member| Team Lead | HQ | Sniper | Medic | Forward Observer | RTO
     * | K9).
     */
    teamRole: string;
  }
}

export declare namespace Cots {
  export { type CotCreateParams as CotCreateParams };
}
