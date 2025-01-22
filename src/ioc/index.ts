import IoCContainer from 'ioc-lite';
import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import  {ApiConfig} from '../types';

type IoCResources = {
  apiConfig: ApiConfig;
  logger: typeof Logger;
  user: typeof Users;
  http: typeof HTTP;
}

export interface IConfig {
  host: string;
  port: number;
}

export const ioc = new IoCContainer<IoCResources>();
ioc.registerClass('http', HTTP);
ioc.register('apiConfig', (window as any).__CONFIG__.api);
ioc.registerClass('user', Users);
ioc.registerClass('logger', Logger);

