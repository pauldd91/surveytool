// Angular Rails Template
// source: app/assets/templates/demo.html.haml

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("demo.html", "<div autoscroll='true' du-smooth-scroll id='page-view' ng-style='resizePageContainer()' resize ui-view=''></div>")
}]);

