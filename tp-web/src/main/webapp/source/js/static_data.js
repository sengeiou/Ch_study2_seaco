﻿/**
 * 静态数据,用于模拟接口数据
 */
var static_data = {
	shipping_address: {}, //收货地址
	index: {}, //首页
    topic:{},
	seckill: {}, //秒杀
	tun: {}, //囤
	special: {}, //专场
	product: {}, //商品信息
	shopping: {}, //购物车
	account: {}, //结算
	customer: {}, //售后
	user: {}, //用户
	dssuser:{},
	featuredtoday: {}, //今日精选
	signed: {}, //签到
	lottery: {}, //0元抽奖
	advertising: {}, //广告
	haitao:{},
    order:{},
    address:{},
    position:{},
    coupon:{},
    safety:{},
    cart:{},
    file:{},
    pay:{},
    wx:{},
};

static_data.wx.getopenid=
{
    "code": "0",
    "data": {
        "openid": "123456",
    },
    "msg": "success"
};

static_data.user.supcount=
{
    "code": "0",
    "data": {
        "unpaycount": "1",
        "unreceiptcount": "2",
        "couponcount": "3",
    },
    "msg": "success"
};

static_data.pay.calordel=
{
    "code": "0",
    "msg": "success",
};

static_data.pay.confirm=
{
    "code": "0",
    "msg": "success",
};

static_data.pay.payresult = 
{
    "code": "0",
    "data": {
        "status": "2",
        "statusdesc": "支付成功",
    },
    "msg": "success"
};

static_data.pay.payorder = 
{
    "code": "0",
    "data": {
        "appId": "1",
        "timeStamp": "2",
        "nonceStr": "3",
        "package": "4",
        "signType": "5",
        "paySign": "6",
    },
    "msg": "success"
};

static_data.file.uploadimg = 
{
    "code": "0",
    "data": {
        "path ": "http://img05.xgcdn.com/group1/M00/24/7B/wKgyOlX73ZeAN3e0AAAvM4GhoVA933.jpg",
    },
    "msg": "success"
};

static_data.user.regist = 
{
    "code": "0",
    "data": {
        "name ": "cyril",
        "tel ": "15001767623",
        "token ": "xgtoken"
    },
    "msg": "success"
};
static_data.dssuser.regist = 
{
    "code": "0",
    "data": {
        "name ": "cyril",
        "tel ": "15001767623",
        "token ": "xgtoken"
    },
    "msg": "success"
};

static_data.user.modifypwd = 
{
    "code": "0",
    "data": {
        "name ": "cyril",
        "tel ": "15001767623",
        "token ": "xgtoken"
    },
    "msg": "success"
};

static_data.user.getcaptcha=
{
    "code": "0",
    "data": {
        "livetime ": "60"
    },
    "msg": "success"
};

static_data.cart.supcount=
{
    "code": "0",
    "data": {
        "count": "3"
    },
    "msg": "success"
};

static_data.cart.add=
{
    "code": "0",
    "msg": "success"
};

static_data.cart.load=
{
    "code": "0",
    "data": {
        "disprice": "555",
        "products": [
            {
                "channel": "宁波保税区",
                "channelid": "1",
                "count": "2",
                "discount": "0.65",
                "imgurl": "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
                "limitcount": "10",
                "name": "【日本】大王制纸 防PM2.5口罩（儿童款） 防雾霾口罩（7枚/盒）*3",
                "oldprice": "89",
                "price": "58",
                "selected": "1",
                "sku": "07020700020101",
                "status": "1",
                "statusdesc": "正常",
                "stock": "10",
                "taxrate": "10",
                "tid": "12004"
            },
            {
                "channel": "宁波保税区",
                "channelid": "1",
                "count": "2",
                "discount": "0.65",
                "imgurl": "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
                "limitcount": "10",
                "name": "【日本】大王制纸 防PM2.5口罩（儿童款） 防雾霾口罩（7枚/盒）*3",
                "oldprice": "89",
                "price": "58",
                "selected": "1",
                "sku": "07020700020101",
                "status": "1",
                "statusdesc": "正常",
                "stock": "10",
                "taxrate": "10",
                "tid": "12004"
            }
        ],
        "totalprice": "888"
    },
    "msg": "success"
};

static_data.cart.operation=
{
    "code": "0",
    "data": {
        "disprice": "555",
        "products": [
            {
                "channel": "海外直邮",
                "count": "2",
                "countryimg": "http://img02.xgcdn.com/group1/M00/00/71/wKgyOlUbuU6AW3SjAAAHTTIbkvE569_65.png",
                "detail": "<img src=\"http://img05.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcCAUDjWAANcl4ae58w279.jpg\"  width=\"100%\" /><img src=\"http://img03.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcCALZ9NAAQRsW8qAOY509.jpg\"  width=\"100%\" /><img src=\"http://img01.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcGATMCSAAPPmC9Hu9Y423.jpg\" width=\"100%\" /><img src=\"http://img05.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcGASZL-AAJ-jZY2AVg579.jpg\" width=\"100%\" /><img src=\"http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcGAVsVGAAHlazLyjtE315.jpg\" width=\"100%\" /><img src=\"http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcKAT_YNAAJTGXWtNGY573.jpg\" width=\"100%\" /><img src=\"http://img03.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcKAMXJqAAN6GihCF6I998.jpg\" width=\"100%\" />",
                "feature": "日本大王制纸于2014年9月面向日本全国发售了一款专门应对P,2.5的口罩“超级阻挡口罩”。此款口罩能阻挡100%可穿过普通口罩的微粒子等物质",
                "imglist": [
                    "http://img01.xgcdn.com/group1/M00/61/A6/wKgyOlaTPr-ASgMSAAKSQfoyZD4519_450.jpg",
                    "http://img03.xgcdn.com/group1/M00/61/A6/wKgyOlaTPsGAVtqKAAJiw6FjZYQ911_450.jpg",
                    "http://img01.xgcdn.com/group1/M00/61/A6/wKgyOlaTPsOAOWjwAAHUEPpRka4940_450.jpg",
                    "http://img02.xgcdn.com/group1/M00/61/A6/wKgyOlaTPseAO1LOAAJAOgKZ-SU682_450.jpg"
                ],
                "imgurl": "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
                "limitcount": "2",
                "name": "【澳大利亚】FD UGG亮皮中筒养皮毛一体女雪地靴番茄红",
                "oldprice": "89",
                "price": "58",
                "selected": "1",
                "sku": "06080800570101",
                "skus": [
                    {
                        "sku": "06080800570101",
                        "skudetails": [
                            {
                                "groupid": "1",
                                "specid": "2076"
                            }
                        ]
                    },
                    {
                        "sku": "06080800570201",
                        "skudetails": [
                            {
                                "groupid": "1",
                                "specid": "8252"
                            }
                        ]
                    },
                    {
                        "sku": "06080800570301",
                        "skudetails": [
                            {
                                "groupid": "1",
                                "specid": "384"
                            }
                        ]
                    },
                    {
                        "sku": "06080800570401",
                        "skudetails": [
                            {
                                "groupid": "1",
                                "specid": "2078"
                            }
                        ]
                    }
                ],
                "specs": [
                    {
                        "groupdetails": [
                            {
                                "specid": "2076",
                                "specname": "35"
                            },
                            {
                                "specid": "8252",
                                "specname": "36/37"
                            },
                            {
                                "specid": "384",
                                "specname": "38"
                            },
                            {
                                "specid": "2078",
                                "specname": "39"
                            }
                        ],
                        "groupid": "1",
                        "groupname": "尺码"
                    }
                ],
                "status": "1",
                "stock": "50",
                "taxrate": "10",
                "tid": "17273"
            }
        ],
        "totalprice": "888"
    },
    "msg": "success"
};

static_data.safety.checkauth=
{
    "code": "0",
    "data": {
        "code": "340223198610183333",
        "imgback": "http://img05.xgcdn.com/group1/M00/24/7B/wKgyOlX73ZeAN3e0AAAvM4GhoVA933.jpg",
        "imgfront": "http://img01.xgcdn.com/group1/M00/1C/02/wKgyOlXhysuAemSfAAEKI3hUVYc889.jpg",
        "name": "zss",
    },
    "msg": "success"
};

static_data.safety.auth=
{
    "code": "0",
    "msg": "success"
};

static_data.coupon.inreceive=
{
    "code": "0",
    "msg": "success"
};

static_data.coupon.list=
{
    "code": "0",
    "data": {
        "curpage": 1,
        "list": [
            {
                "couponcode": "A955748B5DC31319",
                "name": "满59减10(新年新愿)",
                "price": "10",
                "rule": "满59可用",
                "scope": [
                    "1.使用平台：全平台",
                    "2.本券不可与其他优惠券叠加使用",
                    "3.本券不可抵扣运费及税金"
                ],
                "status": "1",
                "validtime": "2015-12-31至2016-01-06",
                "cid":"2"
            },
            {
                "couponcode": "A955748B5DC31319",
                "name": "满59减10(新年新愿)",
                "price": "10",
                "rule": "满59可用",
                "scope": [
                    "1.使用平台：全平台",
                    "2.本券不可与其他优惠券叠加使用",
                    "3.本券不可抵扣运费及税金"
                ],
                "status": "0",
                "validtime": "2015-12-31至2016-01-06",
                "cid":"3"
            },
            {
                "couponcode": "A955748B5DC31319",
                "name": "满59减10(新年新愿)",
                "price": "10",
                "rule": "满59可用",
                "scope": [
                    "1.使用平台：全平台",
                    "2.本券不可与其他优惠券叠加使用",
                    "3.本券不可抵扣运费及税金"
                ],
                "status": "2",
                "validtime": "2015-12-31至2016-01-06",
                "cid":"4"
            }
        ],
        "pagesize": 1,
        "totalcount": 1,
        "totalpagecount": 1
    },
    "msg": "success"
};

static_data.position.getstreetlist=
{
    "code": "0",
    "data": [
        {
            "code": "11305",
            "name": "南京东路街道"
        },
        {
            "code": "11306",
            "name": "外滩街道"
        },
        {
            "code": "11307",
            "name": "半淞园路街道"
        }
    ],
    "msg": "success"
};

static_data.position.getdistrictlist=
{
    "code": "0",
    "data": [
        {
            "code": "11304",
            "name": "黄浦区"
        },
        {
            "code": "11304",
            "name": "徐汇区"
        },
        {
            "code": "11304",
            "name": "长宁区"
        }
    ],
    "msg": "success"
};

static_data.position.getarealist=
{
    "code": "0",
    "data": [
        {
            "code": "11303",
            "name": "市辖区"
        },
        {
            "code": "11303",
            "name": "县"
        }
    ],
    "msg": "success"
};

static_data.position.getprovlist=
{
    "code": "0",
    "data": [
        {
            "info": [
                {
                    "provcode": "11302",
                    "province": "上海"
                },
                {
                    "provcode": "11302",
                    "province": "江苏"
                },
                {
                    "provcode": "11302",
                    "province": "浙江"
                },
                {
                    "provcode": "11302",
                    "province": "安徽"
                },
                {
                    "provcode": "11302",
                    "province": "福建"
                },
                {
                    "provcode": "11302",
                    "province": "江西"
                },
                {
                    "provcode": "11302",
                    "province": "山东"
                }
            ],
            "regcode": "250",
            "region": "华东"
        },
        {
            "info": [
                {
                    "provcode": "11302",
                    "province": "上海"
                },
                {
                    "provcode": "11302",
                    "province": "江苏"
                },
                {
                    "provcode": "11302",
                    "province": "浙江"
                },
                {
                    "provcode": "11302",
                    "province": "安徽"
                },
                {
                    "provcode": "11302",
                    "province": "福建"
                },
                {
                    "provcode": "11302",
                    "province": "江西"
                },
                {
                    "provcode": "11302",
                    "province": "山东"
                }
            ],
            "regcode": "240",
            "region": "华北"
        }
    ],
    "msg": "success"
};

static_data.address.del=
{
    "code": "0",
    "msg": "success"
};

static_data.address.edit=
{
    "code": "0",
    "data": {
        "aid": "111",
    },
    "msg": "success"
};

static_data.address.add=
{
    "code": "0",
    "data": {
        "aid": "111",
    },
    "msg": "success"
};

static_data.address.list=
{
    "code": "0",
    "data": [
        {
            "aid": "111",
            "info": "上海市浦东新区中科路2500弄23号602室",
            "isdefault": "1",
            "name": "山哥",
            "tel": "15800917996"
        },
        {
            "aid": "222",
            "info": "上海杨浦区政益路47号五角丰达广场601室",
            "isdefault": "0",
            "name": "英才",
            "tel": "131456540098"
        }
    ],
    "msg": "success"
};

