// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airTransportMissions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airTransportMissions.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      source: 'source',
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
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      source: 'source',
      id: 'id',
      alias: 'alias',
      allocatedUnit: 'allocatedUnit',
      amcMissionId: 'amcMissionId',
      apacsId: 'apacsId',
      callSign: 'callSign',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      cw: true,
      dipWorksheetName: 'dipWorksheetName',
      firstPickUp: 'firstPickUp',
      gdssMissionId: 'gdssMissionId',
      hazMat: [
        {
          applicableNotes: 'applicableNotes',
          cgc: 'cgc',
          cgn: 'cgn',
          classDiv: 0,
          extHazMatId: 'extHazMatId',
          itemName: 'itemName',
          netExpWt: 0,
          offICAO: 'offICAO',
          offItin: 0,
          onICAO: 'onICAO',
          onItin: 0,
          pieces: 0,
          planned: 'planned',
          unNum: 'unNum',
          weight: 0,
        },
      ],
      jcsPriority: 'jcsPriority',
      lastDropOff: 'lastDropOff',
      loadCategoryType: 'loadCategoryType',
      naf: 'naf',
      nextAMCMissionId: 'nextAMCMissionId',
      nextMissionId: 'nextMissionId',
      objective: 'objective',
      operation: 'operation',
      origin: 'origin',
      origMissionId: 'origMissionId',
      origNetwork: 'origNetwork',
      prevAMCMissionId: 'prevAMCMissionId',
      prevMissionId: 'prevMissionId',
      purpose: 'purpose',
      remarks: [
        {
          date: '2019-12-27T18:11:19.117Z',
          gdssRemarkId: 'gdssRemarkId',
          itineraryNum: 0,
          text: 'text',
          type: 'type',
          user: 'user',
        },
      ],
      requirements: [
        {
          bulkWeight: 0,
          ead: 'ead',
          gdssReqId: 'gdssReqId',
          lad: 'lad',
          numAmbulatory: 0,
          numAttendant: 0,
          numLitter: 0,
          numPax: 0,
          offloadId: 0,
          offloadLOCode: 'offloadLOCode',
          onloadId: 0,
          onloadLOCode: 'onloadLOCode',
          oplan: 'oplan',
          outsizeWeight: 0,
          oversizeWeight: 0,
          projName: 'projName',
          transReqNum: 'transReqNum',
          uln: 'uln',
        },
      ],
      sourceDL: 'sourceDL',
      sourceSysDeviation: 0,
      state: 'state',
      type: 'type',
      updatedAt: '2019-12-27T18:11:19.117Z',
      updatedBy: 'updatedBy',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.airTransportMissions.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.airTransportMissions.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.airTransportMissions.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      source: 'source',
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
    const response = await client.airTransportMissions.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      source: 'source',
      body_id: 'id',
      alias: 'alias',
      allocatedUnit: 'allocatedUnit',
      amcMissionId: 'amcMissionId',
      apacsId: 'apacsId',
      callSign: 'callSign',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      cw: true,
      dipWorksheetName: 'dipWorksheetName',
      firstPickUp: 'firstPickUp',
      gdssMissionId: 'gdssMissionId',
      hazMat: [
        {
          applicableNotes: 'applicableNotes',
          cgc: 'cgc',
          cgn: 'cgn',
          classDiv: 0,
          extHazMatId: 'extHazMatId',
          itemName: 'itemName',
          netExpWt: 0,
          offICAO: 'offICAO',
          offItin: 0,
          onICAO: 'onICAO',
          onItin: 0,
          pieces: 0,
          planned: 'planned',
          unNum: 'unNum',
          weight: 0,
        },
      ],
      jcsPriority: 'jcsPriority',
      lastDropOff: 'lastDropOff',
      loadCategoryType: 'loadCategoryType',
      naf: 'naf',
      nextAMCMissionId: 'nextAMCMissionId',
      nextMissionId: 'nextMissionId',
      objective: 'objective',
      operation: 'operation',
      origin: 'origin',
      origMissionId: 'origMissionId',
      origNetwork: 'origNetwork',
      prevAMCMissionId: 'prevAMCMissionId',
      prevMissionId: 'prevMissionId',
      purpose: 'purpose',
      remarks: [
        {
          date: '2019-12-27T18:11:19.117Z',
          gdssRemarkId: 'gdssRemarkId',
          itineraryNum: 0,
          text: 'text',
          type: 'type',
          user: 'user',
        },
      ],
      requirements: [
        {
          bulkWeight: 0,
          ead: 'ead',
          gdssReqId: 'gdssReqId',
          lad: 'lad',
          numAmbulatory: 0,
          numAttendant: 0,
          numLitter: 0,
          numPax: 0,
          offloadId: 0,
          offloadLOCode: 'offloadLOCode',
          onloadId: 0,
          onloadLOCode: 'onloadLOCode',
          oplan: 'oplan',
          outsizeWeight: 0,
          oversizeWeight: 0,
          projName: 'projName',
          transReqNum: 'transReqNum',
          uln: 'uln',
        },
      ],
      sourceDL: 'sourceDL',
      sourceSysDeviation: 0,
      state: 'state',
      type: 'type',
      updatedAt: '2019-12-27T18:11:19.117Z',
      updatedBy: 'updatedBy',
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
