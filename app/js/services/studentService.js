angular.module('app')
    .service('StudentService', function($http) {
        return {
            create: function (student) {
                return $http.post('/students', student)
            },
            getAll: function () {
                return $http.get('/students')
            }
        };
    });
