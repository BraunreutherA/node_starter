import { BadRequestError } from 'yaeeh';
import { BlogPost, ProductPost, POST_TYPES } from '../model';

export default (req, res, next) => {
  switch (req.body.type) {
    case POST_TYPES.BLOG:
      BlogPost.create(req.body.post)
        .then((post) => {
          res.created({ data: post, message: 'BlogPost created.' });
        });
      break;
    case POST_TYPES.PRODUCT:
      ProductPost.create(req.body.post)
        .then((post) => {
          res.created({ data: post, message: 'ProductPost created.' });
        });
      break;
    default:
      next(new BadRequestError('The specified post type is not supported.'));
  }
};
