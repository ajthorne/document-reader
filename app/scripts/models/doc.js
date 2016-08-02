import Backbone from 'backbone';

const Doc = Backbone.Model.extend({
  defaults: {
    userRead: false
  }
})

export default Doc;
