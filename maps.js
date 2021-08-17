mapboxgl.accessToken = 'pk.eyJ1IjoibWFuYW4xMDEwMTAiLCJhIjoiY2tzZjEzYjBtMTVwejMwb2RyM2RrMmtwcCJ9.DElUcsO_O4EcYO2UYYqQ0w';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-25.5707, 12.9115],
    zoom: 9
});
function loadline() {
    map.on('click', () => {
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [
                            -25.6, 12.901505084198375
                        ],
                        [
                            -25.250701904296875,
                            12.902843703352639
                        ],
                        [
                            -25.149078369140625,
                            13.007233869059881
                        ]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#21FFBD',
                'line-width': 8
            }
        });
    });
}

function loadCourt() {
    map.on('click', () => {
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [
                            -25.6, 12.901505084198375
                        ],
                        [
                            -25.9,
                            12.902843703352639
                        ],
                        [-25.988159179687496, 13.078140609755359]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#21FFBD',
                'line-width': 8
            }
        });
    });
}

function loadHospital() {
    map.on('click', () => {
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [
                            -25.6, 12.901505084198375
                        ],
                        [-25.746459960937496, 12.585392141908478]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#21FFBD',
                'line-width': 8
            }
        });
    });
}

function loadATM() {
    map.on('click', () => {
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [
                            -25.6, 12.901505084198375
                        ],
                        [-25.147705078125, 12.758231584069796]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#21FFBD',
                'line-width': 8
            }
        });
    });
}

const user = [-25.6, 12.901505084198375];

const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-25.988159179687496, 13.078140609755359]
            },
            properties: {
                title: 'Food Court',
                name: 'food_court',
                description: 'Hang out with your friends here!',
                available: 30,
                total: 40
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-25.147705078125, 13.004557745339769]
            },
            properties: {
                title: 'Washroom',
                name: 'wc',
                description: 'Washroom 1',
                available: 3,
                total: 10
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-25.147705078125, 12.758231584069796]
            },
            properties: {
                title: 'ATM',
                name: 'bank',
                description: 'Short on money? Withdraw here!',
                available: 1,
                total: 1
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-25.982666015625, 12.585392141908478]
            },
            properties: {
                title: 'Washroom',
                name: 'wc',
                description: 'Washroom 2',
                available: 2,
                total: 10
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-25.746459960937496, 12.585392141908478]
            },
            properties: {
                title: 'Hospital',
                name: 'hospital',
                description: 'Get yourself checked here!',
                available: 2,
                total: 10
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: user
            },
            properties: {
                title: 'User',
                name: 'marker',
                description: 'You are here.',
                available: "you",
                total: "you"
            }
        }
        ]
};

// const line = {
//     'type': 'FeatureCollection',
//     'features': [
//         {
//             'type': 'Feature',
//             'properties': {
//                 'title': 'Best Path'
//             },
//             'geometry': {
//                 'type': 'lineString',
//                 'coordinates': [
//                     [
//                         -25.430603027343746,
//                         12.901505084198375
//                     ],
//                     [
//                         -25.250701904296875,
//                         12.902843703352639
//                     ],
//                     [
//                         -25.149078369140625,
//                         13.007233869059881
//                     ]
//                 ]
//             }
//         }
//     ]
// }

// add markers to map
let i = 0;
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('img')
    el.className = 'marker';
    el.id = `marker${i}`;
    i += 1;
    el.src = `assets/${marker.properties.name}.png`;
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</br>' + marker.properties.available + " available present out of " + marker.properties.total + '</p>'))
        .addTo(map);
});

// Washroom
document.getElementById('marker1').addEventListener("click", loadline);
document.getElementById('marker3').addEventListener("click", loadline);

// Food Court
document.getElementById('marker0').addEventListener("click", loadCourt);

// Hospital
document.getElementById('marker4').addEventListener('click', loadHospital);

// ATM
document.getElementById('marker2').addEventListener('click', loadATM);
