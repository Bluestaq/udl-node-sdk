// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource missileTracks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.missileTracks.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
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
    const response = await client.missileTracks.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
        id: 'id',
        acftSubType: 'acftSubType',
        alert: 'alert',
        angElev: 0,
        aouRptData: [0],
        aouRptType: 'aouRptType',
        azCorr: 0,
        boosting: true,
        burnoutAlt: 0,
        callSign: 'callSign',
        containment: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        dropPtInd: true,
        emgInd: true,
        env: 'env',
        impactAouData: [0],
        impactAouType: 'impactAouType',
        impactLat: 0,
        impactLon: 0,
        impactTime: '2019-12-27T18:11:19.117Z',
        infoSource: 'infoSource',
        launchAouData: [0],
        launchAouType: 'launchAouType',
        launchLat: 0,
        launchLon: 0,
        launchTime: '2019-12-27T18:11:19.117Z',
        lostTrkInd: true,
        msgCreateDate: '2019-12-27T18:11:19.117Z',
        msgSubType: 'msgSubType',
        msgType: 'msgType',
        mslStatus: 'mslStatus',
        muidSrc: 'muidSrc',
        muidSrcTrk: 'muidSrcTrk',
        name: 'name',
        objAct: 'objAct',
        objIdent: 'objIdent',
        objPlat: 'objPlat',
        objType: 'objType',
        objTypeConf: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        parentTrackId: 'parentTrackId',
        polarSingLocLat: 0,
        polarSingLocLon: 0,
        senMode: 'senMode',
        spaceAmp: 'spaceAmp',
        spaceAmpConf: 0,
        spaceSpecType: 'spaceSpecType',
        trackId: 'trackId',
        trkConf: 0,
        trkQual: 0,
        vectors: [
          {
            epoch: '2019-12-27T18:11:19.117Z',
            accel: [0],
            confidence: 0,
            course: 0,
            cov: [0],
            covReferenceFrame: 'covReferenceFrame',
            flightAz: 0,
            idSensor: 'idSensor',
            object: 'object',
            origSensorId: 'origSensorId',
            pos: [0],
            quat: [0],
            referenceFrame: 'referenceFrame',
            spd: 0,
            status: 'status',
            timeSource: 'timeSource',
            type: 'type',
            vectorAlt: 0,
            vectorLat: 0,
            vectorLon: 0,
            vel: [0],
          },
        ],
      },
    ]);
  });
});
