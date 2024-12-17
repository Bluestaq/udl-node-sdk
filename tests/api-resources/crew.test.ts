// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource crew', () => {
  test('create: only required params', async () => {
    const responsePromise = client.crew.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      origCrewId: 'origCrewId',
      source: 'source',
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
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      origCrewId: 'origCrewId',
      source: 'source',
      id: 'id',
      adjReturnTime: '2019-12-27T18:11:19.117Z',
      adjReturnTimeApprover: 'adjReturnTimeApprover',
      aircraftMDS: 'aircraftMDS',
      alertedTime: '2019-12-27T18:11:19.117Z',
      armsCrewUnit: 'armsCrewUnit',
      arrICAO: 'arrICAO',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      crewHome: true,
      crewMembers: [
        {
          branch: 'branch',
          civilian: true,
          commander: true,
          crewPosition: 'crewPosition',
          dodID: 'dodID',
          dutyPosition: 'dutyPosition',
          firstName: 'firstName',
          last4SSN: 'last4SSN',
          lastName: 'lastName',
          memberId: 'memberId',
          memberRemarks: 'memberRemarks',
          memberType: 'memberType',
          middleInitial: 'middleInitial',
          rank: 'rank',
          squadron: 'squadron',
          username: 'username',
          wing: 'wing',
        },
      ],
      crewName: 'crewName',
      crewSquadron: 'crewSquadron',
      crewType: 'crewType',
      crewWing: 'crewWing',
      currentICAO: 'currentICAO',
      depICAO: 'depICAO',
      estArrTime: '2019-12-27T18:11:19.117Z',
      estDepTime: '2019-12-27T18:11:19.117Z',
      fdpEligType: 'fdpEligType',
      fdpType: 'fdpType',
      femaleEnlistedQty: 0,
      femaleOfficerQty: 0,
      idSortie: 'idSortie',
      initStartTime: '2019-12-27T18:11:19.117Z',
      legalAlertTime: '2019-12-27T18:11:19.117Z',
      legalBravoTime: '2019-12-27T18:11:19.117Z',
      linkedTask: true,
      maleEnlistedQty: 0,
      maleOfficerQty: 0,
      missionId: 'missionId',
      origin: 'origin',
      origNetwork: 'origNetwork',
      postRestApplied: true,
      preRestApplied: true,
      returnTime: '2019-12-27T18:11:19.117Z',
      stageTime: '2019-12-27T18:11:19.117Z',
      status: 'status',
      updatedAt: '2019-12-27T18:11:19.117Z',
      updatedBy: 'updatedBy',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.crew.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.crew.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.crew.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      origCrewId: 'origCrewId',
      source: 'source',
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
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      origCrewId: 'origCrewId',
      source: 'source',
      body_id: 'id',
      adjReturnTime: '2019-12-27T18:11:19.117Z',
      adjReturnTimeApprover: 'adjReturnTimeApprover',
      aircraftMDS: 'aircraftMDS',
      alertedTime: '2019-12-27T18:11:19.117Z',
      armsCrewUnit: 'armsCrewUnit',
      arrICAO: 'arrICAO',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      crewHome: true,
      crewMembers: [
        {
          branch: 'branch',
          civilian: true,
          commander: true,
          crewPosition: 'crewPosition',
          dodID: 'dodID',
          dutyPosition: 'dutyPosition',
          firstName: 'firstName',
          last4SSN: 'last4SSN',
          lastName: 'lastName',
          memberId: 'memberId',
          memberRemarks: 'memberRemarks',
          memberType: 'memberType',
          middleInitial: 'middleInitial',
          rank: 'rank',
          squadron: 'squadron',
          username: 'username',
          wing: 'wing',
        },
      ],
      crewName: 'crewName',
      crewSquadron: 'crewSquadron',
      crewType: 'crewType',
      crewWing: 'crewWing',
      currentICAO: 'currentICAO',
      depICAO: 'depICAO',
      estArrTime: '2019-12-27T18:11:19.117Z',
      estDepTime: '2019-12-27T18:11:19.117Z',
      fdpEligType: 'fdpEligType',
      fdpType: 'fdpType',
      femaleEnlistedQty: 0,
      femaleOfficerQty: 0,
      idSortie: 'idSortie',
      initStartTime: '2019-12-27T18:11:19.117Z',
      legalAlertTime: '2019-12-27T18:11:19.117Z',
      legalBravoTime: '2019-12-27T18:11:19.117Z',
      linkedTask: true,
      maleEnlistedQty: 0,
      maleOfficerQty: 0,
      missionId: 'missionId',
      origin: 'origin',
      origNetwork: 'origNetwork',
      postRestApplied: true,
      preRestApplied: true,
      returnTime: '2019-12-27T18:11:19.117Z',
      stageTime: '2019-12-27T18:11:19.117Z',
      status: 'status',
      updatedAt: '2019-12-27T18:11:19.117Z',
      updatedBy: 'updatedBy',
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
