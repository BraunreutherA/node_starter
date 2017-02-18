import numeral from 'numeral';
import 'numeral/locales';
import { Schema } from '../../Db';
import Post, { POST_TYPES } from './Post';

numeral.locale('de');

const CURRENCIES = {
  EUR: 'EUR',
};

const ProductPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0.00,
    required: true,
  },
  currency: {
    type: String,
    enum: [CURRENCIES.EUR],
    required: true,
    default: CURRENCIES.EUR,
  },
  picture: {
    type: String,
    required: true,
  },
  hashtag: {
    type: Schema.Types.ObjectId,
    ref: 'Hashtag',
    required: true,
  },
}, {
  toJSON: {
    transform(doc, ret) {
      delete ret._id;
      ret.price = numeral(doc.price).format('0,0.00$');
      ret.type = doc.getType();
    },
  },
});

ProductPostSchema.methods.getType = () => POST_TYPES.PRODUCT;

const ProductPost = Post.discriminator('ProductPost', ProductPostSchema);
export default ProductPost;
