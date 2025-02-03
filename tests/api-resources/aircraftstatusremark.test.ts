// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aircraftstatusremark', () => {
  test('update: only required params', async () => {
    const responsePromise = client.aircraftstatusremark.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      idAircraftStatus: '388b1f64-ccff-4113-b049-3cf5542c2a42',
      source: 'Bluestaq',
      text: 'Remark text',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.aircraftstatusremark.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      idAircraftStatus: '388b1f64-ccff-4113-b049-3cf5542c2a42',
      source: 'Bluestaq',
      text: 'Remark text',
      body_id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      altRmkId: 'GDSSBL022307131714250077',
      lastUpdatedAt: '2024-01-01T16:00:00.123Z',
      lastUpdatedBy: 'JOHN SMITH',
      name: 'DISCREPANCY - 202297501',
      origin: 'THIRD_PARTY_DATASOURCE',
      timestamp: '2024-01-01T15:00:00.123Z',
    });
  });

  test('delete', async () => {
    const responsePromise = client.aircraftstatusremark.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.aircraftstatusremark.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });
});