static_data.order.submit=
{
    "code": "0",
    "data": [
        {
            "ordercode": "112323112",
            "orderprice": "544",
            "payid": "1221",
            "payways": [
                {
                    "code": "wx",
                    "name": "微信支付"
                },
                {
                    "code": "zfb",
                    "name": "支付宝支付"
                }
            ]
        },
        {
            "ordercode": "3232323",
            "orderprice": "5414",
            "payid": "322",
            "payways": [
                {
                    "code": "wx",
                    "name": "微信支付"
                },
                {
                    "code": "zfb",
                    "name": "支付宝支付"
                }
            ]
        },
        {
            "ordercode": "3232323",
            "orderprice": "5414",
            "payid": "322",
            "payways": [
                {
                    "code": "wx",
                    "name": "微信支付"
                },
                {
                    "code": "zfb",
                    "name": "支付宝支付"
                }
            ]
        }
    ],
    "msg": "success"
};

static_data.order.submitinfo=
{
    "code": "0",
    "data": {
        "disprice": "20",
        "freight": "10",
        "price": "100",
        "productinfo": [
            {
                "channel": "宁波保税区",
                "channelcode": "NBBSQ",
                "freight": "5",
                "price": "60",
                "products": [
                    {
                        "channel": "宁波保税区",
                        "channelid": "1",
                        "count": "2",
                        "discount": "0.65",
                        "imgurl": "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
                        "limitcount": "2",
                        "name": "【日本】大王制纸 防PM2.5口罩（儿童款） 防雾霾口罩（7枚/盒）*3",
                        "oldprice": "89",
                        "price": "58",
                        "selected": "1",
                        "sku": "07020700020101",
                        "status": "1",
                        "statusdesc": "正常",
                        "stock": "10",
                        "taxrate": "10",
                        "tid": "12004"
                    },
                    {
                        "channel": "宁波保税区",
                        "channelid": "1",
                        "count": "2",
                        "discount": "0.65",
                        "imgurl": "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
                        "limitcount": "2",
                        "name": "【日本】大王制纸 防PM2.5口罩（儿童款） 防雾霾口罩（7枚/盒）*3",
                        "oldprice": "89",
                        "price": "58",
                        "selected": "1",
                        "sku": "07020700020101",
                        "status": "1",
                        "statusdesc": "正常",
                        "stock": "10",
                        "taxrate": "10",
                        "tid": "12004"
                    }
                ],
                "storagetype": "1",
                "taxes": "6",
                "warehouseid": "1",
                "warehousename": "宁波仓库"
            },
            {
                "channel": "杭州保税区",
                "channelcode": "HZBSQ",
                "freight": "5",
                "price": "60",
                "products": [
                    {
                        "channel": "宁波保税区",
                        "channelid": "1",
                        "count": "2",
                        "discount": "0.65",
                        "imgurl": "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
                        "limitcount": "2",
                        "name": "【日本】大王制纸 防PM2.5口罩（儿童款） 防雾霾口罩（7枚/盒）*3",
                        "oldprice": "89",
                        "price": "58",
                        "selected": "1",
                        "sku": "07020700020101",
                        "status": "1",
                        "statusdesc": "正常",
                        "stock": "10",
                        "taxrate": "10",
                        "tid": "12004"
                    },
                    {
                        "channel": "宁波保税区",
                        "channelid": "1",
                        "count": "2",
                        "discount": "0.65",
                        "imgurl": "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
                        "limitcount": "2",
                        "name": "【日本】大王制纸 防PM2.5口罩（儿童款） 防雾霾口罩（7枚/盒）*3",
                        "oldprice": "89",
                        "price": "58",
                        "selected": "1",
                        "sku": "07020700020101",
                        "status": "1",
                        "statusdesc": "正常",
                        "stock": "10",
                        "taxrate": "10",
                        "tid": "12004"
                    },
                    {
                        "channel": "宁波保税区",
                        "channelid": "1",
                        "count": "2",
                        "discount": "0.65",
                        "imgurl": "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
                        "limitcount": "2",
                        "name": "【日本】大王制纸 防PM2.5口罩（儿童款） 防雾霾口罩（7枚/盒）*3",
                        "oldprice": "89",
                        "price": "58",
                        "selected": "1",
                        "sku": "07020700020101",
                        "status": "1",
                        "statusdesc": "正常",
                        "stock": "10",
                        "taxrate": "10",
                        "tid": "12004"
                    }
                ],
                "storagetype": "1",
                "taxes": "6",
                "warehouseid": "2",
                "warehousename": "杭州仓库"
            }
        ],
        "sumprice": "60",
        "taxes": "10"
    },
    "msg": "success"
};

static_data.order.list=
{
    "code": "0",
    "data": {
        "curpage": 1,
        "list": [
            {
                "lines": [
                    {
                        "count": "2",
                        "imgurl": "http://img02.xgcdn.com/group1/M00/27/3E/wKgyOlYDwYqAN5j0AAKVK2opehk516_210.jpg",
                        "lineprice": "1107.8",
                        "name": "明日之星升级版电子琴",
                        "price": "553.9",
                        "sku": "05120101170101",
                        "specs": [
                            "颜色:白色"
                        ],
                        "tid": "11613"
                    }
                ],
                "ordercode": "11151111004092874",
                "ordercount": "1",
                "orderprice": "556",
                "ordertime": "2015-01-07 19:06:22",
                "payway": "1",
                "paywaydesc": "支付宝",
                "status": "2",
                "statusdesc": "待支付"
            }
        ],
        "pagesize": 1,
        "totalcount": 1,
        "totalpagecount": 1
    },
    "msg": "success"
};

static_data.haitao.htauthprice = {
    "checkidphoto": "1",
    "couponlist": [],
    "disprice": "0",
    "fmaidcsv": "",
    "freight": "0",
    "price": "1075",
    "productinfo": [
        {
            "supplierid": "789",
            "suppliername": "香港富春粮油有限公司",
            "warehouselist": [
                {
                    "cartlinelist": [
                        {
                            "brandid": "10",
                            "classifyid": {
                                "id1": "299",
                                "id2": "300",
                                "id3": "303"
                            },
                            "count": "1",
                            "imageurl": "http://img03.xgcdn.com/group1/M00/5F/70/wKgyOlaM9KmAKeY1AAK3mb0XTAM855_180.jpg",
                            "lineprice": "318",
                            "name": "【韩国】好奇纸尿裤 中号M24片【7-11kg】男宝宝用（6包/箱）",
                            "price": "318",
                            "productid": "08010302510101",
                            "saletype": "1",
                            "specialid": "10754",
                            "specs": []
                        }
                    ],
                    "freight": "0",
                    "price": "318",
                    "seachannelcode": "NBKJB2C",
                    "seachannelname": "宁波保税区",
                    "storagetype": "5",
                    "taxes": "31.8",
                    "warehouseid": "861",
                    "warehousename": ""
                }
            ]
        },
        {
            "supplierid": "469",
            "suppliername": "（海淘）xgmama",
            "warehouselist": [
                {
                    "cartlinelist": [
                        {
                            "brandid": "11",
                            "classifyid": {
                                "id1": "493",
                                "id2": "511",
                                "id3": "520"
                            },
                            "count": "1",
                            "imageurl": "http://img05.xgcdn.com/group1/M00/1D/2C/wKgyOlXmr0GASB9hAAJV5YFzGtk507_180.jpg",
                            "lineprice": "85",
                            "name": "【日本】花王（KAO）乐而雅零触感超薄量多日用护翼卫生巾 57片",
                            "price": "85",
                            "productid": "13030901850101",
                            "saletype": "1",
                            "specialid": "16790",
                            "specs": []
                        },
                        {
                            "brandid": "11",
                            "classifyid": {
                                "id1": "493",
                                "id2": "511",
                                "id3": "520"
                            },
                            "count": "1",
                            "imageurl": "http://img03.xgcdn.com/group1/M00/1D/2C/wKgyOlXmr26AYHZnAAJakQLo-rA769_180.jpg",
                            "lineprice": "85",
                            "name": "【日本】花王（KAO）乐而雅零触感特薄日用护翼卫生巾 84片",
                            "price": "85",
                            "productid": "13030901840101",
                            "saletype": "1",
                            "specialid": "16790",
                            "specs": []
                        }
                    ],
                    "freight": "0",
                    "price": "170",
                    "seachannelcode": "ZHENGZHOUBSQ",
                    "seachannelname": "郑州保税区",
                    "storagetype": "5",
                    "taxes": "0",
                    "warehouseid": "617",
                    "warehousename": ""
                }
            ]
        },
        {
            "supplierid": "165",
            "suppliername": "香港同兴国际贸易有限公司",
            "warehouselist": [
                {
                    "cartlinelist": [
                        {
                            "brandid": "1649",
                            "classifyid": {
                                "id1": "128",
                                "id2": "707",
                                "id3": "1187"
                            },
                            "count": "1",
                            "imageurl": "http://img02.xgcdn.com/group1/M00/5F/DA/wKgyOlaN-o-AK3PYAAGsuEv3fGE648_180.jpg",
                            "lineprice": "359",
                            "name": "【法国】Le Creuset酷彩炻瓷咖啡杯3件套3个咖啡杯100ml*3",
                            "price": "359",
                            "productid": "03110901060101",
                            "saletype": "1",
                            "specialid": "17117",
                            "specs": []
                        }
                    ],
                    "freight": "0",
                    "price": "359",
                    "seachannelcode": "HANGZHOU",
                    "seachannelname": "杭州保税区",
                    "storagetype": "5",
                    "taxes": "35.9",
                    "warehouseid": "345",
                    "warehousename": ""
                }
            ]
        },
        {
            "supplierid": "151",
            "suppliername": "欧乐通",
            "warehouselist": [
                {
                    "cartlinelist": [
                        {
                            "brandid": "757",
                            "classifyid": {
                                "id1": "704",
                                "id2": "732",
                                "id3": "1008"
                            },
                            "count": "1",
                            "imageurl": "http://img04.xgcdn.com/group1/M00/17/3E/wKgyOlXNgxaAQMg8AAMX7RzaDkA856_180.jpg",
                            "lineprice": "149",
                            "name": "【法国】bioderma贝德玛水润保湿爽肤水250ml蓝水",
                            "price": "149",
                            "productid": "29011100120101",
                            "saletype": "1",
                            "specialid": "8825",
                            "specs": []
                        },
                        {
                            "brandid": "1178",
                            "classifyid": {
                                "id1": "704",
                                "id2": "732",
                                "id3": "1008"
                            },
                            "count": "1",
                            "imageurl": "http://img01.xgcdn.com/group1/M00/30/F0/wKgyOlYl-XGAOi9fAAJ9j3gMKiw189_180.jpg",
                            "lineprice": "79",
                            "name": "【荷兰】Jacob Hooy雅歌布 玫瑰水 250ml",
                            "price": "79",
                            "productid": "29011100300101",
                            "saletype": "1",
                            "specialid": "9958",
                            "specs": []
                        }
                    ],
                    "freight": "0",
                    "price": "228",
                    "seachannelcode": "HWZY",
                    "seachannelname": "海外直邮",
                    "storagetype": "5",
                    "taxes": "114",
                    "warehouseid": "85",
                    "warehousename": ""
                }
            ]
        }
    ],
    "redpaperlist": [],
    "rescode": {
        "code": "0",
        "info": "获取提交订单信息成功"
    },
    "sumprice": "1075",
    "taxes": "0"
};

//1. 首页-获得省份列表
static_data.shipping_address.provinces = {
	"rescode": {
		"code": "0",
		"info": "获取区域省份列表成功"
	},
	"provincelist": [{
		"region": "西北",
		"regcode": "248",
		"info": [{
			"province": "新疆",
			"provcode": "256"
		}, {
			"province": "陕西省",
			"provcode": "258"
		}, {
			"province": "宁夏",
			"provcode": "266"
		}, {
			"province": "甘肃省",
			"provcode": "271"
		}, {
			"province": "青海省",
			"provcode": "286"
		}]
	}, {
		"region": "华中",
		"regcode": "249",
		"info": [{
			"province": "河南省",
			"provcode": "259"
		}, {
			"province": "湖南省",
			"provcode": "276"
		}, {
			"province": "湖北省",
			"provcode": "283"
		}]
	}, {
		"region": "华东",
		"regcode": "250",
		"info": [{
			"province": "江西省",
			"provcode": "260"
		}, {
			"province": "上海市",
			"provcode": "264"
		}, {
			"province": "安徽省",
			"provcode": "267"
		}, {
			"province": "江苏省",
			"provcode": "273"
		}, {
			"province": "福建省",
			"provcode": "275"
		}, {
			"province": "浙江省",
			"provcode": "277"
		}, {
			"province": "山东省",
			"provcode": "281"
		}]
	}, {
		"region": "东北",
		"regcode": "252",
		"info": [{
			"province": "吉林省",
			"provcode": "265"
		}, {
			"province": "辽宁省",
			"provcode": "280"
		}, {
			"province": "黑龙江省",
			"provcode": "284"
		}]
	}, {
		"region": "华南",
		"regcode": "253",
		"info": [{
			"province": "台湾",
			"provcode": "84"
		}, {
			"province": "香港",
			"provcode": "118"
		}, {
			"province": "澳门",
			"provcode": "185"
		}, {
			"province": "广东省",
			"provcode": "257"
		}, {
			"province": "海南省",
			"provcode": "261"
		}, {
			"province": "广西",
			"provcode": "262"
		}]
	}, {
		"region": "西南",
		"regcode": "254",
		"info": [{
			"province": "重庆市",
			"provcode": "270"
		}, {
			"province": "四川省",
			"provcode": "274"
		}, {
			"province": "贵州省",
			"provcode": "278"
		}, {
			"province": "西藏",
			"provcode": "279"
		}, {
			"province": "云南省",
			"provcode": "285"
		}]
	}, {
		"region": "华北",
		"regcode": "255",
		"info": [{
			"province": "内蒙古",
			"provcode": "263"
		}, {
			"province": "河北省",
			"provcode": "268"
		}, {
			"province": "天津市",
			"provcode": "269"
		}, {
			"province": "山西省",
			"provcode": "272"
		}, {
			"province": "北京市",
			"provcode": "282"
		}]
	}]
};

