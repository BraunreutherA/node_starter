import { mongoose, Schema } from '../../Db';

export const POST_TYPES = {
  PRODUCT: 'PRODUCT',
  BLOG: 'BLOG',
};

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cta_link: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  discriminatorKey: 'type',
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
