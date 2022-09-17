import * as bcrypt from 'bcrypt';

export const toHash = async (rawStr: string) => {
  return await bcrypt.hash(rawStr, 10);
};

export const isMatch = async (rawStr: string, hashStr: string) => {
  return await bcrypt.compare(rawStr, hashStr);
};
