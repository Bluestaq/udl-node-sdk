// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ecpsdr', () => {
  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.ecpsdr.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        msgTime: '2018-01-01T16:00:00.123Z',
        source: 'Bluestaq',
        type: 'STANDARD',
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

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.ecpsdr.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        msgTime: '2018-01-01T16:00:00.123Z',
        source: 'Bluestaq',
        type: 'STANDARD',
        id: 'ECPSDR-ID',
        asl5VCurrMon: 12,
        cdsPlateVMon: 12,
        cdsRefVMon: 12,
        cdsThreshold: 12,
        cdsThrottle: 12,
        checksum: 12,
        dosBias: 12,
        dsl5VCurrMon: 12,
        esdTrigCountH: 12,
        esdTrigCountL: 12,
        hiLetL: 2,
        hiLetM: 2,
        idSensor: 'SENSOR-ID',
        lowLetL: 2,
        lowLetM: 2,
        medLet1L: 2,
        medLet1M: 2,
        medLet2L: 2,
        medLet2M: 2,
        medLet3L: 2,
        medLet3M: 2,
        medLet4L: 2,
        medLet4M: 2,
        mpTemp: 12,
        obTime: '2018-01-01T16:00:00.123Z',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        origSensorId: 'ORIGSENSOR-ID',
        pd1SigLev: 12,
        pd2SigLev: 12,
        psTempMon: 12,
        retransmit: true,
        satNo: 101,
        senMode: 'TEST',
        surfDosChargeH: 12,
        surfDosChargeL: 12,
        surfDosH: 12,
        surfDosL: 12,
        surfDosM: 12,
        surfDosStat: 2,
        transientData: [1, 2, 3],
        vRef: 12,
      },
    ]);
  });
});
