// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource udlSigact', () => {
  test('fileGet: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reportAndActivity.udlSigact.fileGet(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.reportAndActivity.udlSigact.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          reportDate: '2018-01-01T16:00:00.123Z',
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
    const response = await client.reportAndActivity.udlSigact.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          reportDate: '2018-01-01T16:00:00.123Z',
          source: 'Bluestaq',
          id: 'SIGACT-ID',
          accuracy: 13,
          actors: ['US', 'CAN'],
          agjson:
            '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
          andims: 3,
          area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          asrid: 3,
          atext:
            'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          atype: 'Type1',
          avgTone: 8.23,
          cameoBaseCode: 'Example_cameoBaseCode',
          cameoCode: 'CAMEO_CODE',
          cameoRootCode: 'Example_cameoRootCode',
          checksumValue: '120EA8A25E5D487BF68B5F7096440019',
          city: 'Austin',
          civAbd: 423,
          civDet: 234,
          civKIA: 2,
          civWound: 123,
          clarity: 1,
          coalAbd: 123,
          coalDet: 123,
          coalKIA: 123,
          coalWound: 123,
          complexAttack: false,
          confidence: 13,
          countryCode: 'US',
          district: 'district 12',
          documentFilename: 'Example_documentFilename',
          documentSource: 'Example_documentSource',
          enemyAbd: 123,
          enemyDet: 123,
          enemyKIA: 123,
          eventDescription: 'Example_Description',
          eventEnd: '2021-01-01T01:02:03.123Z',
          eventStart: '2021-01-01T01:02:03.123Z',
          eventType: 'Military',
          filesize: 0,
          friendlyAbd: 123,
          friendlyDet: 123,
          friendlyKIA: 123,
          friendlyWound: 123,
          goldstein: 9.32,
          hasAttachment: true,
          hostNatAbd: 123,
          hostNatDet: 123,
          hostNatKIA: 123,
          hostNatWound: 123,
          idNumber: 'NUMBER-ID',
          lat: 45.31,
          lon: 90.23,
          milgrid: '4QFJ12345678',
          notes: 'Example_Notes',
          numArticles: 8,
          numMentions: 8,
          numSources: 8,
          origin: 'THIRD_PARTY_DATASOURCE',
          province: 'Province_Example',
          relatedDocs: [
            {
              dataSourceRefs: [
                {
                  dataSourceId: 'dataSourceId',
                  endPosition: 'endPosition',
                  paragraphNumber: 'paragraphNumber',
                  sentenceNumber: 'sentenceNumber',
                  startPosition: 'startPosition',
                },
              ],
              documentId: 'documentId',
            },
          ],
          repUnit: 'Unit_1',
          repUnitActivity: 'Example_Activity',
          repUnitType: 'Example_repUnitType',
          sideAAbd: 123,
          sideADet: 123,
          sideAKIA: 123,
          sideAWound: 123,
          sideBAbd: 123,
          sideBDet: 123,
          sideBKIA: 123,
          sideBWound: 123,
          sourceLanguage: 'eng',
          sourceUrl: 'Example_URL',
          summary: 'Example_Summary',
          target: 'US',
          theater: 'Kabul',
          typeOfAttack: 'IED Explosion',
        },
      ],
    });
  });
});
