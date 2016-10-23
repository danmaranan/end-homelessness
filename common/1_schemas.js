Schemas = {}

Meteor.isClient && Template.registerHelper('Schemas', Schemas)

Schemas.Shelters = new SimpleSchema({

  agencyName: {
    type: String,
    optional: false
  },

  continiumOfCare: {
    type: String,
    optional: true
  },

  serveAdolescents: {
    type: Boolean,
    optional: true,
    defaultValue: null
  },

  serveMale: {
    type: Boolean,
    optional: true
  },

  serveFemale: {
    type: Boolean,
    optional: true
  },

  serveFamilies: {
    type: Boolean,
    optional: true
  },

  serveWomenWithChildren: {
    type: Boolean,
    optional: true
  },

  serveVeterans: {
    type: Boolean,
    optional: true
  },

  serveDomesticAbuseSurvivors: {
    type: Boolean,
    optional: true
  },

  servePregnantWomen: {
    type: Boolean,
    optional: true
  },

  serveHIVandAIDS: {
    label: "Serve HIV/AIDS",
    type: Boolean,
    optional: true
  },

  serveHomeless: {
    type: Boolean,
    optional: true
  },

  serveSubstanceAbuse: {
    type: Boolean,
    optional: true
  },

  serveMentallyIll: {
    type: Boolean,
    optional: true
  },

  serveDevelopmentallyDelayed: {
    type: Boolean,
    optional: true
  },

  serveDisabled: {
    type: Boolean,
    optional: true
  },

  serveOther: {
    type: String,
    optional: true
  },

  programDescription: {
    type: String,
    optional: true
  },

  nonProfitStatus: {
    label: "501c3 Status",
    type: String,
    allowedValues: ['Approved', 'For-Profit', 'Pending approval'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select your 501c3 status)'
      }
    }
  },

  faithBased: {
    type: Boolean,
    optional: true
  },

  governmentEntity: {
    type: Boolean,
    optional: true
  },

  webAddress: {
    type: String,
    optional: true
  },

  address: {
    type: Object
  },

  'address.street': {
    type: String
  },
  'address.street2': {
    type: String,
    optional: true
  },
  'address.city': {
    type: String
  },
  'address.state': {
    type: String,
    allowedValues: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select a State)'
      }
    }
  },
  'address.postalCode': {
    type: String,
    label: 'ZIP'
  },

  representativeContacts: {
    type: Array,
    optional: true
  },
  'representativeContacts.$': {
    type: Object
  },

  'representativeContacts.$.name': {
    type: String
  },

  'representativeContacts.$.phone': {
    type: String
  },

  'representativeContacts.$.emailAddresss': {
    type: String
  },

  bed: {
    type: Array,
    optional: true
  },

  'bed.$': {
    type: Object
  },

  'bed.$.type': {
    type: String,
    allowedValues: ['Emergency', 'Transitional'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select bed type)'
      }
    }
  },

  'bed.$.available': {
    type: Boolean,
    optional: false,

  },



})

Schemas.Person = new SimpleSchema({

  socialSecurityNumber: {
    type: String,
    index: 1,
    unique: true,
    optional: false
  },

  firstName: {
    type: String,
    optional: false
  },

  middleName: {
    type: String,
    optional: true
  },

  lastName: {
    type: String,
    optional: false
  },

  gender: {
    type: String,
    allowedValues: ['Female', 'Male', 'Uknown'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select a gender)'
      }
    }
  },


  age: {
    type: Number,
    optional: true
  },

  veteran: {
    type: Boolean,
    optional: true
  },

  pregnant: {
    type: Boolean,
    optional: true
  },

  historyOfDomesticViolence: {
    type: Boolean,
    optional: true
  },

  currentlyHomeless: {
    type: Boolean,
    optional: true
  },

  hivaids: {
    label: "HIV/AIDS",
    type: Boolean,
    optional: true
  },

  abusedSubstance: {
    type: String,
    optional: true,
    label: "Abused Substances",
    allowedValues: ['Alcohol', 'Drugs', 'Alcohol and Drugs'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select abused substance)'
      }
    }
  },

  substanceAbuseInformation: {
    type: String,
    optional: true,
    allowedValues: ['Unconfirmed', 'Presumptive', 'Confirmed - Assessment', 'Confirmed - History'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select substance abuse information)'
      }
    }
  },


  educationalLevel: {
    type: String,
    optional: true,
    allowedValues: ['Some HS', 'HS Diploma/GED', 'Some College', 'College Degree', 'Graduate/Post-Graduate'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select educational level)'
      }
    }
  },


currentlyUnemployed: {
  type: Boolean,
  optional: true
 },

 requiresFinancialAssistance: {
   type:Boolean,
   optional: true
 },

  phone: {
    type: String,
    optional: true
  },

  emailAddresss: {
    type: String,
    optional: true
  },

  address: {
    type: Array
  },

  'address.$': {
    type: Object
  },

  'address.$.startDate': {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datepicker'
      }
    }
  },

  'address.$.endDate': {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datepicker'
      }
    }
  },

  'address.$.street': {
    type: String
  },
  'address.$.street2': {
    type: String,
    optional: true
  },
  'address.$.city': {
    type: String
  },
  'address.$.state': {
    type: String,
    allowedValues: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select a State)'
      }
    }
  },
  'address.$.postalCode': {
    type: String,
    label: 'ZIP'
  },

  familyContacts: {
    type: Array,
    optional: true
  },
  'familyContacts.$': {
    type: Object
  },
  'familyContacts.$.name': {
    type: String
  },
  'familyContacts.$.phone': {
    type: String
  },

  'familyContacts.$.relationship': {
    type: String,
    allowedValues: ['Parent','Spouse', 'Child', 'Relative', 'Other'],
    autoform: {
      afFieldInput: {
        firstOption: '(Selct a relationship)'
      }
    }
  },


  disability: {
    type: Array,
    optional: true
  },

  'disability.$': {
    type: Object
  },

  'disability.$.type': {
    type: String,
    allowedValues: ['Vision', 'Hearing', 'Cognitive', 'Physical', 'Pychological Disorder'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select a disability)'
      }
    }
  },

  'disability.$.comment': {
    type: String
  },

  servicesUsed: {
    type: Array,
    optional: true
  },

  'servicesUsed.$': {
    type: Object
  },

  'servicesUsed.$.agencyName': {
    type: String,
    allowedValues: ['City of Hope','Covenant House', 'Power House Ministries', 'Mens halfway house', 'Women halfway house'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select an agency)'
      }
    }
  },

  'servicesUsed.$.serviceUsed': {
    type: String,
    allowedValues: ['Substance Abuse Counseling','Academic Tutoring', 'Housing', 'Counseling', 'Vocational Training', 'Financial Assistance'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select a service)'
      }
    }
  },

  'servicesUsed.$.startDate': {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datepicker'
      }
    }
  },

  'servicesUsed.$.endDate': {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datepicker'
      }
    }
  },


  'servicesUsed.$.comment': {
    type: String,
    optional: true
  },








})
