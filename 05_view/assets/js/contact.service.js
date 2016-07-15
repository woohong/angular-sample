/**
 * Created by kosta on 2016-07-15.
 */
// angular.module('contactApp', []) => module set

angular.module('contactApp') // module get

.service('contactService', ContactService);

function ContactService() {

    this.contactFromServer = {
        'contacts': [
            {name: '이순신', phone: '01034567890', email: 'john@example.com'},
            {name: '세종대왕', phone: '0104444444', email: 'karan@email.com' },
        ]
    };

    // 전체 연락처 보기
    this.getAllContacts = function() {
        console.log('service invoked.. from getAllContacts');
        console.log(this.contactFromServer.contacts);
        return this.contactFromServer.contacts;
    };

    // 연락처 상세보기
    this.getContactByKey = function(id){
        this.contactFromServer

        return this.contactFromServer.contacts[id];
    };

    //연락처 등록
    this.registContact = function () {

    };

    //연락처 삭제
    this.removeContactByKey = function () {

    }
}