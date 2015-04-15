//build the component model
var _renderFactory = function (modelName,ogModel, object,data, lean) {
		if(object === undefined){
			return _model[modelName];
		}
		var factoryList=ogModel.factoryList;
		var len=factoryList.length;
		var id=len;
		for(var i=0; i<len; i++){
			if(!factoryList[i]){
				var id=i;
				break;
			}
		}
		var modelName = modelName+(id);

		var cloneObject = _object_assign({},object);
		var model = _model[modelName]=cloneObject;

		ogModel.factoryList[id]=model;

		componentsMade[modelName]={};
		model.root=ogModel;
		model.factoryID=id;
		model.componentList=[];
		model.nodes = {};
		model.bind= {};
		model.bindedNodes={};
		model.eventName=modelName+'.';
		model.factory=true;

		//Methods for child components
		model.components = function(){
			return componentsMade[modelName];
		};
		//Methods for child components
		model.nofityComponents = function(change){
			_each_object(componentsMade[modelName],function(item){
				item.notify(change);
			});
		};
		model.componentsNode = function(){
			return modelComponentsNode(model);
		};
		model.componentsNodes = function(){
			return modelComponentsNodes(model);
		};
		model.destroyComponents = function () {
			modelDestroyChildren(model);
			return null;
		};
		model.killComponents = function () {
			modelKillChildren(model);
			return null;
		};
		model.mountComponents = function () {
			return modelMountChildren(model);
		};
		model.unMountComponents = function () {
			return 	modelUnMountChildren(model);
		};
		model.componentRender = function (data) {
			return _componentRender(model, data);
		};

		renderDefaultSynModel(model,modelName,model.subscribeTo,1);

		//template
		if(model.template || model.view){
			compileView(model, modelName, model.view, model.template);
			//cache nodes and correct actions
			compileNodes(model);
			//faceplate
			compileFaceplate(model, model.template || model.view);

			checkBinding(model,modelName,model.eventName);
		}

		addHelpers(model,model.helper);
		addHelpers(model,model.privateHelper,true);

		if (data) {
			item.set(data);
		}

		return model;
	};

var _factory = function (modelName, object, lean) {
		if(object === undefined){
			return _model[modelName];
		}else if(_isFunction(object)){
			return _model[modelName]=function(){
				return _factory(modelName,object.apply(null,_toArray(arguments)));
			};
		}
		var cloneObject = _object_assign({},object);
		var model = _model[modelName] = object;
		model.factoryList=[];
		var renderedFactories = componentsMade[modelName]={};

		var destroyFactories = model.destroyFactories = function(){
			_each_object(renderedFactories,function(item){
				item.destroy();
			});
		};
		model.rendered = function(change){
			return renderedFactories;
		};
		model.kill = function () {
			destroyFactories();
			_model[modelName]=null;
			return null;
		};
		model.render=function(data){
			return _renderFactory(modelName,model,cloneObject,data,lean);
		};
		return model;
	};

$.factory = _factory;