

Template.cDetails.helpers({

  people: function () {
    return People.find();
  },
  exampleDoc: function () {
    return People.findOne(Session.get("selectedPersonId"));
  },

});
