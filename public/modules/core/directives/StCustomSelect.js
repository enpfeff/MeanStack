/**
 * Created by enpfeff on 5/5/15.
 */
var directive = ['stConfig', function(stConfig) {
    return {
        restrict: 'A',
        require: '^stTable',
        scope: {
            row: '=stCustomSelect',
            callback: '&stSelected'
        },
        link: function (scope, element, attr, ctrl) {
            var mode = attr.stSelectMode || stConfig.select.mode;
            element.bind('click', function () {
                scope.$apply(function () {
                    ctrl.select(scope.row, mode);
                    scope.callback(scope.row);
                });
            });

            scope.$watch('row.isSelected', function (newValue) {
                if (newValue === true) {
                    element.addClass(stConfig.select.selectedClass);
                } else {
                    element.removeClass(stConfig.select.selectedClass);
                }
            });
        }
    };
}];

module.exports = directive;
