// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aircraftSortie', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airOperations.aircraftSortie.create({
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

  test('create: required and optional params', async () => {
    const response = await client.airOperations.aircraftSortie.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      plannedDepTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      id: 'id',
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
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        plannedDepTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
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
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        plannedDepTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        id: 'id',
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
