// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trackdetails', () => {
  test('list: only required params', async () => {
    const responsePromise = client.trackdetails.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.trackdetails.list({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.trackdetails.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.trackdetails.count({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.trackdetails.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          lat: 19.88550102,
          lon: 46.74596844,
          source: 'Bluestaq',
          ts: '2021-02-25T12:00:00.123456Z',
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
    const response = await client.trackdetails.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          lat: 19.88550102,
          lon: 46.74596844,
          source: 'Bluestaq',
          ts: '2021-02-25T12:00:00.123456Z',
          id: 'TRACK-DETAILS-ID',
          acftSubType: 'SLBM',
          addInfo: 'Additional information',
          alert: 'TGT',
          alt: 153.01,
          angElev: 15.2,
          antennaRefDimensions: [50.1, 50.1, 20.1, 20.1],
          aouRptData: [34.3, 26.5, 1.2],
          aouRptType: 'ELLIPSE',
          appGrp: 'GP1',
          arrCargo: 'Freight',
          arrFlag: 'USA',
          arrPort: 'Lanshan',
          arrTime: '2021-02-25T12:00:00.123456Z',
          aton: 'Cardinal Mark N',
          avgSpd: 18.25,
          azCorrArcWidth: 71.76,
          azCorrCenterLine: 12.876,
          beNumber: 'ENC-123',
          boosting: false,
          burnoutAlt: 30567.452,
          callSign: 'Charlie',
          cargoType: 'Freight',
          cI: 'BB',
          containment: 97,
          coopLocInd: 'COOPERATIVE',
          course: 4.3580153,
          cpa: 500,
          depCargo: 'Freight',
          depFlag: 'USA',
          depPort: 'Lanshan',
          desCargo: 'Freight',
          desFlag: 'USA',
          destination: 'USCLE',
          disId: '7670',
          draught: 21.1,
          dropPtInd: false,
          dummy: false,
          ecefPos: [1.23, 2.35, 3.42],
          ecefVel: [1.23, 2.35, 3.42],
          elnot1: 'A123A',
          elnot2: 'A123B',
          emgInd: false,
          emitterName: 'RAY1500',
          env: 'LAND',
          errAreaOrient: 69.6,
          errGeoAreaSwitch: 'CIRCLE_ELLIPSE',
          errSemiIntAxis: 7010.882,
          errSemiMajElev: 168.8,
          eta: '2021-02-25T12:00:00.123456Z',
          etd: '2021-02-25T12:00:00.123456Z',
          evalRating: 'A1',
          feint: false,
          freq: 63.65,
          ftn: 'FTN',
          ftnCmd: 'TRUETT',
          ftnMsgTs: '2021-02-25T12:00:00.123456Z',
          harmonics: '8,12,4',
          hdng: 19.7,
          hq: false,
          hullNum: 'A30081',
          hullProf: 'Raised 1-23',
          identAmp: 'JOKER',
          iff: 'ID Mode',
          imon: 9015462,
          impactAouData: [34.3, 26.5, 1.2],
          impactAouType: 'ELLIPSE',
          impactLat: 19.88550102,
          impactLon: 46.74550102,
          impactTime: '2021-02-25T12:00:00.123456Z',
          infoSource: 'S1',
          installation: false,
          launchAouData: [34.3, 26.5, 1.2],
          launchAouType: 'ELLIPSE',
          launchLat: 19.88550102,
          launchLon: 46.74550102,
          launchTime: '2021-02-25T12:00:00.123456Z',
          length: 511.1,
          lostTrkInd: false,
          maneuverInd: 'POST_BOOST_NONE',
          maxFreq: 10324.53,
          midbCat: '20345',
          mil2525Bstr: 'SHP*S----------',
          mmsi: 304010417,
          msgType: 'PLATFORM',
          mslStatus: 'AT LAUNCH',
          muidSrc: 'MUID-SRC',
          muidSrcTrk: 'MUID-SRC-ID',
          name: 'TRACK-NAME',
          navStatus: 'Underway Using Engine',
          ntds: 'ZZ777',
          numBlades: 4,
          numShafts: 3,
          objAct: 'HOLDING',
          objIdent: 'FRIEND',
          objNat: 'USA',
          objPlat: 'WEAPON',
          objType: 'TRACKED',
          offPosInd: 'ON',
          origin: 'THIRD_PARTY_DATASOURCE',
          origXref: 'INT',
          oSuffix: 'AA125',
          pif: '0137',
          pin: 'E12345012',
          polarSingLocLat: 19.88550102,
          polarSingLocLon: 46.74550102,
          posDeviceType: 'GPS',
          prf: 17.65,
          pri: 56657.2238,
          propRPM: 8.2,
          propType: 'Diesel',
          pw: 1347.45,
          reduced: false,
          reinforced: false,
          rptArchived: false,
          rptChxref: 'INT',
          rtn: ['ex-a'],
          rtnCmd: 'YORKTOWN',
          rtnMsgTs: ['2021-02-25T12:00:00.123456Z'],
          rtnTrkState: 'Local_RTN',
          scanRate: 12.01,
          scanType: 'UNK',
          scn: 1474305,
          sconum: 'B45524',
          selfReport: false,
          sen: 'OTH',
          shipClass: 'Nimitz',
          shortName: 'COMMSCHECK',
          sourceUid: 'MCS',
          spaceAmp: 'NUCLEAR WARHEAD',
          spaceAmpConf: 6,
          spaceSpecType: 'SS-21_MOD_2_CRBM',
          spd: 15.03443,
          staffCmts: 'Staff Comments',
          sternType: 'Cruiser',
          taskForce: false,
          tcpa: '2021-02-25T12:00:00.123Z',
          tesEventId: '6217',
          tol: 4.1,
          tpk: 2.65,
          trkConf: 0.95,
          trkId: 'trkId',
          trkNum: 'trkNum',
          trkQual: 1,
          trkScope: 'OTH',
          trnspdrId: '11',
          trnspdrType: 'AFTS',
          vslWt: 3423.76,
          width: 24.1,
        },
      ],
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.trackdetails.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.trackdetails.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.trackdetails.tuple({
      columns: 'columns',
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });
});
