// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource channels', () => {
  test('create: only required params', async () => {
    const responsePromise = client.channels.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idTransponder: 'REF-TRANSPONDER-ID',
      name: 'Example name',
      source: 'system.source',
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
    const response = await client.channels.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idTransponder: 'REF-TRANSPONDER-ID',
      name: 'Example name',
      source: 'system.source',
      id: 'CHANNEL-ID',
      apid: 'AP-ID',
      beamName: 'B8VD',
      compression: 'Example compression',
      encryption: 'Example encryption',
      idBeam: 'REF-BEAM-ID',
      idRFBand: 'REF-RFBAND-ID',
      origin: 'example_origin',
      owner: 'example_owner',
      pkg: 'Example pkg',
      res: 'Example res',
      sid: 'S-ID',
      type: 'Example type',
      vpid: 'VP-ID',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.channels.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.channels.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idTransponder: 'REF-TRANSPONDER-ID',
      name: 'Example name',
      source: 'system.source',
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
    const response = await client.channels.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idTransponder: 'REF-TRANSPONDER-ID',
      name: 'Example name',
      source: 'system.source',
      body_id: 'CHANNEL-ID',
      apid: 'AP-ID',
      beamName: 'B8VD',
      compression: 'Example compression',
      encryption: 'Example encryption',
      idBeam: 'REF-BEAM-ID',
      idRFBand: 'REF-RFBAND-ID',
      origin: 'example_origin',
      owner: 'example_owner',
      pkg: 'Example pkg',
      res: 'Example res',
      sid: 'S-ID',
      type: 'Example type',
      vpid: 'VP-ID',
    });
  });

  test('list', async () => {
    const responsePromise = client.channels.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.channels.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.channels.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.channels.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.channels.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.channels.tuple({ columns: 'columns' });
  });
});
