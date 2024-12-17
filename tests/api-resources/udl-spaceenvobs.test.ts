// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource udlSpaceenvobs', () => {
  test('create: only required params', async () => {
    const responsePromise = client.udlSpaceenvobs.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
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
    const response = await client.udlSpaceenvobs.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        id: 'id',
        alt: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        dataType: 'dataType',
        derived: true,
        description: 'description',
        descriptor: 'descriptor',
        externalId: 'externalId',
        forecast: true,
        genSystem: 'genSystem',
        genTime: '2019-12-27T18:11:19.117Z',
        idOnOrbit: 'idOnOrbit',
        idSensor: 'idSensor',
        instrumentType: 'instrumentType',
        lat: 0,
        lon: 0,
        measType: 'measType',
        msgType: 'msgType',
        observatoryName: 'observatoryName',
        observatoryNotes: 'observatoryNotes',
        observatoryType: 'observatoryType',
        obSetId: 'obSetId',
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        origSensorId: 'origSensorId',
        particleType: 'particleType',
        quality: 'quality',
        satNo: 0,
        senEnergyLevel: 'senEnergyLevel',
        senPos: [0],
        senReferenceFrame: 'senReferenceFrame',
        senVel: [0],
        seoList: [
          {
            obType: 'obType',
            obUoM: 'obUoM',
            obArray: [0],
            obBool: true,
            obDescription: 'obDescription',
            obQuality: 'obQuality',
            obString: 'obString',
            obValue: 0,
          },
        ],
        srcIds: ['string'],
        srcTyps: ['string'],
      },
    ]);
  });
});
