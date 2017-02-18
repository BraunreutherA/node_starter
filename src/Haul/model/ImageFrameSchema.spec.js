import Promise from 'bluebird';
import test from 'ava';
import { mongoose } from '../../Db';
import FrameSchema, { FRAME_TYPES } from './FrameSchema';
import ImageFrameSchema from './ImageFrameSchema';

let ImageFrame;

test.before(() => {
  const Frame = mongoose.model('Frame', FrameSchema);
  ImageFrame = Frame.discriminator('ImageFrame', ImageFrameSchema);
});

test.afterEach.always(() => {
  delete mongoose.connection.models.ImageFrame;
  delete mongoose.connection.models.Frame;
});

test('A Image Frame should have a time set ranging from 1 to 20', (t) => {
  const imageFrameLow = new ImageFrame({
    time: 0,
  });
  const lowPromise = imageFrameLow.validate()
    .catch(({ errors }) => {
      t.truthy(errors.time);
    });

  const imageFrameHigh = new ImageFrame({
    time: 21,
  });
  const highPromise = imageFrameHigh.validate()
    .catch(({ errors }) => {
      t.truthy(errors.time);
    });

  return Promise.all([lowPromise, highPromise]);
});

test('The type of a image frame should be IMAGE', (t) => {
  const imageFrame = new ImageFrame({});

  t.is(imageFrame.getType(), FRAME_TYPES.IMAGE);
  t.is(imageFrame.toJSON().type, FRAME_TYPES.IMAGE);
});
