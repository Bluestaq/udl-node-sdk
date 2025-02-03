// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aircraftSorties', () => {
  test('retrieve', async () => {
    const responsePromise = client.aircraftSorties.retrieve('id');
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
    await expect(client.aircraftSorties.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.aircraftSorties.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      plannedDepTime: '2021-01-01T01:01:01.123Z',
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
    const response = await client.aircraftSorties.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      plannedDepTime: '2021-01-01T01:01:01.123Z',
      source: 'Bluestaq',
      body_id: 'AIRCRAFTSORTIE-ID',
      actualArrTime: '2021-01-01T01:01:01.123Z',
      actualBlockInTime: '2021-01-01T01:06:01.123Z',
      actualBlockOutTime: '2021-01-01T00:55:01.123Z',
      actualDepTime: '2021-01-01T01:01:01.123Z',
      aircraftADSB: 'AE123C',
      aircraftAltId: 'ALT-AIRCRAFT-ID',
      aircraftEvent: 'Example event',
      aircraftMDS: 'C017A',
      aircraftRemarks: 'Some remark about aircraft A',
      alertStatus: 22,
      alertStatusCode: 'C1',
      amcMsnNum: 'AJM512571333',
      amcMsnType: 'SAAM',
      arrFAA: 'FAA1',
      arrIATA: 'AAA',
      arrICAO: 'KCOS',
      arrItinerary: 101,
      arrPurposeCode: 'O',
      callSign: 'BAKER',
      cargoConfig: 'C-1',
      commanderName: 'Smith',
      currentState: 'Park',
      delayCode: '500',
      depFAA: 'FAA1',
      depIATA: 'AAA',
      depICAO: 'KCOS',
      depItinerary: 100,
      depPurposeCode: 'P',
      dhd: '2021-01-03T01:01:01.123Z',
      dhdReason: 'Due for maintenance',
      estArrTime: '2021-01-01T01:01:01.123Z',
      estBlockInTime: '2021-01-01T01:06:01.123Z',
      estBlockOutTime: '2021-01-01T00:55:01.123Z',
      estDepTime: '2021-01-01T01:01:01.123Z',
      flightTime: 104.5,
      fmDeskNum: '7198675309',
      fmName: 'Smith',
      fuelReq: 20000.1,
      gndTime: 387.8,
      idAircraft: 'REF-AIRCRAFT-ID',
      idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
      jcsPriority: '1A3',
      legNum: 14,
      lineNumber: 99,
      missionId: 'ABLE',
      missionUpdate: '2024-09-09T01:01:01.123Z',
      objectiveRemarks: 'Some objective remark about aircraft A',
      origin: 'THIRD_PARTY_DATASOURCE',
      origSortieId: 'A0640',
      oxyOnCrew: 12.3,
      oxyOnPax: 12.3,
      oxyReqCrew: 12.3,
      oxyReqPax: 12.3,
      parkingLoc: 'KCOS',
      passengers: 17,
      plannedArrTime: '2021-01-01T01:01:01.123Z',
      pprStatus: 'NOT REQUIRED',
      primarySCL: 'ABC',
      reqConfig: 'C-1',
      resultRemarks: 'Some remark about aircraft A',
      rvnReq: 'N',
      scheduleRemarks: 'Some schedule remark about aircraft A',
      secondarySCL: 'ABC',
      soe: 'OPS',
      sortieDate: '2021-01-01',
      tailNumber: 'Tail_1',
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
