import {RouteInterface} from '../';
import {ContactController} from '../../controller/ContactController';


interface ContactRoutesInterface extends RouteInterface {
    controller: typeof ContactController;
}

export const ContactRoutes: ContactRoutesInterface[] = [
    {
        method: 'get',
        route: '/contacts',
        controller: ContactController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/contacts/:id',
        controller: ContactController,
        action: 'one',
    },
    {
        method: 'post',
        route: '/contacts',
        controller: ContactController,
        action: 'save',
    },
    {
        method: 'delete',
        route: '/contacts/:id',
        controller: ContactController,
        action: 'remove',
    },
];
