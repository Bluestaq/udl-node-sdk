// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flightplans', () => {
  test('create: only required params', async () => {
    const responsePromise = client.flightplans.create({
      arrAirfield: 'arrAirfield',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      depAirfield: 'depAirfield',
      genTS: '2019-12-27T18:11:19.117Z',
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
    const response = await client.flightplans.create({
      arrAirfield: 'arrAirfield',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      depAirfield: 'depAirfield',
      genTS: '2019-12-27T18:11:19.117Z',
      source: 'source',
      id: 'id',
      aircraftMDS: 'aircraftMDS',
      airRefuelEvents: [{ arDegrade: 0, arExchangedFuel: 0, arNum: 0, divertFuel: 0, exitFuel: 0 }],
      amcMissionId: 'amcMissionId',
      appLandingFuel: 0,
      arrAlternate1: 'arrAlternate1',
      arrAlternate1Fuel: 0,
      arrAlternate2: 'arrAlternate2',
      arrAlternate2Fuel: 0,
      arrIceFuel: 0,
      arrRunway: 'arrRunway',
      atcAddresses: ['string'],
      avgTempDev: 0,
      burnedFuel: 0,
      callSign: 'callSign',
      cargoRemark: 'cargoRemark',
      climbFuel: 0,
      climbTime: 'climbTime',
      contingencyFuel: 0,
      countryCodes: ['string'],
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      depAlternate: 'depAlternate',
      depressFuel: 0,
      depRunway: 'depRunway',
      dragIndex: 0,
      earlyDescentFuel: 0,
      enduranceTime: 'enduranceTime',
      enrouteFuel: 0,
      enrouteTime: 'enrouteTime',
      equipment: 'equipment',
      estDepTime: '2019-12-27T18:11:19.117Z',
      etopsAirfields: ['string'],
      etopsAltAirfields: ['string'],
      etopsRating: 'etopsRating',
      etopsValWindow: 'etopsValWindow',
      externalId: 'externalId',
      flightPlanMessages: [
        { msgText: 'msgText', routePath: 'routePath', severity: 'severity', wpNum: 'wpNum' },
      ],
      flightPlanPointGroups: [
        {
          avgFuelFlow: 0,
          etopsAvgWindFactor: 0,
          etopsDistance: 0,
          etopsReqFuel: 0,
          etopsTempDev: 0,
          etopsTime: 'etopsTime',
          flightPlanPoints: [
            {
              fppEta: '2019-12-27T18:11:19.117Z',
              fppLat: 0,
              fppLon: 0,
              fppReqFuel: 0,
              pointName: 'pointName',
            },
          ],
          fromTakeoffTime: 'fromTakeoffTime',
          fsafAvgWindFactor: 0,
          fsafDistance: 0,
          fsafReqFuel: 0,
          fsafTempDev: 0,
          fsafTime: 'fsafTime',
          fuelCalcAlt: 0,
          fuelCalcSpd: 0,
          lsafAvgWindFactor: 0,
          lsafDistance: 0,
          lsafName: 'lsafName',
          lsafReqFuel: 0,
          lsafTempDev: 0,
          lsafTime: 'lsafTime',
          plannedFuel: 0,
          pointGroupName: 'pointGroupName',
          worstFuelCase: 'worstFuelCase',
        },
      ],
      flightPlanWaypoints: [
        {
          type: 'type',
          waypointName: 'waypointName',
          aaTacanChannel: 'aaTacanChannel',
          airDistance: 0,
          airway: 'airway',
          alt: 0,
          arId: 'arId',
          arpt: 'arpt',
          ata: '2019-12-27T18:11:19.117Z',
          avgCalAirspeed: 0,
          avgDriftAng: 0,
          avgGroundSpeed: 0,
          avgTrueAirspeed: 0,
          avgWindDir: 0,
          avgWindSpeed: 0,
          dayLowAlt: 0,
          eta: '2019-12-27T18:11:19.117Z',
          exchangedFuel: 0,
          fuelFlow: 0,
          iceCat: 'iceCat',
          lat: 0,
          legAlternate: 'legAlternate',
          legDragIndex: 0,
          legFuelDegrade: 0,
          legMach: 0,
          legMsnIndex: 0,
          legWindFac: 0,
          lon: 0,
          magCourse: 0,
          magHeading: 0,
          magVar: 0,
          navaid: 'navaid',
          nightLowAlt: 0,
          nvgLowAlt: 0,
          pointWindDir: 0,
          pointWindSpeed: 0,
          priFreq: 0,
          secFreq: 0,
          tacanChannel: 'tacanChannel',
          tempDev: 0,
          thunderCat: 'thunderCat',
          totalAirDistance: 0,
          totalFlownDistance: 0,
          totalRemDistance: 0,
          totalRemFuel: 0,
          totalTime: 'totalTime',
          totalTimeRem: 'totalTimeRem',
          totalUsedFuel: 0,
          totalWeight: 0,
          trueCourse: 0,
          turbCat: 'turbCat',
          vorFreq: 0,
          waypointNum: 0,
          zoneDistance: 0,
          zoneFuel: 0,
          zoneTime: 0,
        },
      ],
      flightRules: 'flightRules',
      flightType: 'flightType',
      fuelDegrade: 0,
      gpsRAIM: 'gpsRAIM',
      holdDownFuel: 0,
      holdFuel: 0,
      holdTime: 'holdTime',
      idAircraft: 'idAircraft',
      idArrAirfield: 'idArrAirfield',
      idDepAirfield: 'idDepAirfield',
      identExtraFuel: 0,
      idSortie: 'idSortie',
      initialCruiseSpeed: 'initialCruiseSpeed',
      initialFlightLevel: 'initialFlightLevel',
      landingFuel: 0,
      legNum: 0,
      minDivertFuel: 0,
      msnIndex: 0,
      notes: 'notes',
      numAircraft: 0,
      opConditionFuel: 0,
      opWeight: 0,
      origin: 'origin',
      originator: 'originator',
      origNetwork: 'origNetwork',
      plannerRemark: 'plannerRemark',
      rampFuel: 0,
      remAlternate1Fuel: 0,
      remAlternate2Fuel: 0,
      reserveFuel: 0,
      routeString: 'routeString',
      sid: 'sid',
      sourceDL: 'sourceDL',
      star: 'star',
      tailNumber: 'tailNumber',
      takeoffFuel: 0,
      taxiFuel: 0,
      thunderAvoidFuel: 0,
      tocFuel: 0,
      tocIceFuel: 0,
      todFuel: 0,
      todIceFuel: 0,
      unidentExtraFuel: 0,
      unusableFuel: 0,
      wakeTurbCat: 'wakeTurbCat',
      windFac1: 0,
      windFac2: 0,
      windFacAvg: 0,
      wxValidEnd: '2019-12-27T18:11:19.117Z',
      wxValidStart: '2019-12-27T18:11:19.117Z',
    });
  });

  test('list', async () => {
    const responsePromise = client.flightplans.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.flightplans.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.flightplans.count();
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
    await expect(client.flightplans.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
