import { DebugConfiguration } from '@aurelia/debug';
import { BasicConfiguration } from '@aurelia/jit-html-browser';
import { Aurelia, IDOM } from '@aurelia/runtime';
import { NavCustomElement, ViewportCustomElement } from '@aurelia/router';

import { App } from './app';

const container = BasicConfiguration.createContainer();

container.register(
    ViewportCustomElement as any,
    NavCustomElement as any,
    App as any,
);

window['au'] = new Aurelia(container)
    .register(DebugConfiguration)
    .app({ host: document.querySelector('app'), component: App })
    .start();