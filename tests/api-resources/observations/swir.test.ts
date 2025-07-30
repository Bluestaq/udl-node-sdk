// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource swir', () => {
  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.observations.swir.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-01-01T01:01:01.123456Z',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.observations.swir.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-01-01T01:01:01.123456Z',
          id: 'SWIR-ID',
          absFluxes: [1.23, 4.56],
          badWave: 'Example Comments',
          fluxRatios: [1.23, 4.56],
          lat: 70.55208,
          locationName: 'AeroTel',
          lon: 81.18191,
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'WildBlue-1',
          ratioWavelengths: [1.23, 4.56],
          satNo: 25544,
          solarPhaseAngle: 1.23,
          wavelengths: [1.23, 4.56],
        },
      ],
    });
  });
});
