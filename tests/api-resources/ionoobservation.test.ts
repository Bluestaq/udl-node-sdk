// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ionoobservation', () => {
  test('list: only required params', async () => {
    const responsePromise = client.ionoobservation.list({ startTimeUTC: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.ionoobservation.list({
      startTimeUTC: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.ionoobservation.count({ startTimeUTC: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.ionoobservation.count({
      startTimeUTC: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.ionoobservation.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          startTimeUTC: '2021-01-01T01:01:01.123456Z',
          stationId: 'STATION-ID',
          system: 'Example hardware type',
          systemInfo: 'Example settings',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.ionoobservation.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          startTimeUTC: '2021-01-01T01:01:01.123456Z',
          stationId: 'STATION-ID',
          system: 'Example hardware type',
          systemInfo: 'Example settings',
          id: 'IONOOBSERVATION-ID',
          amplitude: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [4, 5],
            notes: 'NOTES',
          },
          antennaElementPosition: {
            data: [[1.23, 0.123]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [3, 4],
          },
          antennaElementPositionCoordinateSystem: 'J2000',
          artistFlags: [1, 2, 3],
          azimuth: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          b0: 68.07,
          b1: 1.87,
          charAtts: [
            {
              charName: 'hprimeF2',
              climateModelInputParams: ['ISSN1 88.1', 'Option 2'],
              climateModelName: 'IRI',
              climateModelOptions: ['URSI-88', 'No storm'],
              d: 'K',
              lowerBound: 1.26,
              q: 'T',
              uncertaintyBoundType: '1sigma',
              upperBound: 2.57,
              ursiID: '04',
            },
          ],
          d: 1.1,
          d1: 1.94,
          datum: { data: [1.1, 2.1, 3.1], notes: 'NOTES' },
          deltafoF2: 1.1,
          densityProfile: {
            iri: {
              b0: 245.1,
              b1: 3.45,
              chi: 35.1,
              d1: 0,
              description:
                'Full altitude range of 1D vertical plasma density profile for D, E, and F regions of the ionosphere provided by IRI, in which model parameters are replaced with observed ionogram-derived data where available.',
              fp1: 0.0474732023322638,
              fp2: -0.00112685246984002,
              fp30: 0.00827559450035957,
              fp3U: 0.000201178475411428,
              ha: 50.1,
              hdx: 85.6,
              hmD: 81.1,
              hmE: 99.8,
              hmF1: 210.3,
              hmF2: 265.42,
              hValTop: 116.2,
              hz: 142.7,
              nmD: 937543116.1,
              nmE: 154164.1,
              nmF1: 210486,
              nmF2: 313283.1,
              nValB: 147025.1,
            },
            parabolic: {
              description: 'Best-fit algorithm in NHPC software.',
              parabolicItems: [{ f: 3.621, layer: 'E', y: 11.1, z: 110.2 }],
            },
            quasiParabolic: {
              description:
                'Array of the best-fit 3-parameter quasi-parabolas defined via A, B, C coefficients, f^2=A/r^2+B/r+C',
              earthRadius: 6370.1,
              quasiParabolicSegments: [
                {
                  a: -550273940000,
                  b: 169837632,
                  c: 13104.63,
                  error: 0.0016,
                  index: 12,
                  rb: 6460.1,
                  re: 6480.001,
                },
              ],
            },
            shiftedChebyshev: {
              description: 'Best-fit Huang-Reinisch formalism based on shifted Chebyshev expansion.',
              shiftedChebyshevs: [
                {
                  coeffs: [-11.2, -10.536, 3.357, -0.888, 0.155],
                  error: 0.02,
                  fstart: 0.2,
                  fstop: 1.39,
                  layer: 'F2',
                  n: 5,
                  peakheight: 110.1,
                  zhalfNm: 210.1,
                },
              ],
            },
            topsideExtensionChapmanConst: {
              chi: 35.1,
              description:
                'Constant scale height Chapman topside layer determined using bottomside peak density parameters and placed chi km above the ionosonde-determined peak height.',
              hmF2: 265.42,
              nmF2: 313283.1,
              scaleF2: 45.191,
            },
            topsideExtensionVaryChap: {
              alpha: 30.1,
              beta: 30.1,
              chi: 30.1,
              description:
                'Constant scale height Chapman topside layer determined using bottomside peak density parameters and placed chi km above the ionosonde-determined peak height.',
              hmF2: 265.42,
              ht: 30.1,
              nmF2: 313283.1,
              scaleF2: 45.191,
            },
            valleyModelCoeffs: [39.597, 0.1777],
            valleyModelDescription:
              '2-parameter UMLCAR model with width W in km and depth D in MHz, no fitting.',
          },
          doppler: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          downE: 1.1,
          downEs: 1.1,
          downF: 1.1,
          electronDensity: [1.1, 2.1, 3.1],
          electronDensityUncertainty: [0.8, 0.2, 0.5],
          elevation: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [2, 3],
            notes: 'NOTES',
          },
          fbEs: 34.867,
          fe: 1.23,
          ff: 0.075,
          fhprimeF: 2.5,
          fhprimeF2: 2.5,
          fmin: 2.025,
          fminE: 2.025,
          fminEs: 1.1,
          fminF: 2.7,
          fmuf: 1.1,
          foE: 1.1,
          foEa: 45.764,
          foEp: 1.1,
          foEs: 2.35,
          foF1: 8.2,
          foF1p: 1.1,
          foF2: 6.75,
          foF2p: 1.1,
          foP: 87.21,
          frequency: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          fxE: 1.1,
          fxF1: 4.2,
          fxF2: 4.5,
          fxI: 7.525,
          height: [1.1, 2.1, 3.1],
          hmE: 215.643,
          hmF1: 230.128,
          hmF2: 240.498,
          hprimeE: 98.47,
          hprimeEa: 102.6,
          hprimeEs: 95,
          hprimeF: 238.5,
          hprimeF1: 230.1,
          hprimeF2: 238.5,
          hprimefMUF: 1.1,
          hprimeP: 89.45,
          idSensor: 'SENSOR-ID',
          luf: 1.1,
          md: 1.1,
          mufd: 1.1,
          neProfileName: 'NH',
          neProfileVersion: 4.32,
          origin: 'THIRD_PARTY_DATASOURCE',
          origSensorId: 'ORIGSENSOR-ID',
          phase: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          plasmaFrequency: [1.1, 2.1, 3.1],
          plasmaFrequencyUncertainty: [0.8, 0.2, 0.5],
          platformName: 'Millstone Hill',
          polarization: {
            data: [[[[[[['X', 'O']]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          power: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          qe: 0.95,
          qf: 1.83,
          range: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          receiveCoordinates: [
            [45.5, 179.3, 35.6],
            [-80.2, -20.5, 43.2],
          ],
          receiveSensorType: 'Mobile',
          restrictedFrequency: [12.5, 34.5, 45.3],
          restrictedFrequencyNotes: 'Example notes',
          scaleHeightF2Peak: 35.613,
          scalerInfo: {
            confidenceLevel: 11,
            confidenceScore: 75,
            name: 'ARTIST-4',
            organization: 'UML',
            type: 'MANUAL',
            version: 500200.1,
          },
          stokes: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAMES1', 'NAMES2'],
            dimensions: [2, 3],
            notes: 'NOTES',
            s: [1, 2],
          },
          systemNotes: 'Example notes',
          tec: 24.673,
          tidAzimuth: [1.1, 2.1, 3.1],
          tidPeriods: [1.1, 2.1, 3.1],
          tidPhaseSpeeds: [1.1, 2.1, 3.1],
          time: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          traceGeneric: { data: [[[1.23, 1.0903]]], dimensionName: ['NAME1', 'NAME2'], notes: 'NOTES' },
          transmitCoordinates: [
            [45.5, 179.3, 35.6],
            [-80.2, -20.5, 43.2],
          ],
          transmitSensorType: 'Mobile',
          typeEs: 'Auroral',
          yE: 1.722,
          yF1: 55.645,
          yF2: 62.178,
          zhalfNm: 240.498,
          zmE: 91.744,
        },
      ],
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.ionoobservation.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.ionoobservation.tuple({
      columns: 'columns',
      startTimeUTC: '2019-12-27T18:11:19.117Z',
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
    const response = await client.ionoobservation.tuple({
      columns: 'columns',
      startTimeUTC: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.ionoobservation.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          startTimeUTC: '2021-01-01T01:01:01.123456Z',
          stationId: 'STATION-ID',
          system: 'Example hardware type',
          systemInfo: 'Example settings',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.ionoobservation.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          startTimeUTC: '2021-01-01T01:01:01.123456Z',
          stationId: 'STATION-ID',
          system: 'Example hardware type',
          systemInfo: 'Example settings',
          id: 'IONOOBSERVATION-ID',
          amplitude: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [4, 5],
            notes: 'NOTES',
          },
          antennaElementPosition: {
            data: [[1.23, 0.123]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [3, 4],
          },
          antennaElementPositionCoordinateSystem: 'J2000',
          artistFlags: [1, 2, 3],
          azimuth: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          b0: 68.07,
          b1: 1.87,
          charAtts: [
            {
              charName: 'hprimeF2',
              climateModelInputParams: ['ISSN1 88.1', 'Option 2'],
              climateModelName: 'IRI',
              climateModelOptions: ['URSI-88', 'No storm'],
              d: 'K',
              lowerBound: 1.26,
              q: 'T',
              uncertaintyBoundType: '1sigma',
              upperBound: 2.57,
              ursiID: '04',
            },
          ],
          d: 1.1,
          d1: 1.94,
          datum: { data: [1.1, 2.1, 3.1], notes: 'NOTES' },
          deltafoF2: 1.1,
          densityProfile: {
            iri: {
              b0: 245.1,
              b1: 3.45,
              chi: 35.1,
              d1: 0,
              description:
                'Full altitude range of 1D vertical plasma density profile for D, E, and F regions of the ionosphere provided by IRI, in which model parameters are replaced with observed ionogram-derived data where available.',
              fp1: 0.0474732023322638,
              fp2: -0.00112685246984002,
              fp30: 0.00827559450035957,
              fp3U: 0.000201178475411428,
              ha: 50.1,
              hdx: 85.6,
              hmD: 81.1,
              hmE: 99.8,
              hmF1: 210.3,
              hmF2: 265.42,
              hValTop: 116.2,
              hz: 142.7,
              nmD: 937543116.1,
              nmE: 154164.1,
              nmF1: 210486,
              nmF2: 313283.1,
              nValB: 147025.1,
            },
            parabolic: {
              description: 'Best-fit algorithm in NHPC software.',
              parabolicItems: [{ f: 3.621, layer: 'E', y: 11.1, z: 110.2 }],
            },
            quasiParabolic: {
              description:
                'Array of the best-fit 3-parameter quasi-parabolas defined via A, B, C coefficients, f^2=A/r^2+B/r+C',
              earthRadius: 6370.1,
              quasiParabolicSegments: [
                {
                  a: -550273940000,
                  b: 169837632,
                  c: 13104.63,
                  error: 0.0016,
                  index: 12,
                  rb: 6460.1,
                  re: 6480.001,
                },
              ],
            },
            shiftedChebyshev: {
              description: 'Best-fit Huang-Reinisch formalism based on shifted Chebyshev expansion.',
              shiftedChebyshevs: [
                {
                  coeffs: [-11.2, -10.536, 3.357, -0.888, 0.155],
                  error: 0.02,
                  fstart: 0.2,
                  fstop: 1.39,
                  layer: 'F2',
                  n: 5,
                  peakheight: 110.1,
                  zhalfNm: 210.1,
                },
              ],
            },
            topsideExtensionChapmanConst: {
              chi: 35.1,
              description:
                'Constant scale height Chapman topside layer determined using bottomside peak density parameters and placed chi km above the ionosonde-determined peak height.',
              hmF2: 265.42,
              nmF2: 313283.1,
              scaleF2: 45.191,
            },
            topsideExtensionVaryChap: {
              alpha: 30.1,
              beta: 30.1,
              chi: 30.1,
              description:
                'Constant scale height Chapman topside layer determined using bottomside peak density parameters and placed chi km above the ionosonde-determined peak height.',
              hmF2: 265.42,
              ht: 30.1,
              nmF2: 313283.1,
              scaleF2: 45.191,
            },
            valleyModelCoeffs: [39.597, 0.1777],
            valleyModelDescription:
              '2-parameter UMLCAR model with width W in km and depth D in MHz, no fitting.',
          },
          doppler: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          downE: 1.1,
          downEs: 1.1,
          downF: 1.1,
          electronDensity: [1.1, 2.1, 3.1],
          electronDensityUncertainty: [0.8, 0.2, 0.5],
          elevation: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [2, 3],
            notes: 'NOTES',
          },
          fbEs: 34.867,
          fe: 1.23,
          ff: 0.075,
          fhprimeF: 2.5,
          fhprimeF2: 2.5,
          fmin: 2.025,
          fminE: 2.025,
          fminEs: 1.1,
          fminF: 2.7,
          fmuf: 1.1,
          foE: 1.1,
          foEa: 45.764,
          foEp: 1.1,
          foEs: 2.35,
          foF1: 8.2,
          foF1p: 1.1,
          foF2: 6.75,
          foF2p: 1.1,
          foP: 87.21,
          frequency: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          fxE: 1.1,
          fxF1: 4.2,
          fxF2: 4.5,
          fxI: 7.525,
          height: [1.1, 2.1, 3.1],
          hmE: 215.643,
          hmF1: 230.128,
          hmF2: 240.498,
          hprimeE: 98.47,
          hprimeEa: 102.6,
          hprimeEs: 95,
          hprimeF: 238.5,
          hprimeF1: 230.1,
          hprimeF2: 238.5,
          hprimefMUF: 1.1,
          hprimeP: 89.45,
          idSensor: 'SENSOR-ID',
          luf: 1.1,
          md: 1.1,
          mufd: 1.1,
          neProfileName: 'NH',
          neProfileVersion: 4.32,
          origin: 'THIRD_PARTY_DATASOURCE',
          origSensorId: 'ORIGSENSOR-ID',
          phase: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          plasmaFrequency: [1.1, 2.1, 3.1],
          plasmaFrequencyUncertainty: [0.8, 0.2, 0.5],
          platformName: 'Millstone Hill',
          polarization: {
            data: [[[[[[['X', 'O']]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          power: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          qe: 0.95,
          qf: 1.83,
          range: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          receiveCoordinates: [
            [45.5, 179.3, 35.6],
            [-80.2, -20.5, 43.2],
          ],
          receiveSensorType: 'Mobile',
          restrictedFrequency: [12.5, 34.5, 45.3],
          restrictedFrequencyNotes: 'Example notes',
          scaleHeightF2Peak: 35.613,
          scalerInfo: {
            confidenceLevel: 11,
            confidenceScore: 75,
            name: 'ARTIST-4',
            organization: 'UML',
            type: 'MANUAL',
            version: 500200.1,
          },
          stokes: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAMES1', 'NAMES2'],
            dimensions: [2, 3],
            notes: 'NOTES',
            s: [1, 2],
          },
          systemNotes: 'Example notes',
          tec: 24.673,
          tidAzimuth: [1.1, 2.1, 3.1],
          tidPeriods: [1.1, 2.1, 3.1],
          tidPhaseSpeeds: [1.1, 2.1, 3.1],
          time: {
            data: [[[[[[[0.02, 0.034]]]]]]],
            dimensionName: ['NAME1', 'NAME2'],
            dimensions: [1, 2],
            notes: 'NOTES',
          },
          traceGeneric: { data: [[[1.23, 1.0903]]], dimensionName: ['NAME1', 'NAME2'], notes: 'NOTES' },
          transmitCoordinates: [
            [45.5, 179.3, 35.6],
            [-80.2, -20.5, 43.2],
          ],
          transmitSensorType: 'Mobile',
          typeEs: 'Auroral',
          yE: 1.722,
          yF1: 55.645,
          yF2: 62.178,
          zhalfNm: 240.498,
          zmE: 91.744,
        },
      ],
    });
  });
});
