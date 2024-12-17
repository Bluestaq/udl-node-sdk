// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource udlSigactText', () => {
  test('create: only required params', async () => {
    const responsePromise = client.udlSigactText.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      reportDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.udlSigactText.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      reportDate: '2019-12-27T18:11:19.117Z',
      source: 'source',
      id: 'id',
      accuracy: 0,
      actors: ['string'],
      agjson: 'agjson',
      andims: 0,
      area: 'area',
      asrid: 0,
      atext: 'atext',
      atype: 'atype',
      avgTone: 0,
      cameoBaseCode: 'cameoBaseCode',
      cameoCode: 'cameoCode',
      cameoRootCode: 'cameoRootCode',
      checksumValue: 'checksumValue',
      city: 'city',
      civAbd: 0,
      civDet: 0,
      civKIA: 0,
      civWound: 0,
      clarity: 0,
      coalAbd: 0,
      coalDet: 0,
      coalKIA: 0,
      coalWound: 0,
      complexAttack: true,
      confidence: 0,
      countryCode: 'countryCode',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      district: 'district',
      documentFilename: 'documentFilename',
      documentSource: 'documentSource',
      enemyAbd: 0,
      enemyDet: 0,
      enemyKIA: 0,
      eventDescription: 'eventDescription',
      eventEnd: '2019-12-27T18:11:19.117Z',
      eventStart: '2019-12-27T18:11:19.117Z',
      eventType: 'eventType',
      filesize: 0,
      friendlyAbd: 0,
      friendlyDet: 0,
      friendlyKIA: 0,
      friendlyWound: 0,
      goldstein: 0,
      hasAttachment: true,
      hostNatAbd: 0,
      hostNatDet: 0,
      hostNatKIA: 0,
      hostNatWound: 0,
      idNumber: 'idNumber',
      lat: 0,
      lon: 0,
      milgrid: 'milgrid',
      notes: 'notes',
      numArticles: 0,
      numMentions: 0,
      numSources: 0,
      origin: 'origin',
      origNetwork: 'origNetwork',
      province: 'province',
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
      repUnit: 'repUnit',
      repUnitActivity: 'repUnitActivity',
      repUnitType: 'repUnitType',
      sideAAbd: 0,
      sideADet: 0,
      sideAKIA: 0,
      sideAWound: 0,
      sideBAbd: 0,
      sideBDet: 0,
      sideBKIA: 0,
      sideBWound: 0,
      sourceLanguage: 'sourceLanguage',
      sourceUrl: 'sourceUrl',
      summary: 'summary',
      target: 'target',
      theater: 'theater',
      typeOfAttack: 'typeOfAttack',
    });
  });
});
