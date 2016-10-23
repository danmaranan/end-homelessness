
Template.shelterDetails.helpers({

  shelters: function () {
    return Shelters.find()
  },

  selectedShelterDoc: function () {
    return Shelters.findOne(Session.get("selectedShelterId"));
  },
  isSelectedShelter: function () {
    return Session.equals("selectedShelterId", this._id);
  }

})


Template.shelterDetails.events({
  'click .shelter-row': function () {
    Session.set("selectedShelterId", this._id);
  }
});
