angular.module("templates").run(["$templateCache",function($templateCache){$templateCache.put("partials/6.html","<div class='page'>\n  <div class='demo-section blue' ng-style='resizePageContainer()' resize>\n    <div class='center-block text-center'>\n      <span class='icon-coin-bank'></span>\n      <h1>\n        <span class='demo-bold-txt'>WEDIDIT INSIGHTS</span>\n        <br>\n        Increase Donations &\n        <br>\n        Decrease Spending\n      </h1>\n      <h4>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque chaere, municipem potuimus facimus intellegere diuturnitatem meam erimus ignavia cognitionis momenti, placeat diligant theophrasti capti athenis populo videtis quas persius, detracto.\n      </h4>\n    </div>\n  </div>\n  <div class='demo-section whitesmoke' ng-style='resizePageContainer()' resize>\n    <a class='arrow-wrap text-center' du-smooth-scroll href='#section-2' id='section-2'>\n      <span class='glyphicon glyphicon-chevron-down arrow'></span>\n    </a>\n    <div class='center-block text-center'>\n      <img alt=\"WEDIDIT Insights\" src=\"/assets/donorprospecting-dcedaf35e190e0a70fb92145e4265886.png\" />\n    </div>\n  </div>\n  <div class='demo-section yellow' ng-style='resizePageContainer()' resize>\n    <div class='center-block text-center'>\n      <div class='col-md-7'>\n        <img alt=\"Targeted Fundraising\" class=\"img-responsive\" src=\"/assets/targetedreach-e4f401db3575b789c097c6d8551dc5d6.png\" />\n      </div>\n      <div class='col-md-5'>\n        <h1 class='demo-bold-txt'>Targeted Online Fundraising</h1>\n        <h4>Lorem.Fortibus.Dissensio.</h4>\n      </div>\n    </div>\n  </div>\n  <div class='demo-section whitesmoke' ng-style='resizePageContainer()' resize>\n    <div class='center-block text-center'>\n      <div class='col-md-8'>\n        <img alt=\"Donor Page Insights\" class=\"img-responsive\" src=\"/assets/donorpagesample-e6dae4316cfe19536782d0498755a964.png\" />\n      </div>\n      <div class='col-md-4'>\n        <h1 class='demo-bold-txt blackshade-text'>\n          We'll Do The\n          <br>\n          Work For You\n        </h1>\n        <h4 class='blackshade-text'>Lorem.Fortibus.Dissensio.</h4>\n      </div>\n      <div class='col-md-6 col-md-offset-3'>\n        <a class='demo-btn blackshade white-text' ng-click='optsIn = !optsIn' ng-show='!optsIn'>Send Me More Info</a>\n        <div ng-show='optsIn'>\n          <div class='form-group' ng-class=\"{ 'has-error' : vFname }\">\n            <input class='form-control' name='name' ng-model='firstname' placeholder='Enter First Name' required type='text'>\n            <p class='help-block' ng-show='vFname'>Your First Name is required.</p>\n          </div>\n          <div class='form-group' ng-class=\"{ 'has-error' : lastname.$invalid &amp;&amp; !lastname.$pristine }\">\n            <input class='form-control' name='name' ng-model='lastname' placeholder='Enter Last Name' required type='text'>\n            <p class='help-block' ng-show='lastname.$invalid &amp;&amp; !lastname.$pristine'>Your Last Name is required.</p>\n          </div>\n          <div class='form-group' ng-class=\"{ 'has-error' : vEmail }\">\n            <input class='form-control' name='email' ng-model='email' placeholder='Email' required type='email'>\n            <p class='help-block' ng-show='vEmail'>Enter a valid email.</p>\n          </div>\n          <div class='form-group'>\n            <input class='btn btn-success' ng-click='submitResponse()' type='submit' value='Send Me Info'>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>")}]);