import { Types } from 'mongoose';
import { logger } from '@utilities';

export const validateInvoiceOwnerUniqueness = (owners: Types.ObjectId[]): Types.ObjectId[] => {
  let ownersArray: string[] | Types.ObjectId[] = owners.map((owner) => owner.toString());
  logger.info(ownersArray);
  const ownersSet: Set<string> = new Set(ownersArray);
  logger.info(ownersSet);
  ownersArray = Array.from(ownersSet).map((owner) => new Types.ObjectId(owner));
  return ownersArray;
};
