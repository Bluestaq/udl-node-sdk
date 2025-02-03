// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource crew', () => {
  test('create: only required params', async () => {
    const responsePromise = client.crew.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      origCrewId: 'JHJDHjhuu929o92',
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
    const response = await client.crew.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      origCrewId: 'JHJDHjhuu929o92',
      source: 'Bluestaq',
      id: 'bdad6945-c9e4-b829-f7be-1ad075541921',
      adjReturnTime: '2024-01-01T16:00:00.123Z',
      adjReturnTimeApprover: 'Smith',
      aircraftMDS: 'C017A',
      alertedTime: '2022-01-01T16:00:00.123Z',
      armsCrewUnit: '00016ALSQ',
      arrICAO: 'KDEN',
      crewHome: false,
      crewMembers: [
        {
          branch: 'Air Force',
          civilian: false,
          commander: false,
          crewPosition: 'EP A',
          dodID: '0123456789',
          dutyPosition: 'IP',
          firstName: 'Freddie',
          last4SSN: '1234',
          lastName: 'Smith',
          memberId: '12345678abc',
          memberRemarks: 'Crew member remark',
          memberType: 'AIRCREW',
          middleInitial: 'G',
          rank: 'Capt',
          squadron: '21AS',
          username: 'fgsmith',
          wing: '60AMW',
        },
      ],
      crewName: 'falcon',
      crewSquadron: '21AS',
      crewType: 'AIRLAND',
      crewWing: '60AMW',
      currentICAO: 'KCOS',
      depICAO: 'KCOS',
      estArrTime: '2024-01-01T18:00:00.123Z',
      estDepTime: '2024-01-01T16:00:00.123Z',
      fdpEligType: 'A',
      fdpType: 'A',
      femaleEnlistedQty: 2,
      femaleOfficerQty: 1,
      idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
      initStartTime: '2024-01-01T16:00:00.123Z',
      legalAlertTime: '2022-01-01T16:00:00.123Z',
      legalBravoTime: '2022-01-01T16:00:00.123Z',
      linkedTask: false,
      maleEnlistedQty: 3,
      maleOfficerQty: 1,
      missionId: 'AJM123456123',
      origin: 'THIRD_PARTY_DATASOURCE',
      postRestApplied: false,
      preRestApplied: false,
      returnTime: '2022-01-01T16:00:00.123Z',
      stageTime: '2024-01-01T16:00:00.123Z',
      status: 'APPROVED',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.crew.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.crew.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.crew.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      origCrewId: 'JHJDHjhuu929o92',
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

  test('update: required and optional params', async () => {
    const response = await client.crew.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      origCrewId: 'JHJDHjhuu929o92',
      source: 'Bluestaq',
      body_id: 'bdad6945-c9e4-b829-f7be-1ad075541921',
      adjReturnTime: '2024-01-01T16:00:00.123Z',
      adjReturnTimeApprover: 'Smith',
      aircraftMDS: 'C017A',
      alertedTime: '2022-01-01T16:00:00.123Z',
      armsCrewUnit: '00016ALSQ',
      arrICAO: 'KDEN',
      crewHome: false,
      crewMembers: [
        {
          branch: 'Air Force',
          civilian: false,
          commander: false,
          crewPosition: 'EP A',
          dodID: '0123456789',
          dutyPosition: 'IP',
          firstName: 'Freddie',
          last4SSN: '1234',
          lastName: 'Smith',
          memberId: '12345678abc',
          memberRemarks: 'Crew member remark',
          memberType: 'AIRCREW',
          middleInitial: 'G',
          rank: 'Capt',
          squadron: '21AS',
          username: 'fgsmith',
          wing: '60AMW',
        },
      ],
      crewName: 'falcon',
      crewSquadron: '21AS',
      crewType: 'AIRLAND',
      crewWing: '60AMW',
      currentICAO: 'KCOS',
      depICAO: 'KCOS',
      estArrTime: '2024-01-01T18:00:00.123Z',
      estDepTime: '2024-01-01T16:00:00.123Z',
      fdpEligType: 'A',
      fdpType: 'A',
      femaleEnlistedQty: 2,
      femaleOfficerQty: 1,
      idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
      initStartTime: '2024-01-01T16:00:00.123Z',
      legalAlertTime: '2022-01-01T16:00:00.123Z',
      legalBravoTime: '2022-01-01T16:00:00.123Z',
      linkedTask: false,
      maleEnlistedQty: 3,
      maleOfficerQty: 1,
      missionId: 'AJM123456123',
      origin: 'THIRD_PARTY_DATASOURCE',
      postRestApplied: false,
      preRestApplied: false,
      returnTime: '2022-01-01T16:00:00.123Z',
      stageTime: '2024-01-01T16:00:00.123Z',
      status: 'APPROVED',
    });
  });

  test('list', async () => {
    const responsePromise = client.crew.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.crew.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.crew.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.crew.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.crew.fileCreate([
      { classificationMarking: 'U', dataMode: 'REAL', origCrewId: 'JHJDHjhuu929o92', source: 'Bluestaq' },
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
    const response = await client.crew.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        origCrewId: 'JHJDHjhuu929o92',
        source: 'Bluestaq',
        id: 'bdad6945-c9e4-b829-f7be-1ad075541921',
        adjReturnTime: '2024-01-01T16:00:00.123Z',
        adjReturnTimeApprover: 'Smith',
        aircraftMDS: 'C017A',
        alertedTime: '2022-01-01T16:00:00.123Z',
        armsCrewUnit: '00016ALSQ',
        arrICAO: 'KDEN',
        crewHome: false,
        crewMembers: [
          {
            branch: 'Air Force',
            civilian: false,
            commander: false,
            crewPosition: 'EP A',
            dodID: '0123456789',
            dutyPosition: 'IP',
            firstName: 'Freddie',
            last4SSN: '1234',
            lastName: 'Smith',
            memberId: '12345678abc',
            memberRemarks: 'Crew member remark',
            memberType: 'AIRCREW',
            middleInitial: 'G',
            rank: 'Capt',
            squadron: '21AS',
            username: 'fgsmith',
            wing: '60AMW',
          },
        ],
        crewName: 'falcon',
        crewSquadron: '21AS',
        crewType: 'AIRLAND',
        crewWing: '60AMW',
        currentICAO: 'KCOS',
        depICAO: 'KCOS',
        estArrTime: '2024-01-01T18:00:00.123Z',
        estDepTime: '2024-01-01T16:00:00.123Z',
        fdpEligType: 'A',
        fdpType: 'A',
        femaleEnlistedQty: 2,
        femaleOfficerQty: 1,
        idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
        initStartTime: '2024-01-01T16:00:00.123Z',
        legalAlertTime: '2022-01-01T16:00:00.123Z',
        legalBravoTime: '2022-01-01T16:00:00.123Z',
        linkedTask: false,
        maleEnlistedQty: 3,
        maleOfficerQty: 1,
        missionId: 'AJM123456123',
        origin: 'THIRD_PARTY_DATASOURCE',
        postRestApplied: false,
        preRestApplied: false,
        returnTime: '2022-01-01T16:00:00.123Z',
        stageTime: '2024-01-01T16:00:00.123Z',
        status: 'APPROVED',
      },
    ]);
  });

  test('queryhelp', async () => {
    const responsePromise = client.crew.queryhelp();
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
    await expect(client.crew.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.crew.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.crew.tuple({ columns: 'columns' });
  });
});
