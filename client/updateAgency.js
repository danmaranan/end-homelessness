
Template.updateAgency.helpers({

  shelters: function () {
    return Shelters.find()
  },

  selectedShelterDoc: function () {
    return Shelters.findOne(Session.get("selectedAgencyId"));
  },
  isSelectedShelter: function () {
    return Session.equals("selectedAgencyId", this._id);
  }

})
