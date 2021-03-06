import { underscore, decamelize } from '@ember/string';

import { pluralize } from 'ember-inflector';

import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType(modelName) {
    let decamelized = underscore(decamelize(modelName));
    return pluralize(decamelized);
  },
});
