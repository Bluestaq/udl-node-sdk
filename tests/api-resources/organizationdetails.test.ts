// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizationdetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.organizationdetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOrganization: 'ORGANIZATION-ID',
      name: 'some.user',
      source: 'some.user',
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
    const response = await client.organizationdetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOrganization: 'ORGANIZATION-ID',
      name: 'some.user',
      source: 'some.user',
      id: 'ORGANIZATIONDETAILS-ID',
      address1: '123 Main Street',
      address2: 'Apt 4B',
      address3: 'Colorado Springs CO, 80903',
      broker: 'some.user',
      ceo: 'some.user',
      cfo: 'some.user',
      cto: 'some.user',
      description: 'Example description',
      ebitda: 123.4,
      email: 'some_organization@organization.com',
      financialNotes: 'Example notes',
      financialYearEndDate: '2021-01-01T01:01:01.123Z',
      fleetPlanNotes: 'Example notes',
      formerOrgId: 'FORMERORG-ID',
      ftes: 123,
      geoAdminLevel1: 'Colorado',
      geoAdminLevel2: 'El Paso County',
      geoAdminLevel3: 'Colorado Springs',
      massRanking: 123,
      origin: 'some.user',
      parentOrgId: 'PARENTORG-ID',
      postalCode: '80903',
      profit: 123.4,
      revenue: 123.4,
      revenueRanking: 123,
      riskManager: 'some.user',
      servicesNotes: 'Example notes',
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.organizationdetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOrganization: 'ORGANIZATION-ID',
      name: 'some.user',
      source: 'some.user',
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
    const response = await client.organizationdetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOrganization: 'ORGANIZATION-ID',
      name: 'some.user',
      source: 'some.user',
      body_id: 'ORGANIZATIONDETAILS-ID',
      address1: '123 Main Street',
      address2: 'Apt 4B',
      address3: 'Colorado Springs CO, 80903',
      broker: 'some.user',
      ceo: 'some.user',
      cfo: 'some.user',
      cto: 'some.user',
      description: 'Example description',
      ebitda: 123.4,
      email: 'some_organization@organization.com',
      financialNotes: 'Example notes',
      financialYearEndDate: '2021-01-01T01:01:01.123Z',
      fleetPlanNotes: 'Example notes',
      formerOrgId: 'FORMERORG-ID',
      ftes: 123,
      geoAdminLevel1: 'Colorado',
      geoAdminLevel2: 'El Paso County',
      geoAdminLevel3: 'Colorado Springs',
      massRanking: 123,
      origin: 'some.user',
      parentOrgId: 'PARENTORG-ID',
      postalCode: '80903',
      profit: 123.4,
      revenue: 123.4,
      revenueRanking: 123,
      riskManager: 'some.user',
      servicesNotes: 'Example notes',
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.organizationdetails.list({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.organizationdetails.list({ name: 'name' });
  });

  test('delete', async () => {
    const responsePromise = client.organizationdetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('findBySource: only required params', async () => {
    const responsePromise = client.organizationdetails.findBySource({ name: 'name', source: 'source' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('findBySource: required and optional params', async () => {
    const response = await client.organizationdetails.findBySource({ name: 'name', source: 'source' });
  });

  test('get', async () => {
    const responsePromise = client.organizationdetails.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
