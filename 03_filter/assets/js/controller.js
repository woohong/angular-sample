angular.module('contactApp', [])
    
.filter('truncate', function(){
    return function(input, limit){
        return (input.length > limit) ? input.substr(0, limit)+'…' : input;
    };
})

.controller('AppCtl', function($scope, $filter, jsonFilter){
    
    $scope.contacts = [
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name: 'Karan Bromwich',
            phone: '09876543210',
            email: 'karan@email.com'
        },
        {
            name: 'Declan Proud',
            phone: '2341234231',
            email: 'declan@email.com'
        },
        {
            name: 'Paul McKay',
            phone: '912345678',
            email: 'p.mckay@domain.com'
        }
    ];

    console.log(jsonFilter($scope.contacts));

});