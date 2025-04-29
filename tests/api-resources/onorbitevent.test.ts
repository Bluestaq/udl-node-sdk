// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onorbitevent', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbitevent.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      eventTime: '2018-01-01T16:00:00.123Z',
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
    const response = await client.onorbitevent.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      eventTime: '2018-01-01T16:00:00.123Z',
      source: 'Bluestaq',
      id: 'ONORBITEVENT-ID',
      achievedFlightPhase: 'Phase 2',
      ageAtEvent: 5.23,
      capabilityLoss: 0.5,
      capabilityLossNotes: 'Example notes',
      capacityLoss: 0.5,
      consequentialEquipmentFailure: 'Example Equipment',
      declassificationDate: '2021-01-01T01:02:02.123Z',
      declassificationString: 'DECLASS_STRING',
      derivedFrom: 'DERIVED_SOURCE',
      description: 'Example notes',
      equipmentAtFault: 'Example Equipment',
      equipmentCausingLossNotes: 'Example notes',
      equipmentPartAtFault: 'Example Equipment',
      equipmentTypeAtFault: 'Example Equipment',
      eventResult: 'Example results',
      eventTimeNotes: 'Notes on validity',
      eventType: 'Type1',
      geoPosition: 45.23,
      idOnOrbit: 'ONORBIT-ID',
      inclined: false,
      injured: 1,
      insuranceCarriedNotes: 'Insurance notes',
      insuranceLoss: 0.5,
      insuranceLossNotes: 'Insurance notes',
      killed: 23,
      lesseeOrgId: 'LESSEEORG-ID',
      lifeLost: 0.5,
      netAmount: 10000.23,
      objectStatus: 'Status1',
      occurrenceFlightPhase: 'Phase 2',
      officialLossDate: '2021-01-01T01:01:01.123Z',
      operatedOnBehalfOfOrgId: 'OPERATEDONBEHALFOFORG-ID',
      operatorOrgId: 'OPERATORORG-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      ownerOrgId: 'OWNERORG-ID',
      planeNumber: 'PL_1',
      planeSlot: 'example_slot',
      positionStatus: 'Stable',
      remarks: 'Example remarks',
      satellitePosition: 'Example description',
      satNo: 1,
      stageAtFault: 'Phase 2',
      thirdPartyInsuranceLoss: 10000.23,
      underlyingCause: 'CAUSE_EXAMPLE',
      untilTime: '2021-01-01T01:01:01.123Z',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.onorbitevent.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      eventTime: '2018-01-01T16:00:00.123Z',
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
    const response = await client.onorbitevent.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      eventTime: '2018-01-01T16:00:00.123Z',
      source: 'Bluestaq',
      body_id: 'ONORBITEVENT-ID',
      achievedFlightPhase: 'Phase 2',
      ageAtEvent: 5.23,
      capabilityLoss: 0.5,
      capabilityLossNotes: 'Example notes',
      capacityLoss: 0.5,
      consequentialEquipmentFailure: 'Example Equipment',
      declassificationDate: '2021-01-01T01:02:02.123Z',
      declassificationString: 'DECLASS_STRING',
      derivedFrom: 'DERIVED_SOURCE',
      description: 'Example notes',
      equipmentAtFault: 'Example Equipment',
      equipmentCausingLossNotes: 'Example notes',
      equipmentPartAtFault: 'Example Equipment',
      equipmentTypeAtFault: 'Example Equipment',
      eventResult: 'Example results',
      eventTimeNotes: 'Notes on validity',
      eventType: 'Type1',
      geoPosition: 45.23,
      idOnOrbit: 'ONORBIT-ID',
      inclined: false,
      injured: 1,
      insuranceCarriedNotes: 'Insurance notes',
      insuranceLoss: 0.5,
      insuranceLossNotes: 'Insurance notes',
      killed: 23,
      lesseeOrgId: 'LESSEEORG-ID',
      lifeLost: 0.5,
      netAmount: 10000.23,
      objectStatus: 'Status1',
      occurrenceFlightPhase: 'Phase 2',
      officialLossDate: '2021-01-01T01:01:01.123Z',
      operatedOnBehalfOfOrgId: 'OPERATEDONBEHALFOFORG-ID',
      operatorOrgId: 'OPERATORORG-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      ownerOrgId: 'OWNERORG-ID',
      planeNumber: 'PL_1',
      planeSlot: 'example_slot',
      positionStatus: 'Stable',
      remarks: 'Example remarks',
      satellitePosition: 'Example description',
      satNo: 1,
      stageAtFault: 'Phase 2',
      thirdPartyInsuranceLoss: 10000.23,
      underlyingCause: 'CAUSE_EXAMPLE',
      untilTime: '2021-01-01T01:01:01.123Z',
    });
  });

  test('list', async () => {
    const responsePromise = client.onorbitevent.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.onorbitevent.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.onorbitevent.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.onorbitevent.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.onorbitevent.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.onorbitevent.get('id');
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
      client.onorbitevent.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.onorbitevent.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.onorbitevent.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.onorbitevent.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });
});
