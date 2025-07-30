// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource track', () => {
  test('list: only required params', async () => {
    const responsePromise = client.track.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.track.list({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.track.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.track.count({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.track.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-06-07T14:17:39.653043Z',
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
    const response = await client.track.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-06-07T14:17:39.653043Z',
          id: 'TRACK-ID',
          alt: 1.23,
          asset: 'asset',
          assetNat: 'US',
          attitude: [10, 0.1, 1],
          attitudeRate: [0.0003, 1e-7, 0.00003],
          callSign: 'callSign',
          cntct: 'Contact Info',
          course: 88.37,
          cov: [1.1, 2.2, 3.3],
          ecefAcc: [1.23, 2.34, 3.45],
          ecefPos: [1.23, 2.34, 3.45],
          ecefVel: [1.23, 2.34, 3.45],
          eNUAcc: [0.0003, 0.014, 0.0003],
          eNUPos: [1.23, 2.34, 3.45],
          eNUVel: [1.23, 2.34, 3.45],
          env: 'LAND',
          envConf: 1.23,
          errEllp: [1.23, 2.34, 3.45],
          hdng: 19.7,
          identAmp: 'ZOMBIE',
          identCred: 0,
          identRel: 0,
          jSeries: 'J12.5',
          lat: 1.23,
          lcAcc: [1.23, 2.34, 3.45],
          lco: [1.23, 2.34, 3.45],
          lcPos: [1.23, 2.34, 3.45],
          lcs: [1.23, 2.34, 3.45],
          lcVel: [1.23, 2.34, 3.45],
          lon: 1.23,
          m1: 1234,
          m1v: 1,
          m2: 1234,
          m2v: 1,
          m3a: 2636,
          m3av: 1,
          modType: 'MASINT',
          msgTs: '2021-01-01T01:01:01.123456Z',
          msnId: 'msnId',
          multiSource: true,
          objAct: 'HOLDING',
          objId: 'objId',
          objIdent: 'FRIEND',
          objNat: 'NATO',
          objPlat: 'COMBAT_VEHICLE',
          objSpec: 'LIGHT_TANK',
          objType: 'WATERCRAFT',
          origin: 'THIRD_PARTY_DATASOURCE',
          sen: 'sen',
          senQual: 'senQual',
          spd: 1.23,
          srcIds: ['f7c70cc8-f9b7-4467-b4ad-3904e360e842', '1da3fab000014e3133709830937387405'],
          srcTyps: ['MTI', 'POI'],
          strength: 14,
          tags: ['TAG1', 'TAG2'],
          trkConf: 1.23,
          trkId: 'trkId',
          trkItmId: 'trkItmId',
          trkNum: 'trkNum',
          trkPtType: 'MEASURED',
          trkQual: 0,
          trkStat: 'INITIATING',
        },
      ],
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.track.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.track.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.track.tuple({
      columns: 'columns',
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.track.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-06-07T14:17:39.653043Z',
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
    const response = await client.track.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-06-07T14:17:39.653043Z',
          id: 'TRACK-ID',
          alt: 1.23,
          asset: 'asset',
          assetNat: 'US',
          attitude: [10, 0.1, 1],
          attitudeRate: [0.0003, 1e-7, 0.00003],
          callSign: 'callSign',
          cntct: 'Contact Info',
          course: 88.37,
          cov: [1.1, 2.2, 3.3],
          ecefAcc: [1.23, 2.34, 3.45],
          ecefPos: [1.23, 2.34, 3.45],
          ecefVel: [1.23, 2.34, 3.45],
          eNUAcc: [0.0003, 0.014, 0.0003],
          eNUPos: [1.23, 2.34, 3.45],
          eNUVel: [1.23, 2.34, 3.45],
          env: 'LAND',
          envConf: 1.23,
          errEllp: [1.23, 2.34, 3.45],
          hdng: 19.7,
          identAmp: 'ZOMBIE',
          identCred: 0,
          identRel: 0,
          jSeries: 'J12.5',
          lat: 1.23,
          lcAcc: [1.23, 2.34, 3.45],
          lco: [1.23, 2.34, 3.45],
          lcPos: [1.23, 2.34, 3.45],
          lcs: [1.23, 2.34, 3.45],
          lcVel: [1.23, 2.34, 3.45],
          lon: 1.23,
          m1: 1234,
          m1v: 1,
          m2: 1234,
          m2v: 1,
          m3a: 2636,
          m3av: 1,
          modType: 'MASINT',
          msgTs: '2021-01-01T01:01:01.123456Z',
          msnId: 'msnId',
          multiSource: true,
          objAct: 'HOLDING',
          objId: 'objId',
          objIdent: 'FRIEND',
          objNat: 'NATO',
          objPlat: 'COMBAT_VEHICLE',
          objSpec: 'LIGHT_TANK',
          objType: 'WATERCRAFT',
          origin: 'THIRD_PARTY_DATASOURCE',
          sen: 'sen',
          senQual: 'senQual',
          spd: 1.23,
          srcIds: ['f7c70cc8-f9b7-4467-b4ad-3904e360e842', '1da3fab000014e3133709830937387405'],
          srcTyps: ['MTI', 'POI'],
          strength: 14,
          tags: ['TAG1', 'TAG2'],
          trkConf: 1.23,
          trkId: 'trkId',
          trkItmId: 'trkItmId',
          trkNum: 'trkNum',
          trkPtType: 'MEASURED',
          trkQual: 0,
          trkStat: 'INITIATING',
        },
      ],
    });
  });
});