//2. 首页-获得城市区街道列表(市)
static_data.shipping_address.city = {
	"rescode": {
		"code": "0",
		"info": "获取城市列表成功"
	},
	"arealist": [{
		"name": "上海市",
		"code": "429"
	}]
};

//2. 首页-获得城市区街道列表(区县)
static_data.shipping_address.counties = {
	"rescode": {
		"code": "0",
		"info": "获取城市列表成功"
	},
	"arealist": [{
		"name": "浦东新区",
		"code": "825"
	}, {
		"name": "静安区",
		"code": "1354"
	}, {
		"name": "卢湾区",
		"code": "1382"
	}, {
		"name": "闸北区",
		"code": "1404"
	}, {
		"name": "南汇区",
		"code": "1406"
	}, {
		"name": "金山区",
		"code": "1566"
	}, {
		"name": "松江区",
		"code": "1797"
	}, {
		"name": "虹口区",
		"code": "1893"
	}, {
		"name": "徐汇区",
		"code": "1929"
	}, {
		"name": "长宁区",
		"code": "2110"
	}, {
		"name": "青浦区",
		"code": "2371"
	}, {
		"name": "宝山区",
		"code": "2401"
	}, {
		"name": "奉贤区",
		"code": "2503"
	}, {
		"name": "闵行区",
		"code": "2850"
	}, {
		"name": "崇明县",
		"code": "2896"
	}, {
		"name": "嘉定区",
		"code": "3060"
	}, {
		"name": "黄浦区",
		"code": "3169"
	}, {
		"name": "杨浦区",
		"code": "3409"
	}, {
		"name": "普陀区",
		"code": "3488"
	}]
};

//2. 首页-获得城市区街道列表(街道)
static_data.shipping_address.street = {
	"rescode": {
		"code": "0",
		"info": "获取城市列表成功"
	},
	"arealist": [{
		"name": "友谊路街道",
		"code": "17961"
	}, {
		"name": "吴淞街道",
		"code": "17962"
	}, {
		"name": "张庙街道",
		"code": "17963"
	}, {
		"name": "罗店镇",
		"code": "17964"
	}, {
		"name": "大场镇",
		"code": "17965"
	}, {
		"name": "杨行镇",
		"code": "17966"
	}, {
		"name": "月浦镇",
		"code": "17967"
	}, {
		"name": "罗泾镇",
		"code": "17968"
	}, {
		"name": "顾村镇",
		"code": "17969"
	}, {
		"name": "高境镇",
		"code": "17970"
	}, {
		"name": "庙行镇",
		"code": "17971"
	}, {
		"name": "淞南镇",
		"code": "17972"
	}, {
		"name": "宝山城市工业园区",
		"code": "17973"
	}]
};

//4. 首页-广告位信息

static_data.index.getbanners =
{
    "code": "0",
    "data": [
        {
            "content": {
                "sku": "",
                "text": "",
                "tid": "16181"
            },
            "imageurl": "http://img04.xgcdn.com/group1/M00/5D/0F/wKgyOlaHIriAdMvtAAQW6Dql6s0551.jpg",
            "type": "1"
        },
        {
            "content": {
                "sku": "",
                "text": "http://m.xg.com/ssale.html?sid=15638&mtoapp=0",
                "tid": ""
            },
            "imageurl": "http://img02.xgcdn.com/group1/M00/38/A1/wKgyOlYzIcSAPKovAACtg3B7nCo689.jpg",
            "type": "0"
        }
    ],
    "msg": "success"
};

static_data.index.getad = {
    "rescode": {
        "code": "0",
        "info": "获取首页-广告位信息成功"
    },
    "urls": [
        {
            "content": {
                "productid": "",
                "specialid": "",
                "text": ""
            },
            "imageurl": "http://img01.xgcdn.com/group1/M00/5E/DE/wKgyOlaLmBGASIddAADG-Plwts8979_640.jpg",
            "title": "",
            "type": "11"
        },
        {
            "content": {
                "productid": "",
                "specialid": "",
                "text": ""
            },
            "imageurl": "http://img03.xgcdn.com/group1/M00/5F/07/wKgyOlaMboyAQf94AAC3i4fAe6E518_640.jpg",
            "title": "",
            "type": "3"
        },
        {
            "content": {
                "productid": "",
                "specialid": "",
                "text": "http://m.xg.com/ssale.html?sid=15638&mtoapp=0"
            },
            "imageurl": "http://img01.xgcdn.com/group1/M00/38/A1/wKgyOlYzIcSAPKovAACtg3B7nCo689_640.jpg",
            "title": "",
            "type": "0"
        },
        {
            "content": {
                "productid": "",
                "specialid": "16655",
                "text": ""
            },
            "imageurl": "http://img02.xgcdn.com/group1/M00/5E/E1/wKgyOlaLnyyAEnPSAAJmZu3AwLA689_640.jpg",
            "title": "",
            "type": "1"
        },
        {
            "content": {
                "productid": "",
                "specialid": "16210",
                "text": ""
            },
            "imageurl": "http://img04.xgcdn.com/group1/M00/5F/1A/wKgyOlaMi6-AO7o9AAG5OibkS4w567_640.jpg",
            "title": "",
            "type": "1"
        },
        {
            "content": {
                "productid": "",
                "specialid": "14390",
                "text": ""
            },
            "imageurl": "http://img04.xgcdn.com/group1/M00/5E/DE/wKgyOlaLmMOAVPvZAACE_IGN0C4129_640.jpg",
            "title": "",
            "type": "1"
        }
    ],
    "urls4navigator": [],
    "urls4sideslip": [
        {
            "content": {
                "productid": "27040300530101",
                "specialid": "13571",
                "text": ""
            },
            "imageurl": "http://img02.xgcdn.com/group1/M00/5F/09/wKgyOlaMcViAQZ7gAAC2Cki9S04345_420.jpg",
            "oldprice": "288",
            "price": "139",
            "title": "美国·心脏健康的必需品",
            "type": "2"
        },
        {
            "content": {
                "productid": "27040301310101",
                "specialid": "15960",
                "text": ""
            },
            "imageurl": "http://img03.xgcdn.com/group1/M00/5F/09/wKgyOlaMcYaAQ0p7AADSLzuOfpI326_420.jpg",
            "oldprice": "178",
            "price": "130",
            "title": "意大利·大姨妈来了也不怕",
            "type": "2"
        },
        {
            "content": {
                "productid": "13020700110102",
                "specialid": "8911",
                "text": ""
            },
            "imageurl": "http://img05.xgcdn.com/group1/M00/5F/09/wKgyOlaMceiAbAp6AADUn7lpqWY011_420.jpg",
            "oldprice": "229",
            "price": "136",
            "title": "美国·淡纹魔法 焕然新生",
            "type": "2"
        },
        {
            "content": {
                "productid": "28011300150101",
                "specialid": "15696",
                "text": ""
            },
            "imageurl": "http://img01.xgcdn.com/group1/M00/5F/09/wKgyOlaMccKANltkAAB31ITg15k159_420.jpg",
            "oldprice": "175",
            "price": "135",
            "title": "美国·安吉丽娜朱莉给宝宝用的湿疹膏",
            "type": "2"
        },
        {
            "content": {
                "productid": "27010200260101",
                "specialid": "12417",
                "text": ""
            },
            "imageurl": "http://img02.xgcdn.com/group1/M00/5E/37/wKgyOlaLJo-ABzN1AADSR2B9qdM099_420.jpg",
            "oldprice": "99",
            "price": "79",
            "title": "日本·和咳嗽咽喉炎说再见",
            "type": "2"
        },
        {
            "content": {
                "productid": "09030100060401",
                "specialid": "16812",
                "text": ""
            },
            "imageurl": "http://img01.xgcdn.com/group1/M00/5F/09/wKgyOlaMch2ANu2JAACskhysGck800_420.jpg",
            "oldprice": "498",
            "price": "235",
            "title": "辛克宝贝·隔热保温 颜值爆表 ",
            "type": "2"
        }
    ]
};

//5. 首页-功能标签信息
static_data.index.gettaps = {
	"rescode": {
		"code": "0",
		"info": "获取功能标签信息成功"
	},
	"count": "0",
	"tables": [{
		"imageurl": "./resources/images/index/saleToday.png",
		"title": "今日特卖",
		"type": "0",
		"linkurl": "featuredtoday.html"
	}, {
		"imageurl": "./resources/images/index/lottery.png",
		"title": "抽奖",
		"type": "0",
		"linkurl": "lottery.html"
	}, {
		"imageurl": "./resources/images/index/trailer.png",
		"title": "预告",
		"type": "1",
		"linkurl": "javascript:void(0);"
	}, {
		"imageurl": "./resources/images/index/registration.png",
		"title": "签到",
		"type": "0",
		"linkurl": "signed.html"
	}]
};

//6. 首页-单品团信息
static_data.index.getmusthave = {
	"rescode": {
		"code": "0",
		"info": "获取首页单品团 成功"
	},
	"starttime": "1422806400000",
	"endtime": "1425052800000",
	"imageurl": [
		"./resources/images/index/single_product_group.png"
	],
	"price": "12.0",
	"oldprice": "12.0",
	"postinfo": null,
	"unk": null,
	"sales": null,
	"name": "新疆红富士",
	"detail": null,
	"specs": null,
	"count": null,
	"viewpoint": null,
	"reputation": null,
	"imagethreeurl": null,
	"supplier": null,
	"tuntype": null,
	"specialid": "1044",
	"classifyid": null,
	"brandid": null,
	"productid": "01010100010201",
	"skulist": null
};

// /index/gettodaynew.htm
static_data.index.gettodaynew=
{
    "code": "0",
    "data": {
        "curpage": 1,
        "list": [
            {
                "imgurl": "http://img04.xgcdn.com/group1/M00/5C/96/wKgyOlaE8MiAcgzBAAOLFEpdr1k998.jpg",
                "name": "原装进口 温柔呵护 海淘纸尿裤专场",
                "tid": "12003"
            },
            {
                "imgurl": "http://img02.xgcdn.com/group1/M00/5C/98/wKgyOlaE81qAYtOpAAJsbBNyn_g308.jpg",
                "name": "黄金奶源 全球购 海淘奶粉专场",
                "tid": "12004"
            },
            {
                "imgurl": "http://img03.xgcdn.com/group1/M00/5C/AA/wKgyOlaFNRCAKPJkAAJySgg5K9o020.jpg",
                "name": "舒适干爽 性价比超高 纸尿裤精选专场",
                "tid": "1525"
            },
            {
                "imgurl": "http://img03.xgcdn.com/group1/M00/5C/E9/wKgyOlaGCjiABnDzAAMu4dX_BxM396.jpg",
                "name": "适合国内宝宝的放心奶 奶粉精选专场",
                "tid": "12037"
            },
            {
                "imgurl": "http://img04.xgcdn.com/group1/M00/5C/96/wKgyOlaE8MiAcgzBAAOLFEpdr1k998.jpg",
                "name": "宝宝保暖大作战",
                "tid": "16528"
            },
            {
                "imgurl": "http://img04.xgcdn.com/group1/M00/5C/58/wKgyOlaEnyaARo1YAAJYlO6In3s437.jpg",
                "name": "满699减50 高景观 超强四轮避震",
                "tid": "16173"
            },
            {
                "imgurl": "http://img04.xgcdn.com/group1/M00/5C/05/wKgyOlaDx8SAC8_NAAJKGtsCcr4461.jpg",
                "name": "花王妙而舒 瞬爽透气",
                "tid": "16323"
            }
        ],
        "pagesize": 7,
        "totalcount": 7,
        "totalpagecount": 1
    },
    "msg": "success"
};

