!function(){var n=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l["tmpl-add-form"]=n({compiler:[7,">= 4.0.0"],main:function(n,l,e,a,t){var s,i=null!=l?l:n.nullContext||{},o=e.helperMissing,r=n.escapeExpression;return'<h3> Example Add Task </h3>\n<form id="addTaskForm" class="form-stacked">\n    <fieldset>\n    <div class="col-md-4">\n        <div class="form-group">\n            <label for="x"> x </label>\n            <input type="x" name="x" class="form-control input-sm" id="x" value='+r((s=null!=(s=e.x||(null!=l?l.x:l))?s:o,"function"==typeof s?s.call(i,{name:"x",hash:{},data:t}):s))+'>\n        </div>\n        <div class="form-group">\n            <label for="y"> y </label>\n            <input type="y" name="y" class="form-control input-sm" id="y" value='+r((s=null!=(s=e.y||(null!=l?l.y:l))?s:o,"function"==typeof s?s.call(i,{name:"y",hash:{},data:t}):s))+'>\n        </div>\n        <button id="addTask" class="btn btn-info-outline btn-primary" type="button">Add Task</button>\n    </div>\n    </fieldset>\n</form>\n<div class="col-md-6"><pre id="task_result"></pre></div>\n'},useData:!0}),l["tmpl-dropzone"]=n({compiler:[7,">= 4.0.0"],main:function(n,l,e,a,t){var s,i=null!=l?l:n.nullContext||{},o=e.helperMissing,r=n.escapeExpression;return'<div id="dropzone" class="center">\n  <form id="dropzone1" action="/api/upload/" class="dropzone needsclick" >\n    <div style="display:none">\n      <input type="hidden" name="csrfmiddlewaretoken" value="'+r((s=null!=(s=e.csrftoken||(null!=l?l.csrftoken:l))?s:o,"function"==typeof s?s.call(i,{name:"csrftoken",hash:{},data:t}):s))+'"/>\n    </div>\n    <div style="display:none">\n      <input type="hidden" name="callback" value="'+r((s=null!=(s=e.task||(null!=l?l.task:l))?s:o,"function"==typeof s?s.call(i,{name:"task",hash:{},data:t}):s))+'"/>\n    </div>\n    <div style="display:none">\n      <input type="hidden" name="tags" value="'+r((s=null!=(s=e.tags||(null!=l?l.tags:l))?s:o,"function"==typeof s?s.call(i,{name:"tags",hash:{},data:t}):s))+'"/>\n    </div>\n    <div class="dz-message needsclick center">\n      <strong>Drop zip files here or click to upload.</strong>\n    </div>\n  </form>\n</div>\n<script>\n      Dropzone.autoDiscover = false;\n      $("#dropzone1").dropzone({\n          url: "/api/upload/",\n          maxFilesize: 10000,\n          uploadMultiple: false,\n          addRemoveLinks: true,\n          acceptedFiles: ".zip",\n          init: function() {\n            this.on("complete", function(file) {\n              this.removeFile(file);\n            });\n            this.on("success",function(file,response){\n              console.log(response);\n              load_task_history(user_task_url);\n              showResult(response[0].callback.response.result_url);\n            });\n            this.on("error", function(file){\n              if (!file.accepted){alert("File must be a zipfile.");}\n              this.removeFile(file);\n            });\n          }\n      });\n<\/script>\n'},useData:!0}),l["tmpl-geolibrary-new"]=n({compiler:[7,">= 4.0.0"],main:function(n,l,e,a,t){var s,i,o=null!=l?l:n.nullContext||{},r=e.helperMissing,d=n.escapeExpression,c=n.lambda;return'<div class="">\n  <div class="row">\n    <div class="col-sm-6" >\n      \x3c!--<iframe id="frame" src="'+d((i=null!=(i=e.urlxmlfgdc||(null!=l?l.urlxmlfgdc:l))?i:r,"function"==typeof i?i.call(o,{name:"urlxmlfgdc",hash:{},data:t}):i))+'" width="100%" height="1000">\n     </iframe>--\x3e\n     <form id="geoblacklightform" action="" class="" >\n       <div style="display:none">\n         <input type="hidden" name="dct_references_s" value="'+d(c(null!=(s=null!=l?l.data:l)?s.dct_references_s:s,l))+'"/>\n       </div>\n       <div style="display:none">\n         <input type="hidden" name="uuid" value="'+d(c(null!=(s=null!=l?l.data:l)?s.uuid:s,l))+'"/>\n       </div>\n       <div style="display:none">\n         <input type="hidden" name="layer_id_s" value="'+d(c(null!=(s=null!=l?l.data:l)?s.layer_id_s:s,l))+'"/>\n       </div>\n       <div>\n         <select name="dc_rights_s" value='+d(c(null!=(s=null!=l?l.data:l)?s.dc_rights_s:s,l))+'>\n             <option value="Public">Public</option>\n             <option value="Restricted">Restricted</option>\n         </select>\n       </div>\n       <div class="form-group">\n         <label for="discipline">Disciplines (Subject Categories)</label>\n         <div class="input-group discipline-group">\n           <input class="form-control discipline" id="discipline0" name="discipline0">\n           <span id="editDiscipline" class="btn input-group-addon">Edit</span>\n           <span id="deleteDiscipline" class="btn input-group-addon">X</span>\n         </div><button type="button" class="btn btn-sm" id="addDiscipline">Add Discipline</button>\n       </div>\n       <div >\n         <input type="text" name="dc_subject_sm"\n         value="{% for item in data.dc_subject_sm %}\n                 '+d((i=null!=(i=e.item||(null!=l?l.item:l))?i:r,"function"==typeof i?i.call(o,{name:"item",hash:{},data:t}):i))+'{% if not loop.last %},{% endif %}\n                 {% endfor %}"/>\n       </div>\n     </form>\n    </div>\n    <div id="jsoneditor" class="col-sm-6" >\n\n    </div>\n  </div>\n</div>\n<script>\n  var container = document.getElementById("jsoneditor");\n  var options = {};\n  var editor = new JSONEditor(container, options);\n  editor.set(jsonData)\n<\/script>\n'},useData:!0}),l["tmpl-tr"]=n({compiler:[7,">= 4.0.0"],main:function(n,l,e,a,t){var s,i=null!=l?l:n.nullContext||{},o=e.helperMissing,r=n.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+r((s=null!=(s=e.result||(null!=l?l.result:l))?s:o,"function"==typeof s?s.call(i,{name:"result",hash:{},data:t}):s))+"');return false;\" >"+r((s=null!=(s=e.task_name||(null!=l?l.task_name:l))?s:o,"function"==typeof s?s.call(i,{name:"task_name",hash:{},data:t}):s))+"</a></td><td>"+r((s=null!=(s=e.timestamp||(null!=l?l.timestamp:l))?s:o,"function"==typeof s?s.call(i,{name:"timestamp",hash:{},data:t}):s))+"</td><td>"+r((e.json_metatags||l&&l.json_metatags||o).call(i,null!=l?l.tags:l,{name:"json_metatags",hash:{},data:t}))+"</td></tr>\n"},useData:!0}),l["tmpl-user"]=n({compiler:[7,">= 4.0.0"],main:function(n,l,e,a,t){var s,i=null!=l?l:n.nullContext||{},o=e.helperMissing,r="function",d=n.escapeExpression;return'      <h2>User Profile</h2>\n      <div id="user_profile">\n          <div id="photo" class="col-md-2" style="width:200px ">\n            <img src="'+d((s=null!=(s=e.gravator_url||(null!=l?l.gravator_url:l))?s:o,typeof s===r?s.call(i,{name:"gravator_url",hash:{},data:t}):s))+'?s=180&d=mm"><br><br>\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\n            <a id="reset_password" style="clear:both;">Reset Password</a>\n          </div>\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\n              <div class="form-group">\n                <label class="col-md-3 control-label">Username</label>\n                  <div class="col-md-09">\n                <p class="form-control-static">'+d((s=null!=(s=e.username||(null!=l?l.username:l))?s:o,typeof s===r?s.call(i,{name:"username",hash:{},data:t}):s))+'</p>\n                </div>\n            </div>\n             <div class="form-group">\n                  <label class="col-md-3 control-label">Name</label>\n                    <div class="col-md-09">\n                  <p class="form-control-static">'+d((s=null!=(s=e.name||(null!=l?l.name:l))?s:o,typeof s===r?s.call(i,{name:"name",hash:{},data:t}):s))+'</p>\n                  </div>\n            </div>\n              <div class="form-group">\n                <label class="col-md-3 control-label">Email</label>\n                  <div class="col-md-09">\n                    <p class="form-control-static">'+d((s=null!=(s=e.email||(null!=l?l.email:l))?s:o,typeof s===r?s.call(i,{name:"email",hash:{},data:t}):s))+'</p>\n                 </div>\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\n         </form>\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\n              <div style="display:none">\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+d((s=null!=(s=e.csrftoken||(null!=l?l.csrftoken:l))?s:o,typeof s===r?s.call(i,{name:"csrftoken",hash:{},data:t}):s))+'"/>\n             </div>\n              <div class="form-group">\n                 <label for="first_name">First Name</label>\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+d((s=null!=(s=e.first_name||(null!=l?l.first_name:l))?s:o,typeof s===r?s.call(i,{name:"first_name",hash:{},data:t}):s))+'">\n             </div>\n              <div class="form-group">\n                   <label for="last_name">Last Name</label>\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+d((s=null!=(s=e.last_name||(null!=l?l.last_name:l))?s:o,typeof s===r?s.call(i,{name:"last_name",hash:{},data:t}):s))+'">\n               </div>\n              <div class="form-group">\n                 <label for="email">Email address</label>\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+d((s=null!=(s=e.email||(null!=l?l.email:l))?s:o,typeof s===r?s.call(i,{name:"email",hash:{},data:t}):s))+'">\n             </div>\n             <button type="submit" id="form_submit1" class="btn btn-default pull-right">Update</button>\n         </form>\n         <div class="row" style="width:100%;clear:both;"></div>\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\n            <div style="display:none">\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+d((s=null!=(s=e.csrftoken||(null!=l?l.csrftoken:l))?s:o,typeof s===r?s.call(i,{name:"csrftoken",hash:{},data:t}):s))+'"/>\n           </div>\n            <div class="form-group">\n             <label for="password">New Password</label>\n              <input type="password" class="form-control" name="password" placeholder="New Password">\n           </div>\n            <div class="form-group">\n             <label for="password2">Retype New Password</label>\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\n           </div>\n           <button type="submit" class="btn btn-default">Set Password</button>\n         </form>\n     </div>\n'},useData:!0})}();
