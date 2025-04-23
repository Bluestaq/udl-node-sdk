// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airTaskingOrders', () => {
  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.airOperations.airTaskingOrders.unvalidatedPublish({
      body: [
        {
          beginTs: '2023-10-25T12:00:00.123Z',
          classificationMarking: 'U',
          dataMode: 'TEST',
          opExerName: 'DESERT WIND',
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
    const response = await client.airOperations.airTaskingOrders.unvalidatedPublish({
      body: [
        {
          beginTs: '2023-10-25T12:00:00.123Z',
          classificationMarking: 'U',
          dataMode: 'TEST',
          opExerName: 'DESERT WIND',
          source: 'Bluestaq',
          id: 'POI-ID',
          ackReqInd: 'YES',
          ackUnitInstructions: 'INST:45TS',
          acMsnTasking: [
            {
              countryCode: 'US',
              taskedService: 'A',
              unitDesignator: 'AMPHIB5DIV',
              acMsnLocSeg: [
                {
                  startTime: '2021-10-25T12:00:00.123Z',
                  airMsnPri: '1A',
                  alt: 210,
                  areaGeoRad: 1000,
                  endTime: '2021-10-25T12:00:00.123Z',
                  msnLocName: 'KLSV',
                  msnLocPtBarT: '330T-PT ALFA-50NM',
                  msnLocPtLat: 35.123,
                  msnLocPtLon: 79.01,
                  msnLocPtName: 'PT ALFA',
                },
              ],
              alertStatus: 30,
              amcMsnNum: 'AMC:JJXD123HA045',
              depLocLat: 35.123,
              depLocLon: 79.2354,
              depLocName: 'ICAO:KBIF',
              depLocUTM: '32WDL123123',
              depTime: '2021-10-25T12:00:00.123Z',
              indACTasking: [
                {
                  acftType: 'F35A',
                  callSign: 'EAGLE47',
                  iffSifMode1Code: '111',
                  iffSifMode2Code: '20147',
                  iffSifMode3Code: '30147',
                  juAddress: [12345, 65432],
                  link16CallSign: 'EE47',
                  numAcft: 2,
                  priConfigCode: '6A2W3',
                  secConfigCode: '2S2WG',
                  tacanChan: 123,
                },
              ],
              msnCommander: 'MC',
              msnNum: 'D123HA',
              pkgId: 'ZZ',
              priMsnType: 'CAS',
              rcvyLocLat: [48.8584, 40.7554],
              rcvyLocLon: [2.2945, -73.9866],
              rcvyLocName: ['ARRLOC:KBIF', 'ARRLOC:KDZ7'],
              rcvyLocUTM: ['ARRUTMO:32WDL123123', 'ARRUTMO:32WDL321321'],
              rcvyTime: ['2021-10-25T16:00:00.234Z', '2021-10-26T16:00:00.234Z'],
              resMsnInd: 'N',
              secMsnType: 'SEAD',
              unitLocName: 'ICAO:KXXQ',
            },
          ],
          endTs: '2023-10-27T12:00:00.123Z',
          genText: [{ text: 'FREE-TEXT', textInd: 'OPENING REMARKS' }],
          msgMonth: 'OCT',
          msgOriginator: 'USCENTCOM',
          msgQualifier: 'CHG',
          msgSN: 'ATO A',
          navalFltOps: [
            {
              shipName: 'USS WASP',
              fltOpStart: '2021-02-25T12:00:00.123Z',
              fltOpStop: '2021-02-25T12:00:00.123Z',
              schdLaunchRcvyTime: ['2021-02-25T12:00:00.123Z'],
            },
          ],
          origin: 'THIRD_PARTY_DATASOURCE',
        },
      ],
    });
  });
});
