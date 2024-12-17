// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evac', () => {
  test('create: only required params', async () => {
    const responsePromise = client.evac.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      pickupLat: 0,
      pickupLon: 0,
      reqTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      type: 'type',
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
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      pickupLat: 0,
      pickupLon: 0,
      reqTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      type: 'type',
      id: 'id',
      casualtyInfo: [
        {
          age: 0,
          allergy: [{ comments: 'comments', type: 'type' }],
          bloodType: 'bloodType',
          bodyPart: 'bodyPart',
          burialLocation: [0],
          callSign: 'callSign',
          careProviderUrn: 'careProviderUrn',
          casualtyKey: 'casualtyKey',
          casualtyType: 'casualtyType',
          collectionPoint: [0],
          comments: 'comments',
          condition: [
            { bodyPart: 'bodyPart', comments: 'comments', time: '2019-12-27T18:11:19.117Z', type: 'type' },
          ],
          contamType: 'contamType',
          disposition: 'disposition',
          dispositionType: 'dispositionType',
          etiology: [
            { bodyPart: 'bodyPart', comments: 'comments', time: '2019-12-27T18:11:19.117Z', type: 'type' },
          ],
          evacType: 'evacType',
          gender: 'gender',
          healthState: [
            {
              healthStateCode: 'healthStateCode',
              medConfFactor: 0,
              time: '2019-12-27T18:11:19.117Z',
              type: 'type',
            },
          ],
          injury: [
            { bodyPart: 'bodyPart', comments: 'comments', time: '2019-12-27T18:11:19.117Z', type: 'type' },
          ],
          last4SSN: 'last4SSN',
          medication: [
            {
              adminRoute: 'adminRoute',
              bodyPart: 'bodyPart',
              comments: 'comments',
              dose: 'dose',
              time: '2019-12-27T18:11:19.117Z',
              type: 'type',
            },
          ],
          name: 'name',
          nationality: 'nationality',
          occSpeciality: 'occSpeciality',
          patientIdentity: 'patientIdentity',
          patientStatus: 'patientStatus',
          payGrade: 'payGrade',
          priority: 'priority',
          reportGen: 'reportGen',
          reportTime: '2019-12-27T18:11:19.117Z',
          service: 'service',
          specMedEquip: ['string'],
          treatment: [
            { bodyPart: 'bodyPart', comments: 'comments', time: '2019-12-27T18:11:19.117Z', type: 'type' },
          ],
          vitalSignData: [
            {
              medConfFactor: 0,
              time: '2019-12-27T18:11:19.117Z',
              vitalSign: 'vitalSign',
              vitalSign1: 0,
              vitalSign2: 0,
            },
          ],
        },
      ],
      ce: 0,
      cntctFreq: 0,
      comments: 'comments',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      enemyData: [
        {
          dirToEnemy: 'dirToEnemy',
          friendliesRemarks: 'friendliesRemarks',
          hlzRemarks: 'hlzRemarks',
          hostileFireType: 'hostileFireType',
        },
      ],
      idWeatherReport: 'idWeatherReport',
      le: 0,
      medevacId: 'medevacId',
      medicReq: true,
      missionType: 'missionType',
      numAmbulatory: 0,
      numCasualties: 0,
      numKIA: 0,
      numLitter: 0,
      numWIA: 0,
      obstaclesRemarks: 'obstaclesRemarks',
      origin: 'origin',
      origNetwork: 'origNetwork',
      pickupAlt: 0,
      pickupTime: '2019-12-27T18:11:19.117Z',
      reqCallSign: 'reqCallSign',
      reqNum: 'reqNum',
      terrain: 'terrain',
      terrainRemarks: 'terrainRemarks',
      zoneContrCallSign: 'zoneContrCallSign',
      zoneHot: true,
      zoneMarking: 'zoneMarking',
      zoneMarkingColor: 'zoneMarkingColor',
      zoneName: 'zoneName',
      zoneSecurity: 'zoneSecurity',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.evac.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.evac.retrieve({ path_id: 'id', body_id: 'id' });
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
    const response = await client.evac.list({ reqTime: '2019-12-27T18:11:19.117Z' });
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
    const response = await client.evac.count({ reqTime: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.evac.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        pickupLat: 0,
        pickupLon: 0,
        reqTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        type: 'type',
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
    const response = await client.evac.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        pickupLat: 0,
        pickupLon: 0,
        reqTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        type: 'type',
        id: 'id',
        casualtyInfo: [
          {
            age: 0,
            allergy: [{ comments: 'comments', type: 'type' }],
            bloodType: 'bloodType',
            bodyPart: 'bodyPart',
            burialLocation: [0],
            callSign: 'callSign',
            careProviderUrn: 'careProviderUrn',
            casualtyKey: 'casualtyKey',
            casualtyType: 'casualtyType',
            collectionPoint: [0],
            comments: 'comments',
            condition: [
              { bodyPart: 'bodyPart', comments: 'comments', time: '2019-12-27T18:11:19.117Z', type: 'type' },
            ],
            contamType: 'contamType',
            disposition: 'disposition',
            dispositionType: 'dispositionType',
            etiology: [
              { bodyPart: 'bodyPart', comments: 'comments', time: '2019-12-27T18:11:19.117Z', type: 'type' },
            ],
            evacType: 'evacType',
            gender: 'gender',
            healthState: [
              {
                healthStateCode: 'healthStateCode',
                medConfFactor: 0,
                time: '2019-12-27T18:11:19.117Z',
                type: 'type',
              },
            ],
            injury: [
              { bodyPart: 'bodyPart', comments: 'comments', time: '2019-12-27T18:11:19.117Z', type: 'type' },
            ],
            last4SSN: 'last4SSN',
            medication: [
              {
                adminRoute: 'adminRoute',
                bodyPart: 'bodyPart',
                comments: 'comments',
                dose: 'dose',
                time: '2019-12-27T18:11:19.117Z',
                type: 'type',
              },
            ],
            name: 'name',
            nationality: 'nationality',
            occSpeciality: 'occSpeciality',
            patientIdentity: 'patientIdentity',
            patientStatus: 'patientStatus',
            payGrade: 'payGrade',
            priority: 'priority',
            reportGen: 'reportGen',
            reportTime: '2019-12-27T18:11:19.117Z',
            service: 'service',
            specMedEquip: ['string'],
            treatment: [
              { bodyPart: 'bodyPart', comments: 'comments', time: '2019-12-27T18:11:19.117Z', type: 'type' },
            ],
            vitalSignData: [
              {
                medConfFactor: 0,
                time: '2019-12-27T18:11:19.117Z',
                vitalSign: 'vitalSign',
                vitalSign1: 0,
                vitalSign2: 0,
              },
            ],
          },
        ],
        ce: 0,
        cntctFreq: 0,
        comments: 'comments',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        enemyData: [
          {
            dirToEnemy: 'dirToEnemy',
            friendliesRemarks: 'friendliesRemarks',
            hlzRemarks: 'hlzRemarks',
            hostileFireType: 'hostileFireType',
          },
        ],
        idWeatherReport: 'idWeatherReport',
        le: 0,
        medevacId: 'medevacId',
        medicReq: true,
        missionType: 'missionType',
        numAmbulatory: 0,
        numCasualties: 0,
        numKIA: 0,
        numLitter: 0,
        numWIA: 0,
        obstaclesRemarks: 'obstaclesRemarks',
        origin: 'origin',
        origNetwork: 'origNetwork',
        pickupAlt: 0,
        pickupTime: '2019-12-27T18:11:19.117Z',
        reqCallSign: 'reqCallSign',
        reqNum: 'reqNum',
        terrain: 'terrain',
        terrainRemarks: 'terrainRemarks',
        zoneContrCallSign: 'zoneContrCallSign',
        zoneHot: true,
        zoneMarking: 'zoneMarking',
        zoneMarkingColor: 'zoneMarkingColor',
        zoneName: 'zoneName',
        zoneSecurity: 'zoneSecurity',
      },
    ]);
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

  test('queryHelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.evac.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
