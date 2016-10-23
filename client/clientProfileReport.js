Template.clientProfileReport.helpers({
  exampleDoc: function () {

    var person = People.findOne(Session.get('selectedPersonId'))

    var riskFactorRating = 0;

    if (person.requiresFinancialAssistance) {
      riskFactorRating = 2 + riskFactorRating;
    }

    if (!person.currentlyEmployed) {
      riskFactorRating = 2 + riskFactorRating;

    }

    if (person.age < 18) {
      Session.set('isAdolecent', true);
      riskFactorRating = 1 + riskFactorRating;

    }

    if (person.veteran) {
      Session.set('veteran', true);
      riskFactorRating = .5 + riskFactorRating;

    }
    if (person.pregnant) {
      Session.set('pregnant', true);
      riskFactorRating = .5 + riskFactorRating;

    }

    if (person.historyOfDomesticViolence) {
      Session.set('historyOfDomesticViolence', true);
      riskFactorRating = 1 + riskFactorRating;

    }

    if (person.currentlyHomeless) {
      Session.set('currentlyHomeless', true);
      riskFactorRating = 10 + riskFactorRating;

    }

    if (person.hivaids) {
      Session.set('hivaids', true);
      riskFactorRating = 1 + riskFactorRating;

    }

    if (person.abusedSubstance) {
      Session.set('abusedSubstance', true);
      riskFactorRating = 2 + riskFactorRating;

    }

    if (person.gender === 'Female') {
      Session.set('isFemale', true);
    } else if (person.gender === 'Male') {
      Session.set('isMale', true);
    }

    if(person.disability) {
      Session.set('hasDisability', true);
      riskFactorRating = 2 + riskFactorRating;

    }
      riskFactorRating = riskFactorRating/9;
      var riskPercent = riskFactorRating.toFixed(2);

      Session.set('riskFactorPercent', riskPercent);

    //womenwithchildrent
    //families
    //MentallyILl
    //DevelopmentallyDelayed
    //Disabled
    return person;
  },

  availableShelters:function () {

  return Shelters.find({
    $or: [
      {serveAdolescents : Session.get('isAdolecent')},
      {serveMale: Session.get('isMale')},
      {serveFemale: Session.get('isFemale')},
      {serveVeterans: Session.get('veteran')},
      {serveDomesticAbuseSurvivors: Session.get('historyOfDomesticViolence')},
      {servePregnantWomen: Session.get('pregnant')},
      {serveHIVandAIDS: Session.get('hivaids')},
      {serveHomeless: Session.get('currentlyHomeless')},
      {serveDisabled: Session.get('hasDisability')},
    ]}, {
      sort: {
        agencyName: 1
      }
    });

  },

  riskFactorPercent: function() {
    return Session.get("riskFactorPercent");
  },

  riskFactorPercentHigh: function() {
    if (Session.get("riskFactorPercent") > .9) {
      riskFactorPercentHigh = true;
    } else {
      riskFactorPercentHigh = false;
    }
    return riskFactorPercentHigh;

  },

  riskFactorPercentMedium: function() {
    if (Session.get("riskFactorPercent") < .9 && Session.get("riskFactorPercent") > .4 ) {
      riskFactorPercentMedium = true;
    } else {
      riskFactorPercentMedium = false;
    }
    return riskFactorPercentMedium;

  },

  riskFactorPercentLow: function() {
    if (Session.get("riskFactorPercent") < .4 ) {
      riskFactorPercentLow = true;
    } else {
      riskFactorPercentLow = false;
    }
    return riskFactorPercentLow;

  },

  ispregnant: function() {
    if(Session.get("pregnant")) {
      isPregnant = true;
    } else {
      isPregnant = false;
    }
    return isPregnant;

  }




})
