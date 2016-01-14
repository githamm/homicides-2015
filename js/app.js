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
	  animationSteps: 1
	}); 

	var ctx2 = document.getElementById("cause").getContext("2d");
	window.cause = new Chart(ctx2).Pie(pieDataCause, {
	  animationSteps: 1
	});

	var ctx3 = document.getElementById("sex").getContext("2d");
	window.sex = new Chart(ctx3).Pie(pieDataSex, {
	  animationSteps: 1
	});
};