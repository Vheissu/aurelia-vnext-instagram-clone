import { customElement, bindable } from "@aurelia/runtime";

import template from './FilterType.html';

import './FilterType.css';

@customElement({
    name: 'filter-type',
    template: template
})
export class FilterType {
    @bindable filter;
    @bindable image;
    @bindable selectedFilter;

    selectedFilterTrigger() {
        this.selectedFilter(this.filter.name);
    }
}