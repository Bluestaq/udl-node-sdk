// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cots', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cots.create({ lat: 0, lon: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.cots.create({
      lat: 0,
      lon: 0,
      alt: 0,
      callSigns: ['string'],
      ce: 0,
      cotChatData: { chatMsg: 'chatMsg', chatRoom: 'chatRoom', chatSenderCallSign: 'chatSenderCallSign' },
      cotPositionData: { callSign: 'callSign', team: 'team', teamRole: 'teamRole' },
      groups: ['string'],
      how: 'how',
      le: 0,
      senderUid: 'senderUid',
      stale: '2019-12-27T18:11:19.117Z',
      start: '2019-12-27T18:11:19.117Z',
      type: 'type',
      uids: ['string'],
    });
  });
});
