import Unifieddatalibrary from 'unified-data-library';
import { createQuery } from '../src/lib/model-based-query';
import { Elsets } from 'unified-data-library/resources/elsets';
const client = new Unifieddatalibrary({
  username: process.env['UDL_AUTH_USERNAME'], // This is the default and can be omitted
  password: process.env['UDL_AUTH_PASSWORD'], // This is the default and can be omitted
  baseURL: process.env['UDL_BASE_URL'],
});

async function main() {
  const notifications = await client.notification.list({
    createdAt: `>${new Date(Date.now() - 10 * 60 * 1000).toISOString()}`,
  });
  console.log(notifications);

  try {
    await client.notification.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      msgBody: JSON.stringify({ name: 'bob', val: 2 }),
      msgType: 'Dummy',
      source: 'Test',
    });
    const elsets = await client.elsets.current.list();
    console.log('Successfully fetched elsets data');
    console.log('Number of elsets:', elsets.items.length);

    if (elsets.items.length > 0 && elsets.items[0]) {
      const firstElset = elsets.items[0];
      console.log('First elset example:', {
        epoch: firstElset.epoch,
        source: firstElset.source,
        satNo: firstElset.satNo,
        dataMode: firstElset.dataMode,
      });
    }
    const specific_elsets = await client.elsets.current.list(
      (createQuery<Elsets.ElsetAbridged>() as any).satNo_eq(25544).toParams(),
    );
    console.log('Specific elsets:', specific_elsets);
  } catch (error) {
    console.log('API call failed (credentials may not be set):', (error as Error).message);
    console.log('This is expected if UDL_AUTH_USERNAME and UDL_AUTH_PASSWORD are not set');
  }

  console.log('\n=== Example Complete ===');
}

main().catch(console.error);
