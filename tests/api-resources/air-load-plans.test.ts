// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airLoadPlans', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airLoadPlans.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      estDepTime: '2024-01-01T01:00:00.123Z',
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
      classificationMarking: 'U',
      dataMode: 'TEST',
      estDepTime: '2024-01-01T01:00:00.123Z',
      source: 'source',
      id: '0457f578-e29c-312e-85aa-0a04a430bdd0',
      aclOnboard: 500.1,
      aclReleased: 200.1,
      aircraftMDS: 'C17A',
      airLoadPlanHazmatActuals: [
        {
          ashc: 'RFL',
          cgc: 'A',
          classDiv: '1.1',
          hazDescription: 'CORROSIVE OXIDIZER',
          hazmatRemarks: 'Hazmat remarks',
          hazNum: '2031',
          hazNumType: 'UN',
          hazOffICAO: 'MBPV',
          hazOffItin: 300,
          hazOnICAO: 'LIRQ',
          hazOnItin: 50,
          hazPieces: 29,
          hazTcn: 'M1358232245912XXX',
          hazWeight: 22.1,
          itemName: 'NITRIC ACID',
          lotNum: '1234A',
          netExpWt: 12.1,
        },
      ],
      airLoadPlanHR: [
        {
          container: 'Metal',
          escort: 'Jane Doe',
          hrEstArrTime: '2024-01-01T01:00:00.123Z',
          hrOffICAO: 'KDEN',
          hrOffItin: 200,
          hrOnICAO: 'KCOS',
          hrOnItin: 100,
          hrRemarks: 'HR remarks',
          name: 'John Doe',
          rank: 'Captain',
          recAgency: 'Agency name',
          service: 'Air Force',
          viewable: true,
        },
      ],
      airLoadPlanPalletDetails: [
        {
          category: 'AMCMICAP',
          pp: '2',
          ppDescription: 'Ammunition',
          ppOffICAO: 'MBPV',
          ppPieces: 3,
          ppRemarks: 'Pallet remarks',
          ppTcn: 'M1358232245912XXX',
          ppWeight: 100.1,
          specialInterest: true,
        },
      ],
      airLoadPlanPaxCargo: [
        {
          ambPax: 5,
          attPax: 6,
          availablePax: 20,
          bagWeight: 2000.1,
          civPax: 3,
          dvPax: 2,
          fnPax: 1,
          groupCargoWeight: 5000.1,
          groupType: 'OFFTHIS',
          litPax: 4,
          mailWeight: 200.1,
          numPallet: 20,
          palletWeight: 400.1,
          paxWeight: 8000.1,
          requiredPax: 20,
        },
      ],
      airLoadPlanULNActuals: [
        {
          numAmbulatory: 10,
          numAttendant: 10,
          numLitter: 10,
          numPax: 44,
          offloadId: 300,
          offloadLOCode: 'KHOP',
          onloadId: 200,
          onloadLOCode: 'KCHS',
          oplan: '5027A',
          projName: 'CENTINTRA21',
          uln: 'T01ME01',
          ulnCargoWeight: 1000.1,
          ulnRemarks: 'ULN actuals remark',
        },
      ],
      arrAirfield: 'W99',
      arrICAO: 'ETAR',
      availableTime: '2024-01-01T02:00:00.123Z',
      basicMoment: 2500.1,
      basicWeight: 100.1,
      briefTime: '2024-01-01T01:00:00.123Z',
      callSign: 'RCH1234',
      cargoBayFSMax: 20.1,
      cargoBayFSMin: 10.1,
      cargoBayWidth: 3.1,
      cargoConfig: 'C-1',
      cargoMoment: 2500.1,
      cargoVolume: 50.1,
      cargoWeight: 100.1,
      crewSize: 5,
      depAirfield: 'W99',
      depICAO: 'KCHS',
      equipConfig: 'Standard',
      estArrTime: '2024-01-01T02:00:00.123Z',
      estLandingFuelMoment: 2500.1,
      estLandingFuelWeight: 100.1,
      externalId: 'dec7a61a-cd97-4af0-b7bc-f4c3bb33341b',
      fuelMoment: 2500.1,
      fuelWeight: 100.1,
      grossCG: 38.8,
      grossMoment: 2500.1,
      grossWeight: 100.1,
      idMission: '412bebb6-a45e-029c-ca51-e29f8a442b12',
      idSortie: '823acfbe6-f36a-157b-ef32-b47c9b589c4',
      landingCG: 38.2,
      landingMoment: 2500.1,
      landingWeight: 100.1,
      legNum: 200,
      loadmasterName: 'John Smith',
      loadmasterRank: 'Staff Sergeant',
      loadRemarks: 'Load remarks',
      missionNumber: 'AJM123456123',
      operatingMoment: 2500.1,
      operatingWeight: 100.1,
      origin: 'THIRD_PARTY_DATASOURCE',
      ppOnboard: 18,
      ppReleased: 5,
      schedTime: '2024-01-01T02:30:00.123Z',
      seatsOnboard: 20,
      seatsReleased: 15,
      tailNumber: '77187',
      tankConfig: 'ER',
      utilCode: 'AD',
      zeroFuelCG: 39.5,
      zeroFuelMoment: 2500.1,
      zeroFuelWeight: 100.1,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.airLoadPlans.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.airLoadPlans.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
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
    const response = await client.airLoadPlans.list({
      estDepTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
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
    const response = await client.airLoadPlans.count({
      estDepTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
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
      firstResult: 0,
      maxResults: 0,
    });
  });
});
