// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource seradataspacecraftdetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.seradataspacecraftdetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'name',
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
    const response = await client.seradataspacecraftdetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'name',
      source: 'Bluestaq',
      id: 'SERADATASPACECRAFTDETAILS-ID',
      additionalMissionsGroups: 'additionalMissionsGroups',
      altitude: 36036.6330576414,
      annualInsuredDepreciationFactor: 1.23,
      annualInsuredDepreciationFactorEstimated: true,
      apogee: 1.23,
      busId: 'BUS-ID',
      capabilityLost: 1.23,
      capacityLost: 1.23,
      catalogNumber: 1,
      collisionRiskCM: 1.43,
      collisionRiskMM: 1.33,
      combinedCostEstimated: true,
      combinedNewCost: 1.23,
      commercialLaunch: true,
      constellation: 'GPS',
      costEstimated: true,
      cubesatDispenserType: 'cubesatDispenserType',
      currentAge: 5.898630136986301,
      dateOfObservation: '2018-01-01T16:00:00.123Z',
      description: 'description',
      designLife: 231,
      dryMass: 1.23,
      expectedLife: 231,
      geoPosition: -8.23,
      idOnOrbit: '503',
      inclination: 1.23,
      insuranceLossesTotal: 0.393,
      insuranceNotes: 'Sample Notes',
      insurancePremiumAtLaunch: 1.23,
      insurancePremiumAtLaunchEstimated: true,
      insuredAtLaunch: true,
      insuredValueAtLaunch: 1.23,
      insuredValueLaunchEstimated: true,
      intlNumber: 'number',
      lat: 1.23,
      launchArranger: 'launchArranger',
      launchArrangerCountry: 'USA',
      launchCharacteristic: 'Expendable',
      launchCost: 1.23,
      launchCostEstimated: true,
      launchCountry: 'USA',
      launchDate: '2018-01-01T16:00:00.123Z',
      launchDateRemarks: 'launchDateRemarks',
      launchId: '11573',
      launchMass: 1.23,
      launchNotes: 'Sample Notes',
      launchNumber: 'FN040',
      launchProvider: 'launchProvider',
      launchProviderCountry: 'USA',
      launchProviderFlightNumber: 'launchProviderFlightNumber',
      launchSiteId: '28',
      launchSiteName: 'launchSiteName',
      launchType: 'Future',
      launchVehicleId: '123',
      leased: true,
      lifeLost: 1.23,
      lon: 1.23,
      massCategory: '2500 - 3500kg  - Large Satellite',
      nameAtLaunch: 'nameAtLaunch',
      newCost: 1.23,
      notes: 'Sample Notes',
      numHumans: 1,
      operator: 'operator',
      operatorCountry: 'USA',
      orbitCategory: 'GEO',
      orbitSubCategory: 'Geostationary',
      orderDate: '2018-01-01T16:00:00.123Z',
      origin: 'THIRD_PARTY_DATASOURCE',
      owner: 'owner',
      ownerCountry: 'USA',
      perigee: 1.23,
      period: 1.23,
      primaryMissionGroup: 'primaryMissionGroup',
      primeManufacturerOrgId: '05c43360-382e-4aa2-b875-ed28945ff2e5',
      programName: 'programName',
      quantity: 1,
      reusableFlights: 'reusableFlights',
      reusedHullName: 'reusedHullName',
      sector: 'Commercial',
      serialNumber: 'serialNumber',
      stabilizer: '3-Axis',
      status: 'Inactive - Retired',
      totalClaims: 1,
      totalFatalities: 1,
      totalInjuries: 1,
      totalPayloadPower: 1.23,
      youtubeLaunchLink: 'youtubeLaunchLink',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.seradataspacecraftdetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'name',
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
    const response = await client.seradataspacecraftdetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'name',
      source: 'Bluestaq',
      body_id: 'SERADATASPACECRAFTDETAILS-ID',
      additionalMissionsGroups: 'additionalMissionsGroups',
      altitude: 36036.6330576414,
      annualInsuredDepreciationFactor: 1.23,
      annualInsuredDepreciationFactorEstimated: true,
      apogee: 1.23,
      busId: 'BUS-ID',
      capabilityLost: 1.23,
      capacityLost: 1.23,
      catalogNumber: 1,
      collisionRiskCM: 1.43,
      collisionRiskMM: 1.33,
      combinedCostEstimated: true,
      combinedNewCost: 1.23,
      commercialLaunch: true,
      constellation: 'GPS',
      costEstimated: true,
      cubesatDispenserType: 'cubesatDispenserType',
      currentAge: 5.898630136986301,
      dateOfObservation: '2018-01-01T16:00:00.123Z',
      description: 'description',
      designLife: 231,
      dryMass: 1.23,
      expectedLife: 231,
      geoPosition: -8.23,
      idOnOrbit: '503',
      inclination: 1.23,
      insuranceLossesTotal: 0.393,
      insuranceNotes: 'Sample Notes',
      insurancePremiumAtLaunch: 1.23,
      insurancePremiumAtLaunchEstimated: true,
      insuredAtLaunch: true,
      insuredValueAtLaunch: 1.23,
      insuredValueLaunchEstimated: true,
      intlNumber: 'number',
      lat: 1.23,
      launchArranger: 'launchArranger',
      launchArrangerCountry: 'USA',
      launchCharacteristic: 'Expendable',
      launchCost: 1.23,
      launchCostEstimated: true,
      launchCountry: 'USA',
      launchDate: '2018-01-01T16:00:00.123Z',
      launchDateRemarks: 'launchDateRemarks',
      launchId: '11573',
      launchMass: 1.23,
      launchNotes: 'Sample Notes',
      launchNumber: 'FN040',
      launchProvider: 'launchProvider',
      launchProviderCountry: 'USA',
      launchProviderFlightNumber: 'launchProviderFlightNumber',
      launchSiteId: '28',
      launchSiteName: 'launchSiteName',
      launchType: 'Future',
      launchVehicleId: '123',
      leased: true,
      lifeLost: 1.23,
      lon: 1.23,
      massCategory: '2500 - 3500kg  - Large Satellite',
      nameAtLaunch: 'nameAtLaunch',
      newCost: 1.23,
      notes: 'Sample Notes',
      numHumans: 1,
      operator: 'operator',
      operatorCountry: 'USA',
      orbitCategory: 'GEO',
      orbitSubCategory: 'Geostationary',
      orderDate: '2018-01-01T16:00:00.123Z',
      origin: 'THIRD_PARTY_DATASOURCE',
      owner: 'owner',
      ownerCountry: 'USA',
      perigee: 1.23,
      period: 1.23,
      primaryMissionGroup: 'primaryMissionGroup',
      primeManufacturerOrgId: '05c43360-382e-4aa2-b875-ed28945ff2e5',
      programName: 'programName',
      quantity: 1,
      reusableFlights: 'reusableFlights',
      reusedHullName: 'reusedHullName',
      sector: 'Commercial',
      serialNumber: 'serialNumber',
      stabilizer: '3-Axis',
      status: 'Inactive - Retired',
      totalClaims: 1,
      totalFatalities: 1,
      totalInjuries: 1,
      totalPayloadPower: 1.23,
      youtubeLaunchLink: 'youtubeLaunchLink',
    });
  });

  test('list', async () => {
    const responsePromise = client.seradataspacecraftdetails.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.seradataspacecraftdetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.seradataspacecraftdetails.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.seradataspacecraftdetails.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.seradataspacecraftdetails.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.seradataspacecraftdetails.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.seradataspacecraftdetails.tuple({ columns: 'columns' });
  });
});
