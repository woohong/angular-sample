(function() {

'use strict';

/**
 * @ngdoc service
 * @name contactApp.Contact
 * @description
 * # Contact
 * Service in the contactApp.
 */
angular.module('contactApp')
  .service('ContactSevice', ContactService);

function ContactService(){
  this.contactFromServer = {
    'contacts': [
      {name: '이순신', phone: '01034567890', email: 'john@example.com'},
      {name: '세종대왕', phone: '0104444444', email: 'karan@email.com' },
    ]
  };

  // 전체 연락처 보기
  this.getAllContacts = function() {
    //console.log('service invoked.. from getAllContacts');
    //console.log(this.contactFromServer.contacts);
    return this.contactFromServer.contacts;
  };
}

})();
