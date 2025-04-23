// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airspaceControlOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airspaceControlOrders.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      opExName: 'DESERT WIND',
      originator: 'USCENTCOM',
      source: 'Bluestaq',
      startTime: '2024-01-07T13:55:43.123Z',
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
    const response = await client.airspaceControlOrders.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      opExName: 'DESERT WIND',
      originator: 'USCENTCOM',
      source: 'Bluestaq',
      startTime: '2024-01-07T13:55:43.123Z',
      id: 'c44b0a80-9fef-63d9-6267-79037fb93e4c',
      acoComments: 'CHOKE POINTS',
      acoSerialNum: '27B',
      airspaceControlMeansStatus: [
        {
          airspaceControlMeans: [
            {
              airspaceControlPoint: [
                {
                  ctrlPtAltitude: 'BRFL:MSL-FL230',
                  ctrlPtLocation: '203632N0594256E',
                  ctrlPtName: 'APPLE',
                  ctrlPtType: 'CP',
                },
              ],
              airspaceTimePeriod: [
                {
                  intDur: ['65WK'],
                  intFreq: ['WEEKLY'],
                  timeEnd: '141325ZFEB2002',
                  timeMode: 'DISCRETE',
                  timeStart: '141325ZFEB2002',
                },
              ],
              bearing0: 330,
              bearing1: 160,
              cmId: 'DESIG:C34',
              cmShape: 'POLYARC',
              cmType: 'cmType',
              cntrlAuth: 'RHEIN MAIN CP',
              cntrlAuthFreqs: ['125.25MHZ'],
              coord0: '152345N0505657E',
              coord1: '1523N05057E',
              corrWayPoints: ['POB', 'RDU', 'IAD'],
              effVDim: 'BRRA:GL-100AGL',
              freeText: '1. CAPACITY: MDM TK, 50 VEHICLE CONVOY. 2. CHOKE POINTS: EXIT 5',
              genTextInd: 'SITUATION',
              geoDatumAlt: 'NAR',
              link16Id: 'F3356',
              orbitAlignment: 'C',
              polyCoord: ['203632N0594256E', '155000N0594815E', '155000N0591343E'],
              radMag0: 30.04,
              radMag1: 50.12,
              radMagUnit: 'NM',
              trackLeg: 99,
              transAltitude: '18000FT',
              usage: 'usage',
              width: 15.6,
              widthLeft: 5.2,
              widthRight: 10.4,
              widthUnit: 'KM',
            },
          ],
          cmStat: 'ADD',
          cmStatId: ['DESIGN:B35', 'NAME:ERMA', 'RANG:C21-C25'],
        },
      ],
      airspaceControlOrderReferences: [
        {
          refOriginator: 'SHAPE',
          refSerialNum: '100',
          refSICs: ['RCA', 'FN:4503B'],
          refSId: 'A',
          refSpecialNotation: 'NOTAL',
          refTs: '2024-01-07T13:55:43.123Z',
          refType: 'NBC1',
        },
      ],
      areaOfValidity: 'FORT BRAGG',
      classReasons: ['15C', '10C'],
      classSource: 'ORIG:USJFCOM',
      declassExemptionCodes: ['X1', 'X2'],
      downgradeInsDates: ['NST:AT EXERCISE ENDEX', 'DATE:25NOV1997'],
      geoDatum: 'EUR-T',
      month: 'OCT',
      opExInfo: 'CONTROL',
      opExInfoAlt: 'ORANGE',
      origin: 'THIRD_PARTY_DATASOURCE',
      planOrigNum: 'SACEUR 106',
      qualifier: 'CHG',
      qualSN: 1,
      serialNum: '1201003',
      stopQualifier: 'AFTER',
      stopTime: '2024-01-08T13:55:43.123Z',
      undLnkTrks: ['A2467', 'A3466', 'AA232'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.airspaceControlOrders.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.airspaceControlOrders.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.airspaceControlOrders.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.airspaceControlOrders.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          opExName: 'DESERT WIND',
          originator: 'USCENTCOM',
          source: 'Bluestaq',
          startTime: '2024-01-07T13:55:43.123Z',
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
    const response = await client.airspaceControlOrders.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          opExName: 'DESERT WIND',
          originator: 'USCENTCOM',
          source: 'Bluestaq',
          startTime: '2024-01-07T13:55:43.123Z',
          id: 'c44b0a80-9fef-63d9-6267-79037fb93e4c',
          acoComments: 'CHOKE POINTS',
          acoSerialNum: '27B',
          airspaceControlMeansStatus: [
            {
              airspaceControlMeans: [
                {
                  airspaceControlPoint: [
                    {
                      ctrlPtAltitude: 'BRFL:MSL-FL230',
                      ctrlPtLocation: '203632N0594256E',
                      ctrlPtName: 'APPLE',
                      ctrlPtType: 'CP',
                    },
                  ],
                  airspaceTimePeriod: [
                    {
                      intDur: ['65WK'],
                      intFreq: ['WEEKLY'],
                      timeEnd: '141325ZFEB2002',
                      timeMode: 'DISCRETE',
                      timeStart: '141325ZFEB2002',
                    },
                  ],
                  bearing0: 330,
                  bearing1: 160,
                  cmId: 'DESIG:C34',
                  cmShape: 'POLYARC',
                  cmType: 'cmType',
                  cntrlAuth: 'RHEIN MAIN CP',
                  cntrlAuthFreqs: ['125.25MHZ'],
                  coord0: '152345N0505657E',
                  coord1: '1523N05057E',
                  corrWayPoints: ['POB', 'RDU', 'IAD'],
                  effVDim: 'BRRA:GL-100AGL',
                  freeText: '1. CAPACITY: MDM TK, 50 VEHICLE CONVOY. 2. CHOKE POINTS: EXIT 5',
                  genTextInd: 'SITUATION',
                  geoDatumAlt: 'NAR',
                  link16Id: 'F3356',
                  orbitAlignment: 'C',
                  polyCoord: ['203632N0594256E', '155000N0594815E', '155000N0591343E'],
                  radMag0: 30.04,
                  radMag1: 50.12,
                  radMagUnit: 'NM',
                  trackLeg: 99,
                  transAltitude: '18000FT',
                  usage: 'usage',
                  width: 15.6,
                  widthLeft: 5.2,
                  widthRight: 10.4,
                  widthUnit: 'KM',
                },
              ],
              cmStat: 'ADD',
              cmStatId: ['DESIGN:B35', 'NAME:ERMA', 'RANG:C21-C25'],
            },
          ],
          airspaceControlOrderReferences: [
            {
              refOriginator: 'SHAPE',
              refSerialNum: '100',
              refSICs: ['RCA', 'FN:4503B'],
              refSId: 'A',
              refSpecialNotation: 'NOTAL',
              refTs: '2024-01-07T13:55:43.123Z',
              refType: 'NBC1',
            },
          ],
          areaOfValidity: 'FORT BRAGG',
          classReasons: ['15C', '10C'],
          classSource: 'ORIG:USJFCOM',
          declassExemptionCodes: ['X1', 'X2'],
          downgradeInsDates: ['NST:AT EXERCISE ENDEX', 'DATE:25NOV1997'],
          geoDatum: 'EUR-T',
          month: 'OCT',
          opExInfo: 'CONTROL',
          opExInfoAlt: 'ORANGE',
          origin: 'THIRD_PARTY_DATASOURCE',
          planOrigNum: 'SACEUR 106',
          qualifier: 'CHG',
          qualSN: 1,
          serialNum: '1201003',
          stopQualifier: 'AFTER',
          stopTime: '2024-01-08T13:55:43.123Z',
          undLnkTrks: ['A2467', 'A3466', 'AA232'],
        },
      ],
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.airspaceControlOrders.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.airspaceControlOrders.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.airspaceControlOrders.tuple({ columns: 'columns' });
  });
});
