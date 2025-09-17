// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource linkstatus', () => {
  test('update: only required params', async () => {
    const responsePromise = client.linkstatus.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      endPoint1Lat: 45.23,
      endPoint1Lon: 80.23,
      endPoint1Name: 'Example endpoint',
      endPoint2Lat: 45.23,
      endPoint2Lon: 80.23,
      endPoint2Name: 'Example description',
      linkName: 'Example description',
      linkStartTime: '2021-01-01T01:01:01.123456Z',
      linkStopTime: '2021-01-01T01:01:01.123456Z',
      source: 'Bluestaq',
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
    const response = await client.linkstatus.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      endPoint1Lat: 45.23,
      endPoint1Lon: 80.23,
      endPoint1Name: 'Example endpoint',
      endPoint2Lat: 45.23,
      endPoint2Lon: 80.23,
      endPoint2Name: 'Example description',
      linkName: 'Example description',
      linkStartTime: '2021-01-01T01:01:01.123456Z',
      linkStopTime: '2021-01-01T01:01:01.123456Z',
      source: 'Bluestaq',
      body_id: 'LINKSTATUS-ID',
      band: 'MIL-KA',
      constellation: 'Fornax',
      dataRate1To2: 10.23,
      dataRate2To1: 10.23,
      idBeam1: 'REF-BEAM1-ID',
      idBeam2: 'REF-BEAM2-ID',
      linkState: 'DEGRADED-WEATHER',
      linkType: 'Example link',
      opsCap: 'Example status',
      origin: 'THIRD_PARTY_DATASOURCE',
      satNo1: 1,
      satNo2: 2,
      sysCap: 'Example status',
    });
  });

  test('delete', async () => {
    const responsePromise = client.linkstatus.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
