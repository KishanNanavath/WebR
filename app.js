/**
 * Created by Balkishan on 18-07-2016.
 */

var myapp = angular.module('myApp', ['ngMaterial']);

//************Controller Functions*************************
function MainCtrl($scope, $mdDialog, $interval) {
    console.log("sta");

    $scope.author = "kishan";

    $scope.showAlert = function(ev,lang) {
        $mdDialog.show({
            targetEvent:ev,
            clickOutsideToClose:true,
            autoWrap:true,
            templateUrl:'./SRC/HTML/profilePage.html',
            locals:{lang:lang},
            controller:dialogCtrl
        });

        function dialogCtrl($scope,$mdDialog,lang){
            $scope.lang = lang;
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

    $scope.quals = [
        {
            "title":"GRADUATATION",
            "branch":"Electronics and Communication Engineering",
            "joiningYear":2012,
            "passingYear":2016,
            "institute":"National Institute Of Technology, Karnataka(NITK)",
            "board":"Autonomous",
            "grading":"CGPA",
            "maxScore":10,
            "score":6.85
        },
        {
            "title":"INTERMEDIATE",
            "branch":"Maths, Physics and Chemistry",
            "joiningYear":2010,
            "passingYear":2012,
            "institute":"New Era Jr College",
            "board":"Board of Intermediate Education, Andhra Pradesh",
            "grading":"percentage",
            "maxScore":100,
            "score":92.7
        },
        {
            "title":"SCHOOL",
            "branch":"",
            "joiningYear":"",
            "passingYear":2010,
            "institute":"Nalanda High School",
            "board":"Board of Secondary Education, Andhra Pradesh",
            "grading":"percentage",
            "maxScore":100,
            "score":86.44
        }
    ];

    //$scope.languages = ["JAVA", "C", "PYTHON", "C#", "CUDA", "PHP","AngularJs","ExpressJs","MongoDB","NodeJs","MySQL","GIT"];
    $scope.languages = [
        {
            name:"JAVA",
            icon:"devicon-java-plain"
        },{
            name:"PYTHON",
            icon:"devicon-python-plain"
        },{
            name:"C",
            icon:"devicon-c-plain"
        },{
            name:"C#",
            icon:"devicon-csharp-plain"
        },{
            name:"PHP",
            icon:"devicon-php-plain"
        },{
            name:"AngularJs",
            icon:"devicon-angularjs-plain"
        },{
            name:"ExpressJs",
            icon:"devicon-javascript-plain"
        },{
            name:"MongoDB",
            icon:"devicon-mongodb-plain"
        },{
            name:"NodeJs",
            icon:"devicon-nodejs-plain"
        },{
            name:"MySQL",
            icon:"devicon-mysql-plain"
        },{
            name:"GIT",
            icon:"devicon-git-plain"
        },{
            name:"ANDROID",
            icon:"devicon-android-plain"
        },{
            name:"BOOTSTRAP",
            icon:"devicon-bootstrap-plain"
        },{
            name:"CSS3",
            icon:"devicon-css3-plain"
        },{
            name:"GITHUB",
            icon:"devicon-github-plain"
        },{
            name:"JavaScript",
            icon:"devicon-javascript-plain"
        },{
            name:"jQuery",
            icon:"devicon-jquery-plain"
        }
    ];

    $scope.oss = ["Windows", "Linux"];
    $scope.skills = ["Networking","Algorithms","ANDROID", "WEB DESIGNING", "DESKTOP APPLICATION"];

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