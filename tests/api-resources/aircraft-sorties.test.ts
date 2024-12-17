// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aircraftSorties', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.aircraftSorties.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.aircraftSorties.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.aircraftSorties.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      plannedDepTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.aircraftSorties.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      plannedDepTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      body_id: 'id',
      actualArrTime: '2019-12-27T18:11:19.117Z',
      actualBlockInTime: '2019-12-27T18:11:19.117Z',
      actualBlockOutTime: '2019-12-27T18:11:19.117Z',
      actualDepTime: '2019-12-27T18:11:19.117Z',
      aircraftADSB: 'aircraftADSB',
      aircraftAltId: 'aircraftAltId',
      aircraftEvent: 'aircraftEvent',
      aircraftMDS: 'aircraftMDS',
      aircraftRemarks: 'aircraftRemarks',
      alertStatus: 0,
      alertStatusCode: 'alertStatusCode',
      amcMsnNum: 'amcMsnNum',
      amcMsnType: 'amcMsnType',
      arrFAA: 'arrFAA',
      arrIATA: 'arrIATA',
      arrICAO: 'arrICAO',
      arrItinerary: 0,
      arrPurposeCode: 'arrPurposeCode',
      callSign: 'callSign',
      cargoConfig: 'cargoConfig',
      commanderName: 'commanderName',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      currentState: 'currentState',
      delayCode: 'delayCode',
      depFAA: 'depFAA',
      depIATA: 'depIATA',
      depICAO: 'depICAO',
      depItinerary: 0,
      depPurposeCode: 'depPurposeCode',
      dhd: '2019-12-27T18:11:19.117Z',
      dhdReason: 'dhdReason',
      estArrTime: '2019-12-27T18:11:19.117Z',
      estBlockInTime: '2019-12-27T18:11:19.117Z',
      estBlockOutTime: '2019-12-27T18:11:19.117Z',
      estDepTime: '2019-12-27T18:11:19.117Z',
      filename: 'filename',
      filesize: 0,
      flightTime: 0,
      fmDeskNum: 'fmDeskNum',
      fmName: 'fmName',
      fuelReq: 0,
      gndTime: 0,
      idAircraft: 'idAircraft',
      idMission: 'idMission',
      jcsPriority: 'jcsPriority',
      legNum: 0,
      lineNumber: 0,
      missionId: 'missionId',
      missionUpdate: '2019-12-27T18:11:19.117Z',
      objectiveRemarks: 'objectiveRemarks',
      origin: 'origin',
      origNetwork: 'origNetwork',
      origSortieId: 'origSortieId',
      oxyOnCrew: 0,
      oxyOnPax: 0,
      oxyReqCrew: 0,
      oxyReqPax: 0,
      paperStatus: 'paperStatus',
      papersVersion: 'papersVersion',
      parkingLoc: 'parkingLoc',
      passengers: 0,
      plannedArrTime: '2019-12-27T18:11:19.117Z',
      pprStatus: 'pprStatus',
      primarySCL: 'primarySCL',
      rawFileURI: 'rawFileURI',
      reqConfig: 'reqConfig',
      resultRemarks: 'resultRemarks',
      rvnReq: 'rvnReq',
      scheduleRemarks: 'scheduleRemarks',
      secondarySCL: 'secondarySCL',
      soe: 'soe',
      sortieDate: '2019-12-27',
      sourceDL: 'sourceDL',
      tailNumber: 'tailNumber',
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.aircraftSorties.queryhelp();
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
    await expect(client.aircraftSorties.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.aircraftSorties.tuple({
      columns: 'columns',
      plannedDepTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.aircraftSorties.tuple({
      columns: 'columns',
      plannedDepTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
