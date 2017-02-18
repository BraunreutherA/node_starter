import test from 'ava';
import { mongoose } from '../../Db';
import FrameSchema, { FRAME_TYPES } from './FrameSchema';
import VideoFrameSchema from './VideoFrameSchema';

let VideoFrame;

test.before(() => {
  const Frame = mongoose.model('Frame', FrameSchema);
  VideoFrame = Frame.discriminator('VideoFrame', VideoFrameSchema);
});

test.afterEach.always(() => {
  delete mongoose.connection.models.VideoFrame;
  delete mongoose.connection.models.Frame;
});

test('The type of a video frame should be VIDEO', (t) => {
  const videoFrame = new VideoFrame({});

  t.is(videoFrame.getType(), FRAME_TYPES.VIDEO);
  t.is(videoFrame.toJSON().type, FRAME_TYPES.VIDEO);
});
