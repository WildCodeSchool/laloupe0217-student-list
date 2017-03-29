angular.module('app')
    .service('StudentService', function($http) {
        return {
            create: function (student) {
                return $http.post('/students', student)
            }
        };
    });
