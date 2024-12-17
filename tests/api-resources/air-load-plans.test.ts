// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airLoadPlans', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airLoadPlans.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      estDepTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.airLoadPlans.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      estDepTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      id: 'id',
      aclOnboard: 0,
      aclReleased: 0,
      aircraftMDS: 'aircraftMDS',
      airLoadPlanHazmatActuals: [
        {
          ashc: 'ashc',
          cgc: 'cgc',
          classDiv: 'classDiv',
          hazDescription: 'hazDescription',
          hazmatRemarks: 'hazmatRemarks',
          hazNum: 'hazNum',
          hazNumType: 'hazNumType',
          hazOffICAO: 'hazOffICAO',
          hazOffItin: 0,
          hazOnICAO: 'hazOnICAO',
          hazOnItin: 0,
          hazPieces: 0,
          hazTcn: 'hazTcn',
          hazWeight: 0,
          itemName: 'itemName',
          lotNum: 'lotNum',
          netExpWt: 0,
        },
      ],
      airLoadPlanHR: [
        {
          container: 'container',
          escort: 'escort',
          hrEstArrTime: '2019-12-27T18:11:19.117Z',
          hrOffICAO: 'hrOffICAO',
          hrOffItin: 0,
          hrOnICAO: 'hrOnICAO',
          hrOnItin: 0,
          hrRemarks: 'hrRemarks',
          name: 'name',
          rank: 'rank',
          recAgency: 'recAgency',
          service: 'service',
          viewable: true,
        },
      ],
      airLoadPlanPalletDetails: [
        {
          category: 'category',
          pp: 'pp',
          ppDescription: 'ppDescription',
          ppOffICAO: 'ppOffICAO',
          ppPieces: 0,
          ppRemarks: 'ppRemarks',
          ppTcn: 'ppTcn',
          ppWeight: 0,
          specialInterest: true,
        },
      ],
      airLoadPlanPaxCargo: [
        {
          ambPax: 0,
          attPax: 0,
          availablePax: 0,
          bagWeight: 0,
          civPax: 0,
          dvPax: 0,
          fnPax: 0,
          groupCargoWeight: 0,
          groupType: 'groupType',
          litPax: 0,
          mailWeight: 0,
          numPallet: 0,
          palletWeight: 0,
          paxWeight: 0,
          requiredPax: 0,
        },
      ],
      airLoadPlanULNActuals: [
        {
          numAmbulatory: 0,
          numAttendant: 0,
          numLitter: 0,
          numPax: 0,
          offloadId: 0,
          offloadLOCode: 'offloadLOCode',
          onloadId: 0,
          onloadLOCode: 'onloadLOCode',
          oplan: 'oplan',
          projName: 'projName',
          uln: 'uln',
          ulnCargoWeight: 0,
          ulnRemarks: 'ulnRemarks',
        },
      ],
      arrAirfield: 'arrAirfield',
      arrICAO: 'arrICAO',
      availableTime: '2019-12-27T18:11:19.117Z',
      basicMoment: 0,
      basicWeight: 0,
      briefTime: '2019-12-27T18:11:19.117Z',
      callSign: 'callSign',
      cargoBayFSMax: 0,
      cargoBayFSMin: 0,
      cargoBayWidth: 0,
      cargoConfig: 'cargoConfig',
      cargoMoment: 0,
      cargoVolume: 0,
      cargoWeight: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      crewSize: 0,
      depAirfield: 'depAirfield',
      depICAO: 'depICAO',
      equipConfig: 'equipConfig',
      estArrTime: '2019-12-27T18:11:19.117Z',
      estLandingFuelMoment: 0,
      estLandingFuelWeight: 0,
      externalId: 'externalId',
      fuelMoment: 0,
      fuelWeight: 0,
      grossCG: 0,
      grossMoment: 0,
      grossWeight: 0,
      idMission: 'idMission',
      idSortie: 'idSortie',
      landingCG: 0,
      landingMoment: 0,
      landingWeight: 0,
      legNum: 0,
      loadmasterName: 'loadmasterName',
      loadmasterRank: 'loadmasterRank',
      loadRemarks: 'loadRemarks',
      missionNumber: 'missionNumber',
      operatingMoment: 0,
      operatingWeight: 0,
      origin: 'origin',
      origNetwork: 'origNetwork',
      ppOnboard: 0,
      ppReleased: 0,
      schedTime: '2019-12-27T18:11:19.117Z',
      seatsOnboard: 0,
      seatsReleased: 0,
      sourceDL: 'sourceDL',
      tailNumber: 'tailNumber',
      tankConfig: 'tankConfig',
      updatedAt: '2019-12-27T18:11:19.117Z',
      updatedBy: 'updatedBy',
      utilCode: 'utilCode',
      zeroFuelCG: 0,
      zeroFuelMoment: 0,
      zeroFuelWeight: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.airLoadPlans.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.airLoadPlans.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.airLoadPlans.list({ estDepTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.airLoadPlans.list({ estDepTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.airLoadPlans.count({ estDepTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.airLoadPlans.count({ estDepTime: '2019-12-27T18:11:19.117Z' });
  });

  test('queryhelp', async () => {
    const responsePromise = client.airLoadPlans.queryhelp();
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
    await expect(client.airLoadPlans.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.airLoadPlans.tuple({
      columns: 'columns',
      estDepTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.airLoadPlans.tuple({
      columns: 'columns',
      estDepTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