//7. 首页-今日上新
static_data.index.gettodayhave = {
    "allcount": "",
    "allpage": "16",
    "count": "10",
    "rescode": {
        "code": "0",
        "info": "获取今日产品信息成功"
    },
    "speciallist": [
        {
            "currenttime": "1452064727418",
            "discount": "",
            "endtime": "1452477599000",
            "imageurl": "http://img03.xgcdn.com/group1/M00/5E/E1/wKgyOlaLnm6AJMVZAAJMZSZLVdg385_610.jpg",
            "name": " 海淘日用品分会场  ",
            "showtime": "0",
            "specialid": "16784",
            "starttime": "1452045600000"
        },
        {
            "currenttime": "1452064727418",
            "discount": "",
            "endtime": "1452477599000",
            "imageurl": "http://img05.xgcdn.com/group1/M00/5E/E1/wKgyOlaLngaAL8H1AAKAtErnuHA720_610.jpg",
            "name": "海淘保健品分会场 ",
            "showtime": "0",
            "specialid": "16779",
            "starttime": "1452045600000"
        },
        {
            "currenttime": "1452064727418",
            "discount": "",
            "endtime": "1452477599000",
            "imageurl": "http://img05.xgcdn.com/group1/M00/5E/E0/wKgyOlaLnaiAd3bxAALww9i46_A398_610.jpg",
            "name": "海淘辅食分会场",
            "showtime": "0",
            "specialid": "16777",
            "starttime": "1452045600000"
        },
        {
            "currenttime": "1452064727418",
            "discount": "",
            "endtime": "1452477599000",
            "imageurl": "http://img03.xgcdn.com/group1/M00/5E/E0/wKgyOlaLnSSAG0huAAIjr40ZKu4744_610.jpg",
            "name": "  海淘护肤品分会场",
            "showtime": "0",
            "specialid": "16776",
            "starttime": "1452045600000"
        },
        {
            "currenttime": "1452064727418",
            "discount": "",
            "endtime": "1452563999000",
            "imageurl": "http://img02.xgcdn.com/group1/M00/5E/E1/wKgyOlaLnzKAURt3AALeaLs2F-4053_610.jpg",
            "name": "原装进口 温柔呵护 海淘纸尿裤专场",
            "showtime": "0",
            "specialid": "12003",
            "starttime": "1447380001000"
        },
        {
            "currenttime": "1452064727418",
            "discount": "",
            "endtime": "1452563999000",
            "imageurl": "http://img04.xgcdn.com/group1/M00/5E/E1/wKgyOlaLn4CADa-kAAJ1sH4eaHQ865_610.jpg",
            "name": "黄金奶源 全球购 海淘奶粉专场",
            "showtime": "0",
            "specialid": "12004",
            "starttime": "1447380001000"
        },
        {
            "currenttime": "1452064727418",
            "discount": "",
            "endtime": "1472608799000",
            "imageurl": "http://img02.xgcdn.com/group1/M00/5C/AA/wKgyOlaFNRCAKPJkAAJySgg5K9o020_610.jpg",
            "name": "舒适干爽  性价比超高   纸尿裤精选专场",
            "showtime": "1",
            "specialid": "1525",
            "starttime": "1436754998000"
        },
        {
            "currenttime": "1452064727418",
            "discount": "",
            "endtime": "1464659999000",
            "imageurl": "http://img05.xgcdn.com/group1/M00/5C/E9/wKgyOlaGCjiABnDzAAMu4dX_BxM396_610.jpg",
            "name": "适合国内宝宝的放心奶  奶粉精选专场",
            "showtime": "1",
            "specialid": "12037",
            "starttime": "1447380000000"
        },
        {
            "currenttime": "1452064727418",
            "discount": "",
            "endtime": "1452218399000",
            "imageurl": "http://img04.xgcdn.com/group1/M00/5D/FA/wKgyOlaKN4mARhIuAAPggV_sCDg558_610.jpg",
            "name": "巧手妈咪哺喂洗护新篇章",
            "showtime": "0",
            "specialid": "16651",
            "starttime": "1451959200000"
        },
        {
            "currenttime": "1452064727418",
            "discount": "",
            "endtime": "1452218399000",
            "imageurl": "http://img01.xgcdn.com/group1/M00/5E/91/wKgyOlaLZ6yAfKCbAALPSOc0T8k887_610.jpg",
            "name": "长效保湿 全面护理 西班牙国民药妆品牌 ISDIN专场",
            "showtime": "0",
            "specialid": "16782",
            "starttime": "1449885600000"
        }
    ]
};

//8. 首页-最后疯抢
static_data.index.getlastcrazy = {
	"rescode": {
		"code": "0",
		"info": "获取首页-最后疯抢信息 成功"
	},
	"allpage": "2",
	"count": "2",
	"speciallist": [{
		"name": "12",
		"discount": "3-4",
		"starttime": "1426333258000",
		"endtime": "1426348799000",
		"imageurl": "./resources/images/index/hots03.png",
		"specialid": "1121"
	}, {
		"name": "12",
		"discount": "3-4",
		"starttime": "1423736856000",
		"endtime": "1424361600000",
		"imageurl": "./resources/images/index/hots03.png",
		"specialid": "1122"
	}, {
		"name": "12",
		"discount": "3-4",
		"starttime": "1423736856000",
		"endtime": "1424361600000",
		"imageurl": "./resources/images/index/hots03.png",
		"specialid": "1122"
	}, {
		"name": "12",
		"discount": "3-4",
		"starttime": "1423736856000",
		"endtime": "1424361600000",
		"imageurl": "./resources/images/index/hots03.png",
		"specialid": "1122"
	}]
};

//9. 首页-明日预告 
static_data.index.gettmnotice = {
	"rescode": {
		"code": "0",
		"info": "获取明日预告信息 成功"
	},
	"allpage": 2,
	"count": 2,
	"speciallist": [{
		"specialid": "0001",
		"name": "母婴专场",
		"discount": "0.75",
		"starttime": "1423584000000",
		"endtime": "1425052800000",
		"imageurl": "./resources/images/index/hots05.png"
	}, {
		"specialid": "0002",
		"name": "奶粉专场",
		"discount": "5",
		"starttime": "1423584000000",
		"endtime": "1425052800000",
		"imageurl": "./resources/images/index/hots06.png"
	}]
};

//10. 首页-明日预告-开团提醒
static_data.index.getopengroup = {
	"rescode": {
		"code": "0",
		"info": "success"
	}
};

//促销
// /topic/detail.htm?tid=100
static_data.topic.detail=
{
    "code": "0",
    "data": {
        "name": "迷蓝迷粉 韩服的味道 时尚经典",
        "shareurl": "http://m.xg.com/ssale.html?tid=100",
        "status": "1",
        "tophtml": "\"\"\"\"\"\""
    },
    "msg": "success"
};

//.../topic/products.htm?tid=100&curpage=1
static_data.topic.products=
{
    "code": "0",
    "data": {
        "curpage": 1,
        "list": [
            {
                "discount": "3.2",
                "imgurl": "http://img04.xgcdn.com/group1/M00/57/02/wKgyOlZ5DoeABIDAAAB4DD28M4w791_346.jpg",
                "name": "长款棉衣",
                "oldprice": "899",
                "price": "289",
                "sku": "02010419030201",
                "status": "1",
                "tid": "100"
            }
        ],
        "pagesize": 1,
        "totalcount": 1,
        "totalpagecount": 1
    },
    "msg": "success"
};

//12. 秒杀-单品团信息
static_data.seckill.getmusthave = {
	"rescode": {
		"code": "0",
		"info": "获取秒杀单品团信息 成功"
	},
	"allpage": "3",
	"count": "4",
	"products": [{
		"starttime": "1423411200000",
		"endtime": "1425052800000",
		"imageurl": [
			"./resources/images/spike/htos01.png"
		],
		"price": "50.0",
		"oldprice": "50.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "山西大苹果",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1043",
		"classifyid": null,
		"brandid": null,
		"productid": "01010100020102",
		"skulist": null
	}, {
		"starttime": "1423670400000",
		"endtime": "1428052800000",
		"imageurl": [
			"./resources/images/spike/htos01.png"
		],
		"price": "100.0",
		"oldprice": "100.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "漂亮鞋子",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1105",
		"classifyid": null,
		"brandid": null,
		"productid": "02010100030101",
		"skulist": null
	}, {
		"starttime": "1423411200000",
		"endtime": "1425052800000",
		"imageurl": [
			"./resources/images/spike/htos01.png"
		],
		"price": "50.0",
		"oldprice": "50.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "山西大苹果",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1043",
		"classifyid": null,
		"brandid": null,
		"productid": "01010100020102",
		"skulist": null
	}, {
		"starttime": "1423497600000",
		"endtime": "1425052800000",
		"imageurl": [
			"./resources/images/spike/htos01.png"
		],
		"price": "1.0",
		"oldprice": "1.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "规格测试",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1081",
		"classifyid": null,
		"brandid": null,
		"productid": "01010100170101",
		"skulist": null
	}]
};

//13. 囤-广告位信息
static_data.tun.getad = {
	"rescode": {
		"code": "0",
		"info": "获取囤-广告位信息 成功"
	},
	"urls": {
		"imageurl": "./resources/images/store/1.png",
		"type": "2",
		"content": {
			"productid": "10000000024",
			"specialid": "1044",
			"text": null
		}
	}
};

//16. 囤标签-列表信息
static_data.tun.getplist = {
	"rescode": {
		"code": "0",
		"info": "获取囤标签-列表信息 成功"
	},
	"allpage": "2",
	"count": "4",
	"style": "0",
	"products": [{
		"starttime": "1420041600000",
		"endtime": "1514736000000",
		"imageurl": ["./resources/images/store/2.png"],
		"price": "0.01",
		"oldprice": "100.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "迪士尼 紫色 31",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1001",
		"classifyid": null,
		"brandid": null,
		"productid": "02010100010101",
		"skulist": null
	}, {
		"starttime": "1420041600000",
		"endtime": "1514736000000",
		"imageurl": ["./resources/images/store/3.png"],
		"price": "0.01",
		"oldprice": "100.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "迪士尼 浅灰 31",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1001",
		"classifyid": null,
		"brandid": null,
		"productid": "02010100010201",
		"skulist": null
	}, {
		"starttime": "1420041600000",
		"endtime": "1514736000000",
		"imageurl": ["./resources/images/store/3.png"],
		"price": "0.01",
		"oldprice": "100.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "迪士尼 紫色 32",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1001",
		"classifyid": null,
		"brandid": null,
		"productid": "02010100010401",
		"skulist": null
	}, {
		"starttime": "1420041600000",
		"endtime": "1514736000000",
		"imageurl": ["./resources/images/store/2.png"],
		"price": "0.01",
		"oldprice": "100.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "迪士尼 浅灰 32",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1001",
		"classifyid": null,
		"brandid": null,
		"productid": "02010100010501",
		"skulist": null
	}, {
		"starttime": "1420041600000",
		"endtime": "1514736000000",
		"imageurl": ["./resources/images/store/2.png"],
		"price": "0.01",
		"oldprice": "100.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "迪士尼 浅灰 32",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1001",
		"classifyid": null,
		"brandid": null,
		"productid": "02010100010501",
		"skulist": null
	}, {
		"starttime": "1420041600000",
		"endtime": "1514736000000",
		"imageurl": ["./resources/images/store/2.png"],
		"price": "0.01",
		"oldprice": "100.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "迪士尼 浅灰 32",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1001",
		"classifyid": null,
		"brandid": null,
		"productid": "02010100010501",
		"skulist": null
	}, {
		"starttime": "1420041600000",
		"endtime": "1514736000000",
		"imageurl": ["./resources/images/store/2.png"],
		"price": "0.01",
		"oldprice": "100.0",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "迪士尼 浅灰 32",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1001",
		"classifyid": null,
		"brandid": null,
		"productid": "02010100010501",
		"skulist": null
	}]
};

//17. 囤标签-分类和品牌信息
static_data.tun.getclassification = {
	"rescode": {
		"code": "0",
		"info": "获取囤分类信息成功"
	},
	"classifylist": [{
		"classifyid": "1",
		"classifyname": "迪士尼"
	}, {
		"classifyid": "2",
		"classifyname": "迪士尼获取囤"
	}, {
		"classifyid": "3",
		"classifyname": "迪士尼3"
	}, {
		"classifyid": "4",
		"classifyname": "迪士尼4"
	}, {
		"classifyid": "5",
		"classifyname": "迪士尼5"
	}],
	"brandlist": [{
		"brandid": "5",
		"brandname": "迪士尼20"
	}, {
		"brandid": "9",
		"brandname": "袋鼠妈妈"
	}, {
		"brandid": "10",
		"brandname": "袋鼠妈妈1"
	}]
};

