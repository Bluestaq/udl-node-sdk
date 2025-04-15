// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.site.operations.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
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
    const response = await client.site.operations.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
      source: 'Bluestaq',
      id: '3f28f60b-3a50-2aef-ac88-8e9d0e39912b',
      dailyOperations: [
        {
          dayOfWeek: 'MONDAY',
          operatingHours: [{ opStartTime: '12:00', opStopTime: '22:00' }],
          operationName: 'Arrivals',
          ophrsLastChangedBy: 'John Smith',
          ophrsLastChangedDate: '2024-01-01T16:00:00.123Z',
        },
      ],
      dopsLastChangedBy: 'John Smith',
      dopsLastChangedDate: '2024-01-01T16:00:00.000Z',
      dopsLastChangedReason: 'Example reason for change.',
      idLaunchSite: 'b150b3ee-884b-b9ac-60a0-6408b4b16088',
      maximumOnGrounds: [
        {
          aircraftMDS: 'C017A',
          contingencyMOG: 3,
          mogLastChangedBy: 'John Smith',
          mogLastChangedDate: '2024-01-01T16:00:00.000Z',
          wideParkingMOG: 1,
          wideWorkingMOG: 1,
        },
      ],
      mogsLastChangedBy: 'Jane Doe',
      mogsLastChangedDate: '2024-01-01T16:00:00.000Z',
      mogsLastChangedReason: 'Example reason for change.',
      operationalDeviations: [
        {
          affectedAircraftMDS: 'C017A',
          affectedMOG: 1,
          aircraftOnGroundTime: '14:00',
          crewRestTime: '14:00',
          odLastChangedBy: 'John Smith',
          odLastChangedDate: '2024-01-01T16:00:00.000Z',
          odRemark: 'Example remark about this operational deviation.',
        },
      ],
      operationalPlannings: [
        {
          opEndDate: '2024-01-01T16:00:00.000Z',
          opLastChangedBy: 'John Smith',
          opLastChangedDate: '2024-01-01T16:00:00.000Z',
          opRemark: 'Example planning remark',
          opSource: 'a3',
          opStartDate: '2024-01-01T16:00:00.000Z',
          opStatus: 'Verified',
        },
      ],
      origin: 'THIRD_PARTY_DATASOURCE',
      pathways: [
        {
          pwDefinition: 'AGP: 14L, K6, K, G (ANG APRN TO TWY K), GUARD (MAIN)',
          pwLastChangedBy: 'John Smith',
          pwLastChangedDate: '2024-01-01T16:00:00.000Z',
          pwType: 'Taxiway',
          pwUsage: 'Arrival',
        },
      ],
      waivers: [
        {
          expirationDate: '2024-01-01T16:00:00.000Z',
          hasExpired: false,
          issueDate: '2024-01-01T16:00:00.000Z',
          issuerName: 'John Smith',
          requesterName: 'Jane Doe',
          requesterPhoneNumber: '808-123-4567',
          requestingUnit: '2A1',
          waiverAppliesTo: 'C017A',
          waiverDescription: 'Example waiver description',
          waiverLastChangedBy: 'J. Appleseed',
          waiverLastChangedDate: '2024-01-01T16:00:00.000Z',
        },
      ],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.site.operations.retrieve('id');
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
    await expect(client.site.operations.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.site.operations.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
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
    const response = await client.site.operations.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
      source: 'Bluestaq',
      body_id: '3f28f60b-3a50-2aef-ac88-8e9d0e39912b',
      dailyOperations: [
        {
          dayOfWeek: 'MONDAY',
          operatingHours: [{ opStartTime: '12:00', opStopTime: '22:00' }],
          operationName: 'Arrivals',
          ophrsLastChangedBy: 'John Smith',
          ophrsLastChangedDate: '2024-01-01T16:00:00.123Z',
        },
      ],
      dopsLastChangedBy: 'John Smith',
      dopsLastChangedDate: '2024-01-01T16:00:00.000Z',
      dopsLastChangedReason: 'Example reason for change.',
      idLaunchSite: 'b150b3ee-884b-b9ac-60a0-6408b4b16088',
      maximumOnGrounds: [
        {
          aircraftMDS: 'C017A',
          contingencyMOG: 3,
          mogLastChangedBy: 'John Smith',
          mogLastChangedDate: '2024-01-01T16:00:00.000Z',
          wideParkingMOG: 1,
          wideWorkingMOG: 1,
        },
      ],
      mogsLastChangedBy: 'Jane Doe',
      mogsLastChangedDate: '2024-01-01T16:00:00.000Z',
      mogsLastChangedReason: 'Example reason for change.',
      operationalDeviations: [
        {
          affectedAircraftMDS: 'C017A',
          affectedMOG: 1,
          aircraftOnGroundTime: '14:00',
          crewRestTime: '14:00',
          odLastChangedBy: 'John Smith',
          odLastChangedDate: '2024-01-01T16:00:00.000Z',
          odRemark: 'Example remark about this operational deviation.',
        },
      ],
      operationalPlannings: [
        {
          opEndDate: '2024-01-01T16:00:00.000Z',
          opLastChangedBy: 'John Smith',
          opLastChangedDate: '2024-01-01T16:00:00.000Z',
          opRemark: 'Example planning remark',
          opSource: 'a3',
          opStartDate: '2024-01-01T16:00:00.000Z',
          opStatus: 'Verified',
        },
      ],
      origin: 'THIRD_PARTY_DATASOURCE',
      pathways: [
        {
          pwDefinition: 'AGP: 14L, K6, K, G (ANG APRN TO TWY K), GUARD (MAIN)',
          pwLastChangedBy: 'John Smith',
          pwLastChangedDate: '2024-01-01T16:00:00.000Z',
          pwType: 'Taxiway',
          pwUsage: 'Arrival',
        },
      ],
      waivers: [
        {
          expirationDate: '2024-01-01T16:00:00.000Z',
          hasExpired: false,
          issueDate: '2024-01-01T16:00:00.000Z',
          issuerName: 'John Smith',
          requesterName: 'Jane Doe',
          requesterPhoneNumber: '808-123-4567',
          requestingUnit: '2A1',
          waiverAppliesTo: 'C017A',
          waiverDescription: 'Example waiver description',
          waiverLastChangedBy: 'J. Appleseed',
          waiverLastChangedDate: '2024-01-01T16:00:00.000Z',
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.site.operations.list({ idSite: 'idSite' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.site.operations.list({ idSite: 'idSite' });
  });

  test('delete', async () => {
    const responsePromise = client.site.operations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.site.operations.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count: only required params', async () => {
    const responsePromise = client.site.operations.count({ idSite: 'idSite' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.site.operations.count({ idSite: 'idSite' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.site.operations.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
        source: 'Bluestaq',
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

  test('createBulk: required and optional params', async () => {
    const response = await client.site.operations.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
        source: 'Bluestaq',
        id: '3f28f60b-3a50-2aef-ac88-8e9d0e39912b',
        dailyOperations: [
          {
            dayOfWeek: 'MONDAY',
            operatingHours: [{ opStartTime: '12:00', opStopTime: '22:00' }],
            operationName: 'Arrivals',
            ophrsLastChangedBy: 'John Smith',
            ophrsLastChangedDate: '2024-01-01T16:00:00.123Z',
          },
        ],
        dopsLastChangedBy: 'John Smith',
        dopsLastChangedDate: '2024-01-01T16:00:00.000Z',
        dopsLastChangedReason: 'Example reason for change.',
        idLaunchSite: 'b150b3ee-884b-b9ac-60a0-6408b4b16088',
        maximumOnGrounds: [
          {
            aircraftMDS: 'C017A',
            contingencyMOG: 3,
            mogLastChangedBy: 'John Smith',
            mogLastChangedDate: '2024-01-01T16:00:00.000Z',
            wideParkingMOG: 1,
            wideWorkingMOG: 1,
          },
        ],
        mogsLastChangedBy: 'Jane Doe',
        mogsLastChangedDate: '2024-01-01T16:00:00.000Z',
        mogsLastChangedReason: 'Example reason for change.',
        operationalDeviations: [
          {
            affectedAircraftMDS: 'C017A',
            affectedMOG: 1,
            aircraftOnGroundTime: '14:00',
            crewRestTime: '14:00',
            odLastChangedBy: 'John Smith',
            odLastChangedDate: '2024-01-01T16:00:00.000Z',
            odRemark: 'Example remark about this operational deviation.',
          },
        ],
        operationalPlannings: [
          {
            opEndDate: '2024-01-01T16:00:00.000Z',
            opLastChangedBy: 'John Smith',
            opLastChangedDate: '2024-01-01T16:00:00.000Z',
            opRemark: 'Example planning remark',
            opSource: 'a3',
            opStartDate: '2024-01-01T16:00:00.000Z',
            opStatus: 'Verified',
          },
        ],
        origin: 'THIRD_PARTY_DATASOURCE',
        pathways: [
          {
            pwDefinition: 'AGP: 14L, K6, K, G (ANG APRN TO TWY K), GUARD (MAIN)',
            pwLastChangedBy: 'John Smith',
            pwLastChangedDate: '2024-01-01T16:00:00.000Z',
            pwType: 'Taxiway',
            pwUsage: 'Arrival',
          },
        ],
        waivers: [
          {
            expirationDate: '2024-01-01T16:00:00.000Z',
            hasExpired: false,
            issueDate: '2024-01-01T16:00:00.000Z',
            issuerName: 'John Smith',
            requesterName: 'Jane Doe',
            requesterPhoneNumber: '808-123-4567',
            requestingUnit: '2A1',
            waiverAppliesTo: 'C017A',
            waiverDescription: 'Example waiver description',
            waiverLastChangedBy: 'J. Appleseed',
            waiverLastChangedDate: '2024-01-01T16:00:00.000Z',
          },
        ],
      },
    ]);
  });

  test('createBulkV2: only required params', async () => {
    const responsePromise = client.site.operations.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
        source: 'Bluestaq',
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

  test('createBulkV2: required and optional params', async () => {
    const response = await client.site.operations.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
        source: 'Bluestaq',
        id: '3f28f60b-3a50-2aef-ac88-8e9d0e39912b',
        dailyOperations: [
          {
            dayOfWeek: 'MONDAY',
            operatingHours: [{ opStartTime: '12:00', opStopTime: '22:00' }],
            operationName: 'Arrivals',
            ophrsLastChangedBy: 'John Smith',
            ophrsLastChangedDate: '2024-01-01T16:00:00.123Z',
          },
        ],
        dopsLastChangedBy: 'John Smith',
        dopsLastChangedDate: '2024-01-01T16:00:00.000Z',
        dopsLastChangedReason: 'Example reason for change.',
        idLaunchSite: 'b150b3ee-884b-b9ac-60a0-6408b4b16088',
        maximumOnGrounds: [
          {
            aircraftMDS: 'C017A',
            contingencyMOG: 3,
            mogLastChangedBy: 'John Smith',
            mogLastChangedDate: '2024-01-01T16:00:00.000Z',
            wideParkingMOG: 1,
            wideWorkingMOG: 1,
          },
        ],
        mogsLastChangedBy: 'Jane Doe',
        mogsLastChangedDate: '2024-01-01T16:00:00.000Z',
        mogsLastChangedReason: 'Example reason for change.',
        operationalDeviations: [
          {
            affectedAircraftMDS: 'C017A',
            affectedMOG: 1,
            aircraftOnGroundTime: '14:00',
            crewRestTime: '14:00',
            odLastChangedBy: 'John Smith',
            odLastChangedDate: '2024-01-01T16:00:00.000Z',
            odRemark: 'Example remark about this operational deviation.',
          },
        ],
        operationalPlannings: [
          {
            opEndDate: '2024-01-01T16:00:00.000Z',
            opLastChangedBy: 'John Smith',
            opLastChangedDate: '2024-01-01T16:00:00.000Z',
            opRemark: 'Example planning remark',
            opSource: 'a3',
            opStartDate: '2024-01-01T16:00:00.000Z',
            opStatus: 'Verified',
          },
        ],
        origin: 'THIRD_PARTY_DATASOURCE',
        pathways: [
          {
            pwDefinition: 'AGP: 14L, K6, K, G (ANG APRN TO TWY K), GUARD (MAIN)',
            pwLastChangedBy: 'John Smith',
            pwLastChangedDate: '2024-01-01T16:00:00.000Z',
            pwType: 'Taxiway',
            pwUsage: 'Arrival',
          },
        ],
        waivers: [
          {
            expirationDate: '2024-01-01T16:00:00.000Z',
            hasExpired: false,
            issueDate: '2024-01-01T16:00:00.000Z',
            issuerName: 'John Smith',
            requesterName: 'Jane Doe',
            requesterPhoneNumber: '808-123-4567',
            requestingUnit: '2A1',
            waiverAppliesTo: 'C017A',
            waiverDescription: 'Example waiver description',
            waiverLastChangedBy: 'J. Appleseed',
            waiverLastChangedDate: '2024-01-01T16:00:00.000Z',
          },
        ],
      },
    ]);
  });

  test('queryHelp', async () => {
    const responsePromise = client.site.operations.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryHelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.site.operations.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.site.operations.tuple({ columns: 'columns', idSite: 'idSite' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.site.operations.tuple({ columns: 'columns', idSite: 'idSite' });
  });
});
