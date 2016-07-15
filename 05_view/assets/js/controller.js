angular.module('contactApp', ['ngRoute'])

/*-----------------------------------
 | Routes
 ------------------------------------*/

    .config(function($routeProvider){

        $routeProvider.when('/', {
            controller: 'indexCtrl',
            templateUrl: 'assets/partials/index.html'
        })

            .when('/add-contact', {
                controller: 'addCtrl',
                templateUrl: 'assets/partials/add.html'
            })

            .when('/contact/:id', {
                //.when('/contact/:id/addr:addr', {
                controller: 'contactCtrl',
                templateUrl: 'assets/partials/contact.html'
            })

            .otherwise({
                redirectTo: '/'
            });

    })

    /*-----------------------------------
     | Truncate Filter
     ------------------------------------*/

    .filter('truncate', function(){
        return function(input, limit){
            return (input.length > limit) ? input.substr(0, limit)+'…' : input;
        };
    })

    /*-----------------------------------
     | Index Controller
     ------------------------------------*/

    .controller('indexCtrl', function($scope, contactService){


        var vm = {
            'contacts':[
                {
                    name: '홍길동',
                    phone: '01234567890',
                    email: 'john@example.com'
                },
                {
                    name: '김영수',
                    phone: '09876543210',
                    email: 'karan@email.com'
                },
                {
                    name: '이영희',
                    phone: '0212345678',
                    email: 'kkk@email.com'
                }
            ]
        };

        // vm 사용
        //$scope.contacts = vm.contacts;

        // factory 사용
        $scope.contacts = contactService.getAllContacts();
    })

    /*-----------------------------------
     | Add Controller
     ------------------------------------*/

    .controller('addCtrl', function($scope, contactService){
        $scope.contact = contactService.getAllContacts();
    })

    /*-----------------------------------
     | Contact Controller
     ------------------------------------*/

    .controller('contactCtrl', function($scope, $routeParams, contactService){

        console.log($routeParams.id);

        var contact = contactService.getContactByKey($routeParams.id);
        $scope.contact = contact;
    });