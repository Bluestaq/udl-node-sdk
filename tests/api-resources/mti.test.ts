// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mti', () => {
  test('list: only required params', async () => {
    const responsePromise = client.mti.list({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.mti.list({ createdAt: '2019-12-27' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.mti.count({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.mti.count({ createdAt: '2019-12-27' });
  });

  test('createBulk', async () => {
    const responsePromise = client.mti.createBulk();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.mti.createBulk({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('createBulk: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.mti.createBulk(
        [
          {
            classificationMarking: 'U',
            dataMode: 'REAL',
            source: 'Bluestaq',
            id: 'MTI-ID',
            dwells: [
              {
                d10: 1.2,
                d11: 1.2,
                d12: 12,
                d13: 12,
                d14: 12,
                d15: 1.2,
                d16: 12,
                d17: 2,
                d18: 2,
                d19: 12,
                d2: 12,
                d20: 12,
                d21: 1.2,
                d22: 12.23,
                d23: 12.23,
                d24: 12.23,
                d25: 12.23,
                d26: 12.23,
                d27: 12.23,
                d28: 12.23,
                d29: 12.23,
                d3: 12,
                d30: 12.23,
                d31: 1,
                d32: [
                  {
                    d32_1: 2,
                    d32_10: 'vehicle',
                    d32_11: 90,
                    d32_12: 2,
                    d32_13: 2,
                    d32_14: 2,
                    d32_15: 2,
                    d32_16: 2,
                    d32_17: 1234567890,
                    d32_18: 98,
                    d32_2: 20.23,
                    d32_3: 20.23,
                    d32_4: 2,
                    d32_5: 2,
                    d32_6: 2,
                    d32_7: 2,
                    d32_8: 2,
                    d32_9: 17,
                  },
                ],
                d4: false,
                d5: 12,
                d6: 1234567890,
                d7: 1.2,
                d8: 12,
                d9: 12,
                dwellts: '2018-01-01T16:00:00.123Z',
              },
            ],
            freeTexts: [{ f1: 'ORIGINATOR', f2: 'RECIPIENT', f3: 'TEXT' }],
            hrrs: [
              {
                h10: 1,
                h11: 12.23,
                h12: 12.23,
                h13: 12.23,
                h14: 12.23,
                h15: 12.23,
                h16: 'TABLE',
                h17: 'TABLE',
                h18: 'TABLE',
                h19: 12.23,
                h2: 12,
                h20: 117,
                h21: 1,
                h22: 1,
                h23: 'FIELD',
                h24: 'FLAG',
                h27: 1,
                h28: 1234567890,
                h29: 1,
                h3: 12,
                h30: 22,
                h31: 55,
                h32: [{ h32_1: 1, h32_2: 1, h32_3: 1, h32_4: 1 }],
                h4: true,
                h5: 12,
                h6: 12,
                h7: 12,
                h8: 12,
                h9: 1,
              },
            ],
            jobDefs: [
              {
                j1: 1234567890,
                j10: 10.23,
                j11: 10.23,
                j12: 10.23,
                j13: 10.23,
                j14: 'MODE',
                j15: 100,
                j16: 100,
                j17: 100,
                j18: 100,
                j19: 10,
                j2: 'TYPE',
                j20: 10,
                j21: 10,
                j22: 10.23,
                j23: 10,
                j24: 10,
                j25: 10,
                j26: 10,
                j27: 'MODEL',
                j28: 'MODEL',
                j3: 'J3-ID',
                j4: 3,
                j5: 1,
                j6: 10.23,
                j7: 10.23,
                j8: 10.23,
                j9: 10.23,
              },
            ],
            jobRequests: [
              {
                jobReqEst: '2018-01-01T16:00:00.123456Z',
                r1: 'REQUESTER',
                r10: 10.23,
                r11: 10.23,
                r12: 'MODE',
                r13: 10,
                r14: 100,
                r2: 'IDENTIFIER',
                r21: 10,
                r22: 10,
                r23: 100,
                r24: 'TYPE',
                r25: 'VARIANT',
                r26: true,
                r3: 15,
                r4: 10.23,
                r5: 10.23,
                r6: 10.23,
                r7: 10.23,
                r8: 10.23,
                r9: 10.23,
              },
            ],
            missions: [{ m1: 'M1-ID', m2: 'M2-ID', m3: 'PLATFORM', m4: 'IDENT', msnRefTs: '2018-01-01' }],
            origin: 'THIRD_PARTY_DATASOURCE',
            p10: 45,
            p3: 'NATIONALITY',
            p6: 'MARKING',
            p7: 'INDICATOR',
            p8: 'P8-ID',
            p9: 45,
            platformLocs: [
              {
                l1: 1234567890,
                l2: 45.23,
                l3: 45.23,
                l4: 45,
                l5: 45.23,
                l6: 50,
                l7: 82,
                platlocts: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
        ],
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.mti.fileCreate([
      { classificationMarking: 'U', dataMode: 'REAL', source: 'Bluestaq' },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fileCreate: required and optional params', async () => {
    const response = await client.mti.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        source: 'Bluestaq',
        id: 'MTI-ID',
        dwells: [
          {
            d10: 1.2,
            d11: 1.2,
            d12: 12,
            d13: 12,
            d14: 12,
            d15: 1.2,
            d16: 12,
            d17: 2,
            d18: 2,
            d19: 12,
            d2: 12,
            d20: 12,
            d21: 1.2,
            d22: 12.23,
            d23: 12.23,
            d24: 12.23,
            d25: 12.23,
            d26: 12.23,
            d27: 12.23,
            d28: 12.23,
            d29: 12.23,
            d3: 12,
            d30: 12.23,
            d31: 1,
            d32: [
              {
                d32_1: 2,
                d32_10: 'vehicle',
                d32_11: 90,
                d32_12: 2,
                d32_13: 2,
                d32_14: 2,
                d32_15: 2,
                d32_16: 2,
                d32_17: 1234567890,
                d32_18: 98,
                d32_2: 20.23,
                d32_3: 20.23,
                d32_4: 2,
                d32_5: 2,
                d32_6: 2,
                d32_7: 2,
                d32_8: 2,
                d32_9: 17,
              },
            ],
            d4: false,
            d5: 12,
            d6: 1234567890,
            d7: 1.2,
            d8: 12,
            d9: 12,
            dwellts: '2018-01-01T16:00:00.123Z',
          },
        ],
        freeTexts: [{ f1: 'ORIGINATOR', f2: 'RECIPIENT', f3: 'TEXT' }],
        hrrs: [
          {
            h10: 1,
            h11: 12.23,
            h12: 12.23,
            h13: 12.23,
            h14: 12.23,
            h15: 12.23,
            h16: 'TABLE',
            h17: 'TABLE',
            h18: 'TABLE',
            h19: 12.23,
            h2: 12,
            h20: 117,
            h21: 1,
            h22: 1,
            h23: 'FIELD',
            h24: 'FLAG',
            h27: 1,
            h28: 1234567890,
            h29: 1,
            h3: 12,
            h30: 22,
            h31: 55,
            h32: [{ h32_1: 1, h32_2: 1, h32_3: 1, h32_4: 1 }],
            h4: true,
            h5: 12,
            h6: 12,
            h7: 12,
            h8: 12,
            h9: 1,
          },
        ],
        jobDefs: [
          {
            j1: 1234567890,
            j10: 10.23,
            j11: 10.23,
            j12: 10.23,
            j13: 10.23,
            j14: 'MODE',
            j15: 100,
            j16: 100,
            j17: 100,
            j18: 100,
            j19: 10,
            j2: 'TYPE',
            j20: 10,
            j21: 10,
            j22: 10.23,
            j23: 10,
            j24: 10,
            j25: 10,
            j26: 10,
            j27: 'MODEL',
            j28: 'MODEL',
            j3: 'J3-ID',
            j4: 3,
            j5: 1,
            j6: 10.23,
            j7: 10.23,
            j8: 10.23,
            j9: 10.23,
          },
        ],
        jobRequests: [
          {
            jobReqEst: '2018-01-01T16:00:00.123456Z',
            r1: 'REQUESTER',
            r10: 10.23,
            r11: 10.23,
            r12: 'MODE',
            r13: 10,
            r14: 100,
            r2: 'IDENTIFIER',
            r21: 10,
            r22: 10,
            r23: 100,
            r24: 'TYPE',
            r25: 'VARIANT',
            r26: true,
            r3: 15,
            r4: 10.23,
            r5: 10.23,
            r6: 10.23,
            r7: 10.23,
            r8: 10.23,
            r9: 10.23,
          },
        ],
        missions: [{ m1: 'M1-ID', m2: 'M2-ID', m3: 'PLATFORM', m4: 'IDENT', msnRefTs: '2018-01-01' }],
        origin: 'THIRD_PARTY_DATASOURCE',
        p10: 45,
        p3: 'NATIONALITY',
        p6: 'MARKING',
        p7: 'INDICATOR',
        p8: 'P8-ID',
        p9: 45,
        platformLocs: [
          {
            l1: 1234567890,
            l2: 45.23,
            l3: 45.23,
            l4: 45,
            l5: 45.23,
            l6: 50,
            l7: 82,
            platlocts: '2019-12-27T18:11:19.117Z',
          },
        ],
      },
    ]);
  });

  test('queryhelp', async () => {
    const responsePromise = client.mti.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.mti.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.mti.tuple({ columns: 'columns', createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.mti.tuple({ columns: 'columns', createdAt: '2019-12-27' });
  });
});
