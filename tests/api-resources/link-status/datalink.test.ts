// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datalink', () => {
  test('create: only required params', async () => {
    const responsePromise = client.linkStatus.datalink.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.linkStatus.datalink.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      opExName: 'DESERT WIND',
      originator: 'USCENTCOM',
      source: 'Bluestaq',
      startTime: '2024-01-07T13:55:43.123Z',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      ackInstUnits: ['AOC EXT 2345', '317 AW'],
      ackReq: true,
      altDiff: 20,
      canxId: 'ABSTAT',
      canxOriginator: '505 AOC',
      canxSerialNum: 'ABC1234567',
      canxSICs: ['RDU', 'X234BS'],
      canxSpecialNotation: 'PASEP',
      canxTs: '2024-01-07T13:55:43.123Z',
      classReasons: ['15C', '15D'],
      classSource: 'USJFCOM EXORD SOLID WASTE 98',
      consecDecorr: 3,
      courseDiff: 60,
      decExemptCodes: ['X1', 'X2'],
      decInstDates: ['AT EXERCISE ENDEX', 'DATE:25NOV1997'],
      decorrWinMult: 2,
      geoDatum: 'EUR-T',
      jreCallSign: 'CHARLIE ONE',
      jreDetails: 'JRE details',
      jrePriAdd: 71777,
      jreSecAdd: 77771,
      jreUnitDes: 'CVN-72',
      maxGeoPosQual: 12,
      maxTrackQual: 12,
      mgmtCode: 'VICTOR',
      mgmtCodeMeaning: 'ORBIT AT POINT BRAVO',
      minGeoPosQual: 3,
      minTrackQual: 6,
      month: 'OCT',
      multiDuty: [
        {
          duty: 'SICO',
          dutyTeleFreqNums: ['TEL:804-555-4142', 'TEL:804-867-5309'],
          multiDutyVoiceCoord: [
            {
              multiCommPri: 'P',
              multiFreqDes: 'ST300A',
              multiTeleFreqNums: ['TEL:804-555-4142', 'TEL:804-867-5309'],
              multiVoiceNetDes: 'VPN',
            },
          ],
          name: 'POPOVICH',
          rank: 'LCDR',
          unitDes: 'SHIP:STENNIS',
        },
      ],
      nonLinkUnitDes: ['CS:GRAY GHOST', 'CS:WHITE WHALE'],
      opExInfo: 'CONTROL',
      opExInfoAlt: 'ORANGE',
      ops: [
        {
          linkDetails: 'Link details',
          linkName: 'Link-16',
          linkStartTime: '2024-01-07T13:55:43.123Z',
          linkStopTime: '2024-01-08T13:55:43.123Z',
          linkStopTimeMod: 'AFTER',
        },
      ],
      origin: 'THIRD_PARTY_DATASOURCE',
      planOrigNum: 'SACEUR 106',
      pocCallSign: '4077 MASH',
      pocLat: 45.23,
      pocLocName: 'CAMP SWAMPY',
      pocLon: 179.1,
      pocName: 'F. BURNS',
      pocNums: ['TEL:804-555-4142', 'TEL:804-867-5309'],
      pocRank: 'MAJ',
      qualifier: 'CHG',
      qualSN: 1,
      references: [
        {
          refOriginator: 'CENTCOM',
          refSerialId: 'A',
          refSerialNum: '1402001',
          refSICs: ['RDU', 'C-123-92'],
          refSpecialNotation: 'NOTAL',
          refTs: '2024-01-07T13:55:43.123Z',
          refType: 'ABSTAT',
        },
      ],
      refPoints: [
        {
          effEventTime: '2024-01-08T13:55:43.123Z',
          refDes: 'L5',
          refLat: 45.23,
          refLocName: 'FORT BRAGG',
          refLon: 179.1,
          refPointType: 'DLRP',
        },
      ],
      remarks: [{ text: 'Example data link remarks', type: 'CONTINGENCY PROCEDURES' }],
      resTrackQual: 3,
      serialNum: '1201003',
      specTracks: [{ specTrackNum: '12345', specTrackNumDesc: 'SAM SITE CHARLIE' }],
      speedDiff: 50,
      stopTime: '2024-01-08T13:55:43.123Z',
      stopTimeMod: 'AFTER',
      sysDefaultCode: 'MAN',
      trackNumBlockLLs: [1234, 2345],
      trackNumBlocks: ['0200-0300', '0400-4412'],
      voiceCoord: [
        {
          commPri: 'P',
          freqDes: 'ST300A',
          teleFreqNums: ['TEL:804-555-4142', 'TEL:804-867-5309'],
          voiceNetDes: 'VPN',
        },
      ],
      winSizeMin: 1,
      winSizeMult: 1.5,
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

  test('fileCreate: only required params', async () => {
    const responsePromise = client.linkStatus.datalink.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        opExName: 'DESERT WIND',
        originator: 'USCENTCOM',
        source: 'Bluestaq',
        startTime: '2024-01-07T13:55:43.123Z',
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

  test('fileCreate: required and optional params', async () => {
    const response = await client.linkStatus.datalink.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        opExName: 'DESERT WIND',
        originator: 'USCENTCOM',
        source: 'Bluestaq',
        startTime: '2024-01-07T13:55:43.123Z',
        id: '026dd511-8ba5-47d3-9909-836149f87686',
        ackInstUnits: ['AOC EXT 2345', '317 AW'],
        ackReq: true,
        altDiff: 20,
        canxId: 'ABSTAT',
        canxOriginator: '505 AOC',
        canxSerialNum: 'ABC1234567',
        canxSICs: ['RDU', 'X234BS'],
        canxSpecialNotation: 'PASEP',
        canxTs: '2024-01-07T13:55:43.123Z',
        classReasons: ['15C', '15D'],
        classSource: 'USJFCOM EXORD SOLID WASTE 98',
        consecDecorr: 3,
        courseDiff: 60,
        decExemptCodes: ['X1', 'X2'],
        decInstDates: ['AT EXERCISE ENDEX', 'DATE:25NOV1997'],
        decorrWinMult: 2,
        geoDatum: 'EUR-T',
        jreCallSign: 'CHARLIE ONE',
        jreDetails: 'JRE details',
        jrePriAdd: 71777,
        jreSecAdd: 77771,
        jreUnitDes: 'CVN-72',
        maxGeoPosQual: 12,
        maxTrackQual: 12,
        mgmtCode: 'VICTOR',
        mgmtCodeMeaning: 'ORBIT AT POINT BRAVO',
        minGeoPosQual: 3,
        minTrackQual: 6,
        month: 'OCT',
        multiDuty: [
          {
            duty: 'SICO',
            dutyTeleFreqNums: ['TEL:804-555-4142', 'TEL:804-867-5309'],
            multiDutyVoiceCoord: [
              {
                multiCommPri: 'P',
                multiFreqDes: 'ST300A',
                multiTeleFreqNums: ['TEL:804-555-4142', 'TEL:804-867-5309'],
                multiVoiceNetDes: 'VPN',
              },
            ],
            name: 'POPOVICH',
            rank: 'LCDR',
            unitDes: 'SHIP:STENNIS',
          },
        ],
        nonLinkUnitDes: ['CS:GRAY GHOST', 'CS:WHITE WHALE'],
        opExInfo: 'CONTROL',
        opExInfoAlt: 'ORANGE',
        ops: [
          {
            linkDetails: 'Link details',
            linkName: 'Link-16',
            linkStartTime: '2024-01-07T13:55:43.123Z',
            linkStopTime: '2024-01-08T13:55:43.123Z',
            linkStopTimeMod: 'AFTER',
          },
        ],
        origin: 'THIRD_PARTY_DATASOURCE',
        planOrigNum: 'SACEUR 106',
        pocCallSign: '4077 MASH',
        pocLat: 45.23,
        pocLocName: 'CAMP SWAMPY',
        pocLon: 179.1,
        pocName: 'F. BURNS',
        pocNums: ['TEL:804-555-4142', 'TEL:804-867-5309'],
        pocRank: 'MAJ',
        qualifier: 'CHG',
        qualSN: 1,
        references: [
          {
            refOriginator: 'CENTCOM',
            refSerialId: 'A',
            refSerialNum: '1402001',
            refSICs: ['RDU', 'C-123-92'],
            refSpecialNotation: 'NOTAL',
            refTs: '2024-01-07T13:55:43.123Z',
            refType: 'ABSTAT',
          },
        ],
        refPoints: [
          {
            effEventTime: '2024-01-08T13:55:43.123Z',
            refDes: 'L5',
            refLat: 45.23,
            refLocName: 'FORT BRAGG',
            refLon: 179.1,
            refPointType: 'DLRP',
          },
        ],
        remarks: [{ text: 'Example data link remarks', type: 'CONTINGENCY PROCEDURES' }],
        resTrackQual: 3,
        serialNum: '1201003',
        specTracks: [{ specTrackNum: '12345', specTrackNumDesc: 'SAM SITE CHARLIE' }],
        speedDiff: 50,
        stopTime: '2024-01-08T13:55:43.123Z',
        stopTimeMod: 'AFTER',
        sysDefaultCode: 'MAN',
        trackNumBlockLLs: [1234, 2345],
        trackNumBlocks: ['0200-0300', '0400-4412'],
        voiceCoord: [
          {
            commPri: 'P',
            freqDes: 'ST300A',
            teleFreqNums: ['TEL:804-555-4142', 'TEL:804-867-5309'],
            voiceNetDes: 'VPN',
          },
        ],
        winSizeMin: 1,
        winSizeMult: 1.5,
      },
    ]);
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
