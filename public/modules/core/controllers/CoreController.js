/**
 * Created by enpfeff on 5/5/15.
 */
var _ = require('lodash');

var controller = function($scope) {
    $scope.name = "Your Name Here";

    $scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', isSelected:true},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    $scope.callback = function(value) {
        console.log(value);
    };

    $scope.go = function() {
        console.log($scope.rowCollection);
        _.forEach($scope.rowCollection, function(value) {
            value.isSelected = false;
        });
    }
};

module.exports = controller;