!function(a){a(function(){var e=a(window);a("section [href^=#]").click(function(f){f.preventDefault()});a(".bs-docs-sidenav").affix({offset:{top:function(){return e.width()<=980?290:210},bottom:270}});window.prettyPrint&&prettyPrint();a(".add-on :checkbox").on("click",function(){var f=a(this),g=f.attr("checked")?"addClass":"removeClass";a(this).parents(".add-on")[g]("active")});if(a("#gridSystem").length){a("#gridSystem").tooltip({selector:".show-grid > div",title:function(){return a(this).width()+"px"}})}a(".tooltip-demo").tooltip({selector:"a[rel=tooltip]"});a(".tooltip-test").tooltip();a(".popover-test").popover();a("a[rel=popover]").popover().click(function(f){f.preventDefault()});a("#fat-btn").click(function(){var f=a(this);f.button("loading");setTimeout(function(){f.button("reset")},3000)});a("#myCarousel").carousel();var b=a("#components.download input"),c=a("#plugins.download input"),d=a("#variables.download input");a("#components.download .toggle-all").on("click",function(f){f.preventDefault();b.attr("checked",!b.is(":checked"))});a("#plugins.download .toggle-all").on("click",function(f){f.preventDefault();c.attr("checked",!c.is(":checked"))});a("#variables.download .toggle-all").on("click",function(f){f.preventDefault();d.val("")});a(".download-btn").on("click",function(){var g=a("#components.download input:checked").map(function(){return this.value}).toArray(),i=a("#plugins.download input:checked").map(function(){return this.value}).toArray(),h={},f=["glyphicons-halflings.png","glyphicons-halflings-white.png"];a("#variables.download input").each(function(){a(this).val()&&(h[a(this).prev().text()]=a(this).val())});a.ajax({type:"POST",url:/\?dev/.test(window.location)?"http://localhost:3000":"http://bootstrap.herokuapp.com",dataType:"jsonpi",params:{js:i,css:g,vars:h,img:f}})})});a.ajaxTransport("jsonpi",function(d,e,c){var b=d.url;return{send:function(g,j){var f="jQuery_iframe_"+jQuery.now(),h,i;h=a("<iframe>").attr("name",f).appendTo("head");i=a("<form>").attr("method",d.type).attr("action",b).attr("target",f);a.each(d.params,function(m,l){a("<input>").attr("type","hidden").attr("name",m).attr("value",typeof l=="string"?l:JSON.stringify(l)).appendTo(i)});i.appendTo("body").submit()}}})}(window.jQuery);
