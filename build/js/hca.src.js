
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"podatki","title":"Variables to cluster","type":"Variables","rejectInf":true},{"name":"imena","type":"Variable","title":"Labels (optional)","permitted":["id","factor"],"rejectInf":true},{"name":"stand","title":"Standardize data","type":"Bool","default":true},{"name":"dis","title":"Distance measure","type":"List","options":[{"title":"euclidean","name":"euclidean"},{"title":"manhattan","name":"manhattan"},{"title":"maximum","name":"maximum"},{"title":"canberra","name":"canberra"},{"title":"binary","name":"binary"},{"title":"minkowski","name":"minkowski"}],"default":"euclidean"},{"name":"method","title":"Clustering method","type":"List","options":[{"title":"ward.D2","name":"ward.D2"},{"title":"ward.D","name":"ward.D"},{"title":"centroid","name":"centroid"},{"title":"complete","name":"complete"},{"title":"average","name":"average"},{"title":"single","name":"single"},{"title":"mcquitty","name":"mcquitty"},{"title":"median","name":"median"}],"default":"ward.D2"},{"name":"grp","title":"Decide on clusters","type":"List","options":[{"name":"height","title":"by height"},{"name":"number","title":"by number of clusters"}],"default":"number"},{"name":"group","title":"clusters","type":"Integer","default":2,"min":2},{"name":"hght","title":"height","type":"Number","default":15,"min":0.01},{"name":"case","title":"Cluster variables","type":"Bool","default":false},{"name":"dend","title":"Plot dendrogram","type":"Bool","default":false},{"name":"horiz","title":"horizontal","type":"Bool","default":false},{"name":"heat","title":"Plot heatmap","type":"Bool","default":false},{"name":"pair","title":"Plot pairs of variables","type":"Bool","default":false}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "Hierachical cluster analysis",
    jus: "3.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			typeName: 'VariableSupplier',
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Variables",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "podatki",
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Labels (Optional)",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "imena",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.Label,
			typeName: 'Label',
			label: "Options",
			margin: "small",
			controls: [
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "stand"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "case"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "small",
			controls: [
				{
					type: DefaultControls.ComboBox,
					typeName: 'ComboBox',
					name: "dis"
				},
				{
					type: DefaultControls.ComboBox,
					typeName: 'ComboBox',
					name: "method"
				}
			]
		},
		{
			type: DefaultControls.Label,
			typeName: 'Label',
			label: "Decide on clusters",
			margin: "small",
			controls: [
				{
					type: DefaultControls.RadioButton,
					typeName: 'RadioButton',
					name: "grp_height",
					optionName: "grp",
					optionPart: "height",
					controls: [
						{
							type: DefaultControls.TextBox,
							typeName: 'TextBox',
							name: "hght",
							format: FormatDef.number,
							enable: "(grp_height)"
						}
					]
				},
				{
					type: DefaultControls.RadioButton,
					typeName: 'RadioButton',
					name: "grp_number",
					optionName: "grp",
					optionPart: "number",
					controls: [
						{
							type: DefaultControls.TextBox,
							typeName: 'TextBox',
							name: "group",
							format: FormatDef.number,
							enable: "(grp_number)"
						}
					]
				}
			]
		},
		{
			type: DefaultControls.Label,
			typeName: 'Label',
			label: "Plot options",
			margin: "large",
			controls: [
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "dend",
					controls: [
						{
							type: DefaultControls.CheckBox,
							typeName: 'CheckBox',
							name: "horiz",
							enable: "(dend)"
						}
					]
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "heat"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "pair",
					enable: "(!case)"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
