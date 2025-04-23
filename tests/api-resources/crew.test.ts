// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource crew', () => {
  test('create: only required params', async () => {
    const responsePromise = client.crew.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      origCrewId: 'JHJDHjhuu929o92',
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
    const response = await client.crew.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      origCrewId: 'JHJDHjhuu929o92',
      source: 'Bluestaq',
      id: 'bdad6945-c9e4-b829-f7be-1ad075541921',
      adjReturnTime: '2024-01-01T16:00:00.123Z',
      adjReturnTimeApprover: 'Smith',
      aircraftMDS: 'C017A',
      alertedTime: '2022-01-01T16:00:00.123Z',
      alertType: 'ALPHA',
      armsCrewUnit: '00016ALSQ',
      assignedQualCode: ['AL', 'CS'],
      commanderId: '763a1c1e8d2f3c16af825a11e3f1f579',
      commanderLast4SSN: '1234',
      commanderName: 'John Doe',
      crewHome: false,
      crewMembers: [
        {
          alerted: true,
          allSortie: true,
          approved: true,
          attached: true,
          branch: 'Air Force',
          civilian: false,
          commander: false,
          crewPosition: 'EP A',
          dodID: '0123456789',
          dutyPosition: 'IP',
          dutyStatus: 'AGR',
          emailed: true,
          extraTime: true,
          firstName: 'Freddie',
          fltCurrencyExp: '2024-01-01T16:00:00.123Z',
          fltCurrencyExpId: 'SS05AM',
          fltRecDate: '2024-01-01T16:00:00.123Z',
          fltRecDue: '2024-01-01T16:00:00.123Z',
          flySquadron: '141ARS',
          funded: true,
          gender: 'F',
          gndCurrencyExp: '2024-01-01T16:00:00.123Z',
          gndCurrencyExpId: 'AH03YM',
          grounded: true,
          guestStart: '2024-01-01T16:00:00.123Z',
          guestStop: '2024-01-01T16:00:00.123Z',
          last4SSN: '1234',
          lastFltDate: '2024-01-01T16:00:00.123Z',
          lastName: 'Smith',
          loanedTo: 'Thunderbirds',
          lodging: 'Peterson SFB',
          memberActualAlertTime: '2024-02-26T09:15:00.123Z',
          memberAdjReturnTime: '2024-01-01T16:00:00.123Z',
          memberAdjReturnTimeApprover: 'Smith',
          memberId: '12345678abc',
          memberInitStartTime: '2024-01-01T16:00:00.123Z',
          memberLastAlertTime: '2024-01-01T16:00:00.123Z',
          memberLegalAlertTime: '2024-01-01T16:00:00.123Z',
          memberPickupTime: '2024-02-26T10:15:00.123Z',
          memberPostRestOffset: '+05:00',
          memberPostRestTime: '2024-01-02T16:00:00.123Z',
          memberPreRestTime: '2024-01-01T16:00:00.123Z',
          memberRemarks: 'Crew member remark',
          memberReturnTime: '2024-01-01T16:00:00.123Z',
          memberSchedAlertTime: '2024-02-26T09:15:00.123Z',
          memberSource: 'ACTIVE',
          memberStageName: 'Falcon Squadron',
          memberTransportReq: true,
          memberType: 'AIRCREW',
          middleInitial: 'G',
          notified: true,
          phoneNumber: '+14155552671',
          physAvCode: 'D',
          physAvStatus: 'OVERDUE',
          physDue: '2024-01-01T16:00:00.123Z',
          rank: 'Capt',
          remarkCode: 'ABE33',
          rmsMDS: 'C017A',
          showTime: '2024-02-26T10:15:00.123Z',
          squadron: '21AS',
          trainingDate: '2024-01-01T16:00:00.123Z',
          username: 'fgsmith',
          wing: '60AMW',
        },
      ],
      crewName: 'falcon',
      crewRMS: 'ARMS',
      crewRole: 'DEADHEAD',
      crewSource: 'ACTIVE',
      crewSquadron: '21AS',
      crewType: 'AIRLAND',
      crewUnit: '00016ALSQ',
      crewWing: '60AMW',
      currentICAO: 'KCOS',
      fdpEligType: 'A',
      fdpType: 'A',
      femaleEnlistedQty: 2,
      femaleOfficerQty: 1,
      fltAuthNum: 'KT001',
      idSiteCurrent: 'b677cf3b-d44d-450e-8b8f-d23f997f8778',
      idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
      initStartTime: '2024-01-01T16:00:00.123Z',
      lastAlertTime: '2024-01-01T16:00:00.123Z',
      legalAlertTime: '2022-01-01T16:00:00.123Z',
      legalBravoTime: '2022-01-01T16:00:00.123Z',
      linkedTask: false,
      maleEnlistedQty: 3,
      maleOfficerQty: 1,
      missionAlias: 'PACIFIC DEPLOY / CHAP 3 MOVEMENT',
      missionId: 'AJM123456123',
      origin: 'THIRD_PARTY_DATASOURCE',
      personnelType: 'AIRCREW',
      pickupTime: '2024-01-01T16:00:00.123Z',
      postRestApplied: false,
      postRestEnd: '2024-01-02T16:00:00.123Z',
      postRestOffset: '+05:00',
      preRestApplied: false,
      preRestStart: '2024-01-01T16:00:00.123Z',
      reqQualCode: ['AL', 'CS'],
      returnTime: '2022-01-01T16:00:00.123Z',
      stage1Qual: '1AXXX',
      stage2Qual: '2AXXX',
      stage3Qual: '3AXXX',
      stageName: 'Falcon Squadron',
      stageTime: '2024-01-01T16:00:00.123Z',
      status: 'APPROVED',
      transportReq: true,
      tripKit: 'TK-1234',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.crew.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.crew.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      origCrewId: 'JHJDHjhuu929o92',
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
    const response = await client.crew.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      origCrewId: 'JHJDHjhuu929o92',
      source: 'Bluestaq',
      body_id: 'bdad6945-c9e4-b829-f7be-1ad075541921',
      adjReturnTime: '2024-01-01T16:00:00.123Z',
      adjReturnTimeApprover: 'Smith',
      aircraftMDS: 'C017A',
      alertedTime: '2022-01-01T16:00:00.123Z',
      alertType: 'ALPHA',
      armsCrewUnit: '00016ALSQ',
      assignedQualCode: ['AL', 'CS'],
      commanderId: '763a1c1e8d2f3c16af825a11e3f1f579',
      commanderLast4SSN: '1234',
      commanderName: 'John Doe',
      crewHome: false,
      crewMembers: [
        {
          alerted: true,
          allSortie: true,
          approved: true,
          attached: true,
          branch: 'Air Force',
          civilian: false,
          commander: false,
          crewPosition: 'EP A',
          dodID: '0123456789',
          dutyPosition: 'IP',
          dutyStatus: 'AGR',
          emailed: true,
          extraTime: true,
          firstName: 'Freddie',
          fltCurrencyExp: '2024-01-01T16:00:00.123Z',
          fltCurrencyExpId: 'SS05AM',
          fltRecDate: '2024-01-01T16:00:00.123Z',
          fltRecDue: '2024-01-01T16:00:00.123Z',
          flySquadron: '141ARS',
          funded: true,
          gender: 'F',
          gndCurrencyExp: '2024-01-01T16:00:00.123Z',
          gndCurrencyExpId: 'AH03YM',
          grounded: true,
          guestStart: '2024-01-01T16:00:00.123Z',
          guestStop: '2024-01-01T16:00:00.123Z',
          last4SSN: '1234',
          lastFltDate: '2024-01-01T16:00:00.123Z',
          lastName: 'Smith',
          loanedTo: 'Thunderbirds',
          lodging: 'Peterson SFB',
          memberActualAlertTime: '2024-02-26T09:15:00.123Z',
          memberAdjReturnTime: '2024-01-01T16:00:00.123Z',
          memberAdjReturnTimeApprover: 'Smith',
          memberId: '12345678abc',
          memberInitStartTime: '2024-01-01T16:00:00.123Z',
          memberLastAlertTime: '2024-01-01T16:00:00.123Z',
          memberLegalAlertTime: '2024-01-01T16:00:00.123Z',
          memberPickupTime: '2024-02-26T10:15:00.123Z',
          memberPostRestOffset: '+05:00',
          memberPostRestTime: '2024-01-02T16:00:00.123Z',
          memberPreRestTime: '2024-01-01T16:00:00.123Z',
          memberRemarks: 'Crew member remark',
          memberReturnTime: '2024-01-01T16:00:00.123Z',
          memberSchedAlertTime: '2024-02-26T09:15:00.123Z',
          memberSource: 'ACTIVE',
          memberStageName: 'Falcon Squadron',
          memberTransportReq: true,
          memberType: 'AIRCREW',
          middleInitial: 'G',
          notified: true,
          phoneNumber: '+14155552671',
          physAvCode: 'D',
          physAvStatus: 'OVERDUE',
          physDue: '2024-01-01T16:00:00.123Z',
          rank: 'Capt',
          remarkCode: 'ABE33',
          rmsMDS: 'C017A',
          showTime: '2024-02-26T10:15:00.123Z',
          squadron: '21AS',
          trainingDate: '2024-01-01T16:00:00.123Z',
          username: 'fgsmith',
          wing: '60AMW',
        },
      ],
      crewName: 'falcon',
      crewRMS: 'ARMS',
      crewRole: 'DEADHEAD',
      crewSource: 'ACTIVE',
      crewSquadron: '21AS',
      crewType: 'AIRLAND',
      crewUnit: '00016ALSQ',
      crewWing: '60AMW',
      currentICAO: 'KCOS',
      fdpEligType: 'A',
      fdpType: 'A',
      femaleEnlistedQty: 2,
      femaleOfficerQty: 1,
      fltAuthNum: 'KT001',
      idSiteCurrent: 'b677cf3b-d44d-450e-8b8f-d23f997f8778',
      idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
      initStartTime: '2024-01-01T16:00:00.123Z',
      lastAlertTime: '2024-01-01T16:00:00.123Z',
      legalAlertTime: '2022-01-01T16:00:00.123Z',
      legalBravoTime: '2022-01-01T16:00:00.123Z',
      linkedTask: false,
      maleEnlistedQty: 3,
      maleOfficerQty: 1,
      missionAlias: 'PACIFIC DEPLOY / CHAP 3 MOVEMENT',
      missionId: 'AJM123456123',
      origin: 'THIRD_PARTY_DATASOURCE',
      personnelType: 'AIRCREW',
      pickupTime: '2024-01-01T16:00:00.123Z',
      postRestApplied: false,
      postRestEnd: '2024-01-02T16:00:00.123Z',
      postRestOffset: '+05:00',
      preRestApplied: false,
      preRestStart: '2024-01-01T16:00:00.123Z',
      reqQualCode: ['AL', 'CS'],
      returnTime: '2022-01-01T16:00:00.123Z',
      stage1Qual: '1AXXX',
      stage2Qual: '2AXXX',
      stage3Qual: '3AXXX',
      stageName: 'Falcon Squadron',
      stageTime: '2024-01-01T16:00:00.123Z',
      status: 'APPROVED',
      transportReq: true,
      tripKit: 'TK-1234',
    });
  });

  test('list', async () => {
    const responsePromise = client.crew.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.crew.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.crew.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.crew.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.crew.tuple({ columns: 'columns' });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.crew.unvalidatedPublish({
      body: [
        { classificationMarking: 'U', dataMode: 'TEST', origCrewId: 'JHJDHjhuu929o92', source: 'Bluestaq' },
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
    const response = await client.crew.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          origCrewId: 'JHJDHjhuu929o92',
          source: 'Bluestaq',
          id: 'bdad6945-c9e4-b829-f7be-1ad075541921',
          adjReturnTime: '2024-01-01T16:00:00.123Z',
          adjReturnTimeApprover: 'Smith',
          aircraftMDS: 'C017A',
          alertedTime: '2022-01-01T16:00:00.123Z',
          alertType: 'ALPHA',
          armsCrewUnit: '00016ALSQ',
          assignedQualCode: ['AL', 'CS'],
          commanderId: '763a1c1e8d2f3c16af825a11e3f1f579',
          commanderLast4SSN: '1234',
          commanderName: 'John Doe',
          crewHome: false,
          crewMembers: [
            {
              alerted: true,
              allSortie: true,
              approved: true,
              attached: true,
              branch: 'Air Force',
              civilian: false,
              commander: false,
              crewPosition: 'EP A',
              dodID: '0123456789',
              dutyPosition: 'IP',
              dutyStatus: 'AGR',
              emailed: true,
              extraTime: true,
              firstName: 'Freddie',
              fltCurrencyExp: '2024-01-01T16:00:00.123Z',
              fltCurrencyExpId: 'SS05AM',
              fltRecDate: '2024-01-01T16:00:00.123Z',
              fltRecDue: '2024-01-01T16:00:00.123Z',
              flySquadron: '141ARS',
              funded: true,
              gender: 'F',
              gndCurrencyExp: '2024-01-01T16:00:00.123Z',
              gndCurrencyExpId: 'AH03YM',
              grounded: true,
              guestStart: '2024-01-01T16:00:00.123Z',
              guestStop: '2024-01-01T16:00:00.123Z',
              last4SSN: '1234',
              lastFltDate: '2024-01-01T16:00:00.123Z',
              lastName: 'Smith',
              loanedTo: 'Thunderbirds',
              lodging: 'Peterson SFB',
              memberActualAlertTime: '2024-02-26T09:15:00.123Z',
              memberAdjReturnTime: '2024-01-01T16:00:00.123Z',
              memberAdjReturnTimeApprover: 'Smith',
              memberId: '12345678abc',
              memberInitStartTime: '2024-01-01T16:00:00.123Z',
              memberLastAlertTime: '2024-01-01T16:00:00.123Z',
              memberLegalAlertTime: '2024-01-01T16:00:00.123Z',
              memberPickupTime: '2024-02-26T10:15:00.123Z',
              memberPostRestOffset: '+05:00',
              memberPostRestTime: '2024-01-02T16:00:00.123Z',
              memberPreRestTime: '2024-01-01T16:00:00.123Z',
              memberRemarks: 'Crew member remark',
              memberReturnTime: '2024-01-01T16:00:00.123Z',
              memberSchedAlertTime: '2024-02-26T09:15:00.123Z',
              memberSource: 'ACTIVE',
              memberStageName: 'Falcon Squadron',
              memberTransportReq: true,
              memberType: 'AIRCREW',
              middleInitial: 'G',
              notified: true,
              phoneNumber: '+14155552671',
              physAvCode: 'D',
              physAvStatus: 'OVERDUE',
              physDue: '2024-01-01T16:00:00.123Z',
              rank: 'Capt',
              remarkCode: 'ABE33',
              rmsMDS: 'C017A',
              showTime: '2024-02-26T10:15:00.123Z',
              squadron: '21AS',
              trainingDate: '2024-01-01T16:00:00.123Z',
              username: 'fgsmith',
              wing: '60AMW',
            },
          ],
          crewName: 'falcon',
          crewRMS: 'ARMS',
          crewRole: 'DEADHEAD',
          crewSource: 'ACTIVE',
          crewSquadron: '21AS',
          crewType: 'AIRLAND',
          crewUnit: '00016ALSQ',
          crewWing: '60AMW',
          currentICAO: 'KCOS',
          fdpEligType: 'A',
          fdpType: 'A',
          femaleEnlistedQty: 2,
          femaleOfficerQty: 1,
          fltAuthNum: 'KT001',
          idSiteCurrent: 'b677cf3b-d44d-450e-8b8f-d23f997f8778',
          idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
          initStartTime: '2024-01-01T16:00:00.123Z',
          lastAlertTime: '2024-01-01T16:00:00.123Z',
          legalAlertTime: '2022-01-01T16:00:00.123Z',
          legalBravoTime: '2022-01-01T16:00:00.123Z',
          linkedTask: false,
          maleEnlistedQty: 3,
          maleOfficerQty: 1,
          missionAlias: 'PACIFIC DEPLOY / CHAP 3 MOVEMENT',
          missionId: 'AJM123456123',
          origin: 'THIRD_PARTY_DATASOURCE',
          personnelType: 'AIRCREW',
          pickupTime: '2024-01-01T16:00:00.123Z',
          postRestApplied: false,
          postRestEnd: '2024-01-02T16:00:00.123Z',
          postRestOffset: '+05:00',
          preRestApplied: false,
          preRestStart: '2024-01-01T16:00:00.123Z',
          reqQualCode: ['AL', 'CS'],
          returnTime: '2022-01-01T16:00:00.123Z',
          stage1Qual: '1AXXX',
          stage2Qual: '2AXXX',
          stage3Qual: '3AXXX',
          stageName: 'Falcon Squadron',
          stageTime: '2024-01-01T16:00:00.123Z',
          status: 'APPROVED',
          transportReq: true,
          tripKit: 'TK-1234',
        },
      ],
    });
  });
});
