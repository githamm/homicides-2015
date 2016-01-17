// Foundation
$(document).foundation();

// Slick.js
$(document).ready(function() {
  $('.single-item').slick({
    centerMode: false,
    centerPadding: '0px',
    dots: true,
    /* Just changed this to get the bottom dots navigation 
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1, */
    arrows: true
  });
});

// Chart.js pie charts

var pieDataEthnicity = [
    {
        value: 28,
        color: "rgba(0,0,0,0.8)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Black"
    },
    {
        value: 12,
        color: "rgba(0,0,0,0.5)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Hispanic"
    },
    {
        value: 10,
        color: "rgba(0,0,0,0.2)",
        highlight: "rgba(114,143,206,1.0)",
        label: "White"
    }
];

var pieDataCause = [
    {
        value: 37,
        color: "rgba(0,0,0,0.9)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Gunshot"
    },
    {
        value: 6,
        color: "rgba(0,0,0,0.5)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Stabbing/sharp force injury"
    },
    {
        value: 4,
        color: "rgba(0,0,0,0.7)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Pending"
    },
    {
        value: 2,
        color: "rgba(0,0,0,0.3)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Blunt force injury"
    },
    {
        value: 1,
        color: "rgba(0,0,0,0.1)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Drowning"
    }
];

var pieDataSex = [
    {
        value: 45,
        color: "rgba(0,0,0,0.8)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Male"
    },
    {
        value: 5,
        color: "rgba(0,0,0,0.5)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Female"
    }
];

var pieDataGang = [
    {
        value: 23,
        color: "rgba(0,0,0,0.8)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Gang-related"
    },
    {
        value: 27,
        color: "rgba(0,0,0,0.5)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Not gang-related"
    }
];

var pieDataArrest = [
    {
        value: 28,
        color: "rgba(0,0,0,0.8)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Arrest made"
    },
    {
        value: 22,
        color: "rgba(0,0,0,0.5)",
        highlight: "rgba(114,143,206,1.0)",
        label: "No arrest"
    }
];

window.onload = function() {
	var ctx1 = document.getElementById("ethnicity").getContext("2d");
	window.ethnicity = new Chart(ctx1).Pie(pieDataEthnicity, {
	}); 

	var ctx2 = document.getElementById("cause").getContext("2d");
	window.cause = new Chart(ctx2).Pie(pieDataCause, {
	});

	/* var ctx3 = document.getElementById("sex").getContext("2d");
	window.sex = new Chart(ctx3).Pie(pieDataSex, {
	}); */

    var ctx6 = document.getElementById("gang").getContext("2d");
    window.gang = new Chart(ctx6).Pie(pieDataGang, {
    });

    var ctx7 = document.getElementById("arrest").getContext("2d");
    window.arrest = new Chart(ctx7).Pie(pieDataArrest, {
    });

    var ctx4 = document.getElementById("brennan").getContext("2d");
    window.brennan = new Chart(ctx4).Bar(barDataBrennan, {
      scaleShowVerticalLines: false
    }); 

    var ctx5 = document.getElementById("fbi").getContext("2d");
    window.fbi = new Chart(ctx5).Line(lineDataFBI, {
      bezierCurve: false,
      pointDotRadius: 2.5,
      pointHitDetectionRadius : 5
    });
};

Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.animation = false;
Chart.defaults.global.responsive = true;

// Chart.js bar charts
var barDataBrennan = {
    labels: ["New York, N.Y.", "Los Angeles, Calif.", "Chicago, Ill.", "Houston, Tex.", "Philadelphia, Pa.", "Phoenix, Ariz.", "San Antonio, Tex.", "San Diego, Calif.", "Dallas, Tex.", "San Jose, Calif.", "Austin, Tex.", "Jacksonville, Fla.", "Fort Worth, Tex.", "Charlotte, N.C.", "Detroit, Mich.", "Seattle, Wash.", "Denver, Colo.", "Memphis, Tenn.", "Washington, D.C.", "Boston, Mass.", "Baltimore, Md.", "Oklahoma City, Okla.", "Portland, Ore.", "Las Vegas, Nev.", "Louisville, Ky."],
    datasets: [
        {
            label: "2015 Projected Homicides per 100,000",
            fillColor: "rgba(0,0,0,0.2)",
            strokeColor: "rgba(0,0,0,0.3)",
            highlightFill: "rgba(0,0,0,0.6)",
            highlightStroke: "rgba(0,0,0,0.7)",
            data: [4.2, 7.4, 17.4, 14, 16.2, 7.3, 8.2, 1.9, 9.9, 2.7, 4.7, 12, 6.4, 8.5, 40.3, 4.1, 7.6, 18.9, 26.1, 6.1, 55.1, 11.2, 3.2, 8.2, 12.4, 10.1]
        }
    ]
};

