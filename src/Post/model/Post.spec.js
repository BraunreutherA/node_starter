import test from 'ava';
import Post from './Post';

test('Any post should have a user specified who created it.', (t) => {
  const post = new Post({});

  return post.validate()
    .catch((error) => {
      t.truthy(error.errors.user);
    });
});
