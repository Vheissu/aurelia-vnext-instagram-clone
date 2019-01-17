import { customElement, bindable, containerless } from '@aurelia/runtime';
import template from './Post.html';

import './Post.css';

@customElement({
    name: 'post',
    template: template
})
@containerless()
export class Post {
    @bindable public post;

    like() {
        this.post.hasBeenLiked ? this.post.likes-- : this.post.likes++;
        this.post.hasBeenLiked = !this.post.hasBeenLiked;
    }
}