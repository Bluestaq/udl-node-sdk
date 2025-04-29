// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource isrCollections', () => {
  test('list: only required params', async () => {
    const responsePromise = client.isrCollections.list({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.isrCollections.list({
      createdAt: '2019-12-27',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.isrCollections.count({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.isrCollections.count({
      createdAt: '2019-12-27',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.isrCollections.createBulk({
      body: [{ classificationMarking: 'U', dataMode: 'TEST', source: 'Bluestaq' }],
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
    const response = await client.isrCollections.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          id: 'ISRCOLLECTION-ID',
          collectionRequirements: [
            {
              id: 'ISCRCOLLECTIONREQUIREMENTS',
              country: 'VE',
              cridNumbers: 'CRID',
              criticalTimes: {
                earliestImagingTime: '2021-01-19T01:01:15.001Z',
                latestImagingTime: '2021-01-19T01:11:15.001Z',
              },
              emphasized: false,
              exploitationRequirement: {
                id: 'ISRCOLLECTIONEXPLOITATIONREQUIREMENT',
                amplification: 'AMPLIFICATION',
                dissemination: 'EMAILS',
                eei: 'ESSENTIAL_ELEMENTS',
                poc: {
                  id: 'ISRCOLLECTIONPOC-ID',
                  callsign: 'CALLSIGN',
                  chatName: 'CHAT_NAME',
                  chatSystem: 'CHAT',
                  email: 'EMAIL',
                  name: 'NAME',
                  notes: 'NOTES',
                  phone: 'PHONE',
                  radioFrequency: 123.23,
                  unit: 'UNIT',
                },
                reportingCriteria: 'CRITERIA',
              },
              hash: 'HASH',
              intelDiscipline: 'Sig',
              isPrismCr: true,
              operation: 'NAME',
              priority: 20.23,
              reconSurvey: 'SURVEY_INFO',
              recordId: 'RECORD-ID',
              region: 'REGION',
              secondary: false,
              specialComGuidance: 'TEXT',
              start: '2021-01-19T01:01:15.001Z',
              stop: '2021-01-19T01:20:01.001Z',
              subregion: 'SUBREGION',
              supportedUnit: 'UNIT',
              targetList: ['string'],
              type: 'COLLECTION_TYPE',
            },
          ],
          idexVersion: 2,
          missionAOR: 'Kandahar',
          missionCollectionArea: 'Example collection area',
          missionCountry: 'US',
          missionEmphasis: 'Mission emphasis',
          missionId: 'myTask-2020-04-23T00:00:00.000Z',
          missionJoa: 'Operation area',
          missionOperation: 'OP-HONEY-BADGER',
          missionPrimaryIntelDiscipline: 'Sig',
          missionPrimarySubCategory: 'FMV',
          missionPriority: 1,
          missionRegion: 'Example Region',
          missionRole: 'Targeting of Lead Vehicle',
          missionSecondaryIntelDiscipline: 'Intelligence_2',
          missionSecondarySubCategory: 'Convoy',
          missionStartPointLat: 45.23,
          missionStartPointLong: 80.23,
          missionSubRegion: 'Example Subregion',
          missionSupportedUnit: 'ENVOYS',
          missionSyncMatrixBin: 'MATRIX',
          name: 'Example mission name',
          origin: 'THIRD_PARTY_DATASOURCE',
          taskings: [
            {
              id: 'ISRCOLLECTIONTASKINGS-ID',
              collectionPeriods: {
                actual: [
                  {
                    id: 'ISRCOLLECTIONACTUAL-ID',
                    start: '2021-01-19T01:01:15.001Z',
                    stop: '2021-01-19T01:01:15.001Z',
                  },
                ],
                planned: {
                  additional: [
                    {
                      id: 'ISRCOLLECTIONADDITIONAL',
                      start: '2021-01-19T01:01:15.001Z',
                      stop: '2021-01-19T01:01:15.001Z',
                    },
                  ],
                  start: '2021-01-19T01:01:15.001Z',
                  stop: '2021-01-19T01:01:15.001Z',
                },
              },
              collectionType: 'Simultaneous',
              eightLine: 'eightLine',
              specialComGuidance: 'TEXT',
              sroTrack: 'SRO',
              taskingAOR: 'Kandahar',
              taskingCollectionArea: 'AREA',
              taskingCollectionRequirements: [
                {
                  id: 'ISCRCOLLECTIONREQUIREMENTS',
                  country: 'VE',
                  cridNumbers: 'CRID',
                  criticalTimes: {
                    earliestImagingTime: '2021-01-19T01:01:15.001Z',
                    latestImagingTime: '2021-01-19T01:11:15.001Z',
                  },
                  emphasized: false,
                  exploitationRequirement: {
                    id: 'ISRCOLLECTIONEXPLOITATIONREQUIREMENT',
                    amplification: 'AMPLIFICATION',
                    dissemination: 'EMAILS',
                    eei: 'ESSENTIAL_ELEMENTS',
                    poc: {
                      id: 'ISRCOLLECTIONPOC-ID',
                      callsign: 'CALLSIGN',
                      chatName: 'CHAT_NAME',
                      chatSystem: 'CHAT',
                      email: 'EMAIL',
                      name: 'NAME',
                      notes: 'NOTES',
                      phone: 'PHONE',
                      radioFrequency: 123.23,
                      unit: 'UNIT',
                    },
                    reportingCriteria: 'CRITERIA',
                  },
                  hash: 'HASH',
                  intelDiscipline: 'Sig',
                  isPrismCr: true,
                  operation: 'NAME',
                  priority: 20.23,
                  reconSurvey: 'SURVEY_INFO',
                  recordId: 'RECORD-ID',
                  region: 'REGION',
                  secondary: false,
                  specialComGuidance: 'TEXT',
                  start: '2021-01-19T01:01:15.001Z',
                  stop: '2021-01-19T01:20:01.001Z',
                  subregion: 'SUBREGION',
                  supportedUnit: 'UNIT',
                  targetList: ['string'],
                  type: 'COLLECTION_TYPE',
                },
              ],
              taskingCountry: 'CODE',
              taskingEmphasis: 'EMPHASIS',
              taskingJoa: 'AREA',
              taskingOperation: 'OP-HONEY-BADGER',
              taskingPrimaryIntelDiscipline: 'Sig',
              taskingPrimarySubCategory: 'FMV',
              taskingPriority: 10.23,
              taskingRegion: 'REGION',
              taskingRetaskTime: '2021-01-19T01:01:15.001Z',
              taskingRole: 'Track Lead Vehicle',
              taskingSecondaryIntelDiscipline: 'Intelligence_2',
              taskingSecondarySubCategory: 'Convoy',
              taskingStartPointLat: 45.23,
              taskingStartPointLong: 45.23,
              taskingSubRegion: 'SUBREGION',
              taskingSupportedUnit: 'ENVOYS',
              taskingSyncMatrixBin: 'MATRIX',
              type: 'Deliberate',
            },
          ],
          transit: [{ id: 'ISRCOLLECTIONTRANSIT-ID', base: 'ENVOYS', duration: 200.23 }],
        },
      ],
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.isrCollections.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.isrCollections.tuple({ columns: 'columns', createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.isrCollections.tuple({
      columns: 'columns',
      createdAt: '2019-12-27',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.isrCollections.unvalidatedPublish({
      body: [{ classificationMarking: 'U', dataMode: 'TEST', source: 'Bluestaq' }],
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
    const response = await client.isrCollections.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          id: 'ISRCOLLECTION-ID',
          collectionRequirements: [
            {
              id: 'ISCRCOLLECTIONREQUIREMENTS',
              country: 'VE',
              cridNumbers: 'CRID',
              criticalTimes: {
                earliestImagingTime: '2021-01-19T01:01:15.001Z',
                latestImagingTime: '2021-01-19T01:11:15.001Z',
              },
              emphasized: false,
              exploitationRequirement: {
                id: 'ISRCOLLECTIONEXPLOITATIONREQUIREMENT',
                amplification: 'AMPLIFICATION',
                dissemination: 'EMAILS',
                eei: 'ESSENTIAL_ELEMENTS',
                poc: {
                  id: 'ISRCOLLECTIONPOC-ID',
                  callsign: 'CALLSIGN',
                  chatName: 'CHAT_NAME',
                  chatSystem: 'CHAT',
                  email: 'EMAIL',
                  name: 'NAME',
                  notes: 'NOTES',
                  phone: 'PHONE',
                  radioFrequency: 123.23,
                  unit: 'UNIT',
                },
                reportingCriteria: 'CRITERIA',
              },
              hash: 'HASH',
              intelDiscipline: 'Sig',
              isPrismCr: true,
              operation: 'NAME',
              priority: 20.23,
              reconSurvey: 'SURVEY_INFO',
              recordId: 'RECORD-ID',
              region: 'REGION',
              secondary: false,
              specialComGuidance: 'TEXT',
              start: '2021-01-19T01:01:15.001Z',
              stop: '2021-01-19T01:20:01.001Z',
              subregion: 'SUBREGION',
              supportedUnit: 'UNIT',
              targetList: ['string'],
              type: 'COLLECTION_TYPE',
            },
          ],
          idexVersion: 2,
          missionAOR: 'Kandahar',
          missionCollectionArea: 'Example collection area',
          missionCountry: 'US',
          missionEmphasis: 'Mission emphasis',
          missionId: 'myTask-2020-04-23T00:00:00.000Z',
          missionJoa: 'Operation area',
          missionOperation: 'OP-HONEY-BADGER',
          missionPrimaryIntelDiscipline: 'Sig',
          missionPrimarySubCategory: 'FMV',
          missionPriority: 1,
          missionRegion: 'Example Region',
          missionRole: 'Targeting of Lead Vehicle',
          missionSecondaryIntelDiscipline: 'Intelligence_2',
          missionSecondarySubCategory: 'Convoy',
          missionStartPointLat: 45.23,
          missionStartPointLong: 80.23,
          missionSubRegion: 'Example Subregion',
          missionSupportedUnit: 'ENVOYS',
          missionSyncMatrixBin: 'MATRIX',
          name: 'Example mission name',
          origin: 'THIRD_PARTY_DATASOURCE',
          taskings: [
            {
              id: 'ISRCOLLECTIONTASKINGS-ID',
              collectionPeriods: {
                actual: [
                  {
                    id: 'ISRCOLLECTIONACTUAL-ID',
                    start: '2021-01-19T01:01:15.001Z',
                    stop: '2021-01-19T01:01:15.001Z',
                  },
                ],
                planned: {
                  additional: [
                    {
                      id: 'ISRCOLLECTIONADDITIONAL',
                      start: '2021-01-19T01:01:15.001Z',
                      stop: '2021-01-19T01:01:15.001Z',
                    },
                  ],
                  start: '2021-01-19T01:01:15.001Z',
                  stop: '2021-01-19T01:01:15.001Z',
                },
              },
              collectionType: 'Simultaneous',
              eightLine: 'eightLine',
              specialComGuidance: 'TEXT',
              sroTrack: 'SRO',
              taskingAOR: 'Kandahar',
              taskingCollectionArea: 'AREA',
              taskingCollectionRequirements: [
                {
                  id: 'ISCRCOLLECTIONREQUIREMENTS',
                  country: 'VE',
                  cridNumbers: 'CRID',
                  criticalTimes: {
                    earliestImagingTime: '2021-01-19T01:01:15.001Z',
                    latestImagingTime: '2021-01-19T01:11:15.001Z',
                  },
                  emphasized: false,
                  exploitationRequirement: {
                    id: 'ISRCOLLECTIONEXPLOITATIONREQUIREMENT',
                    amplification: 'AMPLIFICATION',
                    dissemination: 'EMAILS',
                    eei: 'ESSENTIAL_ELEMENTS',
                    poc: {
                      id: 'ISRCOLLECTIONPOC-ID',
                      callsign: 'CALLSIGN',
                      chatName: 'CHAT_NAME',
                      chatSystem: 'CHAT',
                      email: 'EMAIL',
                      name: 'NAME',
                      notes: 'NOTES',
                      phone: 'PHONE',
                      radioFrequency: 123.23,
                      unit: 'UNIT',
                    },
                    reportingCriteria: 'CRITERIA',
                  },
                  hash: 'HASH',
                  intelDiscipline: 'Sig',
                  isPrismCr: true,
                  operation: 'NAME',
                  priority: 20.23,
                  reconSurvey: 'SURVEY_INFO',
                  recordId: 'RECORD-ID',
                  region: 'REGION',
                  secondary: false,
                  specialComGuidance: 'TEXT',
                  start: '2021-01-19T01:01:15.001Z',
                  stop: '2021-01-19T01:20:01.001Z',
                  subregion: 'SUBREGION',
                  supportedUnit: 'UNIT',
                  targetList: ['string'],
                  type: 'COLLECTION_TYPE',
                },
              ],
              taskingCountry: 'CODE',
              taskingEmphasis: 'EMPHASIS',
              taskingJoa: 'AREA',
              taskingOperation: 'OP-HONEY-BADGER',
              taskingPrimaryIntelDiscipline: 'Sig',
              taskingPrimarySubCategory: 'FMV',
              taskingPriority: 10.23,
              taskingRegion: 'REGION',
              taskingRetaskTime: '2021-01-19T01:01:15.001Z',
              taskingRole: 'Track Lead Vehicle',
              taskingSecondaryIntelDiscipline: 'Intelligence_2',
              taskingSecondarySubCategory: 'Convoy',
              taskingStartPointLat: 45.23,
              taskingStartPointLong: 45.23,
              taskingSubRegion: 'SUBREGION',
              taskingSupportedUnit: 'ENVOYS',
              taskingSyncMatrixBin: 'MATRIX',
              type: 'Deliberate',
            },
          ],
          transit: [{ id: 'ISRCOLLECTIONTRANSIT-ID', base: 'ENVOYS', duration: 200.23 }],
        },
      ],
    });
  });
});
