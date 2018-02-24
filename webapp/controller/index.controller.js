sap.ui.define([
	"sap/ui/core/mvc/Controller", "coolapp1/coolapp1/model/models"
], function(Controller, models) {
	"use strict";

	return Controller.extend("coolapp1.coolapp1.controller.index", {
		onInit: function() {
			this.getView().setModel(models.createDataTableModel(), "EmployeeDataTable");
			this.getView().setModel(models.createCourseTableModel(), "CourseDataTable");
		},
		onMenuItem: function(event){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(event.getParameter("item").getKey());
		}

	});

});