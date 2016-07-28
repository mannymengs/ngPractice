(function()
{
    var app = angular.module('worldCup',[]);

    app.controller
    (   'menuController',
        function ($scope)
        {
            this.menuItems = orgList;
            // this.menuItems[0].addClass("active");
            $scope.updateItems = function()
            {
                var item = this.menuItem;
                // console.log("updateItems: "+item.label);
                // var sel = '#'+item.label;
                // angular.element(document.querySelectorAll('[ng-model=menuItem]')).removeClass("active");
                // angular.element(document.querySelector(sel)).addClass("active");
                angular.forEach
                (
                    $scope.menuItems,
                    function (value, key)
                    {
                        console.log(key + ":" + value);
                    }
                );
                item.active = true;
                if(item.label=="Nation") {return nationList;}
                if(item.label=="Player") {return playerList;}
                if(item.label=="Region") {return regionList;}
            };
        }
    );

    app.controller
    (   'listController',
        function($scope)
        {
            this.listItems = $scope.updateItems();
            this.nations = nationList;
            this.regions = regionList;
            this.players = playerList;
        }
    );

    var orgList =
        [
            nation = {label: 'Nation'},
            region = {label: 'Region'},
            player = {label: 'Player'}
        ]

    var nationList =
        [
            {
                name: 'Argentina',
                abrev: 'ARG',
                captain: 'Messi',
                rank: 1,
                region: 'SA'
//            keyPlayers: ['Messi', 'Aguero', 'Mascherano', 'Di Maria'];
            },
            {
                name: 'Portugal',
                abrev: 'POR',
                captain: 'Ronaldo',
                rank: 12,
                region: 'EU'
//            keyPlayers: ['Messi', 'Aguero', 'Mascherano', 'Di Maria'];
            }
        ];

    var playerList =
        [
            {
                name: 'Lionel Messi',
                nation: 'Argentina',
                number: 10,
                position: 'Center Forward',
                club: 'Barcelona'
            },
            {
                name: 'Cristiano Ronaldo',
                nation: 'Portugal',
                number: 7,
                position: 'Striker',
                club: 'Real Madrid'
            }
        ];

    var regionList =
        [
            {
                name: 'South America',
                abrev: 'SA'
            },
            {
                name: 'Europe',
                abrev: 'EU'
            }
        ];
})();

