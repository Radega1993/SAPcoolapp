sap.ui.define([
	"sap/ui/core/mvc/Controller", "coolapp1/coolapp1/model/models"
], function(Controller, models) {
	"use strict";

	return Controller.extend("coolapp1.coolapp1.controller.index", {
		onInit: function() {
			this.getView().setModel(models.createDataTableModel2(),"Bulldozercourse");
			this.getView().setModel(models.createDataTableModel3(),"CarLicense");
			this.getView().setModel(models.createDataTableModel4(),"MaterialsCourse");
			this.getView().setModel(models.createDataTableModel5(),"PersonalCourse");
			this.getView().setModel(models.createDataTableModel6(),"PersonalJob");
		},
		onMenuItem: function(event){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(event.getParameter("item").getKey());
		}

	});

});