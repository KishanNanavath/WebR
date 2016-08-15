/**
 * Created by Balkishan on 18-07-2016.
 */
var myapp = angular.module('myApp', ['ngMaterial']);

//************Controller Functions*************************
function MainCtrl($scope, $mdDialog) {
    $scope.title = "Stage One";

    $scope.selectedTab = 1;

    var elem = angular.element(document.getElementsByTagName("md-card"));

    $scope.address = [
        {
            "type": "Permanent",
            "H_no": "2-3-64/1/A/6",
            "local": "JAISWAL GARDEN",
            "mandal": "AMBERPET",
            "city": "HYDERABAD",
            "state": "TELANGANA",
            "pin_code": "500013"
        },
        {
            "type": "Current",
            "H_no": "687687",
            "local": "DODDANAKUNDI",
            "mandal": "DODDANAKUNDI",
            "city": "BANGALORE",
            "state": "KARNATAKA",
            "pin_code": "510006"
        }
    ];
    $scope.quals = ["GRADUATATION", "INTERMEDIATE", "SCHOOL"];
    $scope.languages = ["JAVA", "C", "C#", "CUDA", "PYTHON", "PHP","AngularJs","ExpressJs","MongoDB","MySQL","GIT"];
    $scope.oss = ["Windows", "Linux"];
    $scope.skills = ["ANDROID", "WEB DESIGNING", "DESKTOP APPLICATION"];

    $scope.project_details = [
        {
            "title": "Major Project",
            "Description": "Implementing Reconstruction of images from Parallel" +
            " and Fan-beam projection (in CT-Scan) Algorithms and " +
            "detecting edges using CUDA C for Parallel computing on NVIDIA GPU",
            "duration": "July 2015 to April 2016",
            "team_size": "3",
            "role": "Developer and Tester",
            "skills": ["C", "CUDA C", "Visual Studio 2015"],
        }
    ];

    $scope.per_details = {
        "dob": new Date("January 21,93").toDateString(),
        "Gender": "Male",
        "Status": "Single",
        "Nationality": "INDIAN",
        languages: ["English", "Hindi", "Telugu"]
    };

    $scope.projects = [
        {
            "title": "Major Project",
            "Description": "Implementing Reconstruction of images from Parallel and Fan-beam projection" +
                            " (in CT-Scan) Algorithms and detecting edges using CUDA C for Parallel computing" +
                            " on NVIDIA GPU.",
            "Duration":new Date("July 1,15"),
            "RolesPlayed":["Developer","Tester"],
            "Skills":["C","CUDA","Visual Studio 2015"],
            "TeamSize":3
        },
        {
            "title": "Project",
            "Description": "Developed website for an e-Commerce company.",
            "Duration":new Date("July 1,15"),
            "RolesPlayed":["Developer","Tester"],
            "Skills":["HTML", "CSS", "Bootstrap", "Angularjs", "PHP", "MySQL", "Phpstrorm"],
            "TeamSize":2
        },
        {
            "title": "Project",
            "Description": "Developed website for an e-Commerce company.",
            "Duration":new Date("July 1,15"),
            "RolesPlayed":["Developer","Tester"],
            "Skills":["HTML", "CSS", "Bootstrap", "Angularjs", "PHP", "MySQL", "Phpstrorm"],
            "TeamSize":2
        },
        {
            "title": "Project",
            "Description": "Developed website for an e-Commerce company.",
            "Duration":new Date("July 1,15"),
            "RolesPlayed":["Developer","Tester"],
            "Skills":["HTML", "CSS", "Bootstrap", "Angularjs", "PHP", "MySQL", "Phpstrorm"],
            "TeamSize":2
        }
    ];

    $scope.tools = ["Visual Studio",
                    "Eclipse",
                    "Android Studio",
                    "PHPStorm",
                    "WebStorm",
                    "PyCharm",
                    "Octave",
                    "Matlab",
                    "ADOBE Photoshop CS6",
                    "ADOBE Illustrator CS6"
                    ];

    showAlert = function (src) {
        alert = $mdDialog.alert({
            title: 'Attention',
            templete: '<img src="' + src + '">',
            ok: 'Close'
        });
        $mdDialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
    }
}
//-------------controller definations----------------------
myapp.controller("MainCtrl", MainCtrl);
//_________________________________________________________