//18. 专场-商品列表
static_data.special.product = {
    "allcount": "",
    "allpage": "19",
    "count": "10",
    "hotproducts": [],
    "name": "",
    "products": [
        {
            "brandid": "",
            "classifyid": null,
            "count": "",
            "currenttime": "1452152449989",
            "detail": "",
            "endtime": "1472608799000",
            "imagethreeurl": "",
            "imageurl": [
                "http://img01.xgcdn.com/group1/M00/25/A6/wKgyOlYAu6KADNK1AAJe9TgMWy0945_296.jpg"
            ],
            "name": "帮宝适 超薄干爽系列大包装 NB86片",
            "oldprice": "124",
            "postinfo": "",
            "price": "89",
            "productid": "08010100060201",
            "reputation": null,
            "sales": [],
            "showtime": "",
            "skulist": [],
            "specialid": "1525",
            "specs": null,
            "starttime": "1436754998000",
            "status": "0",
            "supplier": "",
            "topicpoint": "",
            "tuntype": "0",
            "unk": "",
            "viewpoint": ""
        },
        {
            "brandid": "",
            "classifyid": null,
            "count": "",
            "currenttime": "1452152449989",
            "detail": "",
            "endtime": "1472608799000",
            "imagethreeurl": "",
            "imageurl": [
                "http://img04.xgcdn.com/group1/M00/1B/11/wKgyOlXebjSAG4HDAAJIVWv0cSM884_296.jpg"
            ],
            "name": "帮宝适 超薄干爽系列大包装 S70片",
            "oldprice": "118",
            "postinfo": "",
            "price": "95",
            "productid": "08010200130101",
            "reputation": null,
            "sales": [],
            "showtime": "",
            "skulist": [],
            "specialid": "1525",
            "specs": null,
            "starttime": "1436754998000",
            "status": "1",
            "supplier": "",
            "topicpoint": "",
            "tuntype": "0",
            "unk": "",
            "viewpoint": ""
        },
        {
            "brandid": "",
            "classifyid": null,
            "count": "",
            "currenttime": "1452152449989",
            "detail": "",
            "endtime": "1472608799000",
            "imagethreeurl": "",
            "imageurl": [
                "http://img04.xgcdn.com/group1/M00/1B/13/wKgyOlXebzmABjSXAAJGXwbVJlI509_296.jpg"
            ],
            "name": "帮宝适 特级棉柔系列大包装 NB72片",
            "oldprice": "129",
            "postinfo": "",
            "price": "99",
            "productid": "08010100080101",
            "reputation": null,
            "sales": [],
            "showtime": "",
            "skulist": [],
            "specialid": "1525",
            "specs": null,
            "starttime": "1436754998000",
            "status": "0",
            "supplier": "",
            "topicpoint": "",
            "tuntype": "0",
            "unk": "",
            "viewpoint": ""
        },
        {
            "brandid": "",
            "classifyid": null,
            "count": "",
            "currenttime": "1452152449989",
            "detail": "",
            "endtime": "1472608799000",
            "imagethreeurl": "",
            "imageurl": [
                "http://img01.xgcdn.com/group1/M00/1B/13/wKgyOlXeb4aAfmO0AAHtWDTxPEM858_296.jpg"
            ],
            "name": "帮宝适 特级棉柔系列大包装 S70片",
            "oldprice": "158",
            "postinfo": "",
            "price": "135",
            "productid": "08010200150101",
            "reputation": null,
            "sales": [],
            "showtime": "",
            "skulist": [],
            "specialid": "1525",
            "specs": null,
            "starttime": "1436754998000",
            "status": "0",
            "supplier": "",
            "topicpoint": "",
            "tuntype": "0",
            "unk": "",
            "viewpoint": ""
        },
        {
            "brandid": "",
            "classifyid": null,
            "count": "",
            "currenttime": "1452152449989",
            "detail": "",
            "endtime": "1472608799000",
            "imagethreeurl": "",
            "imageurl": [
                "http://img05.xgcdn.com/group1/M00/1B/13/wKgyOlXeb8GARvmpAAG9MfXpook169_296.jpg"
            ],
            "name": "帮宝适 特级棉柔系列大包装 M56片",
            "oldprice": "159",
            "postinfo": "",
            "price": "135",
            "productid": "08010300170101",
            "reputation": null,
            "sales": [],
            "showtime": "",
            "skulist": [],
            "specialid": "1525",
            "specs": null,
            "starttime": "1436754998000",
            "status": "0",
            "supplier": "",
            "topicpoint": "",
            "tuntype": "0",
            "unk": "",
            "viewpoint": ""
        },
        {
            "brandid": "",
            "classifyid": null,
            "count": "",
            "currenttime": "1452152449989",
            "detail": "",
            "endtime": "1472608799000",
            "imagethreeurl": "",
            "imageurl": [
                "http://img04.xgcdn.com/group1/M00/00/3E/CqjdolT20_uAbf6QAAFpi57Hcm4553_296.jpg"
            ],
            "name": "帮宝适 特级棉柔系列大包装 L46片",
            "oldprice": "159",
            "postinfo": "",
            "price": "129",
            "productid": "08010400160101",
            "reputation": null,
            "sales": [],
            "showtime": "",
            "skulist": [],
            "specialid": "1525",
            "specs": null,
            "starttime": "1436754998000",
            "status": "0",
            "supplier": "",
            "topicpoint": "",
            "tuntype": "0",
            "unk": "",
            "viewpoint": ""
        },
        {
            "brandid": "",
            "classifyid": null,
            "count": "",
            "currenttime": "1452152449989",
            "detail": "",
            "endtime": "1472608799000",
            "imagethreeurl": "",
            "imageurl": [
                "http://img03.xgcdn.com/group1/M00/1B/13/wKgyOlXecDOACtTjAAIR7Wf-aKM703_296.jpg"
            ],
            "name": "帮宝适 特级棉柔系列大包装 XL36片",
            "oldprice": "155",
            "postinfo": "",
            "price": "129",
            "productid": "08010500090101",
            "reputation": null,
            "sales": [],
            "showtime": "",
            "skulist": [],
            "specialid": "1525",
            "specs": null,
            "starttime": "1436754998000",
            "status": "0",
            "supplier": "",
            "topicpoint": "",
            "tuntype": "0",
            "unk": "",
            "viewpoint": ""
        },
        {
            "brandid": "",
            "classifyid": null,
            "count": "",
            "currenttime": "1452152449989",
            "detail": "",
            "endtime": "1472608799000",
            "imagethreeurl": "",
            "imageurl": [
                "http://img01.xgcdn.com/group1/M00/1B/1A/wKgyOlXefm6AeS_UAALE0UPbAnQ409_296.jpg"
            ],
            "name": "帮宝适 特级棉柔系列大包装 S70片*2",
            "oldprice": "316",
            "postinfo": "",
            "price": "256",
            "productid": "08010201360101",
            "reputation": null,
            "sales": [],
            "showtime": "",
            "skulist": [],
            "specialid": "1525",
            "specs": null,
            "starttime": "1436754998000",
            "status": "0",
            "supplier": "",
            "topicpoint": "",
            "tuntype": "0",
            "unk": "",
            "viewpoint": ""
        },
        {
            "brandid": "",
            "classifyid": null,
            "count": "",
            "currenttime": "1452152449989",
            "detail": "",
            "endtime": "1472608799000",
            "imagethreeurl": "",
            "imageurl": [
                "http://img04.xgcdn.com/group1/M00/1B/1A/wKgyOlXefvWANxPVAAGBnujhjps529_296.jpg"
            ],
            "name": "帮宝适 特级棉柔系列大包装 M56片*2",
            "oldprice": "318",
            "postinfo": "",
            "price": "249",
            "productid": "08010301490101",
            "reputation": null,
            "sales": [],
            "showtime": "",
            "skulist": [],
            "specialid": "1525",
            "specs": null,
            "starttime": "1436754998000",
            "status": "0",
            "supplier": "",
            "topicpoint": "",
            "tuntype": "0",
            "unk": "",
            "viewpoint": ""
        },
        {
            "brandid": "",
            "classifyid": null,
            "count": "",
            "currenttime": "1452152449989",
            "detail": "",
            "endtime": "1472608799000",
            "imagethreeurl": "",
            "imageurl": [
                "http://img01.xgcdn.com/group1/M00/1B/1B/wKgyOlXegG2APpb3AALbRKpJqw4406_296.jpg"
            ],
            "name": "帮宝适 特级棉柔系列大包装 L46片*2",
            "oldprice": "318",
            "postinfo": "",
            "price": "249",
            "productid": "08010401360101",
            "reputation": null,
            "sales": [],
            "showtime": "",
            "skulist": [],
            "specialid": "1525",
            "specs": null,
            "starttime": "1436754998000",
            "status": "0",
            "supplier": "",
            "topicpoint": "",
            "tuntype": "0",
            "unk": "",
            "viewpoint": ""
        }
    ],
    "rescode": {
        "code": "0",
        "info": "获取专场-商品列表信息成功"
    },
    "style": "2"
};

//19. 专场-分类和品牌
static_data.special.getclassifybrand = {
	"rescode": {
		"code": "0",
		"info": "获取专场-分类和品牌 成功"
	},
	"classifybrandlist": {
		"classify": [{
			"classifyname": "分类005",
			"classifyid": "1024"
		}],
		"brand": [{
			"brandid": "1234",
			"brandname": "品牌名称009"
		}]
	}
};

//20. 专场-详情
static_data.special.details = {
    "brandimages": "<a href=\"couponget.html?mtoapp=7\"><img width=\"100%\" src=\"http://img05.xgcdn.com/group1/M00/5C/AA/wKgyOlaFNWaADDHtAAJySgg5K9o818.jpg\" alt=\"\" /><img width=\"100%\" src=\"http://img01.xgcdn.com/group1/M00/5B/FF/wKgyOlaDvMmAa1qUAACXrifAUJM290.jpg\" alt=\"\" /><img width=\"100%\" src=\" http://img04.xgcdn.com/group1/M00/3D/38/wKgyOlY8hyCAGI8lAADNM5qoW_s938.jpg\" alt=\"\" /></a>",
    "classifybrandlist": {
        "brandids": [
            "187",
            "5",
            "8",
            "9",
            "10",
            "11",
            "1123",
            "756"
        ],
        "classifyids": [
            "305",
            "1033",
            "304",
            "1034",
            "1035",
            "306",
            "1037",
            "1038",
            "1025",
            "1026",
            "1027",
            "1028",
            "424",
            "301",
            "302",
            "303"
        ]
    },
    "currenttime": "1452152449960",
    "endtime": "1472608799000",
    "imageurl": "<a href=\"couponget.html?mtoapp=7\"><img width=\"100%\" src=\"http://img05.xgcdn.com/group1/M00/5C/AA/wKgyOlaFNWaADDHtAAJySgg5K9o818.jpg\" alt=\"\" /><img width=\"100%\" src=\"http://img01.xgcdn.com/group1/M00/5B/FF/wKgyOlaDvMmAa1qUAACXrifAUJM290.jpg\" alt=\"\" /><img width=\"100%\" src=\" http://img04.xgcdn.com/group1/M00/3D/38/wKgyOlY8hyCAGI8lAADNM5qoW_s938.jpg\" alt=\"\" /></a>",
    "isconfspecial": "0",
    "name": "舒适干爽  性价比超高   纸尿裤精选专场",
    "rescode": {
        "code": "0",
        "info": "获取专场-详情成功"
    },
    "showtime": "1",
    "starttime": "1436754998000",
    "status": "0",
    "type": "3",
    "url": "http://m.xg.com/ssale.html?sid=1525"
};

