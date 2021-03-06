package com.tp.model.cms;

import java.io.Serializable;

import java.util.Date;

import com.tp.common.annotation.Id;
import com.tp.model.BaseDO;
/**
  * @author szy
  * SEO元素表
  */
public class SeoElement extends BaseDO implements Serializable {

	private static final long serialVersionUID = 1451446451848L;

	/** 数据类型bigint(11)*/
	@Id
	private Long id;
	
	/**位置表主键 数据类型bigint(11)*/
	private Long positionId;
	
	/**title 数据类型varchar(100)*/
	private String title;
	
	/**keyword 数据类型varchar(200)*/
	private String keyword;
	
	/**description 数据类型varchar(200)*/
	private String description;
	
	/**启用时间 数据类型datetime*/
	private Date startdate;
	
	/**失效时间 数据类型datetime*/
	private Date enddate;
	
	/**状态(0正常，1停用，2删除) 数据类型tinyint(2)*/
	private Integer status;
	
	/**创建人 数据类型bigint(10)*/
	private Long creater;
	
	/**创建时间 数据类型datetime*/
	private Date createTime;
	
	/**修改人 数据类型bigint(11)*/
	private Long modifier;
	
	/**修改时间 数据类型datetime*/
	private Date modifyTime;
	
	
	public Long getId(){
		return id;
	}
	public Long getPositionId(){
		return positionId;
	}
	public String getTitle(){
		return title;
	}
	public String getKeyword(){
		return keyword;
	}
	public String getDescription(){
		return description;
	}
	public Date getStartdate(){
		return startdate;
	}
	public Date getEnddate(){
		return enddate;
	}
	public Integer getStatus(){
		return status;
	}
	public Long getCreater(){
		return creater;
	}
	public Date getCreateTime(){
		return createTime;
	}
	public Long getModifier(){
		return modifier;
	}
	public Date getModifyTime(){
		return modifyTime;
	}
	public void setId(Long id){
		this.id=id;
	}
	public void setPositionId(Long positionId){
		this.positionId=positionId;
	}
	public void setTitle(String title){
		this.title=title;
	}
	public void setKeyword(String keyword){
		this.keyword=keyword;
	}
	public void setDescription(String description){
		this.description=description;
	}
	public void setStartdate(Date startdate){
		this.startdate=startdate;
	}
	public void setEnddate(Date enddate){
		this.enddate=enddate;
	}
	public void setStatus(Integer status){
		this.status=status;
	}
	public void setCreater(Long creater){
		this.creater=creater;
	}
	public void setCreateTime(Date createTime){
		this.createTime=createTime;
	}
	public void setModifier(Long modifier){
		this.modifier=modifier;
	}
	public void setModifyTime(Date modifyTime){
		this.modifyTime=modifyTime;
	}
}
