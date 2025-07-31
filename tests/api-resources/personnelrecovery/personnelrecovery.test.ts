// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource personnelrecovery', () => {
  test('create: only required params', async () => {
    const responsePromise = client.personnelrecovery.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      msgTime: '2021-10-15T16:00:00.123Z',
      pickupLat: 75.1234,
      pickupLon: 175.1234,
      source: 'Bluestaq',
      type: 'MEDICAL',
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
    const response = await client.personnelrecovery.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      msgTime: '2021-10-15T16:00:00.123Z',
      pickupLat: 75.1234,
      pickupLon: 175.1234,
      source: 'Bluestaq',
      type: 'MEDICAL',
      id: 'PERSONNEL_RECOVERY-ID',
      authMethod: 'PASSPORT',
      authStatus: 'NO STATEMENT',
      beaconInd: false,
      callSign: 'BADGER',
      commEq1: 'LL PHONE',
      commEq2: 'LL PHONE',
      commEq3: 'LL PHONE',
      executionInfo: {
        egress: 66.53,
        egressPoint: [107.23, 30.455],
        escortVehicle: { callSign: 'FALCO', primaryFreq: 34.55, strength: 5, type: 'C17' },
        ingress: 35.66,
        initialPoint: [103.23, 30.445],
        objStrategy: 'Description of strategy plan.',
        recoveryVehicle: { callSign: 'FALCO', primaryFreq: 34.55, strength: 5, type: 'C17' },
      },
      identity: 'NEUTRAL CIVILIAN',
      idWeatherReport: 'WEATHER_REPORT-ID',
      milClass: 'CIVILIAN',
      natAlliance: 1,
      natAlliance1: 0,
      numAmbulatory: 1,
      numAmbulatoryInjured: 2,
      numNonAmbulatory: 0,
      numPersons: 1,
      objectiveAreaInfo: {
        enemyData: [
          {
            dirToEnemy: 'NORTHWEST',
            friendliesRemarks: 'Comments from friendlies.',
            hlzRemarks: 'Hot Landing Zone remarks.',
            hostileFireType: 'SMALL ARMS',
          },
        ],
        oscCallSign: 'STARFOX',
        oscFreq: 12.55,
        pzDesc: 'Near the lake.',
        pzLocation: [103.23, 30.445],
      },
      origin: 'THIRD_PARTY_DATASOURCE',
      pickupAlt: 30.1234,
      recovId: 'RECOV-ID',
      rxFreq: 5.5,
      survivorMessages: 'UNINJURED CANT MOVE HOSTILES NEARBY',
      survivorRadio: 'NO STATEMENT',
      termInd: true,
      textMsg: 'Additional message from survivor.',
      txFreq: 5.5,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.personnelrecovery.list({ msgTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.personnelrecovery.list({
      msgTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.personnelrecovery.count({ msgTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.personnelrecovery.count({
      msgTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.personnelrecovery.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          msgTime: '2021-10-15T16:00:00.123Z',
          pickupLat: 75.1234,
          pickupLon: 175.1234,
          source: 'Bluestaq',
          type: 'MEDICAL',
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
    const response = await client.personnelrecovery.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          msgTime: '2021-10-15T16:00:00.123Z',
          pickupLat: 75.1234,
          pickupLon: 175.1234,
          source: 'Bluestaq',
          type: 'MEDICAL',
          id: 'PERSONNEL_RECOVERY-ID',
          authMethod: 'PASSPORT',
          authStatus: 'NO STATEMENT',
          beaconInd: false,
          callSign: 'BADGER',
          commEq1: 'LL PHONE',
          commEq2: 'LL PHONE',
          commEq3: 'LL PHONE',
          executionInfo: {
            egress: 66.53,
            egressPoint: [107.23, 30.455],
            escortVehicle: { callSign: 'FALCO', primaryFreq: 34.55, strength: 5, type: 'C17' },
            ingress: 35.66,
            initialPoint: [103.23, 30.445],
            objStrategy: 'Description of strategy plan.',
            recoveryVehicle: { callSign: 'FALCO', primaryFreq: 34.55, strength: 5, type: 'C17' },
          },
          identity: 'NEUTRAL CIVILIAN',
          idWeatherReport: 'WEATHER_REPORT-ID',
          milClass: 'CIVILIAN',
          natAlliance: 1,
          natAlliance1: 0,
          numAmbulatory: 1,
          numAmbulatoryInjured: 2,
          numNonAmbulatory: 0,
          numPersons: 1,
          objectiveAreaInfo: {
            enemyData: [
              {
                dirToEnemy: 'NORTHWEST',
                friendliesRemarks: 'Comments from friendlies.',
                hlzRemarks: 'Hot Landing Zone remarks.',
                hostileFireType: 'SMALL ARMS',
              },
            ],
            oscCallSign: 'STARFOX',
            oscFreq: 12.55,
            pzDesc: 'Near the lake.',
            pzLocation: [103.23, 30.445],
          },
          origin: 'THIRD_PARTY_DATASOURCE',
          pickupAlt: 30.1234,
          recovId: 'RECOV-ID',
          rxFreq: 5.5,
          survivorMessages: 'UNINJURED CANT MOVE HOSTILES NEARBY',
          survivorRadio: 'NO STATEMENT',
          termInd: true,
          textMsg: 'Additional message from survivor.',
          txFreq: 5.5,
        },
      ],
    });
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.personnelrecovery.fileCreate({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          msgTime: '2021-10-15T16:00:00.123Z',
          pickupLat: 75.1234,
          pickupLon: 175.1234,
          source: 'Bluestaq',
          type: 'MEDICAL',
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

  test('fileCreate: required and optional params', async () => {
    const response = await client.personnelrecovery.fileCreate({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          msgTime: '2021-10-15T16:00:00.123Z',
          pickupLat: 75.1234,
          pickupLon: 175.1234,
          source: 'Bluestaq',
          type: 'MEDICAL',
          id: 'PERSONNEL_RECOVERY-ID',
          authMethod: 'PASSPORT',
          authStatus: 'NO STATEMENT',
          beaconInd: false,
          callSign: 'BADGER',
          commEq1: 'LL PHONE',
          commEq2: 'LL PHONE',
          commEq3: 'LL PHONE',
          executionInfo: {
            egress: 66.53,
            egressPoint: [107.23, 30.455],
            escortVehicle: { callSign: 'FALCO', primaryFreq: 34.55, strength: 5, type: 'C17' },
            ingress: 35.66,
            initialPoint: [103.23, 30.445],
            objStrategy: 'Description of strategy plan.',
            recoveryVehicle: { callSign: 'FALCO', primaryFreq: 34.55, strength: 5, type: 'C17' },
          },
          identity: 'NEUTRAL CIVILIAN',
          idWeatherReport: 'WEATHER_REPORT-ID',
          milClass: 'CIVILIAN',
          natAlliance: 1,
          natAlliance1: 0,
          numAmbulatory: 1,
          numAmbulatoryInjured: 2,
          numNonAmbulatory: 0,
          numPersons: 1,
          objectiveAreaInfo: {
            enemyData: [
              {
                dirToEnemy: 'NORTHWEST',
                friendliesRemarks: 'Comments from friendlies.',
                hlzRemarks: 'Hot Landing Zone remarks.',
                hostileFireType: 'SMALL ARMS',
              },
            ],
            oscCallSign: 'STARFOX',
            oscFreq: 12.55,
            pzDesc: 'Near the lake.',
            pzLocation: [103.23, 30.445],
          },
          origin: 'THIRD_PARTY_DATASOURCE',
          pickupAlt: 30.1234,
          recovId: 'RECOV-ID',
          rxFreq: 5.5,
          survivorMessages: 'UNINJURED CANT MOVE HOSTILES NEARBY',
          survivorRadio: 'NO STATEMENT',
          termInd: true,
          textMsg: 'Additional message from survivor.',
          txFreq: 5.5,
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.personnelrecovery.get('id');
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
      client.personnelrecovery.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.personnelrecovery.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.personnelrecovery.tuple({
      columns: 'columns',
      msgTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.personnelrecovery.tuple({
      columns: 'columns',
      msgTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
