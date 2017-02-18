import { mongoose, Schema } from '../../Db';
import FrameSchema from './FrameSchema';
import ImageFrameSchema from './ImageFrameSchema';
import VideoFrameSchema from './VideoFrameSchema';

const HaulSchema = new Schema({
  frames: {
    type: [FrameSchema],
    validate: frames => frames.length > 0,
  },
  user: {
    type: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
});

HaulSchema.path('frames').discriminator('VideoFrame', VideoFrameSchema);
HaulSchema.path('frames').discriminator('ImageFrame', ImageFrameSchema);

const Haul = mongoose.model('Haul', HaulSchema);
export default Haul;