static_data.product.detail =
{
    "code": "0",
    "data": {
        "channel": "宁波保税区",
        "count": "2",
        "countryimg": "http://img04.xgcdn.com/group1/M00/09/3D/wKgyOlWD4ieAS8coAAAHGWUrvIw389_76.png",
        "detail": "<img src=\"http://img05.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcCAUDjWAANcl4ae58w279.jpg\"  width=\"100%\" /><img src=\"http://img03.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcCALZ9NAAQRsW8qAOY509.jpg\"  width=\"100%\" /><img src=\"http://img01.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcGATMCSAAPPmC9Hu9Y423.jpg\" width=\"100%\" /><img src=\"http://img05.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcGASZL-AAJ-jZY2AVg579.jpg\" width=\"100%\" /><img src=\"http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcGAVsVGAAHlazLyjtE315.jpg\" width=\"100%\" /><img src=\"http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcKAT_YNAAJTGXWtNGY573.jpg\" width=\"100%\" /><img src=\"http://img03.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EcKAMXJqAAN6GihCF6I998.jpg\" width=\"100%\" />",
        "feature": "日本大王制纸于2014年9月面向日本全国发售了一款专门应对P,2.5的口罩“超级阻挡口罩”。此款口罩能阻挡100%可穿过普通口罩的微粒子等物质",
        "imglist": [
            "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
            "http://img01.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAZTk1AAJXu-52LTQ742_450.jpg",
            "http://img05.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbqAJ5TMAAL8xlgmziU890_450.jpg",
            "http://img03.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbqAJksPAAJXu-52LTQ476_450.jpg"
        ],
        "imgurl": "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
        "limitcount": "5",
        "name": "【日本】大王制纸 防PM2.5口罩（儿童款） 防雾霾口罩（7枚/盒）*3",
        "oldprice": "89",
        "price": "58",
        "selected": "1",
        "shareurl": "http://m.xg.com/pdetails.html?tid=1696&sku=101010111010",
        "sku": "07020700020101",
        "skus": [
            {
                "sku": "02010419030101",
                "skudetails": [
                    {
                        "groupid": "1",
                        "specid": "372"
                    },
                    {
                        "groupid": "2",
                        "specid": "23"
                    }
                ]
            },
            {
                "sku": "02010419030201",
                "skudetails": [
                    {
                        "groupid": "1",
                        "specid": "368"
                    },
                    {
                        "groupid": "2",
                        "specid": "23"
                    }
                ]
            },
            {
                "sku": "02010419030301",
                "skudetails": [
                    {
                        "groupid": "1",
                        "specid": "559"
                    },
                    {
                        "groupid": "2",
                        "specid": "23"
                    }
                ]
            },
            {
                "sku": "02010419030401",
                "skudetails": [
                    {
                        "groupid": "1",
                        "specid": "560"
                    },
                    {
                        "groupid": "2",
                        "specid": "23"
                    }
                ]
            },
            {
                "sku": "02010419030501",
                "skudetails": [
                    {
                        "groupid": "1",
                        "specid": "372"
                    },
                    {
                        "groupid": "2",
                        "specid": "945"
                    }
                ]
            },
            {
                "sku": "02010419030601",
                "skudetails": [
                    {
                        "groupid": "1",
                        "specid": "368"
                    },
                    {
                        "groupid": "2",
                        "specid": "945"
                    }
                ]
            },
            {
                "sku": "02010419030701",
                "skudetails": [
                    {
                        "groupid": "1",
                        "specid": "559"
                    },
                    {
                        "groupid": "2",
                        "specid": "945"
                    }
                ]
            },
            {
                "sku": "02010419030801",
                "skudetails": [
                    {
                        "groupid": "1",
                        "specid": "560"
                    },
                    {
                        "groupid": "2",
                        "specid": "945"
                    }
                ]
            }
        ],
        "specs": [
            {
                "groupdetails": [
                    {
                        "specid": "372",
                        "specname": "90cm"
                    },
                    {
                        "specid": "368",
                        "specname": "100cm"
                    },
                    {
                        "specid": "559",
                        "specname": "110cm"
                    },
                    {
                        "specid": "560",
                        "specname": "120cm"
                    }
                ],
                "groupid": "1",
                "groupname": "尺码"
            },
            {
                "groupdetails": [
                    {
                        "specid": "23",
                        "specname": "浅蓝"
                    },
                    {
                        "specid": "945",
                        "specname": "果绿"
                    }
                ],
                "groupid": "2",
                "groupname": "颜色"
            }
        ],
        "status": "1",
        "stock": "50",
        "taxrate": "10",
        "tid": "12004"
    },
    "msg": "success"
};

//23. 商品信息-商品信息
static_data.product.details = {
	"rescode": {
		"code": "0",
		"info": "获取商品详情 成功"
	},
	"starttime": "1423482744000",
	"endtime": "1430438400000",
	"imageurl": ["./img/ad/1.jpg", "./img/ad/2.jpg", "./img/ad/3.jpg", "./img/ad/4.jpg", "./img/ad/5.jpg", "./img/ad/6.jpg"],
	"price": "12.01",
	"oldprice": "12.01",
	"postinfo": "0.0",
	"unk": 10,
	"sales": ["促 : 买就送20元大礼包"],
	"name": "五羊护肤套装",
	"detail": "孕妇化妆品天然补水保湿孕期美白淡斑淡化细纹，维持肌肤年轻光彩富含维生素C，改善肤色，提升肌肤吸收力，吸收性好，质地柔软而清透。",
	"specs": [{
		"groupid": "2",
		"groupname": "颜色",
		"groupdetails": [{
			"specid": "23",
			"specname": "红色"
		}, {
			"specid": "43",
			"specname": "黄色"
		}]
	}, {
		"groupid": "11",
		"groupname": "尺码",
		"groupdetails": [{
			"specid": "35",
			"specname": "110"
		}, {
			"specid": "36",
			"specname": "120"
		}, {
			"specid": "37",
			"specname": "130"
		}, {
			"specid": "38",
			"specname": "140"
		}, {
			"specid": "39",
			"specname": "150"
		}]
	}, {
		"groupid": "7",
		"groupname": "容量组",
		"groupdetails": [{
			"specid": "15",
			"specname": "L54片"
		}, {
			"specid": "16",
			"specname": "L56片"
		}]
	}],
	"ispost": "1",
	"count": "3000",
	"viewpoint": "孕妇化妆品天然补水保湿孕期美白淡斑淡化细纹，维持肌肤年轻光彩富含维生素C，改善肤色，提升肌肤吸收力，吸收性好，质地柔软而清透。",
	"reputation": {
		"url": "http://...",
		"info": {
			"name": "一号妈妈",
			"time": "1423482744000",
			"comment": "孕妇化妆品天然补水保湿孕期美白淡斑淡化细纹，维持肌肤年轻光彩富含维生素C，改善肤色，提升肌肤吸收力，吸收性好，质地柔软而清透。"
		}
	},
	"imagethreeurl": "<img src=\"http://img02.xg.local/group2/M00/00/30/rBABnFTYjuGAO4FHAAk5FrilobE648.jpg\" alt=\"\" style=\"\" /><img src=\"http://img02.xg.local/group2/M00/00/30/rBABnFTYjuGAKkQ0AAwjiF-YGNw784.jpg\" alt=\"\" style=\"\" /><img src=\"http://img02.xg.local/group2/M00/00/30/rBABnFTYjuGAJDwDAAv60xaRlu4037.jpg\" alt=\"\" style=\"\" />  ",
	"supplier": "联营供应商第18有限公司",
	"tuntype": "1",
	"specialid": "1051",
	"classifyid": {
		"id1": "35",
		"id2": "36",
		"id3": "37"
	},
	"brandid": "3",
	"productid": "08010100070103",
	"skulist": [
		/*{
			"sku": "08010100070103",
			"skudetails": 
			[
				{"groupid": "5","specid": "24"}, 
				{"groupid": "6","specid": "19"}, 
				{"groupid": "7","specid": "15"}
			]
		}*/
		//{sku: "11010100030101", skudetails: [{groupid: "2", specid: "23"}, {groupid: "11", specid: "35"}]},
		{
			sku: "11010100030201",
			skudetails: [{
				groupid: "2",
				specid: "23"
			}, {
				groupid: "11",
				specid: "36"
			}, {
				groupid: "7",
				specid: "15"
			}]
		}, {
			sku: "11010100030301",
			skudetails: [{
				groupid: "2",
				specid: "23"
			}, {
				groupid: "11",
				specid: "37"
			}, {
				groupid: "7",
				specid: "15"
			}]
		}, {
			sku: "11010100030401",
			skudetails: [{
				groupid: "2",
				specid: "23"
			}, {
				groupid: "11",
				specid: "38"
			}, {
				groupid: "7",
				specid: "15"
			}]
		}, {
			sku: "11010100030501",
			skudetails: [{
				groupid: "2",
				specid: "23"
			}, {
				groupid: "11",
				specid: "39"
			}, {
				groupid: "7",
				specid: "15"
			}]
		}, {
			sku: "11010100030601",
			skudetails: [{
				groupid: "2",
				specid: "43"
			}, {
				groupid: "11",
				specid: "35"
			}, {
				groupid: "7",
				specid: "16"
			}]
		}, {
			sku: "11010100030701",
			skudetails: [{
				groupid: "2",
				specid: "43"
			}, {
				groupid: "11",
				specid: "36"
			}, {
				groupid: "7",
				specid: "16"
			}]
		}, {
			sku: "11010100030801",
			skudetails: [{
				groupid: "2",
				specid: "43"
			}, {
				groupid: "11",
				specid: "37"
			}, {
				groupid: "7",
				specid: "16"
			}]
		}, {
			sku: "11010100030901",
			skudetails: [{
				groupid: "2",
				specid: "43"
			}, {
				groupid: "11",
				specid: "38"
			}, {
				groupid: "7",
				specid: "16"
			}]
		}, {
			sku: "11010100031001",
			skudetails: [{
				groupid: "2",
				specid: "43"
			}, {
				groupid: "11",
				specid: "39"
			}, {
				groupid: "7",
				specid: "16"
			}]
		}
	]
};

//24. 商品信息-添加购物信息
static_data.product.addshopping = {
	"rescode": {
		"code": "0",
		"info": "添加成功"
	}
};

//26. 商品信息-点评列表
static_data.product.comment = {
	"rescode": {
		"code": "0",
		"info": "添加成功"
	},
	"allpage": 20,
	"reputation": [{
		"name": "一号妈妈",
		"time": "1000000",
		"comment": "孕妇化妆品天然补水保湿孕期美白淡斑淡化细纹，维持肌肤年轻光彩富含维生素C，改善肤色，提升肌肤吸收力，吸收性好，质地柔软而清透。"
	}, {
		"name": "二号妈妈",
		"time": "1000000",
		"comment": "孕妇化妆品天然补水保湿孕期美白淡斑淡化细纹，维持肌肤年轻光彩富含维生素C，改善肤色，提升肌肤吸收力，吸收性好，质地柔软而清透。"
	}]
};

//27. 商品详情-仓库（暂时不用）
static_data.product.getstoreid = {};

//28. 购物车-西客信息
static_data.shopping.xg = {
	"rescode": {
		"code": "0",
		"info": "查看购物车信息成功"
	},
	"price": "12",
	"disprice": "122",
	"allpage": "2",
	"productinfo": [{
		"productid": "11010100020101",
		"specialid": "1178",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTt-nCAc2V8AAIf6GAoVjw059.jpg",
		"price": "98.0",
		"oldprice": "369.0",
		"name": "男童白色拼接海洋系列衬衫 cool",
		"specs": [
			"颜色:白色",
			"尺码:110"
		],
		"count": "1",
		"supplier": "西客商城",
		"stockcount": "999",
		"restrictcount": "99",
		"status": "1",
		"selected": "1"
	}, {
		"productid": "11010100030401",
		"specialid": "1132",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTulE6ALX4_AAFpyOmPXnc696.jpg",
		"price": "128.0",
		"oldprice": "389.0",
		"name": "女童红色精致卡通图案卫衣套装",
		"specs": [
			"颜色:红色",
			"尺码:140"
		],
		"count": "2",
		"supplier": "西客商城",
		"stockcount": "997",
		"restrictcount": "99",
		"status": "1",
		"selected": "1"
	}]
};

