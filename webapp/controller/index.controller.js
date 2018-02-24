sap.ui.define([
	"sap/ui/core/mvc/Controller","coolapp1/coolapp1/model/models"
], function(Controller, models) {
	"use strict";

	return Controller.extend("coolapp1.coolapp1.controller.index", {
		onInit: function(){
			this.getView().setModel(models.createDataTableModel(),"EmployeeDataTable");
		}
	});
});