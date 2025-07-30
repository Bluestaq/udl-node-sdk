// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cots', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cots.create({ lat: 45.23, lon: 45.23 });
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
      lat: 45.23,
      lon: 45.23,
      alt: 5.23,
      callSigns: ['string'],
      ce: 10.23,
      cotChatData: { chatMsg: 'Mission is go', chatRoom: 'All Chat Rooms', chatSenderCallSign: 'Pebble' },
      cotPositionData: { callSign: 'POI_NAME', team: 'Description of the object', teamRole: 'Team Member' },
      groups: ['string'],
      how: 'h-e',
      le: 10.23,
      senderUid: 'POI-ID',
      stale: '2020-01-01T16:00:00.123456Z',
      start: '2020-01-01T16:00:00.123456Z',
      type: 'a-h-G',
      uids: ['string'],
    });
  });
});
