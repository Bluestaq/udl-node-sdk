// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource closelyspacedobjects', () => {
  test('create: only required params', async () => {
    const responsePromise = client.closelyspacedobjects.create({
      classificationMarking: 'U',
      csoState: 'POSSIBLE',
      dataMode: 'TEST',
      eventStartTime: '2019-12-27T18:11:19.117Z',
      eventType: 'RENDEZVOUS',
      source: 'Bluestaq',
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
    const response = await client.closelyspacedobjects.create({
      classificationMarking: 'U',
      csoState: 'POSSIBLE',
      dataMode: 'TEST',
      eventStartTime: '2019-12-27T18:11:19.117Z',
      eventType: 'RENDEZVOUS',
      source: 'Bluestaq',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      actorSVEpoch: '2019-12-27T18:11:19.117Z',
      analysisDuration: 60.1,
      analysisEpoch: '2019-12-27T18:11:19.117Z',
      compType: 'LONGITUDE',
      contextKeys: ['MsnID_DescLabel', 'msnVer', 'serVer'],
      contextValues: ['MissionID Descriptive Label text', '1', '001.9b'],
      csoDetails: [
        {
          objectEvent: 'MEAN',
          objectType: 'DELTA',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          apogee: 1.1,
          classificationMarking: 'U',
          dataMode: 'TEST',
          idCSO: 'CSO-ID',
          inclination: 45.1,
          longitude: 45.1,
          perigee: 1.1,
        },
      ],
      deltaVTol: 0.123,
      durationThreshold: 60.1,
      eventEndTime: '2019-12-27T18:11:19.117Z',
      eventIntervalCoverage: 22.3,
      extId: 'EXTERNAL-ID',
      hohmannDeltaV: 0.012,
      idActorSV: 'ACTOR-SV-ID',
      idOnOrbit1: 'ONORBIT1-ID',
      idOnOrbit2: 'ONORBIT2-ID',
      idTargetSV: 'TARGET-SV-ID',
      inclinationDeltaV: 0.012,
      indicationSource: 'Manually input',
      lonTol: 30.1,
      maxRange: 233.266,
      minPlaneSepAngle: 30.1,
      minPlaneSepEpoch: '2019-12-27T18:11:19.117Z',
      minRange: 0.5,
      minRangeAnalysisDuration: 60.1,
      minRangeEpoch: '2019-12-27T18:11:19.117Z',
      notes: 'FREE-TEXT',
      numSubIntervals: 0,
      orbitAlignDel: 12.3,
      orbitPlaneTol: 1.23,
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId1: 'ORIGONORBIT1-ID',
      origObjectId2: 'ORIGONORBIT2-ID',
      rangeThreshold: 0.1,
      rangeTol: 0.123,
      relPos: [0.12, 0.23, -0.12],
      relPosMag: 0.12,
      relSpeedMag: 1.23,
      relVel: [0.12, 0.23, -0.12],
      satNo1: 1,
      satNo2: 2,
      stationLimLonTol: 12.5,
      targetSVEpoch: '2019-12-27T18:11:19.117Z',
      totalDeltaV: 2.46,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.closelyspacedobjects.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.closelyspacedobjects.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.closelyspacedobjects.list({ eventStartTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.closelyspacedobjects.list({
      eventStartTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.closelyspacedobjects.count({ eventStartTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.closelyspacedobjects.count({
      eventStartTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.closelyspacedobjects.createBulk({
      body: [
        {
          classificationMarking: 'U',
          csoState: 'POSSIBLE',
          dataMode: 'TEST',
          eventStartTime: '2019-12-27T18:11:19.117Z',
          eventType: 'RENDEZVOUS',
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

  test('createBulk: required and optional params', async () => {
    const response = await client.closelyspacedobjects.createBulk({
      body: [
        {
          classificationMarking: 'U',
          csoState: 'POSSIBLE',
          dataMode: 'TEST',
          eventStartTime: '2019-12-27T18:11:19.117Z',
          eventType: 'RENDEZVOUS',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          actorSVEpoch: '2019-12-27T18:11:19.117Z',
          analysisDuration: 60.1,
          analysisEpoch: '2019-12-27T18:11:19.117Z',
          compType: 'LONGITUDE',
          contextKeys: ['MsnID_DescLabel', 'msnVer', 'serVer'],
          contextValues: ['MissionID Descriptive Label text', '1', '001.9b'],
          csoDetails: [
            {
              objectEvent: 'MEAN',
              objectType: 'DELTA',
              id: '026dd511-8ba5-47d3-9909-836149f87686',
              apogee: 1.1,
              classificationMarking: 'U',
              dataMode: 'TEST',
              idCSO: 'CSO-ID',
              inclination: 45.1,
              longitude: 45.1,
              perigee: 1.1,
            },
          ],
          deltaVTol: 0.123,
          durationThreshold: 60.1,
          eventEndTime: '2019-12-27T18:11:19.117Z',
          eventIntervalCoverage: 22.3,
          extId: 'EXTERNAL-ID',
          hohmannDeltaV: 0.012,
          idActorSV: 'ACTOR-SV-ID',
          idOnOrbit1: 'ONORBIT1-ID',
          idOnOrbit2: 'ONORBIT2-ID',
          idTargetSV: 'TARGET-SV-ID',
          inclinationDeltaV: 0.012,
          indicationSource: 'Manually input',
          lonTol: 30.1,
          maxRange: 233.266,
          minPlaneSepAngle: 30.1,
          minPlaneSepEpoch: '2019-12-27T18:11:19.117Z',
          minRange: 0.5,
          minRangeAnalysisDuration: 60.1,
          minRangeEpoch: '2019-12-27T18:11:19.117Z',
          notes: 'FREE-TEXT',
          numSubIntervals: 0,
          orbitAlignDel: 12.3,
          orbitPlaneTol: 1.23,
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId1: 'ORIGONORBIT1-ID',
          origObjectId2: 'ORIGONORBIT2-ID',
          rangeThreshold: 0.1,
          rangeTol: 0.123,
          relPos: [0.12, 0.23, -0.12],
          relPosMag: 0.12,
          relSpeedMag: 1.23,
          relVel: [0.12, 0.23, -0.12],
          satNo1: 1,
          satNo2: 2,
          stationLimLonTol: 12.5,
          targetSVEpoch: '2019-12-27T18:11:19.117Z',
          totalDeltaV: 2.46,
        },
      ],
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.closelyspacedobjects.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.closelyspacedobjects.tuple({
      columns: 'columns',
      eventStartTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.closelyspacedobjects.tuple({
      columns: 'columns',
      eventStartTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.closelyspacedobjects.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          csoState: 'POSSIBLE',
          dataMode: 'TEST',
          eventStartTime: '2019-12-27T18:11:19.117Z',
          eventType: 'RENDEZVOUS',
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
    const response = await client.closelyspacedobjects.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          csoState: 'POSSIBLE',
          dataMode: 'TEST',
          eventStartTime: '2019-12-27T18:11:19.117Z',
          eventType: 'RENDEZVOUS',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          actorSVEpoch: '2019-12-27T18:11:19.117Z',
          analysisDuration: 60.1,
          analysisEpoch: '2019-12-27T18:11:19.117Z',
          compType: 'LONGITUDE',
          contextKeys: ['MsnID_DescLabel', 'msnVer', 'serVer'],
          contextValues: ['MissionID Descriptive Label text', '1', '001.9b'],
          csoDetails: [
            {
              objectEvent: 'MEAN',
              objectType: 'DELTA',
              id: '026dd511-8ba5-47d3-9909-836149f87686',
              apogee: 1.1,
              classificationMarking: 'U',
              dataMode: 'TEST',
              idCSO: 'CSO-ID',
              inclination: 45.1,
              longitude: 45.1,
              perigee: 1.1,
            },
          ],
          deltaVTol: 0.123,
          durationThreshold: 60.1,
          eventEndTime: '2019-12-27T18:11:19.117Z',
          eventIntervalCoverage: 22.3,
          extId: 'EXTERNAL-ID',
          hohmannDeltaV: 0.012,
          idActorSV: 'ACTOR-SV-ID',
          idOnOrbit1: 'ONORBIT1-ID',
          idOnOrbit2: 'ONORBIT2-ID',
          idTargetSV: 'TARGET-SV-ID',
          inclinationDeltaV: 0.012,
          indicationSource: 'Manually input',
          lonTol: 30.1,
          maxRange: 233.266,
          minPlaneSepAngle: 30.1,
          minPlaneSepEpoch: '2019-12-27T18:11:19.117Z',
          minRange: 0.5,
          minRangeAnalysisDuration: 60.1,
          minRangeEpoch: '2019-12-27T18:11:19.117Z',
          notes: 'FREE-TEXT',
          numSubIntervals: 0,
          orbitAlignDel: 12.3,
          orbitPlaneTol: 1.23,
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId1: 'ORIGONORBIT1-ID',
          origObjectId2: 'ORIGONORBIT2-ID',
          rangeThreshold: 0.1,
          rangeTol: 0.123,
          relPos: [0.12, 0.23, -0.12],
          relPosMag: 0.12,
          relSpeedMag: 1.23,
          relVel: [0.12, 0.23, -0.12],
          satNo1: 1,
          satNo2: 2,
          stationLimLonTol: 12.5,
          targetSVEpoch: '2019-12-27T18:11:19.117Z',
          totalDeltaV: 2.46,
        },
      ],
    });
  });
});
