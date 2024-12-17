// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ecpsdr', () => {
  test('create: only required params', async () => {
    const responsePromise = client.observations.ecpsdr.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      msgTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      type: 'type',
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
    const response = await client.observations.ecpsdr.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      msgTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      type: 'type',
      id: 'id',
      asl5VCurrMon: 0,
      cdsPlateVMon: 0,
      cdsRefVMon: 0,
      cdsThreshold: 0,
      cdsThrottle: 0,
      checksum: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      dosBias: 0,
      dsl5VCurrMon: 0,
      esdTrigCountH: 0,
      esdTrigCountL: 0,
      hiLetL: 0,
      hiLetM: 0,
      idOnOrbit: 'idOnOrbit',
      idSensor: 'idSensor',
      lowLetL: 0,
      lowLetM: 0,
      medLet1L: 0,
      medLet1M: 0,
      medLet2L: 0,
      medLet2M: 0,
      medLet3L: 0,
      medLet3M: 0,
      medLet4L: 0,
      medLet4M: 0,
      mpTemp: 0,
      obTime: '2019-12-27T18:11:19.117Z',
      origin: 'origin',
      origNetwork: 'origNetwork',
      origObjectId: 'origObjectId',
      origSensorId: 'origSensorId',
      pd1SigLev: 0,
      pd2SigLev: 0,
      psTempMon: 0,
      retransmit: true,
      satNo: 0,
      senMode: 'senMode',
      surfDosChargeH: 0,
      surfDosChargeL: 0,
      surfDosH: 0,
      surfDosL: 0,
      surfDosM: 0,
      surfDosStat: 0,
      transientData: [0],
      vRef: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.observations.ecpsdr.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.observations.ecpsdr.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.observations.ecpsdr.list({ msgTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.observations.ecpsdr.list({ msgTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.observations.ecpsdr.count({ msgTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.observations.ecpsdr.count({ msgTime: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.observations.ecpsdr.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        msgTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        type: 'type',
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
    const response = await client.observations.ecpsdr.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        msgTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        type: 'type',
        id: 'id',
        asl5VCurrMon: 0,
        cdsPlateVMon: 0,
        cdsRefVMon: 0,
        cdsThreshold: 0,
        cdsThrottle: 0,
        checksum: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        dosBias: 0,
        dsl5VCurrMon: 0,
        esdTrigCountH: 0,
        esdTrigCountL: 0,
        hiLetL: 0,
        hiLetM: 0,
        idOnOrbit: 'idOnOrbit',
        idSensor: 'idSensor',
        lowLetL: 0,
        lowLetM: 0,
        medLet1L: 0,
        medLet1M: 0,
        medLet2L: 0,
        medLet2M: 0,
        medLet3L: 0,
        medLet3M: 0,
        medLet4L: 0,
        medLet4M: 0,
        mpTemp: 0,
        obTime: '2019-12-27T18:11:19.117Z',
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        origSensorId: 'origSensorId',
        pd1SigLev: 0,
        pd2SigLev: 0,
        psTempMon: 0,
        retransmit: true,
        satNo: 0,
        senMode: 'senMode',
        surfDosChargeH: 0,
        surfDosChargeL: 0,
        surfDosH: 0,
        surfDosL: 0,
        surfDosM: 0,
        surfDosStat: 0,
        transientData: [0],
        vRef: 0,
      },
    ]);
  });

  test('queryHelp', async () => {
    const responsePromise = client.observations.ecpsdr.queryHelp();
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
    await expect(client.observations.ecpsdr.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.observations.ecpsdr.tuple({
      columns: 'columns',
      msgTime: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.observations.ecpsdr.tuple({
      columns: 'columns',
      msgTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
