import { Schema } from '../../Db';
import { FRAME_TYPES } from './FrameSchema';

const ImageFrameSchema = new Schema({
  time: {
    type: Number,
    required: true,
    default: 4,
    min: 1,
    max: 20,
  },
});

ImageFrameSchema.methods.getType = () => FRAME_TYPES.IMAGE;

export default ImageFrameSchema;