// Chart.js line charts
var lineDataFBI = {
    labels: ["1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
    datasets: [
        {
            label: "Denver Homicides 1985-2015",
            fillColor: "rgba(0,0,0,0.1)",
            strokeColor: "rgba(0,0,0,0.3)",
            pointColor: "rgba(0,0,0,0.6)",
            pointStrokeColor: "rgba(0,0,0,0.3",
            pointHighlightFill: "rgba(0,0,0,1.0",
            pointHighlightStroke: "rgba(0,0,0,1.0)",
            data: [72, 91, 79, 69, 55, 67, 88, 95, 74, 81, 81, 64, 69, 51, 63, 32, 45, 51, 63, 87, 59, 51, 47, 40, 35, 28, 34, 39, 40, 31, 50]
        }
    ]
};

// Leaflet map
var map = L.map('map', {
            center: [39.72, -104.94],
            zoom: 12
});

var pendingIcon = L.divIcon({
                className: 'icon-pending',
                iconSize: [12, 12]
});

var sharpIcon = L.divIcon({
                className: 'icon-sharp',
                iconSize: [12, 12]
});

var gunshotIcon = L.divIcon({
                className: 'icon-gunshot',
                iconSize: [12, 12]
});

var bluntIcon = L.divIcon({
                className: 'icon-blunt',
                iconSize: [12, 12]
});

var drowningIcon = L.divIcon({
                className: 'icon-drowning',
                iconSize: [12, 12]
});

L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/{type}/{mapID}/reduced.day/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}', {
    attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
    subdomains: '1234',
    mapID: 'newest',
    app_id: '2K8wqfYF2CuD5D67HdQx',
    app_code: '5PforzMWCWQoYPBUP-0p_A',
    base: 'base',
    maxZoom: 20,
    type: 'maptile',
    language: 'eng',
    format: 'png8',
    size: '256'
}).addTo(map);

$.getJSON("js/homicide-geojson.js",function(data){
    var mapIcon = L.divIcon({
        className: 'icon-manufacturing',
        iconSize: [9, 9]
    });

var pending = L.geoJson(data, {
    filter: function(feature, layer) {
        return feature.properties.causeSummary == "Pending";
    },
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {
            icon: pendingIcon
        })
    }
});

var sharp = L.geoJson(data, {
    filter: function(feature, layer) {
        return (Array("Sharp force injury","Stab wound").indexOf(feature.properties.causeSummary) >= 0);
    },
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {
            icon: sharpIcon
        })
    }
});

var gunshot = L.geoJson(data, {
    filter: function(feature, layer) {
        return feature.properties.causeSummary == "Gunshot";
    },
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {
            icon: gunshotIcon
        })
    }
});

var blunt = L.geoJson(data, {
    filter: function(feature, layer) {
        return feature.properties.causeSummary == "Blunt force";
    },
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {
            icon: bluntIcon
        })
    }
});

var drowning = L.geoJson(data, {
    filter: function(feature, layer) {
        return feature.properties.causeSummary == "Drowning";
    },
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {
            icon: drowningIcon
        })
    }
});

pending.addTo(map);
sharp.addTo(map);
gunshot.addTo(map);
blunt.addTo(map);
drowning.addTo(map);

    L.geoJson(data,{
        pointToLayer: function(feature,latlng){
            var marker = L.marker(latlng,{
              icon: mapIcon
            });
            marker.bindPopup(
            	'<strong>' + feature.properties.nameOfDeceased + '</strong><br>'
            	+ '<hr style="margin-top: 3px; margin-bottom: 7px;">'
            	+ 'Died on ' + feature.properties.dateOfHomicide + ' near ' + feature.properties.addressOfHomicide + ' in the ' + feature.properties.Neighborhood + ' neighborhood.<br style="margin-bottom: 15px;">'
            	+ '<span style="font-weight: bold;">Cause of death:</strong> ' + feature.properties.causeOfDeath);
            return marker;
        }
    }).addTo(map);
});