//29. 购物车-西客商城们再看
static_data.shopping.xg = {
	"rescode": {
		"code": "0",
		"info": "查看购物车西客商城们再看成功"
	},
	"allpage": "1",
	"productinfo": [{
		"starttime": "1423639830000",
		"endtime": "1456416000000",
		"imageurl": "http://img12.xg.com/group2/M00/00/1A/rBABnFTJwrKAf4bZAA4uTDTxgyg192.jpg",
		"price": "101.0",
		"oldprice": "101.0",
		"name": "花王童装222",
		"detail": null,
		"specialid": "1090",
		"productid": "02010100020102"
	}, {
		"starttime": "1425013200000",
		"endtime": "1432958400000",
		"imageurl": "http://img12.xg.com/group2/M00/00/1E/rBABnFTQWVuAA8rzAAL5dHxjLbY192.png",
		"price": "101.0",
		"oldprice": "101.0",
		"name": "花王童装222",
		"detail": null,
		"specialid": "1020",
		"productid": "02010100020101"
	}]
};
//30. 购物车-海囤
static_data.shopping.haitun = {
    "code": "0",
    "data": {
        "disprice": "555",
        "products": [
            {
                "discount": "0.65",
                "imgurl": "http://img04.xgcdn.com/group1/M00/58/FB/wKgyOlZ9EbaAIBwSAAL8xlgmziU603_450.jpg",
                "name": "【日本】大王制纸 防PM2.5口罩（儿童款） 防雾霾口罩（7枚/盒）*3",
                "oldprice": "89",
                "price": "58",
                "sku": "07020700020101",
                "status": "1",
                "taxrate": "10",
                "tid": "12004",
                "count":"2"
            }
        ],
        "totalprice": "888"
    },
    "msg": "success"
};
//31. 购物车-删除
static_data.shopping["delete"] = {
	"rescode": {
		"code": "0",
		"info": "删除成功"
	},
	"price": "100.00"
};
//32. 购物车-获取总金额
static_data.shopping.authprice = { //全选
	"rescode": {
		"code": "0",
		"info": "获取金额成功"
	},
	"price": "354.0",
	"disprice": "122",
	"productinfo": [{
		"productid": "11010100020101",
		"specialid": "1178",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTt-nCAc2V8AAIf6GAoVjw059.jpg",
		"price": "98.0",
		"oldprice": "369.0",
		"name": "男童白色拼接海洋系列衬衫 cool",
		"specs": [
			"颜色:白色",
			"尺码:110"
		],
		"count": "1",
		"supplier": "西客商城",
		"stockcount": "999",
		"restrictcount": "99",
		"status": "1",
		"selected": "1"
	}, {
		"productid": "11010100030401",
		"specialid": "1132",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTulE6ALX4_AAFpyOmPXnc696.jpg",
		"price": "128.0",
		"oldprice": "389.0",
		"name": "女童红色精致卡通图案卫衣套装",
		"specs": [
			"颜色:红色",
			"尺码:140"
		],
		"count": "2",
		"supplier": "西客商城",
		"stockcount": "997",
		"restrictcount": "99",
		"status": "1",
		"selected": "1"
	}]
};
static_data.shopping.authpriceSelect = { //单选
	"rescode": {
		"code": "0",
		"info": "获取金额成功"
	},
	"price": "128.0",
	"disprice": "122",
	"productinfo": [{
		"productid": "11010100030401",
		"specialid": "1132",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTulE6ALX4_AAFpyOmPXnc696.jpg",
		"price": "128.0",
		"oldprice": "389.0",
		"name": "女童红色精致卡通图案卫衣套装",
		"specs": [
			"颜色:红色",
			"尺码:140"
		],
		"count": "1",
		"supplier": "西客商城",
		"stockcount": "997",
		"restrictcount": "99",
		"status": "1",
		"selected": "1"
	}]
}
static_data.shopping.authpriceEditNum = { //更新商品数量
	"rescode": {
		"code": "0",
		"info": "获取金额成功"
	},
	"price": "384.0",
	"disprice": "122",
	"productinfo": [{
		"productid": "11010100030401",
		"specialid": "1132",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTulE6ALX4_AAFpyOmPXnc696.jpg",
		"price": "128.0",
		"oldprice": "389.0",
		"name": "女童红色精致卡通图案卫衣套装",
		"specs": [
			"颜色:红色",
			"尺码:140"
		],
		"count": "3",
		"supplier": "西客商城",
		"stockcount": "997",
		"restrictcount": "99",
		"status": "1",
		"selected": "1"
	}]
}

static_data.shopping.authpriceCheck = { //检验
	"rescode": {
		"code": "0",
		"info": "成功"
	}
}

//33. 购物车-库存数量 （暂时不用）
static_data.shopping.getstockcount = {
	"rescode": {
		"code": "0",
		"info": "成功"
	},
	"price": "10000.00",
	"productinfo": [{
		"specialid": "1024",
		"productid": "1002301",
		"count": "300"
	}]
};
//附加. 购物车-美图和海囤数量
static_data.shopping.getshopcount = {
	"rescode": {
		"code": "0",
		"info": "成功"
	},
	"xgcount": "10",
	"haituncount": "0"
};

//34. 结算-提交订单
static_data.account.order = {
	"rescode": {
		"code": "0",
		"info": "成功"
	},
	"payid": "123456789",
	"orderinfo": 'partner="2088711356326299"&seller_id="liuzhoujing@xgmama.com"&out_trade_no="1015030200000008"&subject="西客商城订单"&body="西客商城订单"&total_fee="101.00"&notify_url="http://222.72.249.242:1080/paycb/alipayDirect.htm"&service="mobile.securitypay.pay"&payment_type="1"&_input_charset="utf-8"&it_b_pay="30m"&show_url="m.alipay.com"',
	"signedinfo": "A85VCLZtNdx8R3599XKZgPfGntz5qJBxagLgBY3RNBRVweiKpla7m7VX7q6irlTE%2FUs9lzeIHdm5Z8qZf1Fr%2BNNAm8%2F2hOLBiK3FxqzIWkPfD9w08hTzrmmz3Z17G0NyIu0EAcqRdJGLQr05BhL0%2Fqc1oOzPz%2BKPUHOZmgBywuI%3D"
};

//35. 结算-订单-查询支付结果
static_data.account.querypayres = {
	"rescode": {
		"code": "0",
		"info": "成功"
	},
	"pay": "1" //支付结果 “0”未支付 “1”支付中 “2”已支付 “3”支付失败
};

//38. 结算-获取订单总金额
static_data.account.authprice = {
	"rescode": {
		"code": "0",
		"info": "成功"
	},
	"price": "989.00",
	"freight": "12.00",
	"taxes": "50.00",
	"productinfo": [{
		"specialid": "10",
		"productid": "001",
		"imageurl": "./resources/images/ad/pro_ad_001.png",
		"price": "10.60",
		"oldprice": "20.00",
		"name": "五羊护肤套装",
		"specs": {
			"color": "红色",
			"size": "L"
		},
		"count": "2",
		"supplier": "西客",
		"stockcount": "10",
		"restrictcount": "30",
		"status": "0"
	}]
};

//39. 用户-登录
static_data.user.logon = 
{
    "code": "0",
    "data": {
        "token": "xgtoken",
        "tel": "13030302525",
        "name": "cyril"
    },
    "msg": "登录成功"
};
//41. 用户-注册
static_data.user.registr = {
	"rescode": {
		"code": "0",
		"info": "注册成功"
	},
	token: "ABCDEFG",
	telephone: "15001767623",
	name: "一号妈妈"
};
//42. 用户-修改密码
static_data.user.modifypassword = {
	"rescode": {
		"code": "0",
		"info": "密码找回成功"
	}
};
//44. 用户-验证码
static_data.user.getTheCode = {
	"rescode": {
		"code": "0",
		"info": "验证码已发送"
	},
	imageurl: ""
};
//45. 用户-待付款
static_data.user.allorders2 = {
	"rescode": {
		"code": "0",
		"info": "待付款查询订单成功"
	},
	allpage: "1",
	count: "4",
	allcount: "4",
	alllist: [{
		"num": "1015022800000124",
		"time": "1425611288888",
		"orderprice": "50.0",
		"status": "2",
		"supplier": "西客商城",
		"imageurl": "http://img11.xg.com/group1/M00/00/2E/rBABm1Tdt9GAJLVwAAHrVLPkmb8406.jpg"
	}, {
		"num": "1015022800000123",
		"time": "1425611282100",
		"orderprice": "98.0",
		"status": "2",
		"supplier": "西客商城",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTt-GKAPfq6AAH5FywYeus538.jpg"
	}, {
		"num": "1015022800000122",
		"time": "1425121922000",
		"orderprice": "98.0",
		"status": "2",
		"supplier": "2015新年第一测",
		"imageurl": "http://img11.xg.com/group1/M00/00/31/rBABm1TvDcGAGMxDAABSpwEJha8748.jpg"
	}, {
		"num": "1015021600000194",
		"time": "1424070141000",
		"orderprice": "50.0",
		"status": "2",
		"supplier": "联营供应商",
		"imageurl": "http://img11.xg.com/group1/M00/00/15/rBABm1TYDyeAV45JAAJbFDM5xS4769.jpg"
	}]
};

//46 订单详情
static_data.user.orderinfo = {
    "code": "0",
    "data": {
        "address": "上海市辖区浦东新区张江镇中科路2500弄23号602室",
        "baseprice": "523.9",
        "disprice": "40",
        "freight": "10",
        "lines": [
            {
                "count": "2",
                "imgurl": "http://img02.xgcdn.com/group1/M00/27/3E/wKgyOlYDwYqAN5j0AAKVK2opehk516_210.jpg",
                "lineprice": "1107.8",
                "name": "明日之星升级版电子琴",
                "price": "553.9",
                "sku": "05120101170101",
                "specs": [
                    "颜色:白色"
                ],
                "tid": "11613"
            },
            {
                "count": "2",
                "imgurl": "http://img02.xgcdn.com/group1/M00/27/3E/wKgyOlYDwYqAN5j0AAKVK2opehk516_210.jpg",
                "lineprice": "1107.8",
                "name": "明日之星升级版电子琴",
                "price": "553.9",
                "sku": "05120101170101",
                "specs": [
                    "颜色:白色"
                ],
                "tid": "11613"
            }
        ],
        "name": "山哥",
        "ordercode": "11151111004092874",
        "orderprice": "1107.8",
        "ordertime": "2015-01-07 19:06:22",
        "payway": "1",
        "paywaydesc": "支付宝",
        "status": "2",
        "statusdesc": "待支付",
        "taxes": "1",
        "tel": "15636369898"
    },
    "msg": "success"
};
//47. 用户-待收货
static_data.user.allorders5 = {
	"rescode": {
		"code": "0",
		"info": "success"
	},
	allpage: "20",
	count: "4",
	allcount: "13",
	alllist: [{
		"num": "1015022800000124",
		"time": "1425122425000",
		"orderprice": "50.0",
		"status": "5",
		"supplier": "西客商城",
		"imageurl": "http://img11.xg.com/group1/M00/00/2E/rBABm1Tdt9GAJLVwAAHrVLPkmb8406.jpg"
	}, {
		"num": "1015022800000123",
		"time": "1425122141000",
		"orderprice": "98.0",
		"status": "5",
		"supplier": "西客商城",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTt-GKAPfq6AAH5FywYeus538.jpg"
	}, {
		"num": "1015022800000122",
		"time": "1425121922000",
		"orderprice": "98.0",
		"status": "5",
		"supplier": "2015新年第一测",
		"imageurl": "http://img11.xg.com/group1/M00/00/31/rBABm1TvDcGAGMxDAABSpwEJha8748.jpg"
	}, {
		"num": "1015021600000194",
		"time": "1424070141000",
		"orderprice": "50.0",
		"status": "5",
		"supplier": "联营供应商",
		"imageurl": "http://img11.xg.com/group1/M00/00/15/rBABm1TYDyeAV45JAAJbFDM5xS4769.jpg"
	}, {
		"num": "1015021600000194",
		"time": "1424070141000",
		"orderprice": "50.0",
		"status": "5",
		"supplier": "联营供应商",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTt-GKAPfq6AAH5FywYeus538.jpg"
	}]
};
//48.全部订单

static_data.user.allorders = {
	"rescode": {
		"code": "0",
		"info": "查询全部订单成功"
	},
	"allpage": "1",
	"count": "4",
	"allcount": "5",
	"alllist": [{
		"num": "1015022800000124",
		"time": "1425122425000",
		"orderprice": "50.0",
		"status": "0",
		"supplier": "西客商城",
		"imageurl": "http://img11.xg.com/group1/M00/00/2E/rBABm1Tdt9GAJLVwAAHrVLPkmb8406.jpg"
	}, {
		"num": "1015022800000123",
		"time": "1425122141000",
		"orderprice": "98.0",
		"status": "2",
		"supplier": "西客商城",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTt-GKAPfq6AAH5FywYeus538.jpg"
	}, {
		"num": "1015022800000122",
		"time": "1425121922000",
		"orderprice": "98.0",
		"status": "4",
		"supplier": "2015新年第一测",
		"imageurl": "http://img11.xg.com/group1/M00/00/31/rBABm1TvDcGAGMxDAABSpwEJha8748.jpg"
	}, {
		"num": "1015021600000194",
		"time": "1424070141000",
		"orderprice": "50.0",
		"status": "5",
		"supplier": "联营供应商",
		"imageurl": "http://img11.xg.com/group1/M00/00/15/rBABm1TYDyeAV45JAAJbFDM5xS4769.jpg"
	}, {
		"num": "1015021600000194",
		"time": "1424070141000",
		"orderprice": "50.0",
		"status": "6",
		"supplier": "联营供应商",
		"imageurl": "http://img12.xg.com/group2/M00/00/45/rBABnFTt-GKAPfq6AAH5FywYeus538.jpg"
	}]

};

// 49. 删除或取消
static_data.user.deleteorder = {
	"rescode": {
		"code": "0",
		"info": "已删除"
	}
};

