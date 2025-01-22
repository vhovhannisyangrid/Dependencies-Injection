import { ioc } from './ioc';
import { Users } from './services/users';

const renderUsers = async (usersService: Users) => {
    const users = await usersService.getUsers();
    const listNode = document.getElementById('users-list');
  
    users.forEach((user: any) => {
      const listItemNode = document.createElement('li');
      listItemNode.innerHTML = user.name;
      listNode.appendChild(listItemNode);
    });
};

const app = async () => {
  const logger = ioc.resolve('logger');
  const usersService = ioc.resolve('user');
  logger.info('Page is loaded.');


  await renderUsers(usersService);
};

window.onload = app;
