package com.tp.model.mmp;

import java.io.Serializable;

import java.util.Date;

import com.tp.common.annotation.Id;
import com.tp.model.BaseDO;
/**
  * @author szy
  * 阶梯团信息表
  */
public class GroupbuyGroup extends BaseDO implements Serializable {

	private static final long serialVersionUID = 1458114682181L;

	/**序号 数据类型bigint(18)*/
	@Id
	private Long id;

	private Long groupbuyId;
	
	/**活动序号 数据类型bigint(18)*/
	private Long topicId;
	
	/**活动名称 数据类型varchar(255)*/
	private String topicName;
	
	/**团编号 数据类型varchar(30)*/
	private String code;
	
	/**发起人序号 数据类型bigint(18)*/
	private Long memberId;
	
	/**发起人 数据类型varchar(30)*/
	private String memberName;
	
	/**计划人数 数据类型int(11)*/
	private Integer planAmount;
	
	/**实际人数 数据类型int(11)*/
	private Integer factAmount;
	
	/**团状态 1 - 部分组团 2 - 满额组团 3 - 组团失败 数据类型int(11)*/
	private Integer status;
	
	/**开团时间 数据类型datetime*/
	private Date startTime;
	
	/**结束时间 数据类型datetime*/
	private Date endTime;
	
	/**活动结束时间 数据类型datetime*/
	private Date topicEndTime;
	
	/**创建时间 数据类型datetime*/
	private Date createTime;
	
	/**创建人 数据类型varchar(32)*/
	private String createUser;
	
	/**修改时间 数据类型datetime*/
	private Date updateTime;
	
	/**修改人 数据类型varchar(32)*/
	private String updateUser;


	public Long getGroupbuyId() {
		return groupbuyId;
	}

	public void setGroupbuyId(Long groupbuyId) {
		this.groupbuyId = groupbuyId;
	}

	public Long getId(){
		return id;
	}
	public Long getTopicId(){
		return topicId;
	}
	public String getTopicName(){
		return topicName;
	}
	public String getCode(){
		return code;
	}
	public Long getMemberId(){
		return memberId;
	}
	public String getMemberName(){
		return memberName;
	}
	public Integer getPlanAmount(){
		return planAmount;
	}
	public Integer getFactAmount(){
		return factAmount;
	}
	public Integer getStatus(){
		return status;
	}
	public Date getStartTime(){
		return startTime;
	}
	public Date getEndTime(){
		return endTime;
	}
	public Date getTopicEndTime(){
		return topicEndTime;
	}
	public Date getCreateTime(){
		return createTime;
	}
	public String getCreateUser(){
		return createUser;
	}
	public Date getUpdateTime(){
		return updateTime;
	}
	public String getUpdateUser(){
		return updateUser;
	}
	public void setId(Long id){
		this.id=id;
	}
	public void setTopicId(Long topicId){
		this.topicId=topicId;
	}
	public void setTopicName(String topicName){
		this.topicName=topicName;
	}
	public void setCode(String code){
		this.code=code;
	}
	public void setMemberId(Long memberId){
		this.memberId=memberId;
	}
	public void setMemberName(String memberName){
		this.memberName=memberName;
	}
	public void setPlanAmount(Integer planAmount){
		this.planAmount=planAmount;
	}
	public void setFactAmount(Integer factAmount){
		this.factAmount=factAmount;
	}
	public void setStatus(Integer status){
		this.status=status;
	}
	public void setStartTime(Date startTime){
		this.startTime=startTime;
	}
	public void setEndTime(Date endTime){
		this.endTime=endTime;
	}
	public void setTopicEndTime(Date topicEndTime){
		this.topicEndTime=topicEndTime;
	}
	public void setCreateTime(Date createTime){
		this.createTime=createTime;
	}
	public void setCreateUser(String createUser){
		this.createUser=createUser;
	}
	public void setUpdateTime(Date updateTime){
		this.updateTime=updateTime;
	}
	public void setUpdateUser(String updateUser){
		this.updateUser=updateUser;
	}
}
