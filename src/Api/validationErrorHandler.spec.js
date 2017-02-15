import _ from 'lodash';
import test from 'ava';
import { transformErrorToMessage } from './validationErrorHandler';

const bodyError = {
  body: [{
    value: '12',
    property: 'request.body.number',
    messages: ['is not of a type(s)number'],
  }, {
    property: 'request.body.name',
    messages: ['is required'],
  }, {
    value: 'Drive',
    property: 'request.body.type',
    messages: ['is not one of enum values: Street,Avenue,Boulevard'],
  }],
};

const queryError = {
  query: [{
    value: '12',
    property: 'request.query.number',
    messages: ['is not of a type(s)number'],
  }, {
    property: 'request.query.name',
    messages: ['is required'],
  }],
};

test('An error object with multiple error message blocks should get transformed in a readable message.', (t) => {
  const error = {
    ...bodyError,
    ...queryError,
  };

  const expectedResults = [
    'The property \'number\' is not of a type(s)number.',
    'The property \'name\' is required.',
    'The property \'type\' is not one of enum values: Street,Avenue,Boulevard.',
  ];

  _.each(expectedResults, (result) => {
    t.true(_.includes(transformErrorToMessage(error), result));
  });
});

test('An empty error object produces an empty error string', (t) => {
  t.deepEqual(transformErrorToMessage({}), '');
});
