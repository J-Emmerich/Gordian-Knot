const { AsyncLocalStorage } = require('async_hooks');

export const context = new AsyncLocalStorage();
