import { bindable, customElement } from "@aurelia/runtime";

import template from './PhoneBody.html';

import './PhoneBody.css';

@customElement({
    name: 'phone-body',
    template
})
export class PhoneBody {
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

    }
}