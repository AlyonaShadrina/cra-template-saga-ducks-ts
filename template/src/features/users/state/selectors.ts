import { store } from "../../../App";

export const usersList = (state: ReturnType<typeof store.getState>) => state.users.data;
