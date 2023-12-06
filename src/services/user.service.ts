import { UserModel, type User } from '@/models/user.model';

export const createUserService = async (user: User): Promise<User> => {
  return await UserModel.create(user);
};

export const getUsersService = async (): Promise<User[]> => {
  return await UserModel.find();
};

export const getOneUserService = async (
  query: Partial<User>
): Promise<User | null> => {
  return await UserModel.findOne(query);
};
