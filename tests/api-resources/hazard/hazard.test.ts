// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource hazard', () => {
  test('create: only required params', async () => {
    const responsePromise = client.hazard.create({
      alarms: ['Alarm1', 'Alarm2'],
      alarmValues: [2.7, 2.9],
      classificationMarking: 'U',
      dataMode: 'TEST',
      detectTime: '2022-03-07T14:51:39.653Z',
      detectType: 'Chemical',
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

  test('create: required and optional params', async () => {
    const response = await client.hazard.create({
      alarms: ['Alarm1', 'Alarm2'],
      alarmValues: [2.7, 2.9],
      classificationMarking: 'U',
      dataMode: 'TEST',
      detectTime: '2022-03-07T14:51:39.653Z',
      detectType: 'Chemical',
      source: 'Bluestaq',
      id: 'HAZARD-ID',
      a: 238,
      activity: 120.1,
      bottleId: '6264',
      casRN: '64-17-5',
      channel: 'Skin',
      ctrnTime: 1.077,
      density: 18900.2,
      dep: 1.084,
      depCtrn: 86.1,
      dose: 1.12,
      doseRate: 1.0000001865,
      duration: 14400,
      gBar: 2.5,
      harmful: false,
      hBar: 3.1,
      idPOI: 'POI-ID',
      idTrack: 'TRACK-ID',
      massFrac: 0.029,
      matCat: 3,
      matClass: 'Nerve Agent',
      matName: 'VX',
      matType: '21',
      origin: 'THIRD_PARTY_DATASOURCE',
      ppm: 27129,
      radCtrn: 1.31,
      readings: ['Rad1', 'Rad2'],
      readingUnits: ['Gray', 'Gray'],
      readingValues: [107.2, 124.1],
      z: 92,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.hazard.list({ detectTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.hazard.list({
      detectTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.hazard.count({ detectTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.hazard.count({
      detectTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.hazard.createBulk({
      body: [
        {
          alarms: ['Alarm1', 'Alarm2'],
          alarmValues: [2.7, 2.9],
          classificationMarking: 'U',
          dataMode: 'TEST',
          detectTime: '2022-03-07T14:51:39.653Z',
          detectType: 'Chemical',
          source: 'Bluestaq',
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

  test('createBulk: required and optional params', async () => {
    const response = await client.hazard.createBulk({
      body: [
        {
          alarms: ['Alarm1', 'Alarm2'],
          alarmValues: [2.7, 2.9],
          classificationMarking: 'U',
          dataMode: 'TEST',
          detectTime: '2022-03-07T14:51:39.653Z',
          detectType: 'Chemical',
          source: 'Bluestaq',
          id: 'HAZARD-ID',
          a: 238,
          activity: 120.1,
          bottleId: '6264',
          casRN: '64-17-5',
          channel: 'Skin',
          ctrnTime: 1.077,
          density: 18900.2,
          dep: 1.084,
          depCtrn: 86.1,
          dose: 1.12,
          doseRate: 1.0000001865,
          duration: 14400,
          gBar: 2.5,
          harmful: false,
          hBar: 3.1,
          idPOI: 'POI-ID',
          idTrack: 'TRACK-ID',
          massFrac: 0.029,
          matCat: 3,
          matClass: 'Nerve Agent',
          matName: 'VX',
          matType: '21',
          origin: 'THIRD_PARTY_DATASOURCE',
          ppm: 27129,
          radCtrn: 1.31,
          readings: ['Rad1', 'Rad2'],
          readingUnits: ['Gray', 'Gray'],
          readingValues: [107.2, 124.1],
          z: 92,
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.hazard.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hazard.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.hazard.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.hazard.tuple({
      columns: 'columns',
      detectTime: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.hazard.tuple({
      columns: 'columns',
      detectTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
