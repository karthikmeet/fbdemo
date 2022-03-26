$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/login2.feature");
formatter.feature({
  "name": "Facebook login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open Facebook and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdef.open_facebook_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepdef.enter_the_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});