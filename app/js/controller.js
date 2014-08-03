var wakeMeUpApp = angular.module('wakeMeUpApp', []);

wakeMeUpApp.controller('GoGettersController', function ($scope) {

  $scope.goGetters = [
    {'picture':'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/10013928_10201559893229219_2038760300_n.jpg?oh=5ad1eb420fbb455870fc04e89f793491&oe=543E4EB6&__gda__=1413668245_d2702f51b7e278734391b48b6dc6aae8', 'name': 'nikil', 'goal':'5:30am', 'status':1, 'now_playing':'http://www.youtube.com/watch?v=F57P9C4SAW4'},
    {'picture':'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/39066_1337756455710_2097341_n.jpg?oh=aefd51d6f6c490e8ec65415d18dc1aec&oe=543A8DF5&__gda__=1414845195_f143a1989b95bd84e87ba45ed57babf6', 'name': 'joe', 'goal':'7:00am', 'status':1, 'now_playing':'http://www.youtube.com/watch?v=F57P9C4SAW4'},
    {'picture':'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/10514543_10202414606141779_5735350722493451936_n.jpg?oh=c8e7cc1f5c2742196e7d2d4e9beb73a6&oe=5435DDE7&__gda__=1412981489_e28e34611ec17f0de9293e5cc74e44d6', 'name': 'dtrain', 'goal':'6:00am', 'status':0, 'now_playing':'http://www.youtube.com/watch?v=F57P9C4SAW4'},
  ];
});