YUI.add("gallery-fast-template",function(b){function a(c){a.superclass.constructor.apply(this,arguments);}a.NAME="fastTemplate";a.ATTRS={data:{},variables:{},templateNode:{},wrapperNode:{}};b.extend(a,b.Base,{process:function(){var d="";var e=this.get("data");var c=this.get("templateNode").get("innerHTML");b.each(e,function(f){d+=b.substitute(c,f);},this);this.get("wrapperNode").set("innerHTML",d);}});b.fastTemplate=a;},"@VERSION@",{requires:["node","base","substitute"]});