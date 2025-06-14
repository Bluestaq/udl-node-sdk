// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Unifieddatalibrary } from '../client';

export abstract class APIResource {
  protected _client: Unifieddatalibrary;

  constructor(client: Unifieddatalibrary) {
    this._client = client;
  }
}
