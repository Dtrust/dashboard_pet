import { StatusEnum } from '@src/store/@types';

export interface IUserState {
    token: string;
    status: StatusEnum;
}
