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
                "coordinates": [-79.178474,43.161299]
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
                "coordinates": [-106.68316724771255,10.771008051301273]
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




var campus = {
    "type": "Feature",
    "properties": {
        "popupContent": "This is the Auraria West Campus",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [-105.00432014465332, 39.74732195489861],
                    [-105.00715255737305, 39.74620006835170],
                    [-105.00921249389647, 39.74468219277038],
                    [-105.01067161560059, 39.74362625960105],
                    [-105.01195907592773, 39.74290029616054],
                    [-105.00989913940431, 39.74078835902781],
                    [-105.00758171081543, 39.74059036160317],
                    [-105.00346183776855, 39.74059036160317],
                    [-105.00097274780272, 39.74059036160317],
                    [-105.00062942504881, 39.74072235994946],
                    [-105.00020027160645, 39.74191033368865],
                    [-105.00071525573731, 39.74276830198601],
                    [-105.00097274780272, 39.74369225589818],
                    [-105.00097274780272, 39.74461619742136],
                    [-105.00123023986816, 39.74534214278395],
                    [-105.00183105468751, 39.74613407445653],
                    [-105.00432014465332, 39.74732195489861]
                ],[
                    [-105.00361204147337, 39.74354376414072],
                    [-105.00301122665405, 39.74278480127163],
                    [-105.00221729278564, 39.74316428375108],
                    [-105.00283956527711, 39.74390674342741],
                    [-105.00361204147337, 39.74354376414072]
                ]
            ],[
                [
                    [-105.00942707061768, 39.73989736613708],
                    [-105.00942707061768, 39.73910536278566],
                    [-105.00685214996338, 39.73923736397631],
                    [-105.00384807586671, 39.73910536278566],
                    [-105.00174522399902, 39.73903936209552],
                    [-105.00041484832764, 39.73910536278566],
                    [-105.00041484832764, 39.73979836621592],
                    [-105.00535011291504, 39.73986436617916],
                    [-105.00942707061768, 39.73989736613708]
                ]
            ]
        ]
    }
};

var coorsField = {
    "type": "Feature",
    "properties": {
        "popupContent": "Coors Field"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404191970824, 39.756213909328125]
    }
};
