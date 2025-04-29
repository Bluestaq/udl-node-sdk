// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource surface', () => {
  test('create: only required params', async () => {
    const responsePromise = client.surface.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'West lot',
      source: 'Bluestaq',
      type: 'PARKING',
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
    const response = await client.surface.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'West lot',
      source: 'Bluestaq',
      type: 'PARKING',
      id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      altSiteId: 'ORIG-SITE-ID',
      condition: 'GOOD',
      ddtWtKip: 833.5,
      ddtWtKipMod: 625.125,
      ddtWtKipModNote: 'Observed 25% reduction in surface integrity.',
      ddtWtKN: 3705.44,
      ddWtKip: 416.25,
      ddWtKipMod: 312.1875,
      ddWtKipModNote: 'Observed 25% reduction in surface integrity.',
      ddWtKN: 1850.1,
      endLat: 45.844,
      endLon: -67.0094,
      idSite: 'SITE-ID',
      lcn: 50,
      ldaFt: 475.2,
      ldaM: 145.75,
      lengthFt: 1500.75,
      lengthM: 457.5,
      lighting: true,
      lightsAPRCH: true,
      lightsCL: true,
      lightsOLS: true,
      lightsPAPI: true,
      lightsREIL: true,
      lightsRWY: true,
      lightsSEQFL: true,
      lightsTDZL: true,
      lightsUNKN: false,
      lightsVASI: true,
      material: 'Concrete',
      obstacle: true,
      origin: 'THIRD_PARTY_DATASOURCE',
      pcn: '73RBWT',
      pointReference: 'Reference Point Example',
      primary: true,
      rawWBC: 'LCN 42',
      sbttWtKip: 603.025,
      sbttWtKipMod: 452.269,
      sbttWtKipModNote: 'Observed 25% reduction in surface integrity.',
      sbttWtKN: 2682.05,
      startLat: 46.757211,
      startLon: -67.759494,
      stWtKip: 195.75,
      stWtKipMod: 146.8125,
      stWtKipModNote: 'Observed 25% reduction in surface integrity.',
      stWtKN: 867.6,
      sWtKip: 143.5,
      sWtKipMod: 107.625,
      sWtKipModNote: 'Observed 25% reduction in surface integrity.',
      sWtKN: 636.4,
      tdtWtkip: 870.2,
      tdtWtKipMod: 652.65,
      tdtWtKipModNote: 'Serious 25 percent reduction.',
      tdtWtKN: 3870.05,
      trtWtKip: 622.85,
      trtWtKipMod: 467.1375,
      trtWtKipModNote: 'Observed 25% reduction in surface integrity.',
      trtWtKN: 2767.15,
      ttWtKip: 414.9,
      ttWtKipMod: 311.175,
      ttWtKipModNote: 'Observed 25% reduction in surface integrity.',
      ttWtKN: 1842.55,
      tWtKip: 188.2,
      tWtKipMod: 141.15,
      tWtKipModNote: 'Observed 25% reduction in surface integrity.',
      tWtKN: 836.45,
      widthFt: 220.3,
      widthM: 67.25,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.surface.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'West lot',
      source: 'Bluestaq',
      type: 'PARKING',
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
    const response = await client.surface.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'West lot',
      source: 'Bluestaq',
      type: 'PARKING',
      body_id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      altSiteId: 'ORIG-SITE-ID',
      condition: 'GOOD',
      ddtWtKip: 833.5,
      ddtWtKipMod: 625.125,
      ddtWtKipModNote: 'Observed 25% reduction in surface integrity.',
      ddtWtKN: 3705.44,
      ddWtKip: 416.25,
      ddWtKipMod: 312.1875,
      ddWtKipModNote: 'Observed 25% reduction in surface integrity.',
      ddWtKN: 1850.1,
      endLat: 45.844,
      endLon: -67.0094,
      idSite: 'SITE-ID',
      lcn: 50,
      ldaFt: 475.2,
      ldaM: 145.75,
      lengthFt: 1500.75,
      lengthM: 457.5,
      lighting: true,
      lightsAPRCH: true,
      lightsCL: true,
      lightsOLS: true,
      lightsPAPI: true,
      lightsREIL: true,
      lightsRWY: true,
      lightsSEQFL: true,
      lightsTDZL: true,
      lightsUNKN: false,
      lightsVASI: true,
      material: 'Concrete',
      obstacle: true,
      origin: 'THIRD_PARTY_DATASOURCE',
      pcn: '73RBWT',
      pointReference: 'Reference Point Example',
      primary: true,
      rawWBC: 'LCN 42',
      sbttWtKip: 603.025,
      sbttWtKipMod: 452.269,
      sbttWtKipModNote: 'Observed 25% reduction in surface integrity.',
      sbttWtKN: 2682.05,
      startLat: 46.757211,
      startLon: -67.759494,
      stWtKip: 195.75,
      stWtKipMod: 146.8125,
      stWtKipModNote: 'Observed 25% reduction in surface integrity.',
      stWtKN: 867.6,
      sWtKip: 143.5,
      sWtKipMod: 107.625,
      sWtKipModNote: 'Observed 25% reduction in surface integrity.',
      sWtKN: 636.4,
      tdtWtkip: 870.2,
      tdtWtKipMod: 652.65,
      tdtWtKipModNote: 'Serious 25 percent reduction.',
      tdtWtKN: 3870.05,
      trtWtKip: 622.85,
      trtWtKipMod: 467.1375,
      trtWtKipModNote: 'Observed 25% reduction in surface integrity.',
      trtWtKN: 2767.15,
      ttWtKip: 414.9,
      ttWtKipMod: 311.175,
      ttWtKipModNote: 'Observed 25% reduction in surface integrity.',
      ttWtKN: 1842.55,
      tWtKip: 188.2,
      tWtKipMod: 141.15,
      tWtKipModNote: 'Observed 25% reduction in surface integrity.',
      tWtKN: 836.45,
      widthFt: 220.3,
      widthM: 67.25,
    });
  });

  test('list', async () => {
    const responsePromise = client.surface.list();
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
      client.surface.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.surface.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.surface.count();
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
      client.surface.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.surface.get('id');
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
      client.surface.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.surface.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.surface.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.surface.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });
});
