$(document).foundation();

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

window.onload = function() {
	var ctx1 = document.getElementById("ethnicity").getContext("2d");
	window.ethnicity = new Chart(ctx1).Pie(pieDataEthnicity, {
	}); 

	var ctx2 = document.getElementById("cause").getContext("2d");
	window.cause = new Chart(ctx2).Pie(pieDataCause, {
	});

	var ctx3 = document.getElementById("sex").getContext("2d");
	window.sex = new Chart(ctx3).Pie(pieDataSex, {
	});

    var ctx4 = document.getElementById("brennan").getContext("2d");
    window.brennan = new Chart(ctx4).Bar(barDataBrennan, {
      scaleShowVerticalLines: false
    }); 

    var ctx5 = document.getElementById("fbi").getContext("2d");
    window.fbi = new Chart(ctx5).Line(lineDataFBI, {
      bezierCurve: false,
      pointDotRadius: 3,
      pointHitDetectionRadius : 10
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
            fillColor: "rgba(0,0,0,0.2)",
            strokeColor: "rgba(0,0,0,0.3)",
            pointColor: "rgba(0,0,0,0.6)",
            pointStrokeColor: "rgba(0,0,0,0.3",
            pointHighlightFill: "rgba(0,0,0,1.0",
            pointHighlightStroke: "rgba(0,0,0,1.0)",
            data: [72, 91, 79, 69, 55, 67, 88, 95, 74, 81, 81, 64, 69, 51, 63, 32, 45, 51, 63, 87, 59, 51, 47, 40, 35, 28, 34, 39, 40, 31, 50]
        }
    ]
};