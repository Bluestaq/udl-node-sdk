// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource spaceEnvObservation', () => {
  test('list: only required params', async () => {
    const responsePromise = client.spaceEnvObservation.list({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.spaceEnvObservation.list({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.spaceEnvObservation.count({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.spaceEnvObservation.count({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.spaceEnvObservation.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2023-06-07T14:17:39.653Z',
          source: 'Bluestaq',
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
    const response = await client.spaceEnvObservation.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2023-06-07T14:17:39.653Z',
          source: 'Bluestaq',
          id: 'f13f82b8-5d2a-407a-b3f3-1fe30ca79eae',
          alt: 35785.3732,
          dataType: 'ECP',
          derived: false,
          description: 'Observation Data Description Text',
          descriptor: 'energetic charged particle',
          externalId: 'fe4ad5dc-0128-4ce8-b09c-0b404322025e',
          forecast: true,
          genSystem: 'System Name',
          genTime: '2023-02-10T19:48:09.934Z',
          idSensor: 'ECP-1',
          instrumentType: 'MAGNETOMETER',
          lat: 38.8339,
          lon: -104.8214,
          measType: 'ENERGETIC PARTICLES',
          msgType: 'SODM',
          observatoryName: 'GOES-16',
          observatoryNotes: 'Notes',
          observatoryType: 'ONORBIT',
          obSetId: 'ECPOBSET-478125',
          origin: 'OPS1',
          origObjectId: '41866',
          origSensorId: 'ECP-1',
          particleType: 'PROTON',
          quality: 'GOOD',
          satNo: 41866,
          senEnergyLevel: '0500-700 keV',
          senPos: [4174.78541785946, -9969.69867853067, 40733.9284531208],
          senReferenceFrame: 'J2000',
          senVel: [0.727059797295872, 0.298037087322647, 0.00157064850994095],
          seoList: [
            {
              obType: 'INTEGRAL FLUX',
              obUoM: 'particles/cm^2/s/sr',
              obArray: [1.7, 35.6, 21.2, 19.01],
              obBool: true,
              obDescription: 'Observation Description Text',
              obQuality: 'GOOD',
              obString: 'C1.3',
              obValue: 0.487687826,
            },
          ],
          srcIds: ['615236d7-d464-4b8c-9b0b-45994e017d80', '8a38e3d6-35fd-4bda-b883-e3724e6bc6b9'],
          srcTyps: ['SPACEENVOB', 'SGI'],
        },
      ],
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.spaceEnvObservation.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.spaceEnvObservation.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.spaceEnvObservation.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.spaceEnvObservation.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2023-06-07T14:17:39.653Z',
          source: 'Bluestaq',
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
    const response = await client.spaceEnvObservation.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2023-06-07T14:17:39.653Z',
          source: 'Bluestaq',
          id: 'f13f82b8-5d2a-407a-b3f3-1fe30ca79eae',
          alt: 35785.3732,
          dataType: 'ECP',
          derived: false,
          description: 'Observation Data Description Text',
          descriptor: 'energetic charged particle',
          externalId: 'fe4ad5dc-0128-4ce8-b09c-0b404322025e',
          forecast: true,
          genSystem: 'System Name',
          genTime: '2023-02-10T19:48:09.934Z',
          idSensor: 'ECP-1',
          instrumentType: 'MAGNETOMETER',
          lat: 38.8339,
          lon: -104.8214,
          measType: 'ENERGETIC PARTICLES',
          msgType: 'SODM',
          observatoryName: 'GOES-16',
          observatoryNotes: 'Notes',
          observatoryType: 'ONORBIT',
          obSetId: 'ECPOBSET-478125',
          origin: 'OPS1',
          origObjectId: '41866',
          origSensorId: 'ECP-1',
          particleType: 'PROTON',
          quality: 'GOOD',
          satNo: 41866,
          senEnergyLevel: '0500-700 keV',
          senPos: [4174.78541785946, -9969.69867853067, 40733.9284531208],
          senReferenceFrame: 'J2000',
          senVel: [0.727059797295872, 0.298037087322647, 0.00157064850994095],
          seoList: [
            {
              obType: 'INTEGRAL FLUX',
              obUoM: 'particles/cm^2/s/sr',
              obArray: [1.7, 35.6, 21.2, 19.01],
              obBool: true,
              obDescription: 'Observation Description Text',
              obQuality: 'GOOD',
              obString: 'C1.3',
              obValue: 0.487687826,
            },
          ],
          srcIds: ['615236d7-d464-4b8c-9b0b-45994e017d80', '8a38e3d6-35fd-4bda-b883-e3724e6bc6b9'],
          srcTyps: ['SPACEENVOB', 'SGI'],
        },
      ],
    });
  });
});
