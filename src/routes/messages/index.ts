import { RouteInterface } from '../';
import { MessageController } from '../../controller/MessageController';

interface MessageRoutesInterface extends RouteInterface {
  controller: typeof MessageController;
}

export const MessageRoutes: MessageRoutesInterface[] = [
  {
    method: 'get',
    route: '/messages',
    controller: MessageController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/messages/:id',
    controller: MessageController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/messages',
    controller: MessageController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/messages/:id',
    controller: MessageController,
    action: 'remove',
  },
];
