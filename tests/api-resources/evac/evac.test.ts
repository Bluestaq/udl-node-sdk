// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evac', () => {
  test('create: only required params', async () => {
    const responsePromise = client.evac.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      pickupLat: 75.1234,
      pickupLon: 175.1234,
      reqTime: '2021-10-15T16:00:00.123Z',
      source: 'Bluestaq',
      type: 'REQUEST',
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
    const response = await client.evac.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      pickupLat: 75.1234,
      pickupLon: 175.1234,
      reqTime: '2021-10-15T16:00:00.123Z',
      source: 'Bluestaq',
      type: 'REQUEST',
      id: 'MEDEVACEVENT-ID',
      casualtyInfo: [
        {
          age: 35,
          allergy: [{ comments: "Comments on the patient's allergies.", type: 'PENICILLIN' }],
          bloodType: 'O NEG',
          bodyPart: 'FACE',
          burialLocation: [-33.123, 150.33, 0.24],
          callSign: 'SHARK',
          careProviderUrn: 'CARE_PROVIDER-1',
          casualtyKey: 'casualty-007',
          casualtyType: 'DENTAL',
          collectionPoint: [12.44, 122.55, 0.98],
          comments: 'Comments relating to this casualty info.',
          condition: [
            {
              bodyPart: 'ANKLE LEFT FRONT',
              comments: "Comments on the patient's condition.",
              time: '2021-10-15T16:00:00.123Z',
              type: 'ACTIVITY LOW',
            },
          ],
          contamType: 'NONE',
          disposition: 'EVACUATE WOUNDED',
          dispositionType: 'EVACUATE',
          etiology: [
            {
              bodyPart: 'ARM LEFT FRONT',
              comments: 'Comments on the etiology info.',
              time: '2021-10-16T16:00:00.123Z',
              type: 'BURN',
            },
          ],
          evacType: 'GROUND',
          gender: 'MALE',
          healthState: [
            {
              healthStateCode: 'BLUE',
              medConfFactor: 1,
              time: '2021-10-15T16:00:00.123Z',
              type: 'COGNITIVE',
            },
          ],
          injury: [
            {
              bodyPart: 'ARM LEFT FRONT',
              comments: "Comments on the patient's injury.",
              time: '2021-10-15T16:00:00.123Z',
              type: 'ABRASION',
            },
          ],
          last4SSN: '1234',
          medication: [
            {
              adminRoute: 'ORAL',
              bodyPart: 'ARM LEFT BACK',
              comments: "Comments on the patient's medication information.",
              dose: '800mg',
              time: '2021-10-15T16:00:00.123Z',
              type: 'TYLENOL',
            },
          ],
          name: 'John Smith',
          nationality: 'US',
          occSpeciality: 'Healthcare',
          patientIdentity: 'FRIEND CIVILIAN',
          patientStatus: 'US CIVILIAN',
          payGrade: 'CIVILIAN',
          priority: 'ROUTINE',
          reportGen: 'DEVICE',
          reportTime: '2021-10-15T16:00:00.123Z',
          service: 'CIV',
          specMedEquip: ['OXYGEN', 'HOIST'],
          treatment: [
            {
              bodyPart: 'CHEST',
              comments: 'Comments on the treatment info.',
              time: '2018-01-01T16:00:00.123Z',
              type: 'BREATHING CHEST TUBE',
            },
          ],
          vitalSignData: [
            {
              medConfFactor: 1,
              time: '2021-10-15T16:00:00.123Z',
              vitalSign: 'HEART RATE',
              vitalSign1: 120,
              vitalSign2: 80,
            },
          ],
        },
      ],
      ce: 10.1234,
      cntctFreq: 3.11,
      comments: 'Comments concerning mission',
      enemyData: [
        {
          dirToEnemy: 'NORTH',
          friendliesRemarks: 'Comments from friendlies.',
          hlzRemarks: 'Remarks about hot landing zone.',
          hostileFireType: 'SMALL ARMS',
        },
      ],
      idWeatherReport: 'WeatherReport-ID',
      le: 5.1234,
      medevacId: 'MedEvac-ID',
      medicReq: true,
      missionType: 'GROUND',
      numAmbulatory: 5,
      numCasualties: 5,
      numKIA: 0,
      numLitter: 0,
      numWIA: 3,
      obstaclesRemarks: 'N/A',
      origin: 'THIRD_PARTY_DATASOURCE',
      pickupAlt: 30.1234,
      pickupTime: '2021-10-20T16:00:00.123Z',
      reqCallSign: 'Bravo',
      reqNum: 'MED.1.223908',
      terrain: 'ROCKY',
      terrainRemarks: 'N/A',
      zoneContrCallSign: 'Tango',
      zoneHot: false,
      zoneMarking: 'ILLUMINATION',
      zoneMarkingColor: 'RED',
      zoneName: 'example-zone',
      zoneSecurity: 'NO ENEMY',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.evac.retrieve('id');
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
      client.evac.retrieve('id', { firstResult: 0, maxResult: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.evac.list({ reqTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.evac.list({
      reqTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.evac.count({ reqTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.evac.count({
      reqTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.evac.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          pickupLat: 75.1234,
          pickupLon: 175.1234,
          reqTime: '2021-10-15T16:00:00.123Z',
          source: 'Bluestaq',
          type: 'REQUEST',
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
    const response = await client.evac.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          pickupLat: 75.1234,
          pickupLon: 175.1234,
          reqTime: '2021-10-15T16:00:00.123Z',
          source: 'Bluestaq',
          type: 'REQUEST',
          id: 'MEDEVACEVENT-ID',
          casualtyInfo: [
            {
              age: 35,
              allergy: [{ comments: "Comments on the patient's allergies.", type: 'PENICILLIN' }],
              bloodType: 'O NEG',
              bodyPart: 'FACE',
              burialLocation: [-33.123, 150.33, 0.24],
              callSign: 'SHARK',
              careProviderUrn: 'CARE_PROVIDER-1',
              casualtyKey: 'casualty-007',
              casualtyType: 'DENTAL',
              collectionPoint: [12.44, 122.55, 0.98],
              comments: 'Comments relating to this casualty info.',
              condition: [
                {
                  bodyPart: 'ANKLE LEFT FRONT',
                  comments: "Comments on the patient's condition.",
                  time: '2021-10-15T16:00:00.123Z',
                  type: 'ACTIVITY LOW',
                },
              ],
              contamType: 'NONE',
              disposition: 'EVACUATE WOUNDED',
              dispositionType: 'EVACUATE',
              etiology: [
                {
                  bodyPart: 'ARM LEFT FRONT',
                  comments: 'Comments on the etiology info.',
                  time: '2021-10-16T16:00:00.123Z',
                  type: 'BURN',
                },
              ],
              evacType: 'GROUND',
              gender: 'MALE',
              healthState: [
                {
                  healthStateCode: 'BLUE',
                  medConfFactor: 1,
                  time: '2021-10-15T16:00:00.123Z',
                  type: 'COGNITIVE',
                },
              ],
              injury: [
                {
                  bodyPart: 'ARM LEFT FRONT',
                  comments: "Comments on the patient's injury.",
                  time: '2021-10-15T16:00:00.123Z',
                  type: 'ABRASION',
                },
              ],
              last4SSN: '1234',
              medication: [
                {
                  adminRoute: 'ORAL',
                  bodyPart: 'ARM LEFT BACK',
                  comments: "Comments on the patient's medication information.",
                  dose: '800mg',
                  time: '2021-10-15T16:00:00.123Z',
                  type: 'TYLENOL',
                },
              ],
              name: 'John Smith',
              nationality: 'US',
              occSpeciality: 'Healthcare',
              patientIdentity: 'FRIEND CIVILIAN',
              patientStatus: 'US CIVILIAN',
              payGrade: 'CIVILIAN',
              priority: 'ROUTINE',
              reportGen: 'DEVICE',
              reportTime: '2021-10-15T16:00:00.123Z',
              service: 'CIV',
              specMedEquip: ['OXYGEN', 'HOIST'],
              treatment: [
                {
                  bodyPart: 'CHEST',
                  comments: 'Comments on the treatment info.',
                  time: '2018-01-01T16:00:00.123Z',
                  type: 'BREATHING CHEST TUBE',
                },
              ],
              vitalSignData: [
                {
                  medConfFactor: 1,
                  time: '2021-10-15T16:00:00.123Z',
                  vitalSign: 'HEART RATE',
                  vitalSign1: 120,
                  vitalSign2: 80,
                },
              ],
            },
          ],
          ce: 10.1234,
          cntctFreq: 3.11,
          comments: 'Comments concerning mission',
          enemyData: [
            {
              dirToEnemy: 'NORTH',
              friendliesRemarks: 'Comments from friendlies.',
              hlzRemarks: 'Remarks about hot landing zone.',
              hostileFireType: 'SMALL ARMS',
            },
          ],
          idWeatherReport: 'WeatherReport-ID',
          le: 5.1234,
          medevacId: 'MedEvac-ID',
          medicReq: true,
          missionType: 'GROUND',
          numAmbulatory: 5,
          numCasualties: 5,
          numKIA: 0,
          numLitter: 0,
          numWIA: 3,
          obstaclesRemarks: 'N/A',
          origin: 'THIRD_PARTY_DATASOURCE',
          pickupAlt: 30.1234,
          pickupTime: '2021-10-20T16:00:00.123Z',
          reqCallSign: 'Bravo',
          reqNum: 'MED.1.223908',
          terrain: 'ROCKY',
          terrainRemarks: 'N/A',
          zoneContrCallSign: 'Tango',
          zoneHot: false,
          zoneMarking: 'ILLUMINATION',
          zoneMarkingColor: 'RED',
          zoneName: 'example-zone',
          zoneSecurity: 'NO ENEMY',
        },
      ],
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.evac.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.evac.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          pickupLat: 75.1234,
          pickupLon: 175.1234,
          reqTime: '2021-10-15T16:00:00.123Z',
          source: 'Bluestaq',
          type: 'REQUEST',
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

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.evac.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          pickupLat: 75.1234,
          pickupLon: 175.1234,
          reqTime: '2021-10-15T16:00:00.123Z',
          source: 'Bluestaq',
          type: 'REQUEST',
          id: 'MEDEVACEVENT-ID',
          casualtyInfo: [
            {
              age: 35,
              allergy: [{ comments: "Comments on the patient's allergies.", type: 'PENICILLIN' }],
              bloodType: 'O NEG',
              bodyPart: 'FACE',
              burialLocation: [-33.123, 150.33, 0.24],
              callSign: 'SHARK',
              careProviderUrn: 'CARE_PROVIDER-1',
              casualtyKey: 'casualty-007',
              casualtyType: 'DENTAL',
              collectionPoint: [12.44, 122.55, 0.98],
              comments: 'Comments relating to this casualty info.',
              condition: [
                {
                  bodyPart: 'ANKLE LEFT FRONT',
                  comments: "Comments on the patient's condition.",
                  time: '2021-10-15T16:00:00.123Z',
                  type: 'ACTIVITY LOW',
                },
              ],
              contamType: 'NONE',
              disposition: 'EVACUATE WOUNDED',
              dispositionType: 'EVACUATE',
              etiology: [
                {
                  bodyPart: 'ARM LEFT FRONT',
                  comments: 'Comments on the etiology info.',
                  time: '2021-10-16T16:00:00.123Z',
                  type: 'BURN',
                },
              ],
              evacType: 'GROUND',
              gender: 'MALE',
              healthState: [
                {
                  healthStateCode: 'BLUE',
                  medConfFactor: 1,
                  time: '2021-10-15T16:00:00.123Z',
                  type: 'COGNITIVE',
                },
              ],
              injury: [
                {
                  bodyPart: 'ARM LEFT FRONT',
                  comments: "Comments on the patient's injury.",
                  time: '2021-10-15T16:00:00.123Z',
                  type: 'ABRASION',
                },
              ],
              last4SSN: '1234',
              medication: [
                {
                  adminRoute: 'ORAL',
                  bodyPart: 'ARM LEFT BACK',
                  comments: "Comments on the patient's medication information.",
                  dose: '800mg',
                  time: '2021-10-15T16:00:00.123Z',
                  type: 'TYLENOL',
                },
              ],
              name: 'John Smith',
              nationality: 'US',
              occSpeciality: 'Healthcare',
              patientIdentity: 'FRIEND CIVILIAN',
              patientStatus: 'US CIVILIAN',
              payGrade: 'CIVILIAN',
              priority: 'ROUTINE',
              reportGen: 'DEVICE',
              reportTime: '2021-10-15T16:00:00.123Z',
              service: 'CIV',
              specMedEquip: ['OXYGEN', 'HOIST'],
              treatment: [
                {
                  bodyPart: 'CHEST',
                  comments: 'Comments on the treatment info.',
                  time: '2018-01-01T16:00:00.123Z',
                  type: 'BREATHING CHEST TUBE',
                },
              ],
              vitalSignData: [
                {
                  medConfFactor: 1,
                  time: '2021-10-15T16:00:00.123Z',
                  vitalSign: 'HEART RATE',
                  vitalSign1: 120,
                  vitalSign2: 80,
                },
              ],
            },
          ],
          ce: 10.1234,
          cntctFreq: 3.11,
          comments: 'Comments concerning mission',
          enemyData: [
            {
              dirToEnemy: 'NORTH',
              friendliesRemarks: 'Comments from friendlies.',
              hlzRemarks: 'Remarks about hot landing zone.',
              hostileFireType: 'SMALL ARMS',
            },
          ],
          idWeatherReport: 'WeatherReport-ID',
          le: 5.1234,
          medevacId: 'MedEvac-ID',
          medicReq: true,
          missionType: 'GROUND',
          numAmbulatory: 5,
          numCasualties: 5,
          numKIA: 0,
          numLitter: 0,
          numWIA: 3,
          obstaclesRemarks: 'N/A',
          origin: 'THIRD_PARTY_DATASOURCE',
          pickupAlt: 30.1234,
          pickupTime: '2021-10-20T16:00:00.123Z',
          reqCallSign: 'Bravo',
          reqNum: 'MED.1.223908',
          terrain: 'ROCKY',
          terrainRemarks: 'N/A',
          zoneContrCallSign: 'Tango',
          zoneHot: false,
          zoneMarking: 'ILLUMINATION',
          zoneMarkingColor: 'RED',
          zoneName: 'example-zone',
          zoneSecurity: 'NO ENEMY',
        },
      ],
    });
  });
});
