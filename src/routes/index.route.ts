import { Router } from 'express';

import userRouter from './user.route';

const apiPrefix = '/api';
const apiVersion = {
  v1: '/v1',
  v2: '/v2'
};
const fullPrefixV1 = `${apiPrefix}${apiVersion.v1}`;

const indexRouter = Router();

indexRouter.get(fullPrefixV1, (req, res) => {
  res.send('Hello, world v1!');
});

// user routes
indexRouter.use(`${fullPrefixV1}/user`, userRouter);

export default indexRouter;
