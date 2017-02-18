import { Schema } from '../../Db';
import { FRAME_TYPES } from './FrameSchema';

const VideoFrameSchema = new Schema({});

VideoFrameSchema.methods.getType = () => FRAME_TYPES.VIDEO;

export default VideoFrameSchema;
