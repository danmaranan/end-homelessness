Session.setDefault("autoSaveMode", false);

Template.updateClient.helpers({
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

Template.updateClient.events({
  'click .person-row': function () {
    Session.set("selectedPersonId", this._id);
  }
});

Template.updateClient.rendered = function (){

  if (!Session.get("selectedPersonId")) {
    var selectedPlayer = "Alan";
    const person = People.findOne({ firstName: selectedPlayer});
    Session.set("selectedPersonId", person._id);
    console.log(person._id);
  }
}