// 50. 确认收货
static_data.user.confirmshipment = {
	"rescode": {
		"code": "0",
		"info": "已完成收货"
	},
	ordernum: "12344"
};
//52. 用户-售后-申请
static_data.customer.apply = {
	"rescode": {
		"code": "0",
		"info": "成功"
	}
};
//53. 用户-售后-历史记录
static_data.customer.history = {
	"rescode": {
		"code": "0",
		"info": "成功"
	},
	"historylist": [{
		"num": "001",
		"applyTime": "1425525649353",
		"type": "0",
		"count": "2",
		"price": "20.00",
		"info": "这个商品…",
		"name": "一号妈妈",
		"telephone": "15001767623",
		"rejectreason": "因为…",
		"protime": "1425525649353",
		"images": [
			"http://......",
			"http://......",
			"http://......",
			"http://......",
			"http://......",
		]
	}, {
		"num": "001",
		"applyTime": "1425525649353",
		"type": "0",
		"count": "2",
		"price": "20.00",
		"info": "这个商品…",
		"name": "一号妈妈",
		"telephone": "15001767623",
		"rejectreason": "因为…",
		"protime": "1425525649353",
		"images": [
			"http://......",
			"http://......",
			"http://......",
			"http://......",
			"http://......",
		]
	}]
};
//54. 用户-售后-列表详情
static_data.customer.details = {
	"rescode": {
		"code": "0",
		"info": "成功"
	},
	"allpage": "20",
	"count": "2",
	"allcount": "40",
	"detailslist": [{
		"order": {
			"ordernum": "001",
			"time": "1425525649353",
			"productid": "02010100020102",
			"imageurl": "http://..."
		},
		"num": "001",
		"status": "3",
		"applyTime": "1425525649353",
		"type": "0",
		"count": "2",
		"price": "20.00",
		"info": "这个商品…",
		"name": "一号妈妈",
		"telephone": "15001767623",
		"rejectreason": "因为…",
		"protime": "1425525649353",
		"waybillnum": "100",
		"images": [
			"http://......",
			"http://......",
			"http://......",
			"http://......",
			"http://......",
		]
	}, {
		"order": {
			"ordernum": "001",
			"time": "1425525649353",
			"productid": "02010100020102",
			"imageurl": "http://..."
		},
		"num": "001",
		"status": "1",
		"applyTime": "1425525649353",
		"type": "0",
		"count": "2",
		"price": "20.00",
		"info": "这个商品…",
		"name": "一号妈妈",
		"telephone": "15001767623",
		"rejectreason": "因为…",
		"protime": "1425525649353",
		"waybillnum": "100",
		"images": [
			"http://......",
			"http://......",
			"http://......",
			"http://......",
			"http://......",
		]
	}, {
		"order": {
			"ordernum": "001",
			"time": "1425525649353",
			"productid": "02010100020102",
			"imageurl": "http://..."
		},
		"num": "001",
		"status": "2",
		"applyTime": "1425525649353",
		"type": "0",
		"count": "2",
		"price": "20.00",
		"info": "这个商品…",
		"name": "一号妈妈",
		"telephone": "15001767623",
		"rejectreason": "因为…",
		"protime": "1425525649353",
		"waybillnum": "100",
		"images": [
			"http://......",
			"http://......",
			"http://......",
			"http://......",
			"http://......",
		]
	}]
};
//55. 用户-售后-获取物流公司列表
static_data.customer.getlogcompany = {
	"rescode": {
		"code": "0",
		"info": "成功"
	},
	"companylist": [{
		"company": "顺风速运",
		"code": "shunfeng"
	}, {
		"company": "申通快递",
		"code": "shentong"
	}]
};
//56. 用户-售后-物流
static_data.customer.logistics = {
	"rescode": {
		"code": "0",
		"info": "成功"
	},
	"company": "顺风",
	"waybillnum": "10234568799",
	"loglist": [{
		"title": "深圳正发往上海",
		"time": "2014-12-21  04:53:20"
	}, {
		"title": "深圳正发往【顺风仓库】",
		"time": "2014-12-21  04:53:20"
	}]

};
//57. 用户-售后-提交物流号
static_data.customer.postnum = {
	"rescode": {
		"code": "0",
		"info": "成功"
	}
};
//58. 用户-实名认证-修改
static_data.user.authentication = {
	"rescode": {
		"code": "0",
		"info": "保存成功"
	}
};
//59. 用户-实名认证-查询
static_data.user.auth_query = {
	"rescode": {
		"code": "0",
		"info": "成功"
	},
	name: "小李",
	num: "421312198512052325"
};

//61. 优惠券(已有)-个人中心
static_data.user.haved1 = {
	"rescode": {
		"code": "0",
		"info": "success"
	},
	allpage: "1",
	count: "4",
	allcount: "4",
	couponlist: [{
		"num": "001",
		"title": "30元优惠券",
		"info": "30元优惠券",
		"price": "30",
		"type": "0",
		"starttime": "1426995718619",
		"endtime": "1426995718619",
        "useplantform": "2",
        "hitaosign": "0"
	}, {
		"num": "002",
		"title": "10元优惠券",
		"info": "10元优惠券",
		"price": "10",
		"type": "1",
		"starttime": "100000",
		"endtime": "100000",
        "useplantform": "2",
        "hitaosign": "0"
	}, {
		"num": "003",
		"title": "20元优惠券",
		"info": "20元优惠券",
		"price": "20",
		"type": "1",
		"starttime": "100000",
		"endtime": "100000",
        "useplantform": "2",
        "hitaosign": "0"
	}, {
		"num": "004",
		"title": "50元优惠券",
		"info": "50元优惠券",
		"price": "50",
		"type": "2",
		"starttime": "100000",
		"endtime": "100000",
        "useplantform": "2",
        "hitaosign": "0"
	}, {
		"num": "005",
		"title": "80元优惠券",
		"info": "80元优惠券",
		"price": "80",
		"type": "0",
		"starttime": "1426995718619",
		"endtime": "1426995718619",
        "useplantform": "2",
        "hitaosign": "0"
	}, {
		"num": "006",
		"title": "90元优惠券",
		"info": "90元优惠券",
		"price": "90",
		"type": "0",
		"starttime": "1426995718619",
		"endtime": "1426995718619",
        "useplantform": "2",
        "hitaosign": "0"
	}]
};
//62. 红包-个人中心
static_data.user.redenvelope1 = {
	"rescode": {
		"code": "0",
		"info": "success"
	},
	allpage: "20",
	count: "4",
	allcount: "4",
	couponlist: [{
		"num": "001",
		"title": "30元红包",
		"info": "30元红包",
		"price": "30.0",
		"type": "0",
		"starttime": "1426995718619",
		"endtime": "1426995718619"
	}, {
		"num": "002",
		"title": "10元红包",
		"info": "10元红包",
		"price": "10.0",
		"type": "1",
		"starttime": "100000",
		"endtime": "100000"
	}, {
		"num": "003",
		"title": "20元红包",
		"info": "20元红包",
		"price": "20.0",
		"type": "1",
		"starttime": "100000",
		"endtime": "100000"
	}, {
		"num": "004",
		"title": "50元红包",
		"info": "50元红包",
		"price": "50.0",
		"type": "2",
		"starttime": "100000",
		"endtime": "100000"
	}, {
		"num": "005",
		"title": "70元红包",
		"info": "70元红包",
		"price": "70.0",
		"type": "0",
		"starttime": "1426995718619",
		"endtime": "1426995718619"
	}, {
		"num": "006",
		"title": "120元红包",
		"info": "120元红包",
		"price": "120.0",
		"type": "0",
		"starttime": "1426995718619",
		"endtime": "1426995718619"
	}]
};
//64. 用户-收货地址-列表
static_data.user.lists = {
	"rescode": {
		"code": "0",
		"info": "查看收货地址列表成功"
	},
	addresslist: [{
		"num": "259",
		"name": "王大炮",
		"telephone": "15800917996",
		"addresscode": {
			"provinceid": 258,
			"province": "陕西省",
			"cityid": 1816,
			"city": "西安市",
			"districtid": 1816,
			"district": "雁塔区",
			"streetid": 19560,
			"street": "小寨路街道"
		},
		"addressinfo": "中蓝海",
		"isdefault": "0"
	}, {
		"num": "2591",
		"name": "王大炮11111",
		"telephone": "15800917996",
		"addresscode": {
			"provinceid": 258,
			"province": "陕西省",
			"cityid": 1816,
			"city": "西安市",
			"districtid": 1816,
			"district": "雁塔区",
			"streetid": 19560,
			"street": "小寨路街道"
		},
		"addressinfo": "中蓝海",
		"isdefault": "1"
	}]
};
//65. 用户-收货地址-新增
static_data.user.newAdd = {
	"rescode": {
		"code": "0",
		"info": "新增收货地址成功"
	},
	"num": "259"
};
//65. 用户-收货地址-编辑
static_data.user.edit = {
	"rescode": {
		"code": "0",
		"info": "修改成功"
	},
	"num": "259"
};
//73.wap-签到活动
static_data.signed.query = {
	"rescode": {
		"code": "0",
		"info": "success"
	},
	"num": "123456"
};
//74.wap-签到活动-领取
static_data.signed.edit = {
	"rescode": {
		"code": "0", //“0”表示成功，”-1”表示失败，“-3”已领取
		"info": "success"
	},
	"num": "259"
};
//79. 用户-初始化-获取用户中心角标数量
static_data.user.initcount = {
	"rescode": {
		"code": "0",
		"info": "获取用户中心数量数据"
	},
	unpaycount: "4",
	unreceiptcount: "13",
	backsercount: "15",
	couponcount: "4",
	redpapercount: "4"
};


//80.退货地址信息
static_data.user.returnAddsessInfo = {
	"rescode": {
		"code": "0",
		"info": "获取用户中心数量数据"
	},
	address: "上海市杨浦区淞沪路628号602室",
	telephone: "13102002022"
}

//72. 首页-今日精选
static_data.featuredtoday.special = {
	"rescode": {
		"code": "0",
		"info": "success"
	},
	imageurl: "./resources/images/ad/rBABm1TYg_yAXZVKAA4uTDTxgyg705.jpg",
	speciallist: [{
		"specialid": "123456",
		"name": "童装",
		"starttime": "1425784536002",
		"endtime": "1426377600000",
		"imageurl": " ./resources/images/ad/rBABm1TYg_yAXZVKAA4uTDTxgyg705.jpg",
		"discount": "一折"
	}, {
		"specialid": "123456",
		"name": "童装",
		"starttime": "1425784536002",
		"endtime": "1426377600000",
		"imageurl": " ./resources/images/ad/rBABm1TYg_yAXZVKAA4uTDTxgyg705.jpg",
		"discount": "一折"
	}],
	"products": [{
		"starttime": "1423482744000",
		"endtime": "1424361600000",
		"imageurl": [
			"./resources/images/store/2.png"
		],
		"price": "12.01",
		"oldprice": "12.01",
		"postinfo": null,
		"unk": null,
		"sales": null,
		"name": "123",
		"detail": null,
		"specs": null,
		"count": null,
		"viewpoint": null,
		"reputation": null,
		"imagethreeurl": null,
		"supplier": null,
		"tuntype": null,
		"specialid": "1051",
		"classifyid": null,
		"brandid": null,
		"productid": "08010100070103",
		"skulist": null
	}]
};

//获取支付数据
static_data.account.submitwaporder = {
	"rescode": {
		"code": "0",
		"info": "success"
	}
};

//反馈信息
static_data.index.feedback = {
	"rescode": {
		"code": "0",
		"info": "success"
	}
};


//75. wap-抽奖活动
static_data.lottery.lottery = {
	"rescode": {
		"code": "0",
		"info": "success"
	},
	"imageurl": ["./resources/images/ad/rBABm1TYg_yAXZVKAA4uTDTxgyg705.jpg", "./resources/images/ad/rBABm1TYg_yAMdaDAA2kqs9GpwY625.jpg", "./resources/images/ad/rBABm1TYg_yABOuoAAk5FrilobE603.jpg", "./resources/images/ad/rBABm1TYg_2ARuUhAAwjiF-YGNw403.jpg", "./resources/images/ad/rBABnFTYjuCAPRX6AAv60xaRlu4074.jpg", "./resources/images/ad/rBABnFTYjuCAdNQ9AAiYkp3d3OY419.jpg"],
	"price": "10.60",
	"oldprice": "20.00",
	"num": "201",
	"name": "五羊护肤套装",
	"details": "孕妇化妆品天然补水保湿孕期美白淡斑淡化细纹，维持肌肤年轻光彩富含维生素C，改善肤色，提升肌肤吸收力，吸收性好，质地柔软而清透",
	"rule": "100%中奖"
};

//76. wap-抽奖活动-抽奖
static_data.lottery.lottery_get = {
	"rescode": {
		"code": "0",
		"info": "success"
	},
	"num": "8392632",
	"time": "1427032800000"
};



static_data.index.homebox = {
	"rescode": {
		"code": "0",
		"info": "success"
	},
	"imageurl": "./resources/images/ad/rBABm1TYg_yAXZVKAA4uTDTxgyg705.jpg",
	"name": "五羊护肤套装",
	"type": "0",
	"content": {
		"text": "http://www.baidu.com",
		"specialid": "",
		"productid": ""
	}
};

static_data.advertising.paysuccess = {
	"rescode": {
		"code": "0",
		"info": "success"
	},
	"urls": {
		"imageurl": "./resources/images/ad/rBABm1TYg_yAXZVKAA4uTDTxgyg705.jpg",
		"type": "0",
		"content": {
			"text": "http://www.baidu.com",
			"specialid": "",
			"productid": ""
		}
	}
};