// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource weatherReport', () => {
  test('create: only required params', async () => {
    const responsePromise = client.weatherReport.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      lat: 56.12,
      lon: -156.6,
      obTime: '2018-01-01T16:00:00.123456Z',
      reportType: 'FORECAST',
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
    const response = await client.weatherReport.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      lat: 56.12,
      lon: -156.6,
      obTime: '2018-01-01T16:00:00.123456Z',
      reportType: 'FORECAST',
      source: 'Bluestaq',
      id: 'WEATHER-REPORT-ID',
      actWeather: 'NO STATEMENT',
      agjson:
        '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
      alt: 123.12,
      andims: 2,
      area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      asrid: 4326,
      atext:
        'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      atype: 'ST_Polygon',
      barPress: 101.2,
      ccEvent: true,
      cloudCover: ['OVERCAST', 'BROKEN'],
      cloudHght: [1.2, 2.2],
      contrailHghtLower: 123.123,
      contrailHghtUpper: 123.123,
      dataLevel: 'MANDATORY',
      dewPoint: 15.6,
      difRad: 234.5,
      dirDev: 9.1,
      enRouteWeather: 'THUNDERSTORMS',
      externalId: 'GDSSMB022408301601304517',
      externalLocationId: 'TMDS060AD4OG03CC',
      forecastEndTime: '2024-01-01T18:00:00.123Z',
      forecastStartTime: '2024-01-01T16:00:00.123Z',
      geoPotentialAlt: 1000,
      hshear: 3.8,
      icao: 'KAFF',
      icingLowerLimit: 123.123,
      icingUpperLimit: 123.123,
      idAirfield: '8fb38d6d-a3de-45dd-8974-4e3ed73e9449',
      idGroundImagery: 'GROUND-IMAGERY-ID',
      idSensor: '0129f577-e04c-441e-65ca-0a04a750bed9',
      idSite: 'AIRFIELD-ID',
      indexRefraction: 1.1,
      origin: 'THIRD_PARTY_DATASOURCE',
      origSensorId: 'ORIGSENSOR-ID',
      precipRate: 3.4,
      qnh: 1234.456,
      radVel: -0.04,
      radVelBeam1: 4.4,
      radVelBeam2: -0.2,
      radVelBeam3: -0.2,
      radVelBeam4: 11.4,
      radVelBeam5: 4.1,
      rainHour: 1.2,
      rawMETAR:
        'KXYZ 241456Z 19012G20KT 10SM FEW120 SCT200 BKN250 26/M04 A2981 RMK AO2 PK WND 19026/1420 SLP068 T02611039 51015',
      rawTAF:
        'KXYZ 051730Z 0518/0624 31008KT 3SM -SHRA BKN020 FM052300 30006KT 5SM -SHRA OVC030 PROB30 0604/0606 VRB20G35KT 1SM TSRA BKN015CB FM060600 25010KT 4SM -SHRA OVC050 TEMPO 0608/0611 2SM -SHRA OVC030 RMK NXT FCST BY 00Z=',
      refRad: 56.7,
      relHumidity: 34.456,
      senalt: 1.23,
      senlat: 12.456,
      senlon: 123.456,
      soilMoisture: 3.5,
      soilTemp: 22.4,
      solarRad: 1234.456,
      srcIds: ['e609a90d-4059-4043-9f1a-fd7b49a3e1d0', 'c739fcdb-c0c9-43c0-97b6-bfc80d0ffd52'],
      srcTyps: ['SENSOR', 'WEATHERDATA'],
      surroundingWeather: 'NO STATEMENT',
      temperature: 23.45,
      visibility: 1234.456,
      vshear: 3.8,
      weatherAmp: 'NO STATEMENT',
      weatherDesc: 'NO STATEMENT',
      weatherId: 'WEATHER-ID',
      weatherInt: 'NO STATEMENT',
      windChill: 15.6,
      windCov: [1.1, 2.2],
      windDir: 75.1234,
      windDirAvg: 57.1,
      windDirPeak: 78.4,
      windDirPeak10: 44.5,
      windGust: 10.23,
      windGust10: 13.2,
      windSpd: 1.23,
      windSpdAvg: 12.1,
      windVar: false,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.weatherReport.list({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.weatherReport.list({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.weatherReport.count({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.weatherReport.count({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('get', async () => {
    const responsePromise = client.weatherReport.get('id');
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
      client.weatherReport.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.weatherReport.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.weatherReport.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.weatherReport.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.weatherReport.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          lat: 56.12,
          lon: -156.6,
          obTime: '2018-01-01T16:00:00.123456Z',
          reportType: 'FORECAST',
          source: 'Bluestaq',
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
    const response = await client.weatherReport.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          lat: 56.12,
          lon: -156.6,
          obTime: '2018-01-01T16:00:00.123456Z',
          reportType: 'FORECAST',
          source: 'Bluestaq',
          id: 'WEATHER-REPORT-ID',
          actWeather: 'NO STATEMENT',
          agjson:
            '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
          alt: 123.12,
          andims: 2,
          area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          asrid: 4326,
          atext:
            'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          atype: 'ST_Polygon',
          barPress: 101.2,
          ccEvent: true,
          cloudCover: ['OVERCAST', 'BROKEN'],
          cloudHght: [1.2, 2.2],
          contrailHghtLower: 123.123,
          contrailHghtUpper: 123.123,
          dataLevel: 'MANDATORY',
          dewPoint: 15.6,
          difRad: 234.5,
          dirDev: 9.1,
          enRouteWeather: 'THUNDERSTORMS',
          externalId: 'GDSSMB022408301601304517',
          externalLocationId: 'TMDS060AD4OG03CC',
          forecastEndTime: '2024-01-01T18:00:00.123Z',
          forecastStartTime: '2024-01-01T16:00:00.123Z',
          geoPotentialAlt: 1000,
          hshear: 3.8,
          icao: 'KAFF',
          icingLowerLimit: 123.123,
          icingUpperLimit: 123.123,
          idAirfield: '8fb38d6d-a3de-45dd-8974-4e3ed73e9449',
          idGroundImagery: 'GROUND-IMAGERY-ID',
          idSensor: '0129f577-e04c-441e-65ca-0a04a750bed9',
          idSite: 'AIRFIELD-ID',
          indexRefraction: 1.1,
          origin: 'THIRD_PARTY_DATASOURCE',
          origSensorId: 'ORIGSENSOR-ID',
          precipRate: 3.4,
          qnh: 1234.456,
          radVel: -0.04,
          radVelBeam1: 4.4,
          radVelBeam2: -0.2,
          radVelBeam3: -0.2,
          radVelBeam4: 11.4,
          radVelBeam5: 4.1,
          rainHour: 1.2,
          rawMETAR:
            'KXYZ 241456Z 19012G20KT 10SM FEW120 SCT200 BKN250 26/M04 A2981 RMK AO2 PK WND 19026/1420 SLP068 T02611039 51015',
          rawTAF:
            'KXYZ 051730Z 0518/0624 31008KT 3SM -SHRA BKN020 FM052300 30006KT 5SM -SHRA OVC030 PROB30 0604/0606 VRB20G35KT 1SM TSRA BKN015CB FM060600 25010KT 4SM -SHRA OVC050 TEMPO 0608/0611 2SM -SHRA OVC030 RMK NXT FCST BY 00Z=',
          refRad: 56.7,
          relHumidity: 34.456,
          senalt: 1.23,
          senlat: 12.456,
          senlon: 123.456,
          soilMoisture: 3.5,
          soilTemp: 22.4,
          solarRad: 1234.456,
          srcIds: ['e609a90d-4059-4043-9f1a-fd7b49a3e1d0', 'c739fcdb-c0c9-43c0-97b6-bfc80d0ffd52'],
          srcTyps: ['SENSOR', 'WEATHERDATA'],
          surroundingWeather: 'NO STATEMENT',
          temperature: 23.45,
          visibility: 1234.456,
          vshear: 3.8,
          weatherAmp: 'NO STATEMENT',
          weatherDesc: 'NO STATEMENT',
          weatherId: 'WEATHER-ID',
          weatherInt: 'NO STATEMENT',
          windChill: 15.6,
          windCov: [1.1, 2.2],
          windDir: 75.1234,
          windDirAvg: 57.1,
          windDirPeak: 78.4,
          windDirPeak10: 44.5,
          windGust: 10.23,
          windGust10: 13.2,
          windSpd: 1.23,
          windSpdAvg: 12.1,
          windVar: false,
        },
      ],
    });
  });
});
