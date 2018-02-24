sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		
		createDataTableModel: function() {
			var oModel = new JSONModel({"mydata":[{"salary":"500","name":"foo"},{"salary":"200","name":"foo1"}]});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createCourseTableModel: function() {
			var oModel = new JSONModel({"mydata":[{"truck License":"500","name":"foo"},{"salary":"200","name":"foo2"}]});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});