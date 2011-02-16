		
		function addRemove( config) {
	 		addRemove.superclass.constructor.apply( this, arguments );
		}
		
		addRemove.NAME = "fastTemplate";
		
		addRemove.ATTRS = {
			addNode : {},
			removeNode : {},
			originalNode: {},
			nodeList : {},
			animate: {
				value: false
			}
		};
		
		Y.extend( addRemove, Y.Base, {
			initializer: function () {
				this.get('addNode').on('click', this._add, this);
				this.get('removeNode').on('click', this._remove, this);
				this.lastNode = this.get('originalNode');
				this.nodeList = new Array();
				this.nodeList.push(this.get('originalNode'));
			},
			_add : function(e){
				var newNode = this.get('originalNode').cloneNode(1);

				if (this.get('animate')){
					var originalHeight = newNode.height;
					newNode.setStyle('opacity', '0');
					
					var addAnim = new Y.Anim({
					    node: newNode,
					    to: {
					        opacity: '1'
					    }
					});
										
					this.lastNode.insert(newNode, 'after');

					addAnim.set('duration', 0.5);
					addAnim.run();
				} else {
					this.get('originalNode').insert(newNode, 'after');
				}
				
				this.nodeList.push(newNode);
				this.lastNode = newNode;
			},
			_remove : function(e){
				if ( this.nodeList.length > 1 ){
					var last = this.nodeList.length;
					
					removeNode = this.nodeList[last-1];
					if ( this.get('animate')){
						var removeAnim = new Y.Anim({
						    node: removeNode,
						    to: {
						        opacity: '0'
						    }
						});
						
						removeAnim.set('duration', 0.3);
						removeAnim.run();
						removeAnim.on('end', function(e){
							this._destroyNode(removeAnim.get('node'));
						}, this);
					}else{
						this._destroyNode(removeNode);
					}
				}
			},
			_destroyNode : function(n){
				n.remove();
				this.nodeList.pop();
				var last = this.nodeList.length;
				if(this.nodeList.length == 1){ 
					this.lastNode = this.get('originalNode')
				}else{
					this.lastNode = this.nodeList[last-2];
				};
			}
		});
		
		Y.addRemove = addRemove;
		