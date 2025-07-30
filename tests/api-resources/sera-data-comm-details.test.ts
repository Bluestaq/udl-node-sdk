// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource seraDataCommDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.seraDataCommDetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
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
    const response = await client.seraDataCommDetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      id: 'SERADATACOMMDETAILS-ID',
      band: 'X',
      bandwidth: 1.23,
      eirp: 1.23,
      estHtsTotalCapacity: 1.23,
      estHtsTotalUserDownlinkBandwidthPerBeam: 1.23,
      estHtsTotalUserUplinkBandwidthPerBeam: 1.23,
      gatewayDownlinkFrom: 1.23,
      gatewayDownlinkTo: 1.23,
      gatewayUplinkFrom: 1.23,
      gatewayUplinkTo: 1.23,
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      htsNumUserSpotBeams: 1,
      htsUserDownlinkBandwidthPerBeam: 1.23,
      htsUserUplinkBandwidthPerBeam: 1.23,
      idComm: 'idComm',
      manufacturerOrgId: 'manufacturerOrgId',
      num36MhzEquivalentTransponders: 1,
      numOperationalTransponders: 1,
      numSpareTransponders: 1,
      origin: 'THIRD_PARTY_DATASOURCE',
      payloadNotes: 'Sample Notes',
      polarization: 'polarization',
      solidStatePowerAmp: 1.23,
      spacecraftId: 'spacecraftId',
      tradeLeaseOrgId: 'tradeLeaseOrgId',
      travelingWaveTubeAmplifier: 1.23,
      userDownlinkFrom: 1.23,
      userDownlinkTo: 1.23,
      userUplinkFrom: 1.23,
      userUplinkTo: 1.23,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.seraDataCommDetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
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
    const response = await client.seraDataCommDetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      body_id: 'SERADATACOMMDETAILS-ID',
      band: 'X',
      bandwidth: 1.23,
      eirp: 1.23,
      estHtsTotalCapacity: 1.23,
      estHtsTotalUserDownlinkBandwidthPerBeam: 1.23,
      estHtsTotalUserUplinkBandwidthPerBeam: 1.23,
      gatewayDownlinkFrom: 1.23,
      gatewayDownlinkTo: 1.23,
      gatewayUplinkFrom: 1.23,
      gatewayUplinkTo: 1.23,
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      htsNumUserSpotBeams: 1,
      htsUserDownlinkBandwidthPerBeam: 1.23,
      htsUserUplinkBandwidthPerBeam: 1.23,
      idComm: 'idComm',
      manufacturerOrgId: 'manufacturerOrgId',
      num36MhzEquivalentTransponders: 1,
      numOperationalTransponders: 1,
      numSpareTransponders: 1,
      origin: 'THIRD_PARTY_DATASOURCE',
      payloadNotes: 'Sample Notes',
      polarization: 'polarization',
      solidStatePowerAmp: 1.23,
      spacecraftId: 'spacecraftId',
      tradeLeaseOrgId: 'tradeLeaseOrgId',
      travelingWaveTubeAmplifier: 1.23,
      userDownlinkFrom: 1.23,
      userDownlinkTo: 1.23,
      userUplinkFrom: 1.23,
      userUplinkTo: 1.23,
    });
  });

  test('list', async () => {
    const responsePromise = client.seraDataCommDetails.list();
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
      client.seraDataCommDetails.list(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.seraDataCommDetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.seraDataCommDetails.count();
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
      client.seraDataCommDetails.count(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.seraDataCommDetails.get('id');
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
      client.seraDataCommDetails.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.seraDataCommDetails.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.seraDataCommDetails.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.seraDataCommDetails.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
