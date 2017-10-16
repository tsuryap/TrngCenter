app.factory('DashboardService', ['$http', function($http) {
    var obj = {
        traingList: [],/* [{
                trngName: 'Angular 1.x Complete walkthrough',
                tutorName: 'Surya',
                votes: 0,
                date: undefined

            },
            {
                trngName: 'Angular 2.x Complete walkthrough',
                tutorName: 'Test',
                votes: 0,
                date: undefined

            }
        ],*/
        test: 'testapp'
    };
    return obj;
}]);