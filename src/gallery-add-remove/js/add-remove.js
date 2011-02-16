function addRemove( config) {
	addRemove.superclass.constructor.apply( this, arguments );
}

addRemove.NAME = "fastTemplate";

addRemove.ATTRS = {
	addNode : {},
	removeNode : {},
	originalNode: {},
	nodeList : {}
};

Y.extend( addRemove, Y.Base, {
	initializer: function () {
		this.get('addNode').on('click', this._add, this);
		this.get('removeNode').on('click', this._remove, this);
		this.nodeList = new Array();
	},
	_add : function(e){
		var newNode = this.get('originalNode').cloneNode(1);
		this.get('originalNode').insert(newNode, 'after');
		this.nodeList.push(newNode);
	},
	_remove : function(e){
		if ( this.nodeList.length > 0 ){
			var last = this.nodeList.length;
			this.nodeList[last-1].remove();
			this.nodeList.pop();
		}
	}
});

Y.addRemove = addRemove;