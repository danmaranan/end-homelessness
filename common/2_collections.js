var Collections = {}

Meteor.isClient && Template.registerHelper('Collections', Collections)

People = Collections.People = new Mongo.Collection('People')
People.attachSchema(Schemas.Person)

Shelters = Collections.Shelters = new Mongo.Collection('Shelters')
Shelters.attachSchema(Schemas.Shelters)
