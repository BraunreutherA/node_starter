import test from 'ava';
import ProductPost from './ProductPost';
import { POST_TYPES } from './Post';

test('A Productpost should always have a title, picture, price and a hashtag', (t) => {
  const productPost = new ProductPost({});

  return productPost.validate()
    .catch((error) => {
      // price and currency have a default.
      t.truthy(error.errors.title);
      t.truthy(error.errors.picture);
      t.truthy(error.errors.hashtag);
    });
});

test('Productposts should return PRODUCT as type', (t) => {
  const productPost = new ProductPost({});

  t.is(productPost.getType(), POST_TYPES.PRODUCT);
  t.is(productPost.toJSON().type, POST_TYPES.PRODUCT);
});

test('A productpost should return it\'s price as a string format.', (t) => {
  const productPost = new ProductPost({});

  t.is(productPost.toJSON().price, '0,00€');
});
