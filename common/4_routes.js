Router.configure({
  notFoundTemplate: 'not_found',
  loadingTemplate: 'loading',
  layoutTemplate: 'layout'
})

Router.route('/', {name: 'home'})
Router.route('/agencyList', {name: 'agencyList'})
Router.route('/addAgency', {name: 'addAgency'})
Router.route('/updateAgency', {name: 'updateAgency'})

Router.route('/updateClient', {name: 'updateClient'})
Router.route('/cDetails', {name: 'cDetails'})
Router.route('/qrProfile', {name: 'qrProfile'})
Router.route('/clientProfileReport', {name: 'clientProfileReport'})
Router.route('/clientList', {name: 'clientList'})
Router.route('/shelterDetails', {name: 'shelterDetails'})

Router.route('/post/:_id', {
  template: 'updateClient',
  data: function () {

    var currentId = this.params._id;
    console.log(currentId);
    var person = People.findOne({ firstName: 'Alan'});
    Session.set('selectedPersonId', person.firstName);
    console.log(Session.get('selectedPersonId'));
    Router.go('/updateClient', {name: 'updateClient'});
  //  return People.findOne({ socialSecurityNumber: currentId});

  }
})
