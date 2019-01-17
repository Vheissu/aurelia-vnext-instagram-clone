import { PhoneBody } from './components/PhoneBody';
import { Post } from './components/Post';
import { FilterType } from './components/FilterType';
import { DebugConfiguration } from '@aurelia/debug';
import { BasicConfiguration } from '@aurelia/jit-html-browser';
import { Aurelia, } from '@aurelia/runtime';

import { App } from './app';

const container = BasicConfiguration.createContainer();

container.register(
    App as any,
    FilterType as any,
    Post as any,
    PhoneBody as any,
);

window['au'] = new Aurelia(container)
    .register(DebugConfiguration)
    .app({ host: document.querySelector('app'), component: App })
    .start();