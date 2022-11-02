import api from './api-service';
import {WatchList} from '../models/watchlist-model';

export class WatchListService {
  static getWatchList = async (baseToken: string) => {
    const response = await api.get<WatchList>('/myaccount/watches', {
      headers: {
        Authorization: `Basic ${baseToken}`,
      },
    });
    return response.data;
  };
}
