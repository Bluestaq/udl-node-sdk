// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emireport', () => {
  test('create: only required params', async () => {
    const responsePromise = client.emireport.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      isr: true,
      reportId: 'REPORT-ID',
      reportTime: '2025-01-07T21:47:40.438Z',
      reportType: 'SATCOM',
      requestAssist: true,
      source: 'Bluestaq',
      startTime: '2025-01-07T20:16:03.989Z',
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
    const response = await client.emireport.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      isr: true,
      reportId: 'REPORT-ID',
      reportTime: '2025-01-07T21:47:40.438Z',
      reportType: 'SATCOM',
      requestAssist: true,
      source: 'Bluestaq',
      startTime: '2025-01-07T20:16:03.989Z',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      actionsTaken: 'verified connections, cables and antenna pointing angles',
      affActivity: 'UPLINK',
      alt: 1750,
      aor: 'NORTHCOM',
      band: 'SHF',
      beamPattern: 'MAIN LOBE',
      channel: '10C-10CU',
      chanPirate: false,
      description: 'Interference on channel',
      dneImpact: 'Text description of the duration, nature and extent (DNE) of the impact.',
      emiType: 'BARRAGE',
      endTime: '2025-01-07T21:30:51.672Z',
      frequency: 1575.42,
      geoLocErrEllp: [1300, 700, 35],
      gpsEncrypted: false,
      gpsFreq: 'L1',
      highAffectedFrequency: 1725,
      intercept: false,
      interceptLang: 'ENGLISH',
      interceptType: 'VOICE',
      intSrcAmplitude: 0.275,
      intSrcBandwidth: 30,
      intSrcCentFreq: 485.7,
      intSrcEncrypted: false,
      intSrcModulation: 'FSK',
      isrCollectionImpact: false,
      killBox: '7F9SW',
      lat: 38.7375,
      link: 'SPOT-21',
      lon: -104.7889,
      milGrid: '4QFJ12345678',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: '25724',
      persistence: 'CONTINUOUS',
      platform: 'CVN-78',
      rcvrDemod: 'FSK',
      rcvrGain: 23.7,
      rcvrLocation: 'FORT CARSON GARAGE',
      rcvrType: 'OMNI',
      respService: 'ARMY',
      satcomPriority: 'HIGH',
      satDownlinkFrequency: 47432.5,
      satDownlinkPolarization: 'V',
      satName: 'MILSTAR DFS-3',
      satNo: 25724,
      satTransponderId: '36097-8433-10C',
      satUplinkFrequency: 44532.1,
      satUplinkPolarization: 'H',
      status: 'INITIAL',
      supportedISRRole: 'IMAGERY',
      system: 'RADIO',
      tags: ['TAG1', 'TAG2'],
      transactionId: 'TRANSACTION-ID',
      victimAltCountry: 'US',
      victimCountryCode: 'US',
      victimFuncImpacts: 'C2',
      victimPOCMail: 'bob@jammer.com',
      victimPOCName: 'Robert Smith',
      victimPOCPhone: '7198675309',
      victimPOCUnit: '4th Engineering Battalion',
      victimReaction: 'TROUBLESHOOT',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.emireport.list({ reportTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.emireport.list({
      reportTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.emireport.count({ reportTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.emireport.count({
      reportTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.emireport.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          isr: true,
          reportId: 'REPORT-ID',
          reportTime: '2025-01-07T21:47:40.438Z',
          reportType: 'SATCOM',
          requestAssist: true,
          source: 'Bluestaq',
          startTime: '2025-01-07T20:16:03.989Z',
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
    const response = await client.emireport.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          isr: true,
          reportId: 'REPORT-ID',
          reportTime: '2025-01-07T21:47:40.438Z',
          reportType: 'SATCOM',
          requestAssist: true,
          source: 'Bluestaq',
          startTime: '2025-01-07T20:16:03.989Z',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          actionsTaken: 'verified connections, cables and antenna pointing angles',
          affActivity: 'UPLINK',
          alt: 1750,
          aor: 'NORTHCOM',
          band: 'SHF',
          beamPattern: 'MAIN LOBE',
          channel: '10C-10CU',
          chanPirate: false,
          description: 'Interference on channel',
          dneImpact: 'Text description of the duration, nature and extent (DNE) of the impact.',
          emiType: 'BARRAGE',
          endTime: '2025-01-07T21:30:51.672Z',
          frequency: 1575.42,
          geoLocErrEllp: [1300, 700, 35],
          gpsEncrypted: false,
          gpsFreq: 'L1',
          highAffectedFrequency: 1725,
          intercept: false,
          interceptLang: 'ENGLISH',
          interceptType: 'VOICE',
          intSrcAmplitude: 0.275,
          intSrcBandwidth: 30,
          intSrcCentFreq: 485.7,
          intSrcEncrypted: false,
          intSrcModulation: 'FSK',
          isrCollectionImpact: false,
          killBox: '7F9SW',
          lat: 38.7375,
          link: 'SPOT-21',
          lon: -104.7889,
          milGrid: '4QFJ12345678',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: '25724',
          persistence: 'CONTINUOUS',
          platform: 'CVN-78',
          rcvrDemod: 'FSK',
          rcvrGain: 23.7,
          rcvrLocation: 'FORT CARSON GARAGE',
          rcvrType: 'OMNI',
          respService: 'ARMY',
          satcomPriority: 'HIGH',
          satDownlinkFrequency: 47432.5,
          satDownlinkPolarization: 'V',
          satName: 'MILSTAR DFS-3',
          satNo: 25724,
          satTransponderId: '36097-8433-10C',
          satUplinkFrequency: 44532.1,
          satUplinkPolarization: 'H',
          status: 'INITIAL',
          supportedISRRole: 'IMAGERY',
          system: 'RADIO',
          tags: ['TAG1', 'TAG2'],
          transactionId: 'TRANSACTION-ID',
          victimAltCountry: 'US',
          victimCountryCode: 'US',
          victimFuncImpacts: 'C2',
          victimPOCMail: 'bob@jammer.com',
          victimPOCName: 'Robert Smith',
          victimPOCPhone: '7198675309',
          victimPOCUnit: '4th Engineering Battalion',
          victimReaction: 'TROUBLESHOOT',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.emireport.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emireport.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.emireport.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.emireport.tuple({
      columns: 'columns',
      reportTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.emireport.tuple({
      columns: 'columns',
      reportTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.emireport.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          isr: true,
          reportId: 'REPORT-ID',
          reportTime: '2025-01-07T21:47:40.438Z',
          reportType: 'SATCOM',
          requestAssist: true,
          source: 'Bluestaq',
          startTime: '2025-01-07T20:16:03.989Z',
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
    const response = await client.emireport.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          isr: true,
          reportId: 'REPORT-ID',
          reportTime: '2025-01-07T21:47:40.438Z',
          reportType: 'SATCOM',
          requestAssist: true,
          source: 'Bluestaq',
          startTime: '2025-01-07T20:16:03.989Z',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          actionsTaken: 'verified connections, cables and antenna pointing angles',
          affActivity: 'UPLINK',
          alt: 1750,
          aor: 'NORTHCOM',
          band: 'SHF',
          beamPattern: 'MAIN LOBE',
          channel: '10C-10CU',
          chanPirate: false,
          description: 'Interference on channel',
          dneImpact: 'Text description of the duration, nature and extent (DNE) of the impact.',
          emiType: 'BARRAGE',
          endTime: '2025-01-07T21:30:51.672Z',
          frequency: 1575.42,
          geoLocErrEllp: [1300, 700, 35],
          gpsEncrypted: false,
          gpsFreq: 'L1',
          highAffectedFrequency: 1725,
          intercept: false,
          interceptLang: 'ENGLISH',
          interceptType: 'VOICE',
          intSrcAmplitude: 0.275,
          intSrcBandwidth: 30,
          intSrcCentFreq: 485.7,
          intSrcEncrypted: false,
          intSrcModulation: 'FSK',
          isrCollectionImpact: false,
          killBox: '7F9SW',
          lat: 38.7375,
          link: 'SPOT-21',
          lon: -104.7889,
          milGrid: '4QFJ12345678',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: '25724',
          persistence: 'CONTINUOUS',
          platform: 'CVN-78',
          rcvrDemod: 'FSK',
          rcvrGain: 23.7,
          rcvrLocation: 'FORT CARSON GARAGE',
          rcvrType: 'OMNI',
          respService: 'ARMY',
          satcomPriority: 'HIGH',
          satDownlinkFrequency: 47432.5,
          satDownlinkPolarization: 'V',
          satName: 'MILSTAR DFS-3',
          satNo: 25724,
          satTransponderId: '36097-8433-10C',
          satUplinkFrequency: 44532.1,
          satUplinkPolarization: 'H',
          status: 'INITIAL',
          supportedISRRole: 'IMAGERY',
          system: 'RADIO',
          tags: ['TAG1', 'TAG2'],
          transactionId: 'TRANSACTION-ID',
          victimAltCountry: 'US',
          victimCountryCode: 'US',
          victimFuncImpacts: 'C2',
          victimPOCMail: 'bob@jammer.com',
          victimPOCName: 'Robert Smith',
          victimPOCPhone: '7198675309',
          victimPOCUnit: '4th Engineering Battalion',
          victimReaction: 'TROUBLESHOOT',
        },
      ],
    });
  });
});
