// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airTransportMissions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airTransportMissions.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.airTransportMissions.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      id: 'bdad6945-c9e4-b829-f7be-1ad075541921',
      alias: 'PACIFIC DEPLOY / CHAP 3 MOVEMENT',
      allocatedUnit: '437 AEW',
      amcMissionId: 'AJM7939B1123',
      apacsId: '1083034',
      callSign: 'RCH123',
      cw: true,
      dipWorksheetName: 'G2-182402-AB',
      firstPickUp: 'KFAY',
      gdssMissionId: '1e6edeec-72e9-aaec-d33c-51147cb5ffdd',
      hazMat: [
        {
          applicableNotes: '11,12',
          cgc: 'A',
          cgn: '4,5,7,8',
          classDiv: 1.1,
          extHazMatId: 'cb6289e0f38534e01291ab6421d42724',
          itemName: 'LITHIUM METAL BATTERIES',
          netExpWt: 12.1,
          offICAO: 'MBPV',
          offItin: 300,
          onICAO: 'LIRQ',
          onItin: 50,
          pieces: 29,
          planned: 'P',
          unNum: '0181',
          weight: 22.1,
        },
      ],
      jcsPriority: '1A3',
      lastDropOff: 'PGUA',
      loadCategoryType: 'MIXED',
      naf: '18AF',
      nextAMCMissionId: 'AJM7939B1124',
      nextMissionId: '186e5658-1079-45c0-bccc-02d2fa31b663',
      objective: 'Deliver water to island X.',
      operation: 'Golden Eye',
      origin: 'THIRD_PARTY_DATASOURCE',
      origMissionId: '614bebb6-a62e-053c-ca51-e79f8a402b28',
      prevAMCMissionId: 'AJM7939B1122',
      prevMissionId: 'a77055df-edc3-4047-a5fa-604f80b9fe3c',
      purpose: 'People at island X need water ASAP. Two previous attempts failed due to weather.',
      remarks: [
        {
          date: '2022-01-01T16:00:00.123Z',
          gdssRemarkId: 'GDSSREMARK-ID',
          itineraryNum: 825,
          text: 'Example mission remarks.',
          type: 'MP',
          user: 'John Doe',
        },
      ],
      requirements: [
        {
          bulkWeight: 1.3,
          ead: '2024-01-01T16:00:00Z',
          gdssReqId: '23a1fb67-cc2d-5ebe-6b99-68130cb1aa6c',
          lad: '2024-01-01T16:00:00Z',
          numAmbulatory: 10,
          numAttendant: 10,
          numLitter: 10,
          numPax: 44,
          offloadId: 300,
          offloadLOCode: 'KHOP',
          onloadId: 200,
          onloadLOCode: 'KCHS',
          oplan: '5027',
          outsizeWeight: 1.3,
          oversizeWeight: 1.3,
          projName: 'CENTINTRA21',
          transReqNum: 'T01ME01',
          uln: 'T01ME01',
        },
      ],
      sourceSysDeviation: -90.12,
      state: 'EXECUTION',
      type: 'SAAM',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.airTransportMissions.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.airTransportMissions.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.airTransportMissions.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.airTransportMissions.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      body_id: 'bdad6945-c9e4-b829-f7be-1ad075541921',
      alias: 'PACIFIC DEPLOY / CHAP 3 MOVEMENT',
      allocatedUnit: '437 AEW',
      amcMissionId: 'AJM7939B1123',
      apacsId: '1083034',
      callSign: 'RCH123',
      cw: true,
      dipWorksheetName: 'G2-182402-AB',
      firstPickUp: 'KFAY',
      gdssMissionId: '1e6edeec-72e9-aaec-d33c-51147cb5ffdd',
      hazMat: [
        {
          applicableNotes: '11,12',
          cgc: 'A',
          cgn: '4,5,7,8',
          classDiv: 1.1,
          extHazMatId: 'cb6289e0f38534e01291ab6421d42724',
          itemName: 'LITHIUM METAL BATTERIES',
          netExpWt: 12.1,
          offICAO: 'MBPV',
          offItin: 300,
          onICAO: 'LIRQ',
          onItin: 50,
          pieces: 29,
          planned: 'P',
          unNum: '0181',
          weight: 22.1,
        },
      ],
      jcsPriority: '1A3',
      lastDropOff: 'PGUA',
      loadCategoryType: 'MIXED',
      naf: '18AF',
      nextAMCMissionId: 'AJM7939B1124',
      nextMissionId: '186e5658-1079-45c0-bccc-02d2fa31b663',
      objective: 'Deliver water to island X.',
      operation: 'Golden Eye',
      origin: 'THIRD_PARTY_DATASOURCE',
      origMissionId: '614bebb6-a62e-053c-ca51-e79f8a402b28',
      prevAMCMissionId: 'AJM7939B1122',
      prevMissionId: 'a77055df-edc3-4047-a5fa-604f80b9fe3c',
      purpose: 'People at island X need water ASAP. Two previous attempts failed due to weather.',
      remarks: [
        {
          date: '2022-01-01T16:00:00.123Z',
          gdssRemarkId: 'GDSSREMARK-ID',
          itineraryNum: 825,
          text: 'Example mission remarks.',
          type: 'MP',
          user: 'John Doe',
        },
      ],
      requirements: [
        {
          bulkWeight: 1.3,
          ead: '2024-01-01T16:00:00Z',
          gdssReqId: '23a1fb67-cc2d-5ebe-6b99-68130cb1aa6c',
          lad: '2024-01-01T16:00:00Z',
          numAmbulatory: 10,
          numAttendant: 10,
          numLitter: 10,
          numPax: 44,
          offloadId: 300,
          offloadLOCode: 'KHOP',
          onloadId: 200,
          onloadLOCode: 'KCHS',
          oplan: '5027',
          outsizeWeight: 1.3,
          oversizeWeight: 1.3,
          projName: 'CENTINTRA21',
          transReqNum: 'T01ME01',
          uln: 'T01ME01',
        },
      ],
      sourceSysDeviation: -90.12,
      state: 'EXECUTION',
      type: 'SAAM',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.airTransportMissions.list({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.airTransportMissions.list({ createdAt: '2019-12-27' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.airTransportMissions.count({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.airTransportMissions.count({ createdAt: '2019-12-27' });
  });

  test('queryhelp', async () => {
    const responsePromise = client.airTransportMissions.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.airTransportMissions.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.airTransportMissions.tuple({
      columns: 'columns',
      createdAt: '2019-12-27',
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
    const response = await client.airTransportMissions.tuple({ columns: 'columns', createdAt: '2019-12-27' });
  });
});
