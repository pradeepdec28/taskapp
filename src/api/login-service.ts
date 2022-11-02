import {User} from '../models/user-model';
import api from './api-service';

export class LoginService {
  static Login = async (user: User) => {
    const response = await api.post('/authentication/signin', user);
    return response.data;
  };
}
