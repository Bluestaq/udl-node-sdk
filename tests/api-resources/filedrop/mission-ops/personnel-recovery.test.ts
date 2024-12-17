// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource personnelRecovery', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.missionOps.personnelRecovery.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        msgTime: '2019-12-27T18:11:19.117Z',
        pickupLat: 0,
        pickupLon: 0,
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

  test('create: required and optional params', async () => {
    const response = await client.filedrop.missionOps.personnelRecovery.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        msgTime: '2019-12-27T18:11:19.117Z',
        pickupLat: 0,
        pickupLon: 0,
        source: 'source',
        type: 'type',
        id: 'id',
        authMethod: 'authMethod',
        authStatus: 'authStatus',
        beaconInd: true,
        callSign: 'callSign',
        commEq1: 'commEq1',
        commEq2: 'commEq2',
        commEq3: 'commEq3',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        executionInfo: {
          egress: 0,
          egressPoint: [0],
          escortVehicle: { callSign: 'callSign', primaryFreq: 0, strength: 0, type: 'type' },
          ingress: 0,
          initialPoint: [0],
          objStrategy: 'objStrategy',
          recoveryVehicle: { callSign: 'callSign', primaryFreq: 0, strength: 0, type: 'type' },
        },
        identity: 'identity',
        idWeatherReport: 'idWeatherReport',
        milClass: 'milClass',
        natAlliance: 0,
        natAlliance1: 0,
        numAmbulatory: 0,
        numAmbulatoryInjured: 0,
        numNonAmbulatory: 0,
        numPersons: 0,
        objectiveAreaInfo: {
          enemyData: [
            {
              dirToEnemy: 'dirToEnemy',
              friendliesRemarks: 'friendliesRemarks',
              hlzRemarks: 'hlzRemarks',
              hostileFireType: 'hostileFireType',
            },
          ],
          oscCallSign: 'oscCallSign',
          oscFreq: 0,
          pzDesc: 'pzDesc',
          pzLocation: [0],
        },
        origin: 'origin',
        origNetwork: 'origNetwork',
        pickupAlt: 0,
        recovId: 'recovId',
        rxFreq: 0,
        survivorMessages: 'survivorMessages',
        survivorRadio: 'survivorRadio',
        termInd: true,
        textMsg: 'textMsg',
        txFreq: 0,
      },
    ]);
  });
});
