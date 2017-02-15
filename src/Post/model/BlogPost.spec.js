import test from 'ava';
import BlogPost from './BlogPost';

test('A blog post should always contain it\'s markdown representation.', (t) => {
  const blogPost = new BlogPost({});

  return blogPost.validate()
    .catch((error) => {
      t.truthy(error.errors.markdown);
    });
});
