import { inject } from '@aurelia/kernel';
import { customElement } from '@aurelia/runtime';
import { Router } from '@aurelia/router';

import app from './app.html';

@inject(Router)
@customElement({
    name: 'app', template: app
})
export class App {
    constructor(private readonly router: Router) {

    }
}