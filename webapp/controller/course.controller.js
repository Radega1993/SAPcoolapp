sap.ui.define(['jquery.sap.global', 'sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel'],
	function(jQuery, Controller, JSONModel) {
		"use strict";

		var menuController = Controller.extend("coolapp1.coolapp1.controller.course", {
			descriptionColor: function(mark) {
				if (mark >= 5) {
					return "Success";
				} else if (mark < 5) {
					return "Error";
				} else {
					return "None";
				}
			}

		});
		return menuController;

	});