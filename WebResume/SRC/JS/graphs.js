/**
 * Created by Kishan on 21-Aug-16.
 */
$(document).ready(function () {
    var ctx = $("#myChart").get(0).getContext("2d");

    var data = [
        {
            value:200,
            color:"red",
            label:"me"
        },
        {
            value:50,
            color:"pink",
            label:"i"
        },
        {
            value:500,
            color:"black",
            label:"yourself"
        }
    ];

    var chart = new Chart(ctx).Doughnut(data);

});