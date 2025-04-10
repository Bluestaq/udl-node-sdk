// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aircraftSortie', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airOperations.aircraftSortie.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
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

  test('create: required and optional params', async () => {
    const response = await client.airOperations.aircraftSortie.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      plannedDepTime: '2021-01-01T01:01:01.123Z',
      source: 'Bluestaq',
      id: 'AIRCRAFTSORTIE-ID',
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
      pprStatus: 'PENDING',
      primarySCL: 'ABC',
      reqConfig: 'C-1',
      resultRemarks: 'Some remark about aircraft A',
      rvnReq: 'R',
      scheduleRemarks: 'Some schedule remark about aircraft A',
      secondarySCL: 'ABC',
      soe: 'OPS',
      sortieDate: '2021-01-01',
      tailNumber: 'Tail_1',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.airOperations.aircraftSortie.list({
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

  test('list: required and optional params', async () => {
    const response = await client.airOperations.aircraftSortie.list({
      plannedDepTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.airOperations.aircraftSortie.count({
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

  test('count: required and optional params', async () => {
    const response = await client.airOperations.aircraftSortie.count({
      plannedDepTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.airOperations.aircraftSortie.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        plannedDepTime: '2021-01-01T01:01:01.123Z',
        source: 'Bluestaq',
      },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.airOperations.aircraftSortie.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        plannedDepTime: '2021-01-01T01:01:01.123Z',
        source: 'Bluestaq',
        id: 'AIRCRAFTSORTIE-ID',
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
        pprStatus: 'PENDING',
        primarySCL: 'ABC',
        reqConfig: 'C-1',
        resultRemarks: 'Some remark about aircraft A',
        rvnReq: 'R',
        scheduleRemarks: 'Some schedule remark about aircraft A',
        secondarySCL: 'ABC',
        soe: 'OPS',
        sortieDate: '2021-01-01',
        tailNumber: 'Tail_1',
      },
    ]);
  });

  test('historyAodr: only required params', async () => {
    const responsePromise = client.airOperations.aircraftSortie.historyAodr({
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

  test('historyAodr: required and optional params', async () => {
    const response = await client.airOperations.aircraftSortie.historyAodr({
      plannedDepTime: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
      notification: 'notification',
      outputDelimiter: 'outputDelimiter',
      outputFormat: 'outputFormat',
    });
  });

  test('historyCount: only required params', async () => {
    const responsePromise = client.airOperations.aircraftSortie.historyCount({
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

  test('historyCount: required and optional params', async () => {
    const response = await client.airOperations.aircraftSortie.historyCount({
      plannedDepTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('historyQuery: only required params', async () => {
    const responsePromise = client.airOperations.aircraftSortie.historyQuery({
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

  test('historyQuery: required and optional params', async () => {
    const response = await client.airOperations.aircraftSortie.historyQuery({
      plannedDepTime: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
    });
  });
});
