// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airEvents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airEvents.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      type: 'FUEL TRANSFER',
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
    const response = await client.airEvents.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      type: 'FUEL TRANSFER',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      actualArrTime: '2024-01-07T14:00:03.123Z',
      actualDepTime: '2024-01-07T14:17:03.123Z',
      arct: '2024-01-07T15:11:27.123Z',
      arEventType: 'V',
      arrPurpose: 'A',
      arTrackId: 'CH61',
      arTrackName: 'CH61 POST',
      baseAlt: 28000.1,
      cancelled: false,
      depPurpose: 'Q',
      estArrTime: '2024-01-07T13:59:48.123Z',
      estDepTime: '2024-01-07T14:19:48.123Z',
      externalAirEventId: 'MB014313032022407540',
      externalARTrackId: '6418a4b68e5c3896bf024cc79aa4174c',
      idMission: '190dea6d-2a90-45a2-a276-be9047d9b96c',
      idSortie: 'b9866c03-2397-4506-8153-852e72d9b54f',
      legNum: 825,
      location: '901EW',
      numTankers: 1,
      origin: 'THIRD_PARTY_DATASOURCE',
      plannedArrTime: '2024-01-07T13:55:43.123Z',
      plannedDepTime: '2024-01-07T14:15:43.123Z',
      priority: '1A2',
      receivers: [
        {
          altReceiverMissionId: '1UN05201L121',
          amcReceiverMissionId: '8PH000B1S052',
          externalReceiverId: '3fb8169f-adc1-4667-acab-8415a012d766',
          fuelOn: 15000000.1,
          idReceiverAirfield: '96c4c2ba-a031-4e58-9b8e-3c6fb90a7534',
          idReceiverMission: 'ce99757d-f733-461f-8939-3939d4f05946',
          idReceiverSortie: '1d03e85a-1fb9-4f6e-86a0-593306b6e3f0',
          numRecAircraft: 3,
          packageId: '135',
          receiverCallSign: 'BAKER',
          receiverCellPosition: 2,
          receiverCoord: 'TTC601',
          receiverDeliveryMethod: 'DROGUE',
          receiverDeployedICAO: 'KOFF',
          receiverExercise: 'NATO19',
          receiverFuelType: 'JP8',
          receiverLegNum: 825,
          receiverMDS: 'KC135R',
          receiverOwner: '117ARW',
          receiverPOC: 'JOHN SMITH (555)555-5555',
          recOrg: 'AMC',
          sequenceNum: '1018',
        },
      ],
      remarks: [
        {
          date: '2024-01-01T01:01:01.123Z',
          externalRemarkId: '23ea2877a6f74d7d8f309567a5896441',
          text: 'Example air event remarks.',
          user: 'John Doe',
        },
      ],
      revTrack: true,
      rzct: '2024-01-07T13:55:43.123Z',
      rzPoint: 'AN',
      rzType: 'PP',
      shortTrack: true,
      statusCode: 'R',
      tankers: [
        {
          altTankerMissionId: '1UN05201L121',
          amcTankerMissionId: '8PH000B1S052',
          dualRole: true,
          externalTankerId: 'ca673c580fb949a5b733f0e0b67ffab2',
          fuelOff: 15000000.1,
          idTankerAirfield: 'b33955d2-67d3-42be-8316-263e284ce6cc',
          idTankerMission: 'edef700c-9917-4dbf-a153-89ffd4446fe9',
          idTankerSortie: 'd833a4bc-756b-41d5-8845-f146fe563387',
          tankerCallSign: 'BAKER',
          tankerCellPosition: 2,
          tankerCoord: 'TTC601',
          tankerDeliveryMethod: 'DROGUE',
          tankerDeployedICAO: 'KOFF',
          tankerFuelType: 'JP8',
          tankerLegNum: 825,
          tankerMDS: 'KC135R',
          tankerOwner: '117ARW',
          tankerPOC: 'JOHN SMITH (555)555-5555',
        },
      ],
      trackTime: 1.5,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.airEvents.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      type: 'FUEL TRANSFER',
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
    const response = await client.airEvents.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      type: 'FUEL TRANSFER',
      body_id: '026dd511-8ba5-47d3-9909-836149f87686',
      actualArrTime: '2024-01-07T14:00:03.123Z',
      actualDepTime: '2024-01-07T14:17:03.123Z',
      arct: '2024-01-07T15:11:27.123Z',
      arEventType: 'V',
      arrPurpose: 'A',
      arTrackId: 'CH61',
      arTrackName: 'CH61 POST',
      baseAlt: 28000.1,
      cancelled: false,
      depPurpose: 'Q',
      estArrTime: '2024-01-07T13:59:48.123Z',
      estDepTime: '2024-01-07T14:19:48.123Z',
      externalAirEventId: 'MB014313032022407540',
      externalARTrackId: '6418a4b68e5c3896bf024cc79aa4174c',
      idMission: '190dea6d-2a90-45a2-a276-be9047d9b96c',
      idSortie: 'b9866c03-2397-4506-8153-852e72d9b54f',
      legNum: 825,
      location: '901EW',
      numTankers: 1,
      origin: 'THIRD_PARTY_DATASOURCE',
      plannedArrTime: '2024-01-07T13:55:43.123Z',
      plannedDepTime: '2024-01-07T14:15:43.123Z',
      priority: '1A2',
      receivers: [
        {
          altReceiverMissionId: '1UN05201L121',
          amcReceiverMissionId: '8PH000B1S052',
          externalReceiverId: '3fb8169f-adc1-4667-acab-8415a012d766',
          fuelOn: 15000000.1,
          idReceiverAirfield: '96c4c2ba-a031-4e58-9b8e-3c6fb90a7534',
          idReceiverMission: 'ce99757d-f733-461f-8939-3939d4f05946',
          idReceiverSortie: '1d03e85a-1fb9-4f6e-86a0-593306b6e3f0',
          numRecAircraft: 3,
          packageId: '135',
          receiverCallSign: 'BAKER',
          receiverCellPosition: 2,
          receiverCoord: 'TTC601',
          receiverDeliveryMethod: 'DROGUE',
          receiverDeployedICAO: 'KOFF',
          receiverExercise: 'NATO19',
          receiverFuelType: 'JP8',
          receiverLegNum: 825,
          receiverMDS: 'KC135R',
          receiverOwner: '117ARW',
          receiverPOC: 'JOHN SMITH (555)555-5555',
          recOrg: 'AMC',
          sequenceNum: '1018',
        },
      ],
      remarks: [
        {
          date: '2024-01-01T01:01:01.123Z',
          externalRemarkId: '23ea2877a6f74d7d8f309567a5896441',
          text: 'Example air event remarks.',
          user: 'John Doe',
        },
      ],
      revTrack: true,
      rzct: '2024-01-07T13:55:43.123Z',
      rzPoint: 'AN',
      rzType: 'PP',
      shortTrack: true,
      statusCode: 'R',
      tankers: [
        {
          altTankerMissionId: '1UN05201L121',
          amcTankerMissionId: '8PH000B1S052',
          dualRole: true,
          externalTankerId: 'ca673c580fb949a5b733f0e0b67ffab2',
          fuelOff: 15000000.1,
          idTankerAirfield: 'b33955d2-67d3-42be-8316-263e284ce6cc',
          idTankerMission: 'edef700c-9917-4dbf-a153-89ffd4446fe9',
          idTankerSortie: 'd833a4bc-756b-41d5-8845-f146fe563387',
          tankerCallSign: 'BAKER',
          tankerCellPosition: 2,
          tankerCoord: 'TTC601',
          tankerDeliveryMethod: 'DROGUE',
          tankerDeployedICAO: 'KOFF',
          tankerFuelType: 'JP8',
          tankerLegNum: 825,
          tankerMDS: 'KC135R',
          tankerOwner: '117ARW',
          tankerPOC: 'JOHN SMITH (555)555-5555',
        },
      ],
      trackTime: 1.5,
    });
  });

  test('list', async () => {
    const responsePromise = client.airEvents.list();
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
      client.airEvents.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.airEvents.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.airEvents.count();
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
      client.airEvents.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.airEvents.createBulk({
      body: [{ classificationMarking: 'U', dataMode: 'TEST', source: 'Bluestaq', type: 'FUEL TRANSFER' }],
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
    const response = await client.airEvents.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          type: 'FUEL TRANSFER',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          actualArrTime: '2024-01-07T14:00:03.123Z',
          actualDepTime: '2024-01-07T14:17:03.123Z',
          arct: '2024-01-07T15:11:27.123Z',
          arEventType: 'V',
          arrPurpose: 'A',
          arTrackId: 'CH61',
          arTrackName: 'CH61 POST',
          baseAlt: 28000.1,
          cancelled: false,
          depPurpose: 'Q',
          estArrTime: '2024-01-07T13:59:48.123Z',
          estDepTime: '2024-01-07T14:19:48.123Z',
          externalAirEventId: 'MB014313032022407540',
          externalARTrackId: '6418a4b68e5c3896bf024cc79aa4174c',
          idMission: '190dea6d-2a90-45a2-a276-be9047d9b96c',
          idSortie: 'b9866c03-2397-4506-8153-852e72d9b54f',
          legNum: 825,
          location: '901EW',
          numTankers: 1,
          origin: 'THIRD_PARTY_DATASOURCE',
          plannedArrTime: '2024-01-07T13:55:43.123Z',
          plannedDepTime: '2024-01-07T14:15:43.123Z',
          priority: '1A2',
          receivers: [
            {
              altReceiverMissionId: '1UN05201L121',
              amcReceiverMissionId: '8PH000B1S052',
              externalReceiverId: '3fb8169f-adc1-4667-acab-8415a012d766',
              fuelOn: 15000000.1,
              idReceiverAirfield: '96c4c2ba-a031-4e58-9b8e-3c6fb90a7534',
              idReceiverMission: 'ce99757d-f733-461f-8939-3939d4f05946',
              idReceiverSortie: '1d03e85a-1fb9-4f6e-86a0-593306b6e3f0',
              numRecAircraft: 3,
              packageId: '135',
              receiverCallSign: 'BAKER',
              receiverCellPosition: 2,
              receiverCoord: 'TTC601',
              receiverDeliveryMethod: 'DROGUE',
              receiverDeployedICAO: 'KOFF',
              receiverExercise: 'NATO19',
              receiverFuelType: 'JP8',
              receiverLegNum: 825,
              receiverMDS: 'KC135R',
              receiverOwner: '117ARW',
              receiverPOC: 'JOHN SMITH (555)555-5555',
              recOrg: 'AMC',
              sequenceNum: '1018',
            },
          ],
          remarks: [
            {
              date: '2024-01-01T01:01:01.123Z',
              externalRemarkId: '23ea2877a6f74d7d8f309567a5896441',
              text: 'Example air event remarks.',
              user: 'John Doe',
            },
          ],
          revTrack: true,
          rzct: '2024-01-07T13:55:43.123Z',
          rzPoint: 'AN',
          rzType: 'PP',
          shortTrack: true,
          statusCode: 'R',
          tankers: [
            {
              altTankerMissionId: '1UN05201L121',
              amcTankerMissionId: '8PH000B1S052',
              dualRole: true,
              externalTankerId: 'ca673c580fb949a5b733f0e0b67ffab2',
              fuelOff: 15000000.1,
              idTankerAirfield: 'b33955d2-67d3-42be-8316-263e284ce6cc',
              idTankerMission: 'edef700c-9917-4dbf-a153-89ffd4446fe9',
              idTankerSortie: 'd833a4bc-756b-41d5-8845-f146fe563387',
              tankerCallSign: 'BAKER',
              tankerCellPosition: 2,
              tankerCoord: 'TTC601',
              tankerDeliveryMethod: 'DROGUE',
              tankerDeployedICAO: 'KOFF',
              tankerFuelType: 'JP8',
              tankerLegNum: 825,
              tankerMDS: 'KC135R',
              tankerOwner: '117ARW',
              tankerPOC: 'JOHN SMITH (555)555-5555',
            },
          ],
          trackTime: 1.5,
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.airEvents.get('id');
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
      client.airEvents.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.airEvents.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.airEvents.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.airEvents.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.airEvents.unvalidatedPublish({
      body: [{ classificationMarking: 'U', dataMode: 'TEST', source: 'Bluestaq', type: 'FUEL TRANSFER' }],
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
    const response = await client.airEvents.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          type: 'FUEL TRANSFER',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          actualArrTime: '2024-01-07T14:00:03.123Z',
          actualDepTime: '2024-01-07T14:17:03.123Z',
          arct: '2024-01-07T15:11:27.123Z',
          arEventType: 'V',
          arrPurpose: 'A',
          arTrackId: 'CH61',
          arTrackName: 'CH61 POST',
          baseAlt: 28000.1,
          cancelled: false,
          depPurpose: 'Q',
          estArrTime: '2024-01-07T13:59:48.123Z',
          estDepTime: '2024-01-07T14:19:48.123Z',
          externalAirEventId: 'MB014313032022407540',
          externalARTrackId: '6418a4b68e5c3896bf024cc79aa4174c',
          idMission: '190dea6d-2a90-45a2-a276-be9047d9b96c',
          idSortie: 'b9866c03-2397-4506-8153-852e72d9b54f',
          legNum: 825,
          location: '901EW',
          numTankers: 1,
          origin: 'THIRD_PARTY_DATASOURCE',
          plannedArrTime: '2024-01-07T13:55:43.123Z',
          plannedDepTime: '2024-01-07T14:15:43.123Z',
          priority: '1A2',
          receivers: [
            {
              altReceiverMissionId: '1UN05201L121',
              amcReceiverMissionId: '8PH000B1S052',
              externalReceiverId: '3fb8169f-adc1-4667-acab-8415a012d766',
              fuelOn: 15000000.1,
              idReceiverAirfield: '96c4c2ba-a031-4e58-9b8e-3c6fb90a7534',
              idReceiverMission: 'ce99757d-f733-461f-8939-3939d4f05946',
              idReceiverSortie: '1d03e85a-1fb9-4f6e-86a0-593306b6e3f0',
              numRecAircraft: 3,
              packageId: '135',
              receiverCallSign: 'BAKER',
              receiverCellPosition: 2,
              receiverCoord: 'TTC601',
              receiverDeliveryMethod: 'DROGUE',
              receiverDeployedICAO: 'KOFF',
              receiverExercise: 'NATO19',
              receiverFuelType: 'JP8',
              receiverLegNum: 825,
              receiverMDS: 'KC135R',
              receiverOwner: '117ARW',
              receiverPOC: 'JOHN SMITH (555)555-5555',
              recOrg: 'AMC',
              sequenceNum: '1018',
            },
          ],
          remarks: [
            {
              date: '2024-01-01T01:01:01.123Z',
              externalRemarkId: '23ea2877a6f74d7d8f309567a5896441',
              text: 'Example air event remarks.',
              user: 'John Doe',
            },
          ],
          revTrack: true,
          rzct: '2024-01-07T13:55:43.123Z',
          rzPoint: 'AN',
          rzType: 'PP',
          shortTrack: true,
          statusCode: 'R',
          tankers: [
            {
              altTankerMissionId: '1UN05201L121',
              amcTankerMissionId: '8PH000B1S052',
              dualRole: true,
              externalTankerId: 'ca673c580fb949a5b733f0e0b67ffab2',
              fuelOff: 15000000.1,
              idTankerAirfield: 'b33955d2-67d3-42be-8316-263e284ce6cc',
              idTankerMission: 'edef700c-9917-4dbf-a153-89ffd4446fe9',
              idTankerSortie: 'd833a4bc-756b-41d5-8845-f146fe563387',
              tankerCallSign: 'BAKER',
              tankerCellPosition: 2,
              tankerCoord: 'TTC601',
              tankerDeliveryMethod: 'DROGUE',
              tankerDeployedICAO: 'KOFF',
              tankerFuelType: 'JP8',
              tankerLegNum: 825,
              tankerMDS: 'KC135R',
              tankerOwner: '117ARW',
              tankerPOC: 'JOHN SMITH (555)555-5555',
            },
          ],
          trackTime: 1.5,
        },
      ],
    });
  });
});
