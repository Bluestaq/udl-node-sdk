// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource weatherReports', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.weatherReports.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        lat: 0,
        lon: 0,
        obTime: '2019-12-27T18:11:19.117Z',
        reportType: 'reportType',
        source: 'source',
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

  test('create: required and optional params', async () => {
    const response = await client.filedrop.weatherReports.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        lat: 0,
        lon: 0,
        obTime: '2019-12-27T18:11:19.117Z',
        reportType: 'reportType',
        source: 'source',
        id: 'id',
        actWeather: 'actWeather',
        agjson: 'agjson',
        alt: 0,
        andims: 0,
        area: 'area',
        asrid: 0,
        atext: 'atext',
        atype: 'atype',
        barPress: 0,
        ccEvent: true,
        cloudCover: ['string'],
        cloudHght: [0],
        contrailHghtLower: 0,
        contrailHghtUpper: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        dataLevel: 'dataLevel',
        dewPoint: 0,
        difRad: 0,
        dirDev: 0,
        enRouteWeather: 'enRouteWeather',
        externalId: 'externalId',
        externalLocationId: 'externalLocationId',
        forecastEndTime: '2019-12-27T18:11:19.117Z',
        forecastStartTime: '2019-12-27T18:11:19.117Z',
        geoPotentialAlt: 0,
        hshear: 0,
        icao: 'icao',
        icingLowerLimit: 0,
        icingUpperLimit: 0,
        idAirfield: 'idAirfield',
        idGroundImagery: 'idGroundImagery',
        idSensor: 'idSensor',
        idSite: 'idSite',
        indexRefraction: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        origSensorId: 'origSensorId',
        precipRate: 0,
        qnh: 0,
        radVel: 0,
        radVelBeam1: 0,
        radVelBeam2: 0,
        radVelBeam3: 0,
        radVelBeam4: 0,
        radVelBeam5: 0,
        rainHour: 0,
        rawMETAR: 'rawMETAR',
        rawTAF: 'rawTAF',
        refRad: 0,
        relHumidity: 0,
        senalt: 0,
        senlat: 0,
        senlon: 0,
        soilMoisture: 0,
        soilTemp: 0,
        solarRad: 0,
        srcIds: ['string'],
        srcTyps: ['string'],
        surroundingWeather: 'surroundingWeather',
        temperature: 0,
        visibility: 0,
        vshear: 0,
        weatherAmp: 'weatherAmp',
        weatherDesc: 'weatherDesc',
        weatherId: 'weatherId',
        weatherInt: 'weatherInt',
        windChill: 0,
        windCov: [0],
        windDir: 0,
        windDirAvg: 0,
        windDirPeak: 0,
        windDirPeak10: 0,
        windGust: 0,
        windGust10: 0,
        windSpd: 0,
        windSpdAvg: 0,
        windVar: true,
      },
    ]);
  });
});
