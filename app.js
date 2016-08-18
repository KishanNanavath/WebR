/**
 * Created by Balkishan on 18-07-2016.
 */
var myapp = angular.module('myApp', ['ngMaterial']);

//************Controller Functions*************************
function MainCtrl($scope, $mdDialog, $interval) {
    $scope.author = "kishan";

    $scope.bg1 = {
        "background-image" : "linear-gradient(-90deg, #AA076B, #61045F)",
        "transition":"background-image 1s ease"
    };

    $scope.bg2 = {
        "background-image" : "linear-gradient(-90deg, #24C6DC, #514A9D)",
        "transition":"background-image 1s"
    };

    $scope.bg = $scope.bg1;

    $scope.changeBg = function (v) {
        if(v === "bg1"){
            $scope.bg = $scope.bg1;
        }else{
            $scope.bg = $scope.bg2;
        }
    };

    //$interval(function () {
    //    if($scope.bg === $scope.bg2){
    //        $scope.changeBg("bg1");
    //        console.log("bg1");
    //    }
    //    else{
    //        $scope.changeBg("bg2");
    //        console.log("bg2");
    //    }
    //},5000);

    $scope.showAlert = function(ev,lang) {
        $mdDialog.show({
            targetEvent: ev,
            template:
            '<md-dialog layout-padding>' +
            '  <md-dialog-content>Hello '+lang+'!</md-dialog-content>' +
            '  <md-dialog-actions>' +
            '    <md-button ng-click="closeDialog()" class="md-primary">' +
            '      Close Greeting' +
            '    </md-button>' +
            '  </md-dialog-actions>' +
            '</md-dialog>',
            clickOutsideToClose:true,
            onComplete: afterShowAnimation,
            locals: { employee:lang }
        });
        // When the 'enter' animation finishes...
        function afterShowAnimation(scope, element, options) {
            // post-show code here: DOM element focus, etc.
        }
    };

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
    $scope.languages = ["JAVA", "C", "PYTHON", "C#", "CUDA", "PHP","AngularJs","ExpressJs","MongoDB","NodeJs","MySQL","GIT"];
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