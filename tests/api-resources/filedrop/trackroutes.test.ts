// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trackroutes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.trackroutes.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      lastUpdateDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.filedrop.trackroutes.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      lastUpdateDate: '2019-12-27T18:11:19.117Z',
      source: 'source',
      type: 'type',
      id: 'id',
      altitudeBlocks: [{ altitudeSequenceId: 'altitudeSequenceId', lowerAltitude: 0, upperAltitude: 0 }],
      apnSetting: 'apnSetting',
      apxBeaconCode: 'apxBeaconCode',
      artccMessage: 'artccMessage',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      creatingOrg: 'creatingOrg',
      direction: 'direction',
      effectiveDate: '2019-12-27T18:11:19.117Z',
      externalId: 'externalId',
      lastUsedDate: '2019-12-27T18:11:19.117Z',
      locationTrackId: 'locationTrackId',
      origin: 'origin',
      origNetwork: 'origNetwork',
      poc: [
        {
          office: 'office',
          phone: 'phone',
          pocName: 'pocName',
          pocOrg: 'pocOrg',
          pocSequenceId: 0,
          pocTypeName: 'pocTypeName',
          rank: 'rank',
          remark: 'remark',
          username: 'username',
        },
      ],
      priFreq: 0,
      receiverTankerCHCode: 'receiverTankerCHCode',
      regionCode: 'regionCode',
      regionName: 'regionName',
      reviewDate: '2019-12-27T18:11:19.117Z',
      routePoints: [
        {
          altCountryCode: 'altCountryCode',
          countryCode: 'countryCode',
          dafifPt: true,
          magDec: 0,
          navaid: 'navaid',
          navaidLength: 0,
          navaidType: 'navaidType',
          ptLat: 0,
          ptLon: 0,
          ptSequenceId: 0,
          ptTypeCode: 'ptTypeCode',
          ptTypeName: 'ptTypeName',
          waypointName: 'waypointName',
        },
      ],
      schedulerOrgName: 'schedulerOrgName',
      schedulerOrgUnit: 'schedulerOrgUnit',
      secFreq: 0,
      shortName: 'shortName',
      sic: 'sic',
      sourceDL: 'sourceDL',
      trackId: 'trackId',
      trackName: 'trackName',
      typeCode: 'typeCode',
      updatedAt: '2019-12-27T18:11:19.117Z',
      updatedBy: 'updatedBy',
    });
  });
});
