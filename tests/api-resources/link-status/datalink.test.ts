// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datalink', () => {
  test('create: only required params', async () => {
    const responsePromise = client.linkStatus.datalink.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      opExName: 'opExName',
      originator: 'originator',
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.linkStatus.datalink.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      opExName: 'opExName',
      originator: 'originator',
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
      id: 'id',
      ackInstUnits: ['string'],
      ackReq: true,
      altDiff: 0,
      canxId: 'canxId',
      canxOriginator: 'canxOriginator',
      canxSerialNum: 'canxSerialNum',
      canxSICs: ['string'],
      canxSpecialNotation: 'canxSpecialNotation',
      canxTs: '2019-12-27T18:11:19.117Z',
      classReasons: ['string'],
      classSource: 'classSource',
      consecDecorr: 0,
      courseDiff: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      decExemptCodes: ['string'],
      decInstDates: ['string'],
      decorrWinMult: 0,
      geoDatum: 'geoDatum',
      jreCallSign: 'jreCallSign',
      jreDetails: 'jreDetails',
      jrePriAdd: 0,
      jreSecAdd: 0,
      jreUnitDes: 'jreUnitDes',
      maxGeoPosQual: 0,
      maxTrackQual: 0,
      mgmtCode: 'mgmtCode',
      mgmtCodeMeaning: 'mgmtCodeMeaning',
      minGeoPosQual: 0,
      minTrackQual: 0,
      month: 'month',
      multiDuty: [
        {
          duty: 'duty',
          dutyTeleFreqNums: ['string'],
          multiDutyVoiceCoord: [
            {
              multiCommPri: 'multiCommPri',
              multiFreqDes: 'multiFreqDes',
              multiTeleFreqNums: ['string'],
              multiVoiceNetDes: 'multiVoiceNetDes',
            },
          ],
          name: 'name',
          rank: 'rank',
          unitDes: 'unitDes',
        },
      ],
      nonLinkUnitDes: ['string'],
      opExInfo: 'opExInfo',
      opExInfoAlt: 'opExInfoAlt',
      ops: [
        {
          linkDetails: 'linkDetails',
          linkName: 'linkName',
          linkStartTime: '2019-12-27T18:11:19.117Z',
          linkStopTime: '2019-12-27T18:11:19.117Z',
          linkStopTimeMod: 'linkStopTimeMod',
        },
      ],
      origin: 'origin',
      origNetwork: 'origNetwork',
      planOrigNum: 'planOrigNum',
      pocCallSign: 'pocCallSign',
      pocLat: 0,
      pocLocName: 'pocLocName',
      pocLon: 0,
      pocName: 'pocName',
      pocNums: ['string'],
      pocRank: 'pocRank',
      qualifier: 'qualifier',
      qualSN: 0,
      rawFileURI: 'rawFileURI',
      references: [
        {
          refOriginator: 'refOriginator',
          refSerialId: 'refSerialId',
          refSerialNum: 'refSerialNum',
          refSICs: ['string'],
          refSpecialNotation: 'refSpecialNotation',
          refTs: '2019-12-27T18:11:19.117Z',
          refType: 'refType',
        },
      ],
      refPoints: [
        {
          effEventTime: '2019-12-27T18:11:19.117Z',
          refDes: 'refDes',
          refLat: 0,
          refLocName: 'refLocName',
          refLon: 0,
          refPointType: 'refPointType',
        },
      ],
      remarks: [{ text: 'text', type: 'type' }],
      resTrackQual: 0,
      serialNum: 'serialNum',
      sourceDL: 'sourceDL',
      specTracks: [{ specTrackNum: 'specTrackNum', specTrackNumDesc: 'specTrackNumDesc' }],
      speedDiff: 0,
      stopTime: '2019-12-27T18:11:19.117Z',
      stopTimeMod: 'stopTimeMod',
      sysDefaultCode: 'sysDefaultCode',
      trackNumBlockLLs: [0],
      trackNumBlocks: ['string'],
      updatedAt: '2019-12-27T18:11:19.117Z',
      updatedBy: 'updatedBy',
      voiceCoord: [
        { commPri: 'commPri', freqDes: 'freqDes', teleFreqNums: ['string'], voiceNetDes: 'voiceNetDes' },
      ],
      winSizeMin: 0,
      winSizeMult: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.linkStatus.datalink.list({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.linkStatus.datalink.list({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.linkStatus.datalink.count({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.linkStatus.datalink.count({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('queryhelp', async () => {
    const responsePromise = client.linkStatus.datalink.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.linkStatus.datalink.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.linkStatus.datalink.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.linkStatus.datalink.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
