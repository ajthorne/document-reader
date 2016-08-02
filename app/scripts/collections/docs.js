import Doc from '../models/doc';
import Backbone from 'backbone';

const Docs = Backbone.Collection.extend({
  defaults: {
    userRead: false
  }
});

export default Docs;
