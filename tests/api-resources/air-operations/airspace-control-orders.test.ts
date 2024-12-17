// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airspaceControlOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airOperations.airspaceControlOrders.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        opExName: 'opExName',
        originator: 'originator',
        source: 'source',
        startTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.airOperations.airspaceControlOrders.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        opExName: 'opExName',
        originator: 'originator',
        source: 'source',
        startTime: '2019-12-27T18:11:19.117Z',
        id: 'id',
        acoComments: 'acoComments',
        acoSerialNum: 'acoSerialNum',
        airspaceControlMeansStatus: [
          {
            airspaceControlMeans: [
              {
                airspaceControlPoint: [
                  {
                    ctrlPtAltitude: 'ctrlPtAltitude',
                    ctrlPtLocation: 'ctrlPtLocation',
                    ctrlPtName: 'ctrlPtName',
                    ctrlPtType: 'ctrlPtType',
                  },
                ],
                airspaceTimePeriod: [
                  {
                    intDur: ['string'],
                    intFreq: ['string'],
                    timeEnd: 'timeEnd',
                    timeMode: 'timeMode',
                    timeStart: 'timeStart',
                  },
                ],
                bearing0: 0,
                bearing1: 0,
                cmId: 'cmId',
                cmShape: 'cmShape',
                cmType: 'cmType',
                cntrlAuth: 'cntrlAuth',
                cntrlAuthFreqs: ['string'],
                coord0: 'coord0',
                coord1: 'coord1',
                corrWayPoints: ['string'],
                effVDim: 'effVDim',
                freeText: 'freeText',
                genTextInd: 'genTextInd',
                geoDatumAlt: 'geoDatumAlt',
                link16Id: 'link16Id',
                orbitAlignment: 'orbitAlignment',
                polyCoord: ['string'],
                radMag0: 0,
                radMag1: 0,
                radMagUnit: 'radMagUnit',
                trackLeg: 0,
                transAltitude: 'transAltitude',
                usage: 'usage',
                width: 0,
                widthLeft: 0,
                widthRight: 0,
                widthUnit: 'widthUnit',
              },
            ],
            cmStat: 'cmStat',
            cmStatId: ['string'],
          },
        ],
        airspaceControlOrderReferences: [
          {
            refOriginator: 'refOriginator',
            refSerialNum: 'refSerialNum',
            refSICs: ['string'],
            refSId: 'refSId',
            refSpecialNotation: 'refSpecialNotation',
            refTs: '2019-12-27T18:11:19.117Z',
            refType: 'refType',
          },
        ],
        areaOfValidity: 'areaOfValidity',
        classReasons: ['string'],
        classSource: 'classSource',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        declassExemptionCodes: ['string'],
        downgradeInsDates: ['string'],
        geoDatum: 'geoDatum',
        month: 'month',
        opExInfo: 'opExInfo',
        opExInfoAlt: 'opExInfoAlt',
        origin: 'origin',
        origNetwork: 'origNetwork',
        planOrigNum: 'planOrigNum',
        qualifier: 'qualifier',
        qualSN: 0,
        rawFileURI: 'rawFileURI',
        serialNum: 'serialNum',
        sourceDL: 'sourceDL',
        stopQualifier: 'stopQualifier',
        stopTime: '2019-12-27T18:11:19.117Z',
        undLnkTrks: ['string'],
      },
    ]);
  });
});
