// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flightplan', () => {
  test('create: only required params', async () => {
    const responsePromise = client.flightplan.create({
      arrAirfield: 'KCHS',
      classificationMarking: 'U',
      dataMode: 'REAL',
      depAirfield: 'KSLV',
      genTS: '2023-05-01T01:01:01.123Z',
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
    const response = await client.flightplan.create({
      arrAirfield: 'KCHS',
      classificationMarking: 'U',
      dataMode: 'REAL',
      depAirfield: 'KSLV',
      genTS: '2023-05-01T01:01:01.123Z',
      source: 'Bluestaq',
      id: 'c44b0a80-9fef-63d9-6267-79037fb93e4c',
      aircraftMDS: 'KC-130 HERCULES',
      airRefuelEvents: [
        { arDegrade: 1, arExchangedFuel: 1500.1, arNum: 2, divertFuel: 143000.1, exitFuel: 160000.1 },
      ],
      amcMissionId: 'AJM7939B1123',
      appLandingFuel: 3000.1,
      arrAlternate1: 'EDDS',
      arrAlternate1Fuel: 6000.1,
      arrAlternate2: 'EDDM',
      arrAlternate2Fuel: 6000.1,
      arrIceFuel: 1000.1,
      arrRunway: '05L',
      atcAddresses: ['EYCBZMFO', 'EUCHZMFP', 'ETARYXYX', 'EDUUZVZI'],
      avgTempDev: 16.1,
      burnedFuel: 145000.1,
      callSign: 'HKY629',
      cargoRemark: 'Expecting 55,000 lbs. If different, call us.',
      climbFuel: 7000.1,
      climbTime: '00:13',
      contingencyFuel: 3000.1,
      countryCodes: ['US', 'CA', 'UK'],
      depAlternate: 'LFPO',
      depressFuel: 20000.1,
      depRunway: '05L',
      dragIndex: 1,
      earlyDescentFuel: 500.1,
      enduranceTime: '08:45',
      enrouteFuel: 155000.1,
      enrouteTime: '06:30',
      equipment: 'SDFGHIRTUWXYZ/H',
      estDepTime: '2023-05-01T01:01:01.123Z',
      etopsAirfields: ['KHSV', 'KISP', 'KBG', 'LTBS'],
      etopsAltAirfields: ['KHSV', 'KISP', 'KBG', 'LTBS'],
      etopsRating: '85 MINUTES',
      etopsValWindow: 'LPLA: 0317Z-0722Z',
      externalId: 'AFMAPP20322347140001',
      flightPlanMessages: [
        { msgText: 'Message text', routePath: 'PRIMARY', severity: 'SEVERE', wpNum: '20' },
      ],
      flightPlanPointGroups: [
        {
          avgFuelFlow: 19693.1,
          etopsAvgWindFactor: 10.1,
          etopsDistance: 684.1,
          etopsReqFuel: 4412.1,
          etopsTempDev: 9.1,
          etopsTime: '01:23',
          flightPlanPoints: [
            {
              fppEta: '2023-09-09T01:00:00.123Z',
              fppLat: -89,
              fppLon: -179,
              fppReqFuel: 4250.1,
              pointName: 'CRUISE ALTITUDE ETP',
            },
          ],
          fromTakeoffTime: '07:29',
          fsafAvgWindFactor: 10.1,
          fsafDistance: 684.1,
          fsafReqFuel: 50380.1,
          fsafTempDev: 9.1,
          fsafTime: '01:23',
          fuelCalcAlt: 100.1,
          fuelCalcSpd: 365.1,
          lsafAvgWindFactor: 13.1,
          lsafDistance: 684.1,
          lsafName: 'LPPD',
          lsafReqFuel: 50787.1,
          lsafTempDev: 9.1,
          lsafTime: '01:23',
          plannedFuel: 190319.1,
          pointGroupName: 'ETOPS_CF_POINT_1',
          worstFuelCase: 'DEPRESSURIZED ENGINE OUT ETP',
        },
      ],
      flightPlanWaypoints: [
        {
          type: 'COMMENT',
          waypointName: 'KCHS',
          aaTacanChannel: '31/94',
          airDistance: 321.1,
          airway: 'W15',
          alt: 27000.1,
          arId: 'AR202',
          arpt: 'ARIP',
          ata: '2023-09-09T01:00:00.123Z',
          avgCalAirspeed: 200.1,
          avgDriftAng: -3.2,
          avgGroundSpeed: 300.1,
          avgTrueAirspeed: 210.1,
          avgWindDir: 165.5,
          avgWindSpeed: 14.4,
          dayLowAlt: 1500.1,
          eta: '2023-09-09T01:00:00.123Z',
          exchangedFuel: -30400.1,
          fuelFlow: 17654.1,
          iceCat: 'MODERATE',
          lat: -89,
          legAlternate: 'KCHS',
          legDragIndex: 1,
          legFuelDegrade: 1,
          legMach: 0.74,
          legMsnIndex: 65,
          legWindFac: -32.1,
          lon: -179,
          magCourse: 338.1,
          magHeading: 212.1,
          magVar: -13.2,
          navaid: 'HTO',
          nightLowAlt: 2300.1,
          nvgLowAlt: 2450.1,
          pointWindDir: 165.5,
          pointWindSpeed: 14.4,
          priFreq: 357.5,
          secFreq: 357.5,
          tacanChannel: '83X',
          tempDev: 12.1,
          thunderCat: 'MODERATE',
          totalAirDistance: 3251.1,
          totalFlownDistance: 688.1,
          totalRemDistance: 1288.1,
          totalRemFuel: 30453.1,
          totalTime: '08:45',
          totalTimeRem: '01:43',
          totalUsedFuel: 70431.1,
          totalWeight: 207123.1,
          trueCourse: 328.1,
          turbCat: 'EXTREME',
          vorFreq: 113.6,
          waypointNum: 20,
          zoneDistance: 212.1,
          zoneFuel: 1120.1,
          zoneTime: 36.1,
        },
      ],
      flightRules: 'l',
      flightType: 'MILITARY',
      fuelDegrade: 1,
      gpsRAIM: 'Failed by FAA SAPT 184022AUG2022',
      holdDownFuel: 500.1,
      holdFuel: 6000.1,
      holdTime: '01:00',
      idAircraft: '4f4a67c6-40fd-11ee-be56-0242ac120002',
      idArrAirfield: '363080c2-40fd-11ee-be56-0242ac120002',
      idDepAirfield: '2a9020f6-40fd-11ee-be56-0242ac120002',
      identExtraFuel: 5000.1,
      idSortie: '9d60c1b1-10b1-b2a7-e403-84c5d7eeb170',
      initialCruiseSpeed: 'N0305',
      initialFlightLevel: 'F270',
      landingFuel: 19000.1,
      legNum: 100,
      minDivertFuel: 25000.1,
      msnIndex: 44.1,
      notes: 'STS/STATE PBN/A1B2B5C2C4D2D4 EUR/PROTECTED',
      numAircraft: 1,
      opConditionFuel: 5000.1,
      opWeight: 251830.5,
      origin: 'THIRD_PARTY_DATASOURCE',
      originator: 'ETARYXYX',
      plannerRemark: 'Flight plan is good for 2 days before airspace closes over the UK.',
      rampFuel: 180000.1,
      remAlternate1Fuel: 18000.1,
      remAlternate2Fuel: 18000.1,
      reserveFuel: 10000.1,
      routeString:
        'RENV3B RENVI Y86 GOSVA/N0317F260 DCT EVLIT DCT UMUGI DCT NISIX DCT GIGOD DCT DIPEB DCT\nGORPI Z80 TILAV L87 RAKIT Z717 PODUS Z130 MAG/N0298F220 Z20 KENIG/N0319F220 Z20 ORTAG T177\nESEGU Z20 BEBLA DCT MASEK/N0300F200 DCT GISEM/N0319F200 DCT BOMBI/N0276F060 DCT RIDSU DCT',
      sid: 'RENV3B',
      star: 'ADANA',
      tailNumber: '77187',
      takeoffFuel: 178500.1,
      taxiFuel: 1500.1,
      thunderAvoidFuel: 1000.1,
      tocFuel: 160000.1,
      tocIceFuel: 1000.1,
      todFuel: 32000.1,
      todIceFuel: 2000.1,
      unidentExtraFuel: 5000.1,
      unusableFuel: 2300.1,
      wakeTurbCat: 'MEDIUM',
      windFac1: -1.1,
      windFac2: 10.1,
      windFacAvg: 5.1,
      wxValidEnd: '2023-05-01T01:01:01.123Z',
      wxValidStart: '2023-05-01T01:01:01.123Z',
    });
  });

  test('list', async () => {
    const responsePromise = client.flightplan.list();
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
    await expect(client.flightplan.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.flightplan.count();
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
    await expect(client.flightplan.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.flightplan.fileCreate([
      {
        arrAirfield: 'KCHS',
        classificationMarking: 'U',
        dataMode: 'REAL',
        depAirfield: 'KSLV',
        genTS: '2023-05-01T01:01:01.123Z',
        source: 'Bluestaq',
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

  test('fileCreate: required and optional params', async () => {
    const response = await client.flightplan.fileCreate([
      {
        arrAirfield: 'KCHS',
        classificationMarking: 'U',
        dataMode: 'REAL',
        depAirfield: 'KSLV',
        genTS: '2023-05-01T01:01:01.123Z',
        source: 'Bluestaq',
        id: 'c44b0a80-9fef-63d9-6267-79037fb93e4c',
        aircraftMDS: 'KC-130 HERCULES',
        airRefuelEvents: [
          { arDegrade: 1, arExchangedFuel: 1500.1, arNum: 2, divertFuel: 143000.1, exitFuel: 160000.1 },
        ],
        amcMissionId: 'AJM7939B1123',
        appLandingFuel: 3000.1,
        arrAlternate1: 'EDDS',
        arrAlternate1Fuel: 6000.1,
        arrAlternate2: 'EDDM',
        arrAlternate2Fuel: 6000.1,
        arrIceFuel: 1000.1,
        arrRunway: '05L',
        atcAddresses: ['EYCBZMFO', 'EUCHZMFP', 'ETARYXYX', 'EDUUZVZI'],
        avgTempDev: 16.1,
        burnedFuel: 145000.1,
        callSign: 'HKY629',
        cargoRemark: 'Expecting 55,000 lbs. If different, call us.',
        climbFuel: 7000.1,
        climbTime: '00:13',
        contingencyFuel: 3000.1,
        countryCodes: ['US', 'CA', 'UK'],
        depAlternate: 'LFPO',
        depressFuel: 20000.1,
        depRunway: '05L',
        dragIndex: 1,
        earlyDescentFuel: 500.1,
        enduranceTime: '08:45',
        enrouteFuel: 155000.1,
        enrouteTime: '06:30',
        equipment: 'SDFGHIRTUWXYZ/H',
        estDepTime: '2023-05-01T01:01:01.123Z',
        etopsAirfields: ['KHSV', 'KISP', 'KBG', 'LTBS'],
        etopsAltAirfields: ['KHSV', 'KISP', 'KBG', 'LTBS'],
        etopsRating: '85 MINUTES',
        etopsValWindow: 'LPLA: 0317Z-0722Z',
        externalId: 'AFMAPP20322347140001',
        flightPlanMessages: [
          { msgText: 'Message text', routePath: 'PRIMARY', severity: 'SEVERE', wpNum: '20' },
        ],
        flightPlanPointGroups: [
          {
            avgFuelFlow: 19693.1,
            etopsAvgWindFactor: 10.1,
            etopsDistance: 684.1,
            etopsReqFuel: 4412.1,
            etopsTempDev: 9.1,
            etopsTime: '01:23',
            flightPlanPoints: [
              {
                fppEta: '2023-09-09T01:00:00.123Z',
                fppLat: -89,
                fppLon: -179,
                fppReqFuel: 4250.1,
                pointName: 'CRUISE ALTITUDE ETP',
              },
            ],
            fromTakeoffTime: '07:29',
            fsafAvgWindFactor: 10.1,
            fsafDistance: 684.1,
            fsafReqFuel: 50380.1,
            fsafTempDev: 9.1,
            fsafTime: '01:23',
            fuelCalcAlt: 100.1,
            fuelCalcSpd: 365.1,
            lsafAvgWindFactor: 13.1,
            lsafDistance: 684.1,
            lsafName: 'LPPD',
            lsafReqFuel: 50787.1,
            lsafTempDev: 9.1,
            lsafTime: '01:23',
            plannedFuel: 190319.1,
            pointGroupName: 'ETOPS_CF_POINT_1',
            worstFuelCase: 'DEPRESSURIZED ENGINE OUT ETP',
          },
        ],
        flightPlanWaypoints: [
          {
            type: 'COMMENT',
            waypointName: 'KCHS',
            aaTacanChannel: '31/94',
            airDistance: 321.1,
            airway: 'W15',
            alt: 27000.1,
            arId: 'AR202',
            arpt: 'ARIP',
            ata: '2023-09-09T01:00:00.123Z',
            avgCalAirspeed: 200.1,
            avgDriftAng: -3.2,
            avgGroundSpeed: 300.1,
            avgTrueAirspeed: 210.1,
            avgWindDir: 165.5,
            avgWindSpeed: 14.4,
            dayLowAlt: 1500.1,
            eta: '2023-09-09T01:00:00.123Z',
            exchangedFuel: -30400.1,
            fuelFlow: 17654.1,
            iceCat: 'MODERATE',
            lat: -89,
            legAlternate: 'KCHS',
            legDragIndex: 1,
            legFuelDegrade: 1,
            legMach: 0.74,
            legMsnIndex: 65,
            legWindFac: -32.1,
            lon: -179,
            magCourse: 338.1,
            magHeading: 212.1,
            magVar: -13.2,
            navaid: 'HTO',
            nightLowAlt: 2300.1,
            nvgLowAlt: 2450.1,
            pointWindDir: 165.5,
            pointWindSpeed: 14.4,
            priFreq: 357.5,
            secFreq: 357.5,
            tacanChannel: '83X',
            tempDev: 12.1,
            thunderCat: 'MODERATE',
            totalAirDistance: 3251.1,
            totalFlownDistance: 688.1,
            totalRemDistance: 1288.1,
            totalRemFuel: 30453.1,
            totalTime: '08:45',
            totalTimeRem: '01:43',
            totalUsedFuel: 70431.1,
            totalWeight: 207123.1,
            trueCourse: 328.1,
            turbCat: 'EXTREME',
            vorFreq: 113.6,
            waypointNum: 20,
            zoneDistance: 212.1,
            zoneFuel: 1120.1,
            zoneTime: 36.1,
          },
        ],
        flightRules: 'l',
        flightType: 'MILITARY',
        fuelDegrade: 1,
        gpsRAIM: 'Failed by FAA SAPT 184022AUG2022',
        holdDownFuel: 500.1,
        holdFuel: 6000.1,
        holdTime: '01:00',
        idAircraft: '4f4a67c6-40fd-11ee-be56-0242ac120002',
        idArrAirfield: '363080c2-40fd-11ee-be56-0242ac120002',
        idDepAirfield: '2a9020f6-40fd-11ee-be56-0242ac120002',
        identExtraFuel: 5000.1,
        idSortie: '9d60c1b1-10b1-b2a7-e403-84c5d7eeb170',
        initialCruiseSpeed: 'N0305',
        initialFlightLevel: 'F270',
        landingFuel: 19000.1,
        legNum: 100,
        minDivertFuel: 25000.1,
        msnIndex: 44.1,
        notes: 'STS/STATE PBN/A1B2B5C2C4D2D4 EUR/PROTECTED',
        numAircraft: 1,
        opConditionFuel: 5000.1,
        opWeight: 251830.5,
        origin: 'THIRD_PARTY_DATASOURCE',
        originator: 'ETARYXYX',
        plannerRemark: 'Flight plan is good for 2 days before airspace closes over the UK.',
        rampFuel: 180000.1,
        remAlternate1Fuel: 18000.1,
        remAlternate2Fuel: 18000.1,
        reserveFuel: 10000.1,
        routeString:
          'RENV3B RENVI Y86 GOSVA/N0317F260 DCT EVLIT DCT UMUGI DCT NISIX DCT GIGOD DCT DIPEB DCT\nGORPI Z80 TILAV L87 RAKIT Z717 PODUS Z130 MAG/N0298F220 Z20 KENIG/N0319F220 Z20 ORTAG T177\nESEGU Z20 BEBLA DCT MASEK/N0300F200 DCT GISEM/N0319F200 DCT BOMBI/N0276F060 DCT RIDSU DCT',
        sid: 'RENV3B',
        star: 'ADANA',
        tailNumber: '77187',
        takeoffFuel: 178500.1,
        taxiFuel: 1500.1,
        thunderAvoidFuel: 1000.1,
        tocFuel: 160000.1,
        tocIceFuel: 1000.1,
        todFuel: 32000.1,
        todIceFuel: 2000.1,
        unidentExtraFuel: 5000.1,
        unusableFuel: 2300.1,
        wakeTurbCat: 'MEDIUM',
        windFac1: -1.1,
        windFac2: 10.1,
        windFacAvg: 5.1,
        wxValidEnd: '2023-05-01T01:01:01.123Z',
        wxValidStart: '2023-05-01T01:01:01.123Z',
      },
    ]);
  });

  test('queryhelp', async () => {
    const responsePromise = client.flightplan.queryhelp();
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
    await expect(client.flightplan.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.flightplan.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.flightplan.tuple({ columns: 'columns' });
  });
});
