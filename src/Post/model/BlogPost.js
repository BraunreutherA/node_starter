import { Schema } from '../../Db';
import Post from './Post';

const BlogPostSchema = new Schema({
  markdown: {
    type: String,
    required: true,
  },
});

const BlogPost = Post.discriminator('BlogPost', BlogPostSchema);
export default BlogPost;
