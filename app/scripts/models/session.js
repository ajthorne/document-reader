import Backbone from 'backbone';

const Session = Backbone.Model.extend({
  defaults: {
    userRead: false
  }
})

export default Session;
