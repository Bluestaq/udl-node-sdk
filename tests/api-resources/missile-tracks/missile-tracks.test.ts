// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource missileTracks', () => {
  test('list: only required params', async () => {
    const responsePromise = client.missileTracks.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.missileTracks.list({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.missileTracks.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.missileTracks.count({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.missileTracks.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-02-25T12:00:00.123456Z',
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
    const response = await client.missileTracks.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-02-25T12:00:00.123456Z',
          id: 'MissileTrack_ID',
          acftSubType: 'SLBM',
          alert: 'HIT',
          angElev: 15.2,
          aouRptData: [34.3, 26.5, 1.2],
          aouRptType: 'ELLIPSE',
          azCorr: 12.876,
          boosting: true,
          burnoutAlt: 30567.452,
          callSign: 'Charlie',
          containment: 90.64,
          dropPtInd: true,
          emgInd: true,
          env: 'AIR',
          impactAouData: [34.3, 26.5, 1.2],
          impactAouType: 'ELLIPSE',
          impactLat: 19.88550102,
          impactLon: 46.74596844,
          impactTime: '2021-02-25T12:00:00.123456Z',
          infoSource: 'S1',
          launchAouData: [1.23, 2.34, 3.45],
          launchAouType: 'ELLIPSE',
          launchLat: 19.88550102,
          launchLon: 46.74596844,
          launchTime: '2021-02-25T12:00:00.123456Z',
          lostTrkInd: false,
          msgCreateDate: '2024-04-25T08:17:01.346Z',
          msgSubType: 'Update',
          msgType: 'MSG-TYPE',
          mslStatus: 'AT LAUNCH',
          muidSrc: 'MUID-SRC',
          muidSrcTrk: 'MUID-SRC-ID',
          name: 'TRACK-NAME',
          objAct: 'HOLDING',
          objIdent: 'FRIEND',
          objPlat: 'WEAPON',
          objType: 'Ballistic',
          objTypeConf: 90,
          origin: 'THIRD_PARTY_DATASOURCE',
          parentTrackId: '102288',
          polarSingLocLat: 19.88550102,
          polarSingLocLon: 46.74596844,
          senMode: 'OBSBO',
          spaceAmp: 'NUCLEAR WARHEAD',
          spaceAmpConf: 6,
          spaceSpecType: 'SS-21_MOD_2_CRBM',
          trackId: '102288',
          trkConf: 0.95,
          trkQual: 1,
          vectors: [
            {
              epoch: '2024-03-30T15:02:39.346768Z',
              accel: [0.59236, -0.03537, 0.35675],
              confidence: 100,
              course: 7.3580153,
              cov: [1.1, 2.2, 3.3],
              covReferenceFrame: 'ECEF',
              flightAz: 45.23,
              idSensor: 'a7e99418-b6d6-29ab-e767-440a989cce26',
              object: 'TARGET',
              origSensorId: 'ORIGSENSOR-ID',
              pos: [-1456.91592, -2883.54041, 6165.55186],
              quat: [0.03, 0.02, 0.01, 0.012],
              referenceFrame: 'ECEF',
              spd: 15.03443,
              status: 'INITIAL',
              timeSource: 'Sensor 1',
              type: 'STATE',
              vectorAlt: 25,
              vectorLat: 45,
              vectorLon: 150,
              vel: [-1.21981, -6.60208, -3.36515],
            },
          ],
        },
      ],
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.missileTracks.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.missileTracks.tuple({
      columns: 'columns',
      ts: '2019-12-27T18:11:19.117Z',
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
    const response = await client.missileTracks.tuple({
      columns: 'columns',
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.missileTracks.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-02-25T12:00:00.123456Z',
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
    const response = await client.missileTracks.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-02-25T12:00:00.123456Z',
          id: 'MissileTrack_ID',
          acftSubType: 'SLBM',
          alert: 'HIT',
          angElev: 15.2,
          aouRptData: [34.3, 26.5, 1.2],
          aouRptType: 'ELLIPSE',
          azCorr: 12.876,
          boosting: true,
          burnoutAlt: 30567.452,
          callSign: 'Charlie',
          containment: 90.64,
          dropPtInd: true,
          emgInd: true,
          env: 'AIR',
          impactAouData: [34.3, 26.5, 1.2],
          impactAouType: 'ELLIPSE',
          impactLat: 19.88550102,
          impactLon: 46.74596844,
          impactTime: '2021-02-25T12:00:00.123456Z',
          infoSource: 'S1',
          launchAouData: [1.23, 2.34, 3.45],
          launchAouType: 'ELLIPSE',
          launchLat: 19.88550102,
          launchLon: 46.74596844,
          launchTime: '2021-02-25T12:00:00.123456Z',
          lostTrkInd: false,
          msgCreateDate: '2024-04-25T08:17:01.346Z',
          msgSubType: 'Update',
          msgType: 'MSG-TYPE',
          mslStatus: 'AT LAUNCH',
          muidSrc: 'MUID-SRC',
          muidSrcTrk: 'MUID-SRC-ID',
          name: 'TRACK-NAME',
          objAct: 'HOLDING',
          objIdent: 'FRIEND',
          objPlat: 'WEAPON',
          objType: 'Ballistic',
          objTypeConf: 90,
          origin: 'THIRD_PARTY_DATASOURCE',
          parentTrackId: '102288',
          polarSingLocLat: 19.88550102,
          polarSingLocLon: 46.74596844,
          senMode: 'OBSBO',
          spaceAmp: 'NUCLEAR WARHEAD',
          spaceAmpConf: 6,
          spaceSpecType: 'SS-21_MOD_2_CRBM',
          trackId: '102288',
          trkConf: 0.95,
          trkQual: 1,
          vectors: [
            {
              epoch: '2024-03-30T15:02:39.346768Z',
              accel: [0.59236, -0.03537, 0.35675],
              confidence: 100,
              course: 7.3580153,
              cov: [1.1, 2.2, 3.3],
              covReferenceFrame: 'ECEF',
              flightAz: 45.23,
              idSensor: 'a7e99418-b6d6-29ab-e767-440a989cce26',
              object: 'TARGET',
              origSensorId: 'ORIGSENSOR-ID',
              pos: [-1456.91592, -2883.54041, 6165.55186],
              quat: [0.03, 0.02, 0.01, 0.012],
              referenceFrame: 'ECEF',
              spd: 15.03443,
              status: 'INITIAL',
              timeSource: 'Sensor 1',
              type: 'STATE',
              vectorAlt: 25,
              vectorLat: 45,
              vectorLon: 150,
              vel: [-1.21981, -6.60208, -3.36515],
            },
          ],
        },
      ],
    });
  });
});
