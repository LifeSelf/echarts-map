$(function () {

    // 1、基础服务模块
    var myBasic = echarts.init(document.getElementById('basicService'));
    basicOption = {
        title: {
            text: '基础服务(次数)',
            left: '5%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 20,
                fontWeight: 400
            },
        },
        grid: {
            left: '5%',
            right: '70%',
            bottom: "10%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['紧\n急\n救\n援', '预\n约\n挂\n号', '主\n动\n关\n爱'],
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false,
                splitLine: {
                    show: false
                },
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        series: [
            {
                name: '基础服务',
                type: 'bar',
                data: [9000, 3300, 2200],
                barWidth: '50%',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ['#dd32e8', '#56ddba', '#00e6fe'];
                            return colorList[params.dataIndex];
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideTop',
                        textStyle: {
                            color: "#fff"
                        }
                    }
                },
            }
        ]
    };
    myBasic.setOption(basicOption);

    // 2、增值服务模块
    var myAppreciation = echarts.init(document.getElementById('appreciation'));
    var dataAppreciation = [7800, 2380, 23456, 2905, 8000];
    appreciationOption = {
        title: {
            text: '增值服务',
            left: '5%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 20,
                fontWeight: 400
            },
        },
        grid: {
            left: '5%',
            right: '20%',
            bottom: "10%",
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color: ["#56ddba"],
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
                data: ['家政服务', '生活照料', '助餐服务', '康复护理', '医疗保健']
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
                name: '增值服务',
                type: 'bar',
                barWidth: 12,
                markPoint : {
                    symbol:'circle',
                    symbolSize:28,
                    data : [
                        {xAxis:'家政服务' , yAxis: dataAppreciation[0]},
                        {xAxis:'生活照料' , yAxis: dataAppreciation[1]},
                        {xAxis: '助餐服务', yAxis: dataAppreciation[2]},
                        {xAxis: '康复护理', yAxis: dataAppreciation[3]},
                        {xAxis: '医疗保健', yAxis: dataAppreciation[4]}

                    ]
                },
                data: dataAppreciation
            }
        ]

    }
    myAppreciation.setOption(appreciationOption);

    // 3、呼叫中心

    //    3.1 呼出模块
    var myCallOut = echarts.init(document.getElementById('call_l'));
    callOutOption = {
        title: {
            text: '呼出总数量(8569)',
            left: '5%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light",
                fontSize: 16,
                fontWeight: 400
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}({d}%)"
        },
        series: [
            {
                name: '呼出数量',
                type: 'pie',
                radius: ['40%', '60%'],
                color: ['#56ddba', '#00e6fe'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}({c})',
                        textStyle: {
                            fontSize: 14
                        },
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
                data: [
                    {value: 6569, name: '临时呼出'},
                    {value: 2000, name: '日常慰问'}
                ]
            }
        ]
    };
    myCallOut.setOption(callOutOption);

    // 3.2 呼入总数量
    var myCallIn = echarts.init(document.getElementById('call_r'));
    callInOption = {
        color: ['#00e6fe', "#baf215"],
        title: {
            text: '呼入总数量(2098)',
            left: '5%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light",
                fontSize: 16,
                fontWeight: 400
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '呼入数量',
                type: 'pie',
                radius: '60%',
                data: [
                    {value: 1598, name: '业务咨询'},
                    {value: 500, name: '其他'}
                    ],
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}({c})',
                        textStyle: {
                            fontSize: 14
                        },
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
            }
        ]
    };
    myCallIn.setOption(callInOption);

    // 3.3 案件总数量模块
    var myCase = echarts.init(document.getElementById('case_l'));
    caseOption={
        title: {
            text: '案件总数量(1898)',
            left: '5%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light",
                fontSize: 16,
                fontWeight: 400
            },
        },

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}({d}%)"
        },
        series: [
            {
                name: '呼出数量',
                type: 'pie',
                radius: ['30%', '40%'],
                color: ['#00e6fe', '#2d3741'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}({c})',
                        textStyle: {
                            fontSize: 14
                        },
                    },

                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 18,
                        length2: 12,
                        lineStyle: {
                            width: 2
                        }
                    }
                },
                data: [
                    {value: 1000, name: '非紧急案件'},
                    {value: 1000, name: ''},
                ]
            },
            {
                name: '呼出数量',
                type: 'pie',
                radius: ['45%', '55%'],
                color: ['#d932e4', '#2d3741'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}({c})',
                        textStyle: {
                            fontSize: 14
                        },
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
                data: [
                    {value: 1018, name: '紧急案件'},
                    {value: 300, name: ''},
                ]
            }


        ]
    };
    myCase.setOption(caseOption);

    //3.4 案件回访
    var myVisit = echarts.init(document.getElementById('case_r'));
    var propertyData=[8600,9600];
    var dataShadow=[];
    var xMax=Math.max.apply(null,propertyData) + 1000;
    for (var i = 0; i < propertyData.length; i++) {
        dataShadow.push(xMax);
    }
    visitOption={
        title: {
            text: '案件回访',
            left: '5%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 20,
                fontWeight: 400
            },
        },
        grid: {
            left: '5%',
            right: '10%',
            bottom: "10%",
            containLabel: true
        },
        color:['#00e6fe'],
        xAxis: {
            type: 'category',
            data: ['回访数量','非回访数量'],
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
            formatter:"会员人数： <br/>{b} : {c}"

        },
        grid: {
            left: '15%',
            right: '30%',
            bottom: "18%",
            top: '20%',
        },

        series : [
            {
                type:'bar',
                barGap: '-100%',
                // barCategoryGap:'40%',
                barCategoryGap:'80%',
                data: dataShadow,
                itemStyle:{
                    normal: {color: '#212c36'}
                },
            },
            {
                type: 'bar',
                name:'会员人数',
                barWidth: 14,
                itemStyle: {
                    normal: {
                        barBorderRadius: [7, 7, 7, 7],
                        color: "#00e6fe"
                    }
                },
                data: propertyData
            }
        ]
    }
    myVisit.setOption(visitOption);

    // 3.5 呼叫案件评价体系
    // 3.5.1 非常满意
    var myEt1 = echarts.init(document.getElementById('evaluate1'));
    var percent1=0.6;
    el1Option={
        title: {
            text: '非常满意',
            left: 'center',
            bottom:'40%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 16,
                fontWeight: 400
            },
        },
        color: ['#dd32e8', '#2d3741'],
        tooltip : {
            trigger: 'item',
            formatter: "{d}%",
            show:false,
            enterable:true
        },
        legend: {
            orient : 'vertical',
            x : 'center',
            y:"25%",
            data:[percent1*100+"%"],
            textStyle:{color:"#fff",fontSize:20},
            selectedMode:false,
            itemWidth:0
        },
        calculable : false,
        series : [
            {
                name:'比例',
                type:'pie',
                center : ['50%', '30%'],
                radius : ['50px', '60px'],
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
                data:[
                    {value:percent1, name:percent1*100+"%"},
                    {value:(1-percent1), name:''}
                ]
            }
        ]


    }
    myEt1.setOption(el1Option);
    // 3.5.2 满意
    var myEt2 = echarts.init(document.getElementById('evaluate2'));
    var percent2=0.3;
    el2Option={
        title: {
            text: '满意',
            left: 'center',
            bottom:'40%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 16,
                fontWeight: 400
            },
        },
        color: ['#12d7e4', '#2d3741'],
        tooltip : {
            trigger: 'item',
            formatter: "{d}%",
            show:false,
            enterable:true
        },
        legend: {
            orient : 'vertical',
            x : 'center',
            y:"25%",
            data:[percent2*100+"%"],
            textStyle:{color:"#fff",fontSize:20},
            selectedMode:false,
            itemWidth:0
        },
        calculable : false,
        series : [
            {
                name:'比例',
                type:'pie',
                center : ['50%', '30%'],
                radius : ['50px', '60px'],
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
                data:[
                    {value:percent2, name:percent2*100+"%"},
                    {value:(1-percent2), name:''}
                ]
            }
        ]


    }
    myEt2.setOption(el2Option);

    // 3.5.3 一般
    var myEt3 = echarts.init(document.getElementById('evaluate3'));
    var percent3=0.08;
    el3Option={
        title: {
            text: '一般',
            left: 'center',
            bottom:'40%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 16,
                fontWeight: 400
            },
        },
        color: ['#56ddba', '#2d3741'],
        tooltip : {
            trigger: 'item',
            formatter: "{d}%",
            show:false,
            enterable:true
        },
        legend: {
            orient : 'vertical',
            x : 'center',
            y:"25%",
            data:[percent3*100+"%"],
            textStyle:{color:"#fff",fontSize:20},
            selectedMode:false,
            itemWidth:0
        },
        calculable : false,
        series : [
            {
                name:'比例',
                type:'pie',
                center : ['50%', '30%'],
                radius : ['50px', '60px'],
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
                data:[
                    {value:percent3, name:percent3*100+"%"},
                    {value:(1-percent3), name:''}
                ]
            }
        ]


    }
    myEt3.setOption(el3Option);

    // 3.5.4 不满意
    var myEt4 = echarts.init(document.getElementById('evaluate4'));
    var percent4=0.01;
    el4Option={
        title: {
            text: '不满意',
            left: 'center',
            bottom:'40%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 16,
                fontWeight: 400
            },
        },
        color: ['#baf215', '#2d3741'],
        tooltip : {
            trigger: 'item',
            formatter: "{d}%",
            show:false,
            enterable:true
        },
        legend: {
            orient : 'vertical',
            x : 'center',
            y:"25%",
            data:[percent4*100+"%"],
            textStyle:{color:"#fff",fontSize:20},
            selectedMode:false,
            itemWidth:0
        },
        calculable : false,
        series : [
            {
                name:'比例',
                type:'pie',
                center : ['50%', '30%'],
                radius : ['50px', '60px'],
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
                data:[
                    {value:percent4, name:percent4*100+"%"},
                    {value:(1-percent4), name:''}
                ]
            }
        ]


    }
    myEt4.setOption(el4Option);

    // 3.5.5 非常不满意
    var myEt5 = echarts.init(document.getElementById('evaluate5'));
    var percent5=0.01;
    el5Option={
        title: {
            text: '非常不满意',
            left: 'center',
            bottom:'40%',
            textStyle: {
                color: '#fff',
                fontFamily: "SourceHanSansCN Light ",
                fontSize: 16,
                fontWeight: 400
            },
        },
        color: ['#1693e8', '#2d3741'],
        tooltip : {
            trigger: 'item',
            formatter: "{d}%",
            show:false,
            enterable:true
        },
        legend: {
            orient : 'vertical',
            x : 'center',
            y:"25%",
            data:[percent5*100+"%"],
            textStyle:{color:"#fff",fontSize:20},
            selectedMode:false,
            itemWidth:0
        },
        calculable : false,
        series : [
            {
                name:'比例',
                type:'pie',
                center : ['50%', '30%'],
                radius : ['50px', '60px'],
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
                data:[
                    {value:percent5, name:percent5*100+"%"},
                    {value:(1-percent5), name:''}
                ]
            }
        ]


    }
    myEt5.setOption(el5Option);









    //    响应式
    window.addEventListener("resize", function () {
        myBasic.resize();
        myAppreciation.resize();
        myCallOut.resize();
        myCallIn.resize();
        myCase.resize();
        myVisit.resize();
        myEt1.resize();
        myEt2.resize();
    })

})