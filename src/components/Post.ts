import { inject } from '@aurelia//kernel';
import { customElement, bindable } from '@aurelia/runtime';
import { Router } from '@aurelia/router';
import template from './Post.html';

@customElement({
    name: 'post',
    template: template
})
export class Post {
    @bindable public post;

    like() {

    }
}