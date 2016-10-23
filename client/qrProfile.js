Template.qrProfile.helpers({
  exampleDoc: function () {
    return People.findOne(Session.get('selectedPersonId'))
  },

  qrlText: function(){

    person = People.findOne(Session.get('selectedPersonId'));

    var url = "http://192.168.1.104:3000/post/";
    var fullUrl = url.concat(person.socialSecurityNumber);
    return fullUrl;
  }

})
