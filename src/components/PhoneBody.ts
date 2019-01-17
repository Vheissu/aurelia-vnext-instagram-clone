import { bindable, customElement, containerless } from "@aurelia/runtime";

import template from './PhoneBody.html';

import './PhoneBody.css';

@customElement({
    name: 'phone-body',
    template
})
@containerless()
export class PhoneBody {
    @bindable caption;
    @bindable step;
    @bindable posts;
    @bindable filters;
    @bindable image;
    @bindable selectedFilter;
    @bindable value;

    filterChanged(name) {
        this.selectedFilter = name;
    }

    captionChanged(caption) {
        this.caption = caption;
    }
}