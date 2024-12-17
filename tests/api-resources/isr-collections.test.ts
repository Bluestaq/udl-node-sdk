// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource isrCollections', () => {
  test('create: only required params', async () => {
    const responsePromise = client.isrCollections.create([
      { classificationMarking: 'classificationMarking', dataMode: 'dataMode', source: 'source' },
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
    const response = await client.isrCollections.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        id: 'id',
        collectionRequirements: [
          {
            id: 'id',
            country: 'country',
            cridNumbers: 'cridNumbers',
            criticalTimes: {
              earliestImagingTime: '2019-12-27T18:11:19.117Z',
              latestImagingTime: '2019-12-27T18:11:19.117Z',
            },
            emphasized: true,
            exploitationRequirement: {
              id: 'id',
              amplification: 'amplification',
              dissemination: 'dissemination',
              eei: 'eei',
              poc: {
                id: 'id',
                callsign: 'callsign',
                chatName: 'chatName',
                chatSystem: 'chatSystem',
                email: 'email',
                name: 'name',
                notes: 'notes',
                phone: 'phone',
                radioFrequency: 0,
                unit: 'unit',
              },
              reportingCriteria: 'reportingCriteria',
            },
            hash: 'hash',
            intelDiscipline: 'intelDiscipline',
            isPrismCr: true,
            operation: 'operation',
            priority: 0,
            reconSurvey: 'reconSurvey',
            recordId: 'recordId',
            region: 'region',
            secondary: true,
            specialComGuidance: 'specialComGuidance',
            start: '2019-12-27T18:11:19.117Z',
            stop: '2019-12-27T18:11:19.117Z',
            subregion: 'subregion',
            supportedUnit: 'supportedUnit',
            targetList: ['string'],
            type: 'type',
          },
        ],
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        idexVersion: 0,
        missionAOR: 'missionAOR',
        missionCollectionArea: 'missionCollectionArea',
        missionCountry: 'missionCountry',
        missionEmphasis: 'missionEmphasis',
        missionId: 'missionId',
        missionJoa: 'missionJoa',
        missionOperation: 'missionOperation',
        missionPrimaryIntelDiscipline: 'missionPrimaryIntelDiscipline',
        missionPrimarySubCategory: 'missionPrimarySubCategory',
        missionPriority: 0,
        missionRegion: 'missionRegion',
        missionRole: 'missionRole',
        missionSecondaryIntelDiscipline: 'missionSecondaryIntelDiscipline',
        missionSecondarySubCategory: 'missionSecondarySubCategory',
        missionStartPointLat: 0,
        missionStartPointLong: 0,
        missionSubRegion: 'missionSubRegion',
        missionSupportedUnit: 'missionSupportedUnit',
        missionSyncMatrixBin: 'missionSyncMatrixBin',
        name: 'name',
        origin: 'origin',
        origNetwork: 'origNetwork',
        taskings: [
          {
            id: 'id',
            collectionPeriods: {
              actual: [{ id: 'id', start: '2019-12-27T18:11:19.117Z', stop: '2019-12-27T18:11:19.117Z' }],
              planned: {
                additional: [
                  { id: 'id', start: '2019-12-27T18:11:19.117Z', stop: '2019-12-27T18:11:19.117Z' },
                ],
                start: '2019-12-27T18:11:19.117Z',
                stop: '2019-12-27T18:11:19.117Z',
              },
            },
            collectionType: 'collectionType',
            eightLine: 'eightLine',
            specialComGuidance: 'specialComGuidance',
            sroTrack: 'sroTrack',
            taskingAOR: 'taskingAOR',
            taskingCollectionArea: 'taskingCollectionArea',
            taskingCollectionRequirements: [
              {
                id: 'id',
                country: 'country',
                cridNumbers: 'cridNumbers',
                criticalTimes: {
                  earliestImagingTime: '2019-12-27T18:11:19.117Z',
                  latestImagingTime: '2019-12-27T18:11:19.117Z',
                },
                emphasized: true,
                exploitationRequirement: {
                  id: 'id',
                  amplification: 'amplification',
                  dissemination: 'dissemination',
                  eei: 'eei',
                  poc: {
                    id: 'id',
                    callsign: 'callsign',
                    chatName: 'chatName',
                    chatSystem: 'chatSystem',
                    email: 'email',
                    name: 'name',
                    notes: 'notes',
                    phone: 'phone',
                    radioFrequency: 0,
                    unit: 'unit',
                  },
                  reportingCriteria: 'reportingCriteria',
                },
                hash: 'hash',
                intelDiscipline: 'intelDiscipline',
                isPrismCr: true,
                operation: 'operation',
                priority: 0,
                reconSurvey: 'reconSurvey',
                recordId: 'recordId',
                region: 'region',
                secondary: true,
                specialComGuidance: 'specialComGuidance',
                start: '2019-12-27T18:11:19.117Z',
                stop: '2019-12-27T18:11:19.117Z',
                subregion: 'subregion',
                supportedUnit: 'supportedUnit',
                targetList: ['string'],
                type: 'type',
              },
            ],
            taskingCountry: 'taskingCountry',
            taskingEmphasis: 'taskingEmphasis',
            taskingJoa: 'taskingJoa',
            taskingOperation: 'taskingOperation',
            taskingPrimaryIntelDiscipline: 'taskingPrimaryIntelDiscipline',
            taskingPrimarySubCategory: 'taskingPrimarySubCategory',
            taskingPriority: 0,
            taskingRegion: 'taskingRegion',
            taskingRetaskTime: '2019-12-27T18:11:19.117Z',
            taskingRole: 'taskingRole',
            taskingSecondaryIntelDiscipline: 'taskingSecondaryIntelDiscipline',
            taskingSecondarySubCategory: 'taskingSecondarySubCategory',
            taskingStartPointLat: 0,
            taskingStartPointLong: 0,
            taskingSubRegion: 'taskingSubRegion',
            taskingSupportedUnit: 'taskingSupportedUnit',
            taskingSyncMatrixBin: 'taskingSyncMatrixBin',
            type: 'type',
          },
        ],
        transit: [{ id: 'id', base: 'base', duration: 0 }],
        updatedAt: '2019-12-27T18:11:19.117Z',
        updatedBy: 'updatedBy',
      },
    ]);
  });
});
