angular.module("su-templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("dropdown.tmpl","<div class=\"su-dropdown\" ng-class=\"{dn: !visible}\">\n	<span ng-transclude></span>\n</div>\n");
$templateCache.put("gridguide.tmpl","<div id=\"su-gridguide\">\n	<div class=\"wrap\">\n		<div class=\"col-edge-1\">\n			<div class=\"box\">\n				<div class=\"inner\"></div>\n			</div>\n		</div>\n		<div class=\"col-1\">\n			<div class=\"box\">\n				<div class=\"inner\"></div>\n			</div>\n		</div>\n		<div class=\"col-1\">\n			<div class=\"box\">\n				<div class=\"inner\"></div>\n			</div>\n		</div>\n		<div class=\"col-1\">\n			<div class=\"box\">\n				<div class=\"inner\"></div>\n			</div>\n		</div>\n		<div class=\"col-1\">\n			<div class=\"box\">\n				<div class=\"inner\"></div>\n			</div>\n		</div>\n		<div class=\"col-edge-1\">\n			<div class=\"box\">\n				<div class=\"inner\"></div>\n			</div>\n		</div>\n		<div class=\"left-edge\"></div>\n		<div class=\"right-edge\"></div>\n	</div>\n</div>\n");
$templateCache.put("popup.tmpl","<div class=\"su-popup\" ng-class=\"{dn: !visible, \'no-title\': !config.title, \'no-padding\': config.noPadding, \'w-sidebar\': config.menu}\">\n	<div class=\"su-inner\">\n		<div ng-if=\"config.title\" class=\"su-title\"><h2>{{config.title}}</h2></div>\n		<div class=\"su-container\" ng-transclude></div>\n	</div>\n</div>\n");}]);