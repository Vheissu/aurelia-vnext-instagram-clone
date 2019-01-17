import { customElement } from '@aurelia/runtime';

import app from './app.html';

import './app.css';

@customElement({
    name: 'app', 
    template: app
})
export class App {
    private image = '';
    private selectedFilter = '';
    private caption = '';
    private step = 1;
    private posts = [];
    private filters = [];
    private filterType;
    private file: any;

    goToHome() {
        this.image = '';
        this.selectedFilter = '';
        this.caption = '';
        this.step = 1;
    }

    uploadIamge(evt: any) {
        const files = evt.target.files;

        if (!files.length) {
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = evt => {
          this.image = (evt.target as any).result;
          this.step = 2;
        };

        this.file.value = '';
    }

    sharePost() {
        const post = {
            username: "webmaster95",
            userImage: "https://api.adorable.io/avatars/285/abott@adorable.png",
            postImage: this.image,
            likes: 0,
            caption: this.caption,
            filter: this.filterType
          };

          this.posts.unshift(post);
          this.goToHome();
    }
}