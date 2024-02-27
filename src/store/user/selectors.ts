import type { RootState } from '@src/store/store';

export const selectUserToken = () => (state: RootState) => state.user.token;
