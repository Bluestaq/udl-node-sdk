// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airTaskingOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airTaskingOrders.create({
      beginTs: '2019-12-27T18:11:19.117Z',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      opExerName: 'opExerName',
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
    const response = await client.airTaskingOrders.create({
      beginTs: '2019-12-27T18:11:19.117Z',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      opExerName: 'opExerName',
      source: 'source',
      id: 'id',
      ackReqInd: 'ackReqInd',
      ackUnitInstructions: 'ackUnitInstructions',
      acMsnTasking: [
        {
          countryCode: 'countryCode',
          taskedService: 'taskedService',
          unitDesignator: 'unitDesignator',
          acMsnLocSeg: [
            {
              startTime: '2019-12-27T18:11:19.117Z',
              airMsnPri: 'airMsnPri',
              alt: 0,
              areaGeoRad: 0,
              endTime: '2019-12-27T18:11:19.117Z',
              msnLocName: 'msnLocName',
              msnLocPtBarT: 'msnLocPtBarT',
              msnLocPtLat: 0,
              msnLocPtLon: 0,
              msnLocPtName: 'msnLocPtName',
            },
          ],
          alertStatus: 0,
          amcMsnNum: 'amcMsnNum',
          depLocLat: 0,
          depLocLon: 0,
          depLocName: 'depLocName',
          depLocUTM: 'depLocUTM',
          depTime: '2019-12-27T18:11:19.117Z',
          indACTasking: [
            {
              acftType: 'acftType',
              callSign: 'callSign',
              iffSifMode1Code: 'iffSifMode1Code',
              iffSifMode2Code: 'iffSifMode2Code',
              iffSifMode3Code: 'iffSifMode3Code',
              juAddress: [0],
              link16CallSign: 'link16CallSign',
              numAcft: 0,
              priConfigCode: 'priConfigCode',
              secConfigCode: 'secConfigCode',
              tacanChan: 0,
            },
          ],
          msnCommander: 'msnCommander',
          msnNum: 'msnNum',
          pkgId: 'pkgId',
          priMsnType: 'priMsnType',
          rcvyLocLat: [0],
          rcvyLocLon: [0],
          rcvyLocName: ['string'],
          rcvyLocUTM: ['string'],
          rcvyTime: ['2019-12-27T18:11:19.117Z'],
          resMsnInd: 'resMsnInd',
          secMsnType: 'secMsnType',
          unitLocName: 'unitLocName',
        },
      ],
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      endTs: '2019-12-27T18:11:19.117Z',
      genText: [{ text: 'text', textInd: 'textInd' }],
      msgMonth: 'msgMonth',
      msgOriginator: 'msgOriginator',
      msgQualifier: 'msgQualifier',
      msgSN: 'msgSN',
      navalFltOps: [
        {
          shipName: 'shipName',
          fltOpStart: '2019-12-27T18:11:19.117Z',
          fltOpStop: '2019-12-27T18:11:19.117Z',
          schdLaunchRcvyTime: ['2019-12-27T18:11:19.117Z'],
        },
      ],
      origin: 'origin',
      origNetwork: 'origNetwork',
      rawFileURI: 'rawFileURI',
      sourceDL: 'sourceDL',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.airTaskingOrders.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.airTaskingOrders.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('count', async () => {
    const responsePromise = client.airTaskingOrders.count();
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
    await expect(client.airTaskingOrders.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryHelp', async () => {
    const responsePromise = client.airTaskingOrders.queryHelp();
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
    await expect(client.airTaskingOrders.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.airTaskingOrders.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.airTaskingOrders.tuple({ columns: 'columns' });
  });
});
