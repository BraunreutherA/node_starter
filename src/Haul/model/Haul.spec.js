import test from 'ava';
import Haul from './Haul';

test('A haul should have at least one frame', async (t) => {
  const haul = new Haul({});

  const { errors } = await t.throws(haul.validate());
  t.truthy(errors.frames);
});
