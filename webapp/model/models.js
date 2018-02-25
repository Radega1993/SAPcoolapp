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

		createDataTableModel2: function() {
			var oModel = new JSONModel({
				"mydata": [{
					"Activity": "Introduction",
					"Description": "Watch the video and answer the following questions",
					"Mark": "6"
				}, {
					"Activity": "Simulation cam",
					"Description": "Simulation test with the bulldozer simulation cam",
					"Mark": "8"
				}, {
					"Activity": "Circuit test",
					"Description": "Closed circuit with the bulldozer",
					"Mark": "PENDING"
				}, {
					"Activity": "One day job",
					"Description": "One day with the bullzdozer at work",
					"Mark": "PENDING"
				}, {
					"Activity": "Final test",
					"Description": "One week using the bulldozer while being tested",
					"Mark": "PENDING"
				}, {
					"Activity": "Total",
					"Description": "At least 25 points to pass",
					"Mark": "NOT FINISHED"
				}]
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createDataTableModel3: function() {
			var oModel = new JSONModel({
				"mydata": [{
					"Activity": "Introduction",
					"Description": "Watch the video and answer the following questions",
					"Mark": "7"
				}, {
					"Activity": "Theorical Examen",
					"Description": "Real test of the car license",
					"Mark": "5"
				}, {
					"Activity": "Circuit test",
					"Description": "Closed circuit with the car",
					"Mark": "8"
				}, {
					"Activity": "One day job",
					"Description": "One day with the car at work",
					"Mark": "3"
				}, {
					"Activity": "Final test",
					"Description": "Practice examen of the car license",
					"Mark": "5"
				}, {
					"Activity": "Total",
					"Description": "At least 25 points to pass",
					"Mark": "28"
				}]
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createDataTableModel4: function() {
			var oModel = new JSONModel({
				"mydata": [{
					"Activity": "Introduction",
					"Description": "Watch the video and answer the following questions",
					"Mark": "7"
				}, {
					"Activity": "Simulation matirial test",
					"Description": "Simulation test with the materials use in construction",
					"Mark": "6"
				}, {
					"Activity": "Practice test",
					"Description": "Create a model with the studied materials",
					"Mark": "7"
				}, {
					"Activity": "One day job",
					"Description": "Do a real day at work",
					"Mark": "4"
				}, {
					"Activity": "Final test",
					"Description": "Final test when look if all the information is adquired",
					"Mark": "8"
				}, {
					"Activity": "Total",
					"Description": "At least 25 points to pass",
					"Mark": "32"
				}]
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createDataTableModel5: function() {

			var oModel = new JSONModel({
				"mydata": [{
					"Activity": "Name",
					"Description": "Yung"
				}, {
					"Activity": "Surname",
					"Description": "Yu"
				}, {
					"Activity": "Street",
					"Description": "Long Island Street 123"
				}, {
					"Activity": "Country",
					"Description": "Japan"
				}, {
					"Activity": "City",
					"Description": "Tokyo"
				}, {
					"Activity": "Phone",
					"Description": "657 89 76 54"
				}]
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createDataTableModel6: function() {

			var oModel = new JSONModel({
				"mydata": [{
					"Activity": "Current Position",
					"Description": "Truck Driver"
				}, {
					"Activity": "Date that joined the company",
					"Description": "12th Feb 2006"
				}]
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;

		},
		createDataTableModel7  : function() {

			var oModel = new JSONModel({
				"mydata": [{
					"title": "Log Out",
					"icon": "sap-icon://log"
				}]
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;

		}

	};
});