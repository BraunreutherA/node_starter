import { Schema } from '../../Db';

export const FRAME_TYPES = {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
};

const FrameSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  discriminatorKey: 'type',
  toJSON: {
    transform(doc, ret) {
      delete ret._id;
      ret.type = doc.getType();
    },
  },
});

export default FrameSchema;
