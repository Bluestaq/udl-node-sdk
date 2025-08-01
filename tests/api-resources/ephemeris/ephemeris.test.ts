// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ephemeris', () => {
  test('list: only required params', async () => {
    const responsePromise = client.ephemeris.list({ esId: 'esId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.ephemeris.list({ esId: 'esId', firstResult: 0, maxResults: 0 });
  });

  test('count: only required params', async () => {
    const responsePromise = client.ephemeris.count({ esId: 'esId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.ephemeris.count({ esId: 'esId', firstResult: 0, maxResults: 0 });
  });

  test('fileUpload: only required params', async () => {
    const responsePromise = client.ephemeris.fileUpload({
      category: 'category',
      classification: 'classification',
      dataMode: 'REAL',
      ephemFormatType: 'ModITC',
      hasMnvr: true,
      satNo: 0,
      source: 'source',
      type: 'type',
      body: '20090183552.438 854.324972 -806.523053 7049.922417 6.895812284 -2.628367346 -1.133733106\n20090183652.438 1266.133860 -962.545669 6968.125830 6.826675764 -2.570691008 -1.591933762\n20090183752.438 1672.992049 -1114.804860 6859.014485 6.730841878 -2.502960267 -2.043929218\n20090183852.438 2073.308235 -1262.705018 6723.013691 6.608678828 -2.425436636 -2.487957283\n20090183952.437 2465.516236 -1405.667354 6560.653649 6.460655493 -2.338419085 -2.922284617\n20090184052.437 2848.081001 -1543.132119 6372.567559 6.287340800 -2.242243249 -3.345212234\n20090184152.437 3219.504606 -1674.560790 6159.489368 6.089403061 -2.137280899 -3.755082127\n20090184252.437 3578.332160 -1799.438213 5922.251081 5.867608030 -2.023938998 -4.150285005\n20090184352.437 3923.157564 -1917.274669 5661.779621 5.622815776 -1.902658091 -4.529267262\n20090184452.437 4252.629072 -2027.607829 5379.093303 5.355977415 -1.773910426 -4.890537084\n20090184552.438 4565.454650 -2130.004610 5075.297949 5.068131657 -1.638198207 -5.232670449\n20090184652.438 4860.407121 -2224.062913 4751.582647 4.760401074 -1.496051826 -5.554316609\n20090184752.438 5136.329082 -2309.413262 4409.215191 4.433988183 -1.348027904 -5.854203792\n20090184852.438 5392.137572 -2385.720309 4049.537176 4.090171063 -1.194707051 -6.131144712\n20090184952.438 5626.828455 -2452.684200 3673.958773 3.730298408 -1.036691459 -6.384041406\n20090185052.438 5839.480522 -2510.041810 3283.953237 3.355784875 -0.874602755 -6.611889945\n20090185152.437 6029.259294 -2557.567834 2881.051109 2.968105821 -0.709079671 -6.813785484\n20090185252.437 6195.420471 -2595.075738 2466.834134 2.568790899 -0.540775331 -6.988926806\n20090185352.437 6337.313006 -2622.418539 2042.928930 2.159417590 -0.370354527 -7.136619912\n20090185452.437 6454.381765 -2639.489420 1611.000461 1.741604556 -0.198490869 -7.256280983\n20090185552.437 6546.169804 -2646.222176 1172.745350 1.317005015 -0.025863968 -7.347439001\n20090185652.438 6612.320241 -2642.591488 729.885039 0.887299878 0.146843350 -7.409738011\n20090185752.438 6652.577694 -2628.613029 284.158834 0.454190412 0.318947964 -7.442938697\n20090185852.438 6666.789294 -2604.343401 -162.683130 0.019391281 0.489769322 -7.446919583\n20090185952.438 6654.905265 -2569.879881 -608.886984 -0.415377036 0.658632454 -7.421677795\n20090190052.438 6616.979042 -2525.360006 -1052.702244 -0.848395994 0.824870985 -7.367328894\n20090190152.438 6553.166929 -2470.960963 -1492.388894 -1.277956388 0.987829985 -7.284105998\n20090190252.437 6463.727309 -2406.898823 -1926.224391 -1.702365928 1.146868752 -7.172358262\n20090190352.437 6349.019420 -2333.427607 -2352.510575 -2.119956347 1.301363455 -7.032548726\n20090190452.437 6209.501706 -2250.838192 -2769.580415 -2.529090096 1.450709724 -6.865251656\n20090190552.437 6045.729775 -2159.457075 -3175.804606 -2.928166964 1.594325073 -6.671149694\n20090190652.437 5858.353970 -2059.644985 -3569.597966 -3.315630505 1.731651201 -6.451030430\n20090190752.438 5648.116549 -1951.795371 -3949.425615 -3.689974155 1.862156222 -6.205782298\n20090190852.438 5415.848532 -1836.332754 -4313.808907 -4.049746799 1.985336490 -5.936390547\n20090190952.438 5162.466198 -1713.710980 -4661.331101 -4.393558446 2.100718445 -5.643932730\n20090191052.438 4888.967258 -1584.411363 -4990.642753 -4.720085507 2.207860388 -5.329573539\n20090191152.438 4596.426732 -1448.940726 -5300.466778 -5.028075349 2.306353880 -4.994559465\n20090191252.438 4285.992562 -1307.829369 -5589.603199 -5.316350511 2.395824993 -4.640213267\n20090191352.437 3958.880990 -1161.628964 -5856.933556 -5.583812443 2.475935445 -4.267928575\n20090191452.437 3616.371712 -1010.910385 -6101.425000 -5.829445081 2.546383684 -3.879164465\n20090191552.437 3259.802822 -856.261467 -6322.134041 -6.052318610 2.606905964 -3.475439590',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fileUpload: required and optional params', async () => {
    const response = await client.ephemeris.fileUpload({
      category: 'category',
      classification: 'classification',
      dataMode: 'REAL',
      ephemFormatType: 'ModITC',
      hasMnvr: true,
      satNo: 0,
      source: 'source',
      type: 'type',
      body: '20090183552.438 854.324972 -806.523053 7049.922417 6.895812284 -2.628367346 -1.133733106\n20090183652.438 1266.133860 -962.545669 6968.125830 6.826675764 -2.570691008 -1.591933762\n20090183752.438 1672.992049 -1114.804860 6859.014485 6.730841878 -2.502960267 -2.043929218\n20090183852.438 2073.308235 -1262.705018 6723.013691 6.608678828 -2.425436636 -2.487957283\n20090183952.437 2465.516236 -1405.667354 6560.653649 6.460655493 -2.338419085 -2.922284617\n20090184052.437 2848.081001 -1543.132119 6372.567559 6.287340800 -2.242243249 -3.345212234\n20090184152.437 3219.504606 -1674.560790 6159.489368 6.089403061 -2.137280899 -3.755082127\n20090184252.437 3578.332160 -1799.438213 5922.251081 5.867608030 -2.023938998 -4.150285005\n20090184352.437 3923.157564 -1917.274669 5661.779621 5.622815776 -1.902658091 -4.529267262\n20090184452.437 4252.629072 -2027.607829 5379.093303 5.355977415 -1.773910426 -4.890537084\n20090184552.438 4565.454650 -2130.004610 5075.297949 5.068131657 -1.638198207 -5.232670449\n20090184652.438 4860.407121 -2224.062913 4751.582647 4.760401074 -1.496051826 -5.554316609\n20090184752.438 5136.329082 -2309.413262 4409.215191 4.433988183 -1.348027904 -5.854203792\n20090184852.438 5392.137572 -2385.720309 4049.537176 4.090171063 -1.194707051 -6.131144712\n20090184952.438 5626.828455 -2452.684200 3673.958773 3.730298408 -1.036691459 -6.384041406\n20090185052.438 5839.480522 -2510.041810 3283.953237 3.355784875 -0.874602755 -6.611889945\n20090185152.437 6029.259294 -2557.567834 2881.051109 2.968105821 -0.709079671 -6.813785484\n20090185252.437 6195.420471 -2595.075738 2466.834134 2.568790899 -0.540775331 -6.988926806\n20090185352.437 6337.313006 -2622.418539 2042.928930 2.159417590 -0.370354527 -7.136619912\n20090185452.437 6454.381765 -2639.489420 1611.000461 1.741604556 -0.198490869 -7.256280983\n20090185552.437 6546.169804 -2646.222176 1172.745350 1.317005015 -0.025863968 -7.347439001\n20090185652.438 6612.320241 -2642.591488 729.885039 0.887299878 0.146843350 -7.409738011\n20090185752.438 6652.577694 -2628.613029 284.158834 0.454190412 0.318947964 -7.442938697\n20090185852.438 6666.789294 -2604.343401 -162.683130 0.019391281 0.489769322 -7.446919583\n20090185952.438 6654.905265 -2569.879881 -608.886984 -0.415377036 0.658632454 -7.421677795\n20090190052.438 6616.979042 -2525.360006 -1052.702244 -0.848395994 0.824870985 -7.367328894\n20090190152.438 6553.166929 -2470.960963 -1492.388894 -1.277956388 0.987829985 -7.284105998\n20090190252.437 6463.727309 -2406.898823 -1926.224391 -1.702365928 1.146868752 -7.172358262\n20090190352.437 6349.019420 -2333.427607 -2352.510575 -2.119956347 1.301363455 -7.032548726\n20090190452.437 6209.501706 -2250.838192 -2769.580415 -2.529090096 1.450709724 -6.865251656\n20090190552.437 6045.729775 -2159.457075 -3175.804606 -2.928166964 1.594325073 -6.671149694\n20090190652.437 5858.353970 -2059.644985 -3569.597966 -3.315630505 1.731651201 -6.451030430\n20090190752.438 5648.116549 -1951.795371 -3949.425615 -3.689974155 1.862156222 -6.205782298\n20090190852.438 5415.848532 -1836.332754 -4313.808907 -4.049746799 1.985336490 -5.936390547\n20090190952.438 5162.466198 -1713.710980 -4661.331101 -4.393558446 2.100718445 -5.643932730\n20090191052.438 4888.967258 -1584.411363 -4990.642753 -4.720085507 2.207860388 -5.329573539\n20090191152.438 4596.426732 -1448.940726 -5300.466778 -5.028075349 2.306353880 -4.994559465\n20090191252.438 4285.992562 -1307.829369 -5589.603199 -5.316350511 2.395824993 -4.640213267\n20090191352.437 3958.880990 -1161.628964 -5856.933556 -5.583812443 2.475935445 -4.267928575\n20090191452.437 3616.371712 -1010.910385 -6101.425000 -5.829445081 2.546383684 -3.879164465\n20090191552.437 3259.802822 -856.261467 -6322.134041 -6.052318610 2.606905964 -3.475439590',
      origin: 'origin',
      tags: 'tags',
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.ephemeris.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.ephemeris.tuple({ columns: 'columns', esId: 'esId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.ephemeris.tuple({
      columns: 'columns',
      esId: 'esId',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.ephemeris.unvalidatedPublish({
      category: 'ANALYST',
      classificationMarking: 'U',
      dataMode: 'TEST',
      numPoints: 1,
      pointEndTime: '2018-01-01T16:00:00.123456Z',
      pointStartTime: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      type: 'LAUNCH',
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
    const response = await client.ephemeris.unvalidatedPublish({
      category: 'ANALYST',
      classificationMarking: 'U',
      dataMode: 'TEST',
      numPoints: 1,
      pointEndTime: '2018-01-01T16:00:00.123456Z',
      pointStartTime: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      type: 'LAUNCH',
      id: 'EPHEMERISSET-ID',
      bDot: 1.1,
      centBody: 'Earth',
      comments: 'Example notes',
      covReferenceFrame: 'J2000',
      description: 'Example notes',
      descriptor: 'Example descriptor',
      dragModel: 'JAC70',
      edr: 1.1,
      ephemerisList: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2018-01-01T16:00:00.123456Z',
          xpos: 1.1,
          xvel: 1.1,
          ypos: 1.1,
          yvel: 1.1,
          zpos: 1.1,
          zvel: 1.1,
          id: 'EPHEMERIS-ID',
          cov: [1.1, 2.4, 3.8, 4.2, 5.5, 6],
          esId: 'ES-ID',
          idOnOrbit: 'ONORBIT-ID',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          xaccel: 1.1,
          yaccel: 1.1,
          zaccel: 1.1,
        },
      ],
      filename: 'Example file name',
      geopotentialModel: 'GEM-T3',
      hasAccel: false,
      hasCov: false,
      hasMnvr: false,
      idManeuvers: ['EXAMPLE_ID1', 'EXAMPLE_ID2'],
      idOnOrbit: 'ONORBIT-ID',
      idStateVector: 'STATEVECTOR-ID',
      integrator: 'COWELL',
      interpolation: 'LINEAR',
      interpolationDegree: 5,
      lunarSolar: false,
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      pedigree: 'PROPAGATED',
      referenceFrame: 'J2000',
      satNo: 2,
      solidEarthTides: false,
      stepSize: 1,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      transactionId: 'TRANSACTION-ID',
      usableEndTime: '2018-01-01T20:50:00.123456Z',
      usableStartTime: '2018-01-01T16:10:00.123456Z',
    });
  });
});
