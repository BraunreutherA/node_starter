const ok = (req, res) => ({ message, data }) => {
  res.status(200).send({
    message: message || 'ok',
    data: data || {},
    error: '',
  });
};

const created = (req, res) => ({ message, data }) => {
  res.status(201).send({
    message: message || 'created',
    data: data || {},
    error: '',
  });
};

const responses = (req, res, next) => {
  /* eslint-disable no-param-reassign */
  res.ok = ok(req, res);
  res.created = created(req, res);

  next();
};

export default responses;
