Session.setDefault("autoSaveMode", false);

Template.clientList.helpers({
  people: function () {
    return People.find();
  },
  autoSaveMode: function () {
    return Session.get("autoSaveMode");
  },
  selectedPersonDoc: function () {
    return People.findOne(Session.get("selectedPersonId"));
  },
  isSelectedPerson: function () {
    return Session.equals("selectedPersonId", this._id);
  },
  formType: function () {
    if (Session.get("selectedPersonId")) {
      return "update";
    } else {
      return "disabled";
    }
  },
  disableButtons: function () {
    return !Session.get("selectedPersonId");
  }
});

Template.clientList.events({
  'click .person-row': function () {
    Session.set("selectedPersonId", this._id);
    Router.go('/updateClient', {name: 'updateClient'});

  },
  'change .autosave-toggle': function () {
    Session.set("autoSaveMode", !Session.get("autoSaveMode"));
  }
});
