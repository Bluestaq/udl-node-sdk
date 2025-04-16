// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource country', () => {
  test('create: only required params', async () => {
    const responsePromise = client.diplomaticClearance.country.create({
      classificationMarking: 'U',
      countryCode: 'NL',
      dataMode: 'TEST',
      lastChangedDate: '2024-01-01T16:00:00.123Z',
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
    const response = await client.diplomaticClearance.country.create({
      classificationMarking: 'U',
      countryCode: 'NL',
      dataMode: 'TEST',
      lastChangedDate: '2024-01-01T16:00:00.123Z',
      source: 'Bluestaq',
      id: '25059135-4afc-45c2-b78b-d6e843dbd96d',
      acceptsDMS: true,
      acceptsEmail: true,
      acceptsFax: true,
      acceptsSIPRNet: false,
      agency: 'TACC',
      altCountryCode: 'IZ',
      closeTime: '16:00',
      countryId: 'GDSSBL010412140742262246',
      countryName: 'NETHERLANDS',
      countryRemark: 'Amsterdam airport EHAM will not accept hazardous cargo.',
      diplomaticClearanceCountryContacts: [
        {
          ahNum: '256039858',
          ahSpdDialCode: '75',
          commNum: '904716104',
          commSpdDialCode: '74',
          contactId: 'GDSSMC112108191329534522',
          contactName: 'John Smith',
          contactRemark: 'Contact remark',
          dsnNum: '513827215',
          dsnSpdDialCode: '94',
          faxNum: '571654897',
          niprNum: '525574441',
          siprNum: '546144352',
        },
      ],
      diplomaticClearanceCountryEntryExitPoints: [{ isEntry: true, isExit: true, pointName: 'BATEL' }],
      diplomaticClearanceCountryProfiles: [
        {
          cargoPaxRemark: 'Cargo passenger remark',
          clearanceId: 'MDCNPER231360050AAR',
          crewInfoRemark: 'Crew info remark',
          defClearanceStatus: 'R',
          defEntryRemark: 'Default entry remark',
          defEntryTime: '15:00',
          defExitRemark: 'Default exit remark',
          defExitTime: '17:00',
          fltInfoRemark: 'Flight info remark',
          hazInfoRemark: 'Hazmat remark',
          landDefProf: true,
          landLeadTime: 7,
          landLeadTimeRemark: 'Landing lead time remark',
          landLeadTimeUnit: 'Day',
          landValidPeriodMinus: 0,
          landValidPeriodPlus: 72,
          landValidPeriodRemark: 'Landing valid period remark',
          landValidPeriodUnit: 'Hour',
          overflyDefProf: true,
          overflyLeadTime: 7,
          overflyLeadTimeRemark: 'Overfly remark',
          overflyLeadTimeUnit: 'Day',
          overflyValidPeriodMinus: 0,
          overflyValidPeriodPlus: 72,
          overflyValidPeriodRemark: 'Overfly valid period remark',
          overflyValidPeriodUnit: 'Hour',
          profile: 'Netherlands Non Haz Landing',
          profileAgency: 'USAFE',
          profileId: 'GDSSBL010412140742262247',
          profileRemark: 'Profile remark',
          reqACAltName: false,
          reqAllHazInfo: false,
          reqAMCStdInfo: false,
          reqCargoList: false,
          reqCargoPax: false,
          reqClass1Info: false,
          reqClass9Info: false,
          reqCrewComp: false,
          reqCrewDetail: false,
          reqCrewInfo: false,
          reqDiv1Info: false,
          reqDV: false,
          reqEntryExitCoord: false,
          reqFltInfo: false,
          reqFltPlanRoute: false,
          reqFundSource: false,
          reqHazInfo: false,
          reqICAO: false,
          reqPassportInfo: false,
          reqRaven: false,
          reqRepChange: false,
          reqTailNum: false,
          reqWeaponsInfo: false,
          undefinedCrewReporting: false,
        },
      ],
      existingProfile: true,
      gmtOffset: '-04:30',
      officeName: 'DAO.EU',
      officePOC: 'John Smith',
      officeRemark: 'Diplomatic clearance office remark',
      openFri: true,
      openMon: true,
      openSat: false,
      openSun: false,
      openThu: true,
      openTime: '07:00',
      openTue: true,
      openWed: true,
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.diplomaticClearance.country.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.diplomaticClearance.country.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.diplomaticClearance.country.update('id', {
      classificationMarking: 'U',
      countryCode: 'NL',
      dataMode: 'TEST',
      lastChangedDate: '2024-01-01T16:00:00.123Z',
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
    const response = await client.diplomaticClearance.country.update('id', {
      classificationMarking: 'U',
      countryCode: 'NL',
      dataMode: 'TEST',
      lastChangedDate: '2024-01-01T16:00:00.123Z',
      source: 'Bluestaq',
      body_id: '25059135-4afc-45c2-b78b-d6e843dbd96d',
      acceptsDMS: true,
      acceptsEmail: true,
      acceptsFax: true,
      acceptsSIPRNet: false,
      agency: 'TACC',
      altCountryCode: 'IZ',
      closeTime: '16:00',
      countryId: 'GDSSBL010412140742262246',
      countryName: 'NETHERLANDS',
      countryRemark: 'Amsterdam airport EHAM will not accept hazardous cargo.',
      diplomaticClearanceCountryContacts: [
        {
          ahNum: '256039858',
          ahSpdDialCode: '75',
          commNum: '904716104',
          commSpdDialCode: '74',
          contactId: 'GDSSMC112108191329534522',
          contactName: 'John Smith',
          contactRemark: 'Contact remark',
          dsnNum: '513827215',
          dsnSpdDialCode: '94',
          faxNum: '571654897',
          niprNum: '525574441',
          siprNum: '546144352',
        },
      ],
      diplomaticClearanceCountryEntryExitPoints: [{ isEntry: true, isExit: true, pointName: 'BATEL' }],
      diplomaticClearanceCountryProfiles: [
        {
          cargoPaxRemark: 'Cargo passenger remark',
          clearanceId: 'MDCNPER231360050AAR',
          crewInfoRemark: 'Crew info remark',
          defClearanceStatus: 'R',
          defEntryRemark: 'Default entry remark',
          defEntryTime: '15:00',
          defExitRemark: 'Default exit remark',
          defExitTime: '17:00',
          fltInfoRemark: 'Flight info remark',
          hazInfoRemark: 'Hazmat remark',
          landDefProf: true,
          landLeadTime: 7,
          landLeadTimeRemark: 'Landing lead time remark',
          landLeadTimeUnit: 'Day',
          landValidPeriodMinus: 0,
          landValidPeriodPlus: 72,
          landValidPeriodRemark: 'Landing valid period remark',
          landValidPeriodUnit: 'Hour',
          overflyDefProf: true,
          overflyLeadTime: 7,
          overflyLeadTimeRemark: 'Overfly remark',
          overflyLeadTimeUnit: 'Day',
          overflyValidPeriodMinus: 0,
          overflyValidPeriodPlus: 72,
          overflyValidPeriodRemark: 'Overfly valid period remark',
          overflyValidPeriodUnit: 'Hour',
          profile: 'Netherlands Non Haz Landing',
          profileAgency: 'USAFE',
          profileId: 'GDSSBL010412140742262247',
          profileRemark: 'Profile remark',
          reqACAltName: false,
          reqAllHazInfo: false,
          reqAMCStdInfo: false,
          reqCargoList: false,
          reqCargoPax: false,
          reqClass1Info: false,
          reqClass9Info: false,
          reqCrewComp: false,
          reqCrewDetail: false,
          reqCrewInfo: false,
          reqDiv1Info: false,
          reqDV: false,
          reqEntryExitCoord: false,
          reqFltInfo: false,
          reqFltPlanRoute: false,
          reqFundSource: false,
          reqHazInfo: false,
          reqICAO: false,
          reqPassportInfo: false,
          reqRaven: false,
          reqRepChange: false,
          reqTailNum: false,
          reqWeaponsInfo: false,
          undefinedCrewReporting: false,
        },
      ],
      existingProfile: true,
      gmtOffset: '-04:30',
      officeName: 'DAO.EU',
      officePOC: 'John Smith',
      officeRemark: 'Diplomatic clearance office remark',
      openFri: true,
      openMon: true,
      openSat: false,
      openSun: false,
      openThu: true,
      openTime: '07:00',
      openTue: true,
      openWed: true,
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('list', async () => {
    const responsePromise = client.diplomaticClearance.country.list();
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
    await expect(
      client.diplomaticClearance.country.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.diplomaticClearance.country.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.diplomaticClearance.country.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.diplomaticClearance.country.count();
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
    await expect(
      client.diplomaticClearance.country.count({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.diplomaticClearance.country.createBulk([
      {
        classificationMarking: 'U',
        countryCode: 'NL',
        dataMode: 'TEST',
        lastChangedDate: '2024-01-01T16:00:00.123Z',
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

  test('createBulk: required and optional params', async () => {
    const response = await client.diplomaticClearance.country.createBulk([
      {
        classificationMarking: 'U',
        countryCode: 'NL',
        dataMode: 'TEST',
        lastChangedDate: '2024-01-01T16:00:00.123Z',
        source: 'Bluestaq',
        id: '25059135-4afc-45c2-b78b-d6e843dbd96d',
        acceptsDMS: true,
        acceptsEmail: true,
        acceptsFax: true,
        acceptsSIPRNet: false,
        agency: 'TACC',
        altCountryCode: 'IZ',
        closeTime: '16:00',
        countryId: 'GDSSBL010412140742262246',
        countryName: 'NETHERLANDS',
        countryRemark: 'Amsterdam airport EHAM will not accept hazardous cargo.',
        diplomaticClearanceCountryContacts: [
          {
            ahNum: '256039858',
            ahSpdDialCode: '75',
            commNum: '904716104',
            commSpdDialCode: '74',
            contactId: 'GDSSMC112108191329534522',
            contactName: 'John Smith',
            contactRemark: 'Contact remark',
            dsnNum: '513827215',
            dsnSpdDialCode: '94',
            faxNum: '571654897',
            niprNum: '525574441',
            siprNum: '546144352',
          },
        ],
        diplomaticClearanceCountryEntryExitPoints: [{ isEntry: true, isExit: true, pointName: 'BATEL' }],
        diplomaticClearanceCountryProfiles: [
          {
            cargoPaxRemark: 'Cargo passenger remark',
            clearanceId: 'MDCNPER231360050AAR',
            crewInfoRemark: 'Crew info remark',
            defClearanceStatus: 'R',
            defEntryRemark: 'Default entry remark',
            defEntryTime: '15:00',
            defExitRemark: 'Default exit remark',
            defExitTime: '17:00',
            fltInfoRemark: 'Flight info remark',
            hazInfoRemark: 'Hazmat remark',
            landDefProf: true,
            landLeadTime: 7,
            landLeadTimeRemark: 'Landing lead time remark',
            landLeadTimeUnit: 'Day',
            landValidPeriodMinus: 0,
            landValidPeriodPlus: 72,
            landValidPeriodRemark: 'Landing valid period remark',
            landValidPeriodUnit: 'Hour',
            overflyDefProf: true,
            overflyLeadTime: 7,
            overflyLeadTimeRemark: 'Overfly remark',
            overflyLeadTimeUnit: 'Day',
            overflyValidPeriodMinus: 0,
            overflyValidPeriodPlus: 72,
            overflyValidPeriodRemark: 'Overfly valid period remark',
            overflyValidPeriodUnit: 'Hour',
            profile: 'Netherlands Non Haz Landing',
            profileAgency: 'USAFE',
            profileId: 'GDSSBL010412140742262247',
            profileRemark: 'Profile remark',
            reqACAltName: false,
            reqAllHazInfo: false,
            reqAMCStdInfo: false,
            reqCargoList: false,
            reqCargoPax: false,
            reqClass1Info: false,
            reqClass9Info: false,
            reqCrewComp: false,
            reqCrewDetail: false,
            reqCrewInfo: false,
            reqDiv1Info: false,
            reqDV: false,
            reqEntryExitCoord: false,
            reqFltInfo: false,
            reqFltPlanRoute: false,
            reqFundSource: false,
            reqHazInfo: false,
            reqICAO: false,
            reqPassportInfo: false,
            reqRaven: false,
            reqRepChange: false,
            reqTailNum: false,
            reqWeaponsInfo: false,
            undefinedCrewReporting: false,
          },
        ],
        existingProfile: true,
        gmtOffset: '-04:30',
        officeName: 'DAO.EU',
        officePOC: 'John Smith',
        officeRemark: 'Diplomatic clearance office remark',
        openFri: true,
        openMon: true,
        openSat: false,
        openSun: false,
        openThu: true,
        openTime: '07:00',
        openTue: true,
        openWed: true,
        origin: 'THIRD_PARTY_DATASOURCE',
      },
    ]);
  });

  test('queryHelp', async () => {
    const responsePromise = client.diplomaticClearance.country.queryHelp();
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
    await expect(
      client.diplomaticClearance.country.queryHelp({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.diplomaticClearance.country.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.diplomaticClearance.country.tuple({ columns: 'columns' });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.diplomaticClearance.country.unvalidatedPublish([
      {
        classificationMarking: 'U',
        countryCode: 'NL',
        dataMode: 'TEST',
        lastChangedDate: '2024-01-01T16:00:00.123Z',
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

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.diplomaticClearance.country.unvalidatedPublish([
      {
        classificationMarking: 'U',
        countryCode: 'NL',
        dataMode: 'TEST',
        lastChangedDate: '2024-01-01T16:00:00.123Z',
        source: 'Bluestaq',
        id: '25059135-4afc-45c2-b78b-d6e843dbd96d',
        acceptsDMS: true,
        acceptsEmail: true,
        acceptsFax: true,
        acceptsSIPRNet: false,
        agency: 'TACC',
        altCountryCode: 'IZ',
        closeTime: '16:00',
        countryId: 'GDSSBL010412140742262246',
        countryName: 'NETHERLANDS',
        countryRemark: 'Amsterdam airport EHAM will not accept hazardous cargo.',
        diplomaticClearanceCountryContacts: [
          {
            ahNum: '256039858',
            ahSpdDialCode: '75',
            commNum: '904716104',
            commSpdDialCode: '74',
            contactId: 'GDSSMC112108191329534522',
            contactName: 'John Smith',
            contactRemark: 'Contact remark',
            dsnNum: '513827215',
            dsnSpdDialCode: '94',
            faxNum: '571654897',
            niprNum: '525574441',
            siprNum: '546144352',
          },
        ],
        diplomaticClearanceCountryEntryExitPoints: [{ isEntry: true, isExit: true, pointName: 'BATEL' }],
        diplomaticClearanceCountryProfiles: [
          {
            cargoPaxRemark: 'Cargo passenger remark',
            clearanceId: 'MDCNPER231360050AAR',
            crewInfoRemark: 'Crew info remark',
            defClearanceStatus: 'R',
            defEntryRemark: 'Default entry remark',
            defEntryTime: '15:00',
            defExitRemark: 'Default exit remark',
            defExitTime: '17:00',
            fltInfoRemark: 'Flight info remark',
            hazInfoRemark: 'Hazmat remark',
            landDefProf: true,
            landLeadTime: 7,
            landLeadTimeRemark: 'Landing lead time remark',
            landLeadTimeUnit: 'Day',
            landValidPeriodMinus: 0,
            landValidPeriodPlus: 72,
            landValidPeriodRemark: 'Landing valid period remark',
            landValidPeriodUnit: 'Hour',
            overflyDefProf: true,
            overflyLeadTime: 7,
            overflyLeadTimeRemark: 'Overfly remark',
            overflyLeadTimeUnit: 'Day',
            overflyValidPeriodMinus: 0,
            overflyValidPeriodPlus: 72,
            overflyValidPeriodRemark: 'Overfly valid period remark',
            overflyValidPeriodUnit: 'Hour',
            profile: 'Netherlands Non Haz Landing',
            profileAgency: 'USAFE',
            profileId: 'GDSSBL010412140742262247',
            profileRemark: 'Profile remark',
            reqACAltName: false,
            reqAllHazInfo: false,
            reqAMCStdInfo: false,
            reqCargoList: false,
            reqCargoPax: false,
            reqClass1Info: false,
            reqClass9Info: false,
            reqCrewComp: false,
            reqCrewDetail: false,
            reqCrewInfo: false,
            reqDiv1Info: false,
            reqDV: false,
            reqEntryExitCoord: false,
            reqFltInfo: false,
            reqFltPlanRoute: false,
            reqFundSource: false,
            reqHazInfo: false,
            reqICAO: false,
            reqPassportInfo: false,
            reqRaven: false,
            reqRepChange: false,
            reqTailNum: false,
            reqWeaponsInfo: false,
            undefinedCrewReporting: false,
          },
        ],
        existingProfile: true,
        gmtOffset: '-04:30',
        officeName: 'DAO.EU',
        officePOC: 'John Smith',
        officeRemark: 'Diplomatic clearance office remark',
        openFri: true,
        openMon: true,
        openSat: false,
        openSun: false,
        openThu: true,
        openTime: '07:00',
        openTue: true,
        openWed: true,
        origin: 'THIRD_PARTY_DATASOURCE',
      },
    ]);
  });
});
