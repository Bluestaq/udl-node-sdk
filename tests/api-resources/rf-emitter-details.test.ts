// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rfEmitterDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rfEmitterDetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idRFEmitter: 'RFEMITTER-ID',
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
    const response = await client.rfEmitterDetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idRFEmitter: 'RFEMITTER-ID',
      source: 'Bluestaq',
      id: 'ad88770b-d824-443f-bdce-5f9e3fa500a9',
      alternateFacilityName: 'ALTERNATE_FACILITY_NAME',
      altName: 'ALTERNATE_NAME',
      amplifier: {
        deviceIdentifier: '1200W_Amplifier_GE',
        manufacturer: 'General Electric',
        modelName: 'Model 2600',
        power: 1200.1,
      },
      antennas: [
        {
          antennaDiameter: 20.23,
          antennaSize: [1.1, 2.2],
          azElFixed: true,
          feeds: [{ freqMax: 43500.1, freqMin: 39500.1, name: 'Feed A', polarization: 'HORIZONTAL' }],
          fixedAzimuth: 5.1,
          fixedElevation: 10.1,
          maxAzimuths: [359.1, 359.1],
          maxElevation: 88.1,
          minAzimuths: [5.1, 7.5],
          minElevation: 10.1,
          name: 'ds1Rotor',
          receiverChannels: [
            {
              bandwidth: 0.51,
              channelNum: '315',
              deviceIdentifier: 'MMS1',
              freqMax: 43500.1,
              freqMin: 39500.1,
              maxBandwidth: 100.1,
              minBandwidth: 0.05,
              sensitivity: 10.23,
            },
          ],
          transmitChannels: [
            {
              power: 100.23,
              bandwidth: 0.125,
              channelNum: '12',
              deviceIdentifier: 'TX1-B4-778',
              freq: 42000.1,
              freqMax: 43500.1,
              freqMin: 39500.1,
              hardwareSampleRate: 192000,
              maxBandwidth: 100.1,
              maxGain: 20.1,
              minBandwidth: 0.05,
              minGain: 0.1,
              sampleRates: [192000, 9216000],
            },
          ],
        },
      ],
      barrageNoiseBandwidth: 5.23,
      bitRunTime: 120.1,
      description: 'DESCRIPTION',
      designator: 'DESIGNATOR',
      dopplerNoise: 10.23,
      drfmInstantaneousBandwidth: 20.23,
      family: 'FAMILY',
      fixedAttenuation: 5.1,
      idManufacturerOrg: 'MANUFACTURERORG-ID',
      idProductionFacilityLocation: 'PRODUCTIONFACILITYLOCATION-ID',
      loanedToCocom: 'SPACEFOR-STRATNORTH',
      notes: 'NOTES',
      numBits: 256,
      numChannels: 10,
      origin: 'THIRD_PARTY_DATASOURCE',
      powerOffsets: [{ frequencyBand: 'KU', powerOffset: -5.1 }],
      prepTime: 60.1,
      primaryCocom: 'SPACESOC',
      productionFacilityName: 'PRODUCTION_FACILITY',
      receiverType: 'RECEIVER_TYPE',
      secondaryNotes: 'MORE_NOTES',
      services: [{ name: 'tlc-freqcontrol', version: '17.2.5_build72199' }],
      systemSensitivityEnd: 150.23,
      systemSensitivityStart: 50.32,
      ttps: [
        {
          outputSignalName: 'SIGNAL_A',
          techniqueDefinitions: [
            {
              name: 'SIGNAL TUNE',
              paramDefinitions: [
                {
                  defaultValue: '444.0',
                  max: 1000.1,
                  min: 0.1,
                  name: 'CENTER_FREQ',
                  optional: false,
                  type: 'DOUBLE',
                  units: 'hertz',
                  validValues: ['100.1', '444.1', '1000.1'],
                },
              ],
            },
          ],
        },
      ],
      urls: ['TAG1', 'TAG2'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.rfEmitterDetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idRFEmitter: 'RFEMITTER-ID',
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
    const response = await client.rfEmitterDetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idRFEmitter: 'RFEMITTER-ID',
      source: 'Bluestaq',
      body_id: 'ad88770b-d824-443f-bdce-5f9e3fa500a9',
      alternateFacilityName: 'ALTERNATE_FACILITY_NAME',
      altName: 'ALTERNATE_NAME',
      amplifier: {
        deviceIdentifier: '1200W_Amplifier_GE',
        manufacturer: 'General Electric',
        modelName: 'Model 2600',
        power: 1200.1,
      },
      antennas: [
        {
          antennaDiameter: 20.23,
          antennaSize: [1.1, 2.2],
          azElFixed: true,
          feeds: [{ freqMax: 43500.1, freqMin: 39500.1, name: 'Feed A', polarization: 'HORIZONTAL' }],
          fixedAzimuth: 5.1,
          fixedElevation: 10.1,
          maxAzimuths: [359.1, 359.1],
          maxElevation: 88.1,
          minAzimuths: [5.1, 7.5],
          minElevation: 10.1,
          name: 'ds1Rotor',
          receiverChannels: [
            {
              bandwidth: 0.51,
              channelNum: '315',
              deviceIdentifier: 'MMS1',
              freqMax: 43500.1,
              freqMin: 39500.1,
              maxBandwidth: 100.1,
              minBandwidth: 0.05,
              sensitivity: 10.23,
            },
          ],
          transmitChannels: [
            {
              power: 100.23,
              bandwidth: 0.125,
              channelNum: '12',
              deviceIdentifier: 'TX1-B4-778',
              freq: 42000.1,
              freqMax: 43500.1,
              freqMin: 39500.1,
              hardwareSampleRate: 192000,
              maxBandwidth: 100.1,
              maxGain: 20.1,
              minBandwidth: 0.05,
              minGain: 0.1,
              sampleRates: [192000, 9216000],
            },
          ],
        },
      ],
      barrageNoiseBandwidth: 5.23,
      bitRunTime: 120.1,
      description: 'DESCRIPTION',
      designator: 'DESIGNATOR',
      dopplerNoise: 10.23,
      drfmInstantaneousBandwidth: 20.23,
      family: 'FAMILY',
      fixedAttenuation: 5.1,
      idManufacturerOrg: 'MANUFACTURERORG-ID',
      idProductionFacilityLocation: 'PRODUCTIONFACILITYLOCATION-ID',
      loanedToCocom: 'SPACEFOR-STRATNORTH',
      notes: 'NOTES',
      numBits: 256,
      numChannels: 10,
      origin: 'THIRD_PARTY_DATASOURCE',
      powerOffsets: [{ frequencyBand: 'KU', powerOffset: -5.1 }],
      prepTime: 60.1,
      primaryCocom: 'SPACESOC',
      productionFacilityName: 'PRODUCTION_FACILITY',
      receiverType: 'RECEIVER_TYPE',
      secondaryNotes: 'MORE_NOTES',
      services: [{ name: 'tlc-freqcontrol', version: '17.2.5_build72199' }],
      systemSensitivityEnd: 150.23,
      systemSensitivityStart: 50.32,
      ttps: [
        {
          outputSignalName: 'SIGNAL_A',
          techniqueDefinitions: [
            {
              name: 'SIGNAL TUNE',
              paramDefinitions: [
                {
                  defaultValue: '444.0',
                  max: 1000.1,
                  min: 0.1,
                  name: 'CENTER_FREQ',
                  optional: false,
                  type: 'DOUBLE',
                  units: 'hertz',
                  validValues: ['100.1', '444.1', '1000.1'],
                },
              ],
            },
          ],
        },
      ],
      urls: ['TAG1', 'TAG2'],
    });
  });

  test('list', async () => {
    const responsePromise = client.rfEmitterDetails.list();
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
      client.rfEmitterDetails.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.rfEmitterDetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.rfEmitterDetails.count();
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
      client.rfEmitterDetails.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.rfEmitterDetails.get('id');
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
      client.rfEmitterDetails.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.rfEmitterDetails.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.rfEmitterDetails.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.rfEmitterDetails.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
