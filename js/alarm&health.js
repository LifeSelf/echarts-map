$(function(){

    // 1、安全报警
    var mySecurity = echarts.init(document.getElementById('security'));
    var securityData=[8600,9600,5800,4230,1500];
    var dataShadow=[];
    var xMax=Math.max.apply(null,securityData) + 1000;
    for (var i = 0; i < securityData.length; i++) {
        dataShadow.push(xMax);
    }
    securityOption={
        title: {
            text: '安全报警(1898)',
            left:'7%',
            top:'3%',
            textStyle: {
                color:'#fff',
                fontFamily:"SourceHanSansCN Light ",
                fontSize:18,
                fontWeight:400
            }
        },

        color: ['#1693e8'],

        xAxis: {
            type: 'category',
            data: ['S\nO\nS','烟\n感','气\n感','红\n外\n线\n感\n应','门\n磁'],
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize:14
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize:14
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#1d1e22"
                }
            }
        },

        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:"安全报警： <br/>{b} : {c}"
        },
        grid: {
            left: '18%',
            right: '30%',
            bottom: "25%",
            top: '15%',
        },

        series : [
            {
                type:'bar',
                barGap: '-100%',
                barCategoryGap:'50%',
                data: dataShadow,
                itemStyle:{
                    normal: {color: '#2d3741'}
                },
            },
            {
                type: 'bar',
//                设置柱状的宽
                barWidth: '60%',
                name:'安全报警人数',
                itemStyle: {
                    normal: {
                        barBorderRadius: [10, 10, 10, 10],
                        color: "#1693e8"
                    }
                },
                data: securityData
            }
        ]
    }
    mySecurity.setOption(securityOption);

    // 2、健康预警
    var myWarning = echarts.init(document.getElementById('warning'));
    var dataWarning = [7800, 2380];
    warningOption = {
        title: {
            text: '健康预警(1189)',
            left: '7%',
            top:'3%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 18,
                fontWeight: 400
            },
        },
        grid: {
            left: '18%',
            right: '18%',
            bottom: "25%",
            top: '15%',
        },
        tooltip: {
//            坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
            trigger: 'axis',
//            坐标轴指示器配置项
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:"健康预警： <br/>{b} : {c}"
        },
        color: ["#00e6fc"],
        xAxis: [
            {
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize:14
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#2e2c36",
                    }
                },
                type: 'category',
                data: ['健康数据','吃药提醒']
            }
        ],
        yAxis: [
            {
                axisLabel: {
                    show: true,
                    margin: 2,
                    textStyle: {
                        color: '#fff',
                        fontSize:14
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "#323c48"
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#323c48",
                    }
                },
                type: 'value'
            }
        ],
        series: [
            {
                type: 'bar',
                barWidth: 30,
                data: dataWarning
            }
        ]
    }
    myWarning.setOption(warningOption);

    // 3、案件总数量
    var myCaseTotal = echarts.init(document.getElementById('caseTotal'));
    var dataCaseTotal = [7800, 2380];
    caseTotalOption={
        title: {
            text: '案件总数量(1898)',
            left: '7%',
            top:'3%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 18,
                fontWeight: 400
            },
        },
        grid: {
            left: '18%',
            right: '18%',
            bottom: "25%",
            top: '15%',
        },
        tooltip: {
//            坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
            trigger: 'axis',
//            坐标轴指示器配置项
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:"案件总数量： <br/>{b} : {c}"
        },
        color: ["#56ddba"],
        yAxis: [
            {
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize:14
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#2e2c36",
                    }
                },
                type: 'category',
                data: ['非紧急案件','紧急案件']
            }
        ],
        xAxis: [
            {
                axisLabel: {
                    show: true,
                    margin: 2,
                    textStyle: {
                        color: '#fff',
                        fontSize:14
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "#323c48"
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#323c48",
                    }
                },
                type: 'value'
            }
        ],
        series: [
            {
                type: 'bar',
                barWidth: 30,
                data: dataCaseTotal
            }
        ]
    }
    myCaseTotal.setOption(caseTotalOption);

    //  4、案件回访
    var myCallback = echarts.init(document.getElementById('callback1'));
    var cb=0.7,ncb=0.3;
    callbackOption={
        title: {
            text: '案件回访(1890)',
            left: '7%',
            top:'3%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 18,
                fontWeight: 400
            },
        },
        calculable : false,
        legend: {
            orient: 'vertical',
            data:['回访','未回访'],
            textStyle: {
                color: "#fff",
            },
            right: '5%',
            top: "20%",
        },
        series : [
            {
                name:'比例',
                type:'pie',
                center : ['50%', '50%'],
                radius : ['30%', '40%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                color: ['#baf215','#1c262f'],
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        formatter: '未回访:567'
                    },

                },
                data:[
                    {value:ncb, name:'未回访'},
                    {value:(1-ncb), name:''}
                ]
            },
            {
                name:'比例',
                type:'pie',
                color: ['#12d7e4','#1c262f'],
                center : ['50%', '50%'],
                radius : ['50%', '60%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '回访:1323',
                        textStyle:{
                            fontSize:14
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 10,
                        length2: 12,
                        lineStyle: {
                            width: 2
                        }
                    }
                },
                data:[
                    {value:cb, name:'回访'},
                    {value:(1-cb), name:''}
                ]
            },
        ]
    }
    myCallback.setOption(callbackOption);

    // 5、接警案件评价体系
    var myAppraise = echarts.init(document.getElementById('l_b'));
   var dataAppraise=[90,8,1,1,0];
    appraiseOption= {
        title: {
            text: '接警案件评价体系',
            left: '5%',
            top:'3%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 18,
                fontWeight: 400
            },
        },
        grid: {
            left: '13%',
            right: '26%',
            bottom: "29%",
            top: '20%',
        },
        tooltip : {
            trigger: 'axis'
        },
        xAxis : [
            {
                type : 'category',
                data : ['非常满意','满意','一般','不满意','很不满意'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize:14
                    },
                    margin:15
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#323c48",
                    }
                },
            }
        ],
        yAxis: [
        {
            type : 'value',
            name:'百分比',
            data:[0,20,40,60,80,100],
            nameTextStyle:{
                color: 'rgba(255,255,255,.5)',
                fontSize:14
            },
            nameGap:10,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize:14
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#323c48"
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#323c48",
                }
            },
        }
    ],
        series: [{
            data: dataAppraise,
            type: 'scatter',
            symbolSize: 23,
            tooltip: {
//            坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
                trigger: 'item',
//            坐标轴指示器配置项
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter:"{b} : {c}%"
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data+'%';
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color:"#baf215"
                }
            }
        }]
    };
    myAppraise.setOption(appraiseOption);

    // 6、健康预警
    var myhWarning = echarts.init(document.getElementById('h_warning'));
    hWarningOption={
        title : {
            text: '健康预警',
            subtext: '检查人数(8000)',
            textStyle:{
                color:'#fff',
                fontFamily:"SourceHanSansCN Light ",
                fontSize:18,
                fontWeight:400
            },
            subtextStyle:{
                color:'#fff',
                fontFamily:"SourceHanSansCN Normal",
                fontSize:15,
            },
            left:'7%',
            top:'8%',
        },
        color: ['#00e6fe','#56ddba'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '人数',
                type: 'pie',
                radius: ['15%', '40%'],
                itemStyle:{
                    normal: {
                        borderWidth: 2,
                        borderColor: '#1c262f',
                    },
                },
                data: [
                    {value: 2000, name: '健康预警人数'},
                    {value: 6000, name: '健康人数'}
                ],
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}({c})',
                        fontSize:14
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 16,
                        length2: 12,
                        lineStyle: {
                            width: 2
                        }
                    }
                },
            }
        ]
    }
    myhWarning.setOption(hWarningOption);

    // 7、医院转介
    var myhReferral = echarts.init(document.getElementById('referral'));
    referralOption={
        title: {
            text: '医院转介',
            left:'7%',
            top:'8%',
            textStyle: {
                color:'#fff',
                fontFamily:"SourceHanSansCN Light ",
                fontSize:18,
                fontWeight:400
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['#baf215','#1693e8','#56ddba'],
        series:[
            {
                name:'医院转介',
                type:'pie',
                selectedMode: 'single',
                radius: ['15%', '40%'],
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}({c})',
                        fontSize:14
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 16,
                        length2: 12,
                        lineStyle: {
                            width: 2
                        }
                    }
                },
                data:[
                    {value:335, name:'呼入转介'},
                    {value:679, name:'安全预警转介'},
                    {value:1548, name:'预警转介'}
                ],
                roseType:'rasius',
            },
        ]
    }
    myhReferral.setOption(referralOption);

    // 8、健康管理
    var myManage = echarts.init(document.getElementById('h_manage'));
    var dataTime = {
        "小于50": [220, 182, 191, 234, 290],
        "60-70":[320, 882, 591, 834, 390],
        "70-80": [320, 282, 991, 934, 190],
        "80-90": [220, 182, 891, 1034, 290],
        "90-100":[320, 182, 691, 1688, 120],
        "大于100":[20, 82, 91, 700, 10],
    };




    function manage(dataTime){
        manageOption = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000,
                    bottom:'8%',
                    data: ['小于50岁', '60-70岁', '70-80岁', "80-90岁",'90-100岁','大于100岁'],
                    lineStyle: {
                        // 设置时间轴的颜色；
                        color: "#1d1e22"
                    },
                    // 设置轴的文本
                    label: {
                        normal: {
                            textStyle: {
                                color: "#fff",
                                fontSize:14
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#1d1e22',
                            fontSize:14
                        }
                    },
                    // 被选择点的颜色
                    checkpointStyle: {
                        color: '#dd32e8',
                        borderColor: '#dd32e8',
                    },

                    //    控制按钮的样式
                    controlStyle: {
                        normal: {
                            color: "#fff"
                        },
                        emphasis: {
                            color: "#dd32e8'"
                        }
                    },
                },
                // tooltip : {
                //     trigger: 'axis',
                //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                //         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                //     },
                //     formatter:"会员人数： <br/>{b} : {c}"
                // },
                tooltip:{},


                calculable: true,
                grid: {
                    left: '18%',
                    right: '30%',
                    bottom: "25%",
                    top: '15%',
                },
                xAxis: {
                    type: 'category',
                    data: ["糖药病", "冠心病", "高血压", "老年痴呆", "慢性支气管炎"],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize:14
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#2e2c36",
                        }
                    },

                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize:14
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#1d1e22"
                        }
                    }
                },
            },
            options: [
                {
                    title: {
                        text: '小于50岁会员各疾病数据',
                        left:'7%',
                        top:'3%',
                        textStyle: {
                            color: "#fff",
                            fontFamily:"SourceHanSansCN Light ",
                            fontSize:18,
                            fontWeight: 400
                        }
                    },
                    series: [
                        {
                            name:'会员人数',
                            type: 'bar',
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [15,15,0,0],
                                    color: "#dd32e8"
                                }
                            },
                            data: dataTime["小于50"]
                        }
                    ]
                },
                {
                    title: {
                        text: '60-70年龄段会员各疾病数据',
                        left:'7%',
                        top:'3%',
                        textStyle: {
                            color: "#fff",
                            fontFamily:"SourceHanSansCN Light ",
                            fontSize:18,
                            fontWeight: 400
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [15,15,0,0],
                                    color: "#dd32e8"
                                }
                            },
                            data: dataTime["60-70"]
                        }
                    ]
                },
                {
                    title: {
                        text: '70-80年龄段会员各疾病数据',
                        left:'7%',
                        top:'3%',
                        textStyle: {
                            color: "#fff",
                            fontFamily:"SourceHanSansCN Light ",
                            fontSize:18,
                            fontWeight: 400
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [15,15,0,0],
                                    color: "#dd32e8"
                                }
                            },
                            data: dataTime["70-80"]
                        }
                    ]
                },
                {
                    title: {
                        text: '80-90年龄段会员各疾病数据',
                        left:'7%',
                        top:'3%',
                        textStyle: {
                            color: "#fff",
                            fontFamily:"SourceHanSansCN Light ",
                            fontSize:18,
                            fontWeight: 400
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [15,15,0,0],
                                    color: "#dd32e8"
                                }
                            },
                            data: dataTime["80-90"]
                        }
                    ]
                },
                {
                    title: {
                        text: '90-100年龄段会员各疾病数据',
                        left:'7%',
                        top:'3%',
                        textStyle: {
                            color: "#fff",
                            fontFamily:"SourceHanSansCN Light ",
                            fontSize:18,
                            fontWeight: 400
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [15,15,0,0],
                                    color: "#dd32e8"
                                }
                            },
                            data: dataTime["90-100"]
                        }

                    ]
                },
                {
                    title: {
                        text: '大于100岁会员各疾病数据',
                        left:'7%',
                        top:'3%',
                        textStyle: {
                            color: "#fff",
                            fontFamily:"SourceHanSansCN Light ",
                            fontSize:18,
                            fontWeight: 400
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [20,20,0,0],
                                    color: "#dd32e8"
                                }
                            },
                            data: dataTime["大于100"]
                        }
                    ]
                },
            ]
        };
        myManage.setOption(manageOption);
    }
    manage(dataTime);

    //    响应式
    window.addEventListener("resize", function () {
        mySecurity.resize();
        myWarning.resize();
        myCaseTotal.resize();
        myAppraise.resize();
        myhWarning.resize();
        myhReferral.resize();
        myManage.resize();
        myCallback.resize();
    })
})
