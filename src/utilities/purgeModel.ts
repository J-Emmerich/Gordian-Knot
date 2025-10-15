/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from 'mongoose';
import { logger } from '@utilities';

export async function purgeModel(model: Model<any>): Promise<void> {
  const result = await model.deleteMany({});
  const found = await model.find({});
  logger.info(found);
  logger.info(result);
}
