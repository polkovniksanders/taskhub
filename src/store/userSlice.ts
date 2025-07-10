import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/shared/interfaces/user.interface';
import { generateUsers } from '@/app/users.data';
import type { RootState } from '@/store/index';

type UserState = {
  currentUser: User | null;
  users: User[];
};

const initialState: UserState = {
  currentUser: null,
  users: generateUsers(20, 0),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<Omit<User, 'image'>>) {
      const i = state.users.length;
      const offset = 10;
      const user: User = {
        ...action.payload,
        image: `https://i.pravatar.cc/${100 * (i + 1 + offset)}`,
      };
      state.users.push(user);
      state.currentUser = user;
    },
    removeUser(state) {
      state.currentUser = null;
    },
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    },
  },
});

export const selectUserState = (state: RootState) => state.user;
export const { addUser, removeUser, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
