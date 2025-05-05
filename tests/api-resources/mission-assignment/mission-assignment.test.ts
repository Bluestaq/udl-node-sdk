// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource missionAssignment', () => {
  test('create: only required params', async () => {
    const responsePromise = client.missionAssignment.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      mad: 'MAD',
      source: 'Bluestaq',
      ts: '2021-01-01T01:01:01.123456Z',
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
    const response = await client.missionAssignment.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      mad: 'MAD',
      source: 'Bluestaq',
      ts: '2021-01-01T01:01:01.123456Z',
      id: 'MISSIONASSIGNMENT-ID',
      c1associateddmpis: 3,
      c2air: 'C2AIR',
      c2alt: 3,
      c2crs: 3,
      c2exerciseindicator: 'C2EXERCISE',
      c2exercisemof: 'MOF',
      c2id: 'C2ID',
      c2idamplifyingdescriptor: 'C2IDAMP',
      c2lnd: 'C2LND',
      c2spc: 'C2SPC',
      c2spd: 3,
      c2specialinterestindicator: 'C2SPECIAL',
      c2sur: 'C2SUR',
      c3elv: 10.23,
      c3lat: 10.23,
      c3lon: 10.23,
      c3ptl: 'C3PTL',
      c3ptnum: 'C3PTNUM',
      c4colon: 5,
      c4def: 'C4DEF',
      c4egress: 4,
      c4mod: 5,
      c4numberofstores: 3,
      c4runin: 5,
      c4tgt: 'C4TGT',
      c4timediscrete: 'C4TIMED',
      c4tm: 4,
      c4typeofstores: 2,
      c5colon: 5,
      c5elevationlsbs: 5,
      c5haeadj: 5,
      c5latlsb: 5,
      c5lonlsb: 5,
      c5tgtbrng: 5,
      c5tw: 5,
      c6dspc: 'C6DSPC',
      c6dspct: 'C6DSPCT',
      c6fplpm: 'C6FPLPM',
      c6intel: 5,
      c6laser: 5,
      c6longpm: 'C6LONGPM',
      c6tnr3: 5,
      c7elang2: 5.23,
      c7in3p: 3,
      c7tnor: 'C7TNOR',
      env: 'ENV',
      index: 5,
      lat: 45.23,
      lon: 45.23,
      orginx: 'ORIGIN',
      origin: 'THIRD_PARTY_DATASOURCE',
      rc: 'RC-123',
      rr: 2,
      sz: 'STRENGTH',
      tno: 'TRACK_NUMBER',
      trkId: 'TRK-ID',
      twenv: 'THREAT_WARNING',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.missionAssignment.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      mad: 'MAD',
      source: 'Bluestaq',
      ts: '2021-01-01T01:01:01.123456Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.missionAssignment.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      mad: 'MAD',
      source: 'Bluestaq',
      ts: '2021-01-01T01:01:01.123456Z',
      body_id: 'MISSIONASSIGNMENT-ID',
      c1associateddmpis: 3,
      c2air: 'C2AIR',
      c2alt: 3,
      c2crs: 3,
      c2exerciseindicator: 'C2EXERCISE',
      c2exercisemof: 'MOF',
      c2id: 'C2ID',
      c2idamplifyingdescriptor: 'C2IDAMP',
      c2lnd: 'C2LND',
      c2spc: 'C2SPC',
      c2spd: 3,
      c2specialinterestindicator: 'C2SPECIAL',
      c2sur: 'C2SUR',
      c3elv: 10.23,
      c3lat: 10.23,
      c3lon: 10.23,
      c3ptl: 'C3PTL',
      c3ptnum: 'C3PTNUM',
      c4colon: 5,
      c4def: 'C4DEF',
      c4egress: 4,
      c4mod: 5,
      c4numberofstores: 3,
      c4runin: 5,
      c4tgt: 'C4TGT',
      c4timediscrete: 'C4TIMED',
      c4tm: 4,
      c4typeofstores: 2,
      c5colon: 5,
      c5elevationlsbs: 5,
      c5haeadj: 5,
      c5latlsb: 5,
      c5lonlsb: 5,
      c5tgtbrng: 5,
      c5tw: 5,
      c6dspc: 'C6DSPC',
      c6dspct: 'C6DSPCT',
      c6fplpm: 'C6FPLPM',
      c6intel: 5,
      c6laser: 5,
      c6longpm: 'C6LONGPM',
      c6tnr3: 5,
      c7elang2: 5.23,
      c7in3p: 3,
      c7tnor: 'C7TNOR',
      env: 'ENV',
      index: 5,
      lat: 45.23,
      lon: 45.23,
      orginx: 'ORIGIN',
      origin: 'THIRD_PARTY_DATASOURCE',
      rc: 'RC-123',
      rr: 2,
      sz: 'STRENGTH',
      tno: 'TRACK_NUMBER',
      trkId: 'TRK-ID',
      twenv: 'THREAT_WARNING',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.missionAssignment.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.missionAssignment.list({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('delete', async () => {
    const responsePromise = client.missionAssignment.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: only required params', async () => {
    const responsePromise = client.missionAssignment.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.missionAssignment.count({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.missionAssignment.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          mad: 'MAD',
          source: 'Bluestaq',
          ts: '2021-01-01T01:01:01.123456Z',
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
    const response = await client.missionAssignment.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          mad: 'MAD',
          source: 'Bluestaq',
          ts: '2021-01-01T01:01:01.123456Z',
          id: 'MISSIONASSIGNMENT-ID',
          c1associateddmpis: 3,
          c2air: 'C2AIR',
          c2alt: 3,
          c2crs: 3,
          c2exerciseindicator: 'C2EXERCISE',
          c2exercisemof: 'MOF',
          c2id: 'C2ID',
          c2idamplifyingdescriptor: 'C2IDAMP',
          c2lnd: 'C2LND',
          c2spc: 'C2SPC',
          c2spd: 3,
          c2specialinterestindicator: 'C2SPECIAL',
          c2sur: 'C2SUR',
          c3elv: 10.23,
          c3lat: 10.23,
          c3lon: 10.23,
          c3ptl: 'C3PTL',
          c3ptnum: 'C3PTNUM',
          c4colon: 5,
          c4def: 'C4DEF',
          c4egress: 4,
          c4mod: 5,
          c4numberofstores: 3,
          c4runin: 5,
          c4tgt: 'C4TGT',
          c4timediscrete: 'C4TIMED',
          c4tm: 4,
          c4typeofstores: 2,
          c5colon: 5,
          c5elevationlsbs: 5,
          c5haeadj: 5,
          c5latlsb: 5,
          c5lonlsb: 5,
          c5tgtbrng: 5,
          c5tw: 5,
          c6dspc: 'C6DSPC',
          c6dspct: 'C6DSPCT',
          c6fplpm: 'C6FPLPM',
          c6intel: 5,
          c6laser: 5,
          c6longpm: 'C6LONGPM',
          c6tnr3: 5,
          c7elang2: 5.23,
          c7in3p: 3,
          c7tnor: 'C7TNOR',
          env: 'ENV',
          index: 5,
          lat: 45.23,
          lon: 45.23,
          orginx: 'ORIGIN',
          origin: 'THIRD_PARTY_DATASOURCE',
          rc: 'RC-123',
          rr: 2,
          sz: 'STRENGTH',
          tno: 'TRACK_NUMBER',
          trkId: 'TRK-ID',
          twenv: 'THREAT_WARNING',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.missionAssignment.get('id');
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
      client.missionAssignment.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.missionAssignment.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.missionAssignment.tuple({
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
    const response = await client.missionAssignment.tuple({
      columns: 'columns',
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
