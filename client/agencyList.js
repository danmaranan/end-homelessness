
Template.agencyList.helpers({

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




Template.agencyList.events({
  'click .agency-row': function () {
    Session.set("selectedAgencyId", this._id);
    Router.go('/updateAgency', {name: 'updateAgency'});

  }
});
