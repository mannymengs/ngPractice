(function()
{
    var app = angular.module('worldCup',[]);

    app.controller('menuController',
        function ($scope)
        {
            this.menuItems = orgList;

            var updateItems = function()
            {
                return ['Nation', 'Player', 'Region'];
            };
        }
    );

    app.controller('listController',
        function($event)
        {
            this.listItems = getItems($event);
            this.nations = nationList;
            this.regions = regionList;
            this.players = playerList;
        }
    );

    var getItems = function($event)
    {

    }

    var orgList =
        [
            {label:'Nation'},
            {label: 'Region'},
            {label: 'Player'}
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

