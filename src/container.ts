import {  Container } from 'inversify';

import AppService from './Modules/AppService';
import AuthService from './Modules/AuthService';
import CategoryService from './Modules/CategoryService';
import PostService from './Modules/PostService';
import HttpService from './Modules/HttpService';


const container = new Container();
container.bind(AppService).toSelf().inSingletonScope();
container.bind(AuthService).toSelf().inSingletonScope();
container.bind(CategoryService).toSelf().inSingletonScope();
container.bind(PostService).toSelf().inSingletonScope();
container.bind(HttpService).toSelf().inSingletonScope();

export default container;