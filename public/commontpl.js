<script type="text/javascript" charset="utf-8">
  Handlebars.registerHelper('sy_date', function(date_string) {
    var date = date_string.replace(/\-/g, '/')
        date = Date.parse(date)
          if (!isNaN(date)){
            var ary = new Date(date).toDateString().split(' ');
            // ary.pop();
            ary.shift();
            return ary.join(' ');
          }
    return date_string;
  });


Handlebars.registerHelper('ifEql', function(v1, v2, options) {
  var condition = (v1 === v2);
  if(condition){  
    return options.fn(this);
  }else{
    return options.inverse(this);
  }
});


</script>
  
  
  
             
<!-- ----------------------------------------------------------------------------- -->
<script id="group_forms_tpl" type="text/x-handlebars-template">  

{{#if itemCount}}
<div class="fromsy ">
<div class="sy-events">

{{#each items}}
<!--
{{#if form.title}}                                                   
<div class="sy-title"><span>{{form.title}}</span></div>                                           
{{/if}}

{{#if form.created_at}}
<div class="sy-startdate">
<span class="sy-heading">Start Date :</span>{{sy_date form.created_at}}
<span class="sy-day">&nbsp;</span>
<span class="sy-month">&nbsp;</span>
<span class="sy-year">&nbsp;</span>
</div>

{{/if}}
{{#if form.expiration}}      
<div class="sy-enddate">
<span class="sy-heading">End Date :</span>{{sy_date form.expiration}}
<span class="sy-day">&nbsp;</span>
<span class="sy-month">&nbsp;</span>
<span class="sy-year">&nbsp;</span>
</div>
{{/if}}      
<div class="sy-data">

{{#if form.content}}
<div class="sy-detail">
{{{form.content}}}
</div>
{{/if}}-->

{{#if form.has_downloads}}
<img src="{{../../syurl}}/publik/download/{{form.id}}" height="600" />
{{/if}}  

</div>  

{{/each}}

</div>
</div>  
{{else}}
<p>Not Available</p>
{{/if}}  

</script> 
                                                                                                      
                                                                                                      
                                                                                                      
                                                                                                      
                                                                                                      