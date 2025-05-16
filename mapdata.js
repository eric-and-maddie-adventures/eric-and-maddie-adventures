//marker dots
//red = prior to 2022
//pink = 2022
//purple = 2023
//blue = 2024
//green = 2025
var markers = {
    "type": "FeatureCollection",
    "features": [

	    {"geometry": {
                "type": "Point",
                "coordinates": [-80.3776,44.3372]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Red"
            },
            "id": "Colin's Cottage"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-75.700264,45.425511]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Red"
            },
            "id": "Ottawa"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-71.224612,46.80531]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Red"
            },
            "id": "Quebec City"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-79.411942,43.633249]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Pink"
            },
            "id": "Toronto"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-79.078474,43.261299]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Pink"
            },
            "id": "Niagara-on-the-Lake"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-114.08818, 51.05217]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Calgary"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-112.710543,51.462218]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Drumheller"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-115.555573,51.122619]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Banff - Sulphur Mountain"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-85.83702,10.22771]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Costa Rica"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-63.1311,46.2382]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Charlottetown"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-66.642267,45.950176]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Fredericton"
        },


	    {"geometry": {
                "type": "Point",
                "coordinates": [-79.078474,43.241299]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Niagara pt2 w Furlan"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-113.2622,50.4038]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Vulcan"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-115.0631,49.5040]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Fernie"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-116.0734,50.6200]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Radium"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [-115.3479,51.0884]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Canmore"
        },

	    {"geometry": {
                "type": "Point",
                "coordinates": [106.68316724771255,10.771008051301273]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Green"
            },
            "id": "Vietnam"
        },

    ]
};


//roadtrips
var roadtrip = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-65.637043, 62.075445],
                    [-65.637499, 62.076090]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-65.637499, 62.076090],
                    [-65.637557, 62.076174]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": true
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-65.637557, 62.076174],
                    [-66.337933, 62.545749]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};
