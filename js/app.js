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
        value: 5,
        color: "rgba(0,0,0,0.7)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Pending"
    },
    {
        value: 4,
        color: "rgba(0,0,0,0.5)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Sharp force injury"
    },
    {
        value: 2,
        color: "rgba(0,0,0,0.3)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Stab wound"
    },
    {
        value: 2,
        color: "rgba(0,0,0,0.1)",
        highlight: "rgba(114,143,206,1.0)",
        label: "Blunt force"
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

window.onload = function(){
	var ctx1 = document.getElementById("ethnicity").getContext("2d");
	window.ethnicity = new Chart(ctx1).Pie(pieDataEthnicity, {
	  animationSteps: 1,
      responsive: true
	}); 

	var ctx2 = document.getElementById("cause").getContext("2d");
	window.cause = new Chart(ctx2).Pie(pieDataCause, {
	  animationSteps: 1,
      responsive: true
	});

	var ctx3 = document.getElementById("sex").getContext("2d");
	window.sex = new Chart(ctx3).Pie(pieDataSex, {
	  animationSteps: 1,
      responsive: true
	});

    var ctx4 = document.getElementById("brennan").getContext("2d");
    window.brennan = new Chart(ctx4).Bar(barDataBrennan, {
      animationSteps: 1,
      responsive: true,
      scaleShowVerticalLines: false
    }); 
};

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
            data: [4.2, 7.4, 17.4, 14, 16.2, 7.3, 8.2, 1.9, 9.9, 2.7, 4.7, 12, 6.4, 8.5, 40.3, 4.1, 8.1, 18.9, 26.1, 6.1, 55.1, 11.2, 3.2, 8.2, 12.4, 10.1]
        }
    ]
};