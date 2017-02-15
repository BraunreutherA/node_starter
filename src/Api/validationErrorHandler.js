import _ from 'lodash';
import { BadRequestError } from 'yaeeh';

const concatStringArray = (acc, curr) => `${curr}${acc}`;

export const transformErrorToMessage = (error) => {
  const errorMessage = _.uniq(_.flatten(_.values(error)).map(({ property, messages }) => {
    const propertyName = property.split('.').pop();

    return messages.map(message => `The property '${propertyName}' ${message}.\n`)
      .reduce(concatStringArray, '');
  }))
  .reduce(concatStringArray, '');

  return errorMessage;
};

export default (error, req, res, next) => {
  if (error && error.name === 'JsonSchemaValidation') {
    next(new BadRequestError(transformErrorToMessage(error.validations)));
  } else {
    next(error);
  }
};
