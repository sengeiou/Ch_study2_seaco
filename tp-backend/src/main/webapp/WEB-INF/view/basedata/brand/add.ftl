<#include "/common/common.ftl"/>
<@backend title="" js=[	
    '/statics/backend/js/formValidator/formValidator-4.0.1.min.js',
    '/statics/backend/js/formValidator/formValidatorRegex.js',
    '/statics/backend/js/formValidator/DateTimeMask.js',
    '/statics/backend/js/layer/layer.min.js',
	'/statics/backend/js/basedata/brand.js',
	'/statics/backend/js/webuploader/webuploader.min.js',
	'/statics/select2/js/select2.js',
	'/statics/select2/js/select2Util.js',
	'/statics/select2/js/select2_locale_zh-CN.js',
	'/statics/backend/js/basedata/base-select2.js',
	'/statics/qiniu/js/plupload/plupload.full.min.js',
    '/statics/qiniu/js/plupload/plupload.dev.js',
    '/statics/qiniu/js/plupload/moxie.js',
	'/statics/qiniu/js/plupload/moxie.js',
	'/statics/qiniu/src/qiniu.js',
	'/statics/qiniu/js/highlight/highlight.js',
	'/statics/qiniu/js/ui.js',
	'/statics/backend/js/uplod.js',
	'/statics/backend/js/areaUplod.js',
	'/statics/backend/js/basedata/upload.js'
	] 
	css=[
	'/statics/backend/js/formValidator/style/validator.css',
	'/statics/select2/css/select2.css',
	'/statics/backend/js/webuploader/webuploader.css',
	'/statics/qiniu/bootstrap/css/bootstrap.css'
	] >
    <div >
	   <div>	 
	   <ul id="errorlist"></ul> 
	     <form action="${domain}/basedata/brand/add" class="jqtransform"  method="post"  id='brandupdate'   > 
			 <input type="hidden" id="bucketname" name="bucketname" value="${bucketname}">
             <input type="hidden" id="bucketURL" name="bucketURL" value="${bucketURL}">
	       <table class="form_table" border="0" cellpadding="0" cellspacing="0">
		        <tr>
					<td class="td_right">中文名:</td>
					<td><input type="text" name="name"  id='name' class="input-text lh25" size="20">
                          <input type="hidden" name="id" />
                     </td>
                     <td><div id="nameTip" style="width:250px"></div></td>
				</tr>
        
				
				<tr>
				  <td class="td_right">英文名:</td>
				  <td><input type="text" name="nameEn"  id="nameEn" class="input-text lh25" size="20" ></td>
				   <td><div id="nameEnTip" style="width:250px"></div></td>
				</tr>
				
				<tr>
				  <td class="td_right">产地:</td>
				   <td>
                    <span class="fl">
                      <div class="select_border"> 
                        <div class="select_containers " id="conutrydiv"> 
                        <select name="countryId"  class="select2" style="width:160px; margin-left: 1px"> 
                         <option value="">请选择产地</option> 
                         <#if allCountryAndAllProvince?exists>
			                <#list allCountryAndAllProvince?keys as key> 
			                  <option value="${key}">${allCountryAndAllProvince[key]}</option> 
			                </#list>
			              </#if>
                        </select> 
                        </div> 
                      </div> 
                    </span>
                  </td>
				</tr>
				
				<tr>
				  <td class="td_right">备注:</td>
				  <td><input type="text" name="remark" id='remark' class="input-text lh25" size="20"></td>
				  <td><div id="remarkTip" style="width:250px"></div></td>			  
				</tr>
				<tr>   
				   <td class="td_right">状态:</td>
				   <td>
                    <input type="radio" name="status" checked="checked" value="1"> 有效
                    <input type="radio" name="status" value="0"> 无效
                  </td>
                    <td><div id="statusTip" style="width:250px"></div></td>
				</tr>
				<tr>
				<td  class="td_right">上传图片：</td>
				<td  class="td_center">
				  <div class="main_left m10 span6">
			       	<div id="container" style="position: relative; border-left-width: 100px; padding-left: 150px;">
                        <a class="btn btn-default btn-lg " id="pickfiles"   href="#" imagenameattribute="logo">
                            <i class="glyphicon glyphicon-plus"></i>
                            <span>选择文件</span>
                        </a>
                    </div>
	        	  </div>
				</td>
				</tr>
				<tr>
				<td  class="td_right"></td>
				<td  class="td_center">
				  <div class="main_left m10 span6">
				  	<div class="sel_box" id="imguplod"  style="width: 200px;height: 200px"></div>
	        	  </div>
				</td>
				</tr>
				<tr>
				   <td class="td_left">
						<div class="box_bottom pb5 pt5 pr10" style="border-top:0px solid #dadada;">
		                 <div class="search_bar_btn" style="text-align:right;">
		                   <input class="btn btn82 btn_save2 " type="button"  id='datasubmit' value="保存" param='/basedata/brand/addBrandSubmit.htm' />
		                 </div>
		                </div>
                  </td> 
                  
				  
                  <td class="td_rigth">
                    <div class="box_bottom pb5 pt5 pr10" style="border-top:0px solid #dadada;">
		                 <div class="search_bar_btn" style="text-align:right;">
		             	   <input class="btn btn82 btn_nochecked closebtn " type="button" value="取消" id="buttoncancel"/ >
		                 </div>
		            </div>
                  </td>
              </tr>
              </table>    
              </form>            
	   </div>	
    </div>
</@backend>