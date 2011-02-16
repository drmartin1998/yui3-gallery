YUI.add("gallery-add-remove",function(b){function a(c){a.superclass.constructor.apply(this,arguments);}a.NAME="fastTemplate";a.ATTRS={addNode:{},removeNode:{},originalNode:{},nodeList:{},animate:{value:false}};b.extend(a,b.Base,{initializer:function(){this.get("addNode").on("click",this._add,this);this.get("removeNode").on("click",this._remove,this);this.lastNode=this.get("originalNode");this.nodeList=new Array();this.nodeList.push(this.get("originalNode"));},_add:function(f){var c=this.get("originalNode").cloneNode(1);if(this.get("animate")){var d=c.height;c.setStyle("opacity","0");var g=new b.Anim({node:c,to:{opacity:"1"}});this.lastNode.insert(c,"after");g.set("duration",0.5);g.run();}else{this.get("originalNode").insert(c,"after");}this.nodeList.push(c);this.lastNode=c;},_remove:function(d){if(this.nodeList.length>1){var c=this.nodeList.length;removeNode=this.nodeList[c-1];if(this.get("animate")){var f=new b.Anim({node:removeNode,to:{opacity:"0"}});f.set("duration",0.3);f.run();f.on("end",function(g){this._destroyNode(f.get("node"));},this);}else{this._destroyNode(removeNode);}}},_destroyNode:function(d){d.remove();this.nodeList.pop();var c=this.nodeList.length;if(this.nodeList.length==1){this.lastNode=this.get("originalNode");}else{this.lastNode=this.nodeList[c-2];}}});b.addRemove=a;},"@VERSION@",{requires:["node","base","anim"]});