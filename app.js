//jquery

// $("Tedla").on("apply", accept)
// function accept(){
//   $("Tedla").css("status","high_salary")
// }


angular
.module("app",["ui.router"])
.controller("mainController",[MainControllerFunction])
.controller("homepageController",[HomepageControllerFunction])
.controller("contactController",[ContactControllerFunction])
.controller("resumeController",[ResumeControllerFunction])
.controller("projectsController",[ProjectsControllerFunction])
.config(["$stateProvider", RouterFunction])


function MainControllerFunction(){
  console.log("Main controller");
}
function HomepageControllerFunction(){
  console.log(" HomepageControllerFunction");
}
function ContactControllerFunction(){
  console.log(" ContactControllerFunction");
}
function ResumeControllerFunction(){
  console.log(" ResumeControllerFunction");
}
function ProjectsControllerFunction(){
  console.log(" ProjectsControllerFunction");
}

function RouterFunction($stateProvider){
  console.log("Router setupOK ");
  $stateProvider
 .state("homePage", {
   url: "/",
   templateUrl: "ng-views/homepage.html",
   controller: "homepageController",
   controllerAs: "vm"
})
.state("sourceCode", {
  url: "/sourceCode",
  templateUrl: "ng-views/sourceCode.html",
  controller: "contactController",
  controllerAs: "vm"
})
.state("resume", {
  url: "/resume",
  templateUrl: "ng-views/resume.html",
  controller: "resumeController",
  controllerAs: "vm"
})
.state("projects", {
  url: "/projects",
  templateUrl: "ng-views/projects.html",
  controller: "projectsController",
  controllerAs: "vm"
})
}
