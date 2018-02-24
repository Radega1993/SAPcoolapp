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
		
		createDataTableModel2: function() {
			var oModel = new JSONModel({"mydata":[{"Activity":"Introduction","Description":"Watch the video and answer the following questions","Mark":"7"},{"Activity":"Simulation cam","Description":"Simulation test with the bulldozer simulation cam","Mark":"4"},
			{"Activity":"Circuit test","Description":"Closed circuit with the bulldozer","Mark":"7"},{"Activity":"One day job","Description":"One day with the bullzdozer at work","Mark":"4"},{"Activity":"Final test","Description":"One week using the bulldozer while being tested","Mark":"7"},{"Activity":"Total","Description":"At least 25 points to pass","Mark":"29"}]});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		} 
		}

	};
});