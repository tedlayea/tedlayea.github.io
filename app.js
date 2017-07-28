angular
.module("app",["ui.router"])
.controller("resumeController",[ResumeControllerFunction])
.controller("projectsController",[ProjectsControllerFunction])
.config(["$stateProvider", RouterFunction])

function ResumeControllerFunction(){
  console.log(" ResumeControllerFunction");
    // this.home= false;
    this.skills = function(){
      this.display=false;
    }
    this.web = function(){
      this.display=1;
    }
    this.other = function(){
      this.display=2;
    }
    this.education = function(){
      this.display=3;
    }
}
function ProjectsControllerFunction(){
  console.log(" ProjectsControllerFunction");
}

function RouterFunction($stateProvider){
  console.log("Router setupOK ");
  $stateProvider
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
