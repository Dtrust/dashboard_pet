import type { IUserState } from '@src/store/user/@types';
import { StatusEnum } from '@src/store/@types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IUserState = {
    token: 'jSR0we24GHz2NH3yg9w4bjwtjNAk9gcq-hdrqvWRnKTZPtalaQnttrpUcl3KOEuHLjdA7-0SePv7wjTnFc-EbUY2cTMj8vkplI8J_vwYYQkN7iP4bFwc671B9BbUQI54',
    status: StatusEnum.DEFAULT,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (
            state: IUserState,
            action: PayloadAction<IUserState['token']>
        ) => {
            state.token = action.payload;
        },
    },
});

export default userSlice.reducer;
