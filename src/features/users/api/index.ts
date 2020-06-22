import { API_URIS } from "../../../config";
import { get } from '../../../api';

export const getUsers = () => get(API_URIS.users);
