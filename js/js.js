
$(function(){
//    1、会员总人数
    var myAge=echarts.init(document.getElementById('ageGroup'));
    ageOption = {
        title : {
            text: '会员总人数（个）',
            subtext: '480000',
            textStyle:{
                color:'#fff',
                fontFamily:"SourceHanSansCN Light ",
                fontSize:20,
                fontWeight:400
            },
            subtextStyle:{
                color:'#fff',
                fontFamily:"SourceHanSansCN Normal",
                fontSize:26,
            },
            left:'5%',
            top:'4%'
        },
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: '5%',
            right: '10%',
            bottom: "18%",
            top: '20%',
            containLabel: true
        },
        legend: {
            data:['男','女'],
            bottom: '5%',
            left: "40%",
            textStyle:{
                color: 'rgba(255,255,255,.5)'
            }
        },
        xAxis : [
            {
                type : 'category',
                name:'年龄段',
                data : ['60岁','70岁','80岁','90岁','100岁','110岁'],
                nameTextStyle:{
                    color: 'rgba(255,255,255,.5)',
                    fontSize:14
                },
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
                        color: "#323c48",
                    }
                },
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
        series : [
            {
                name:'男',
                type:'line',
                smooth:true,
                symbol:'circle',
                symbolSize:10,
                data:[ 2900, 3700, 6800, 5800, 1500, 12],
                lineStyle:{
                    normal:{
                        color:'#56ddba',
                        width:6,
                    }
                },
               itemStyle:{
                   normal:{
                       color:'#56ddba',
                       borderColor:"rgba(86,221,168,.6)",
                       borderWidth:6,
                   }
               }
            },
            {
                name:'女',
                type:'line',
                smooth:true,
                symbol:'circle',
                symbolSize:10,
                data:[2200, 3900, 7800, 5800, 1600, 0],
                lineStyle:{
                    normal:{
                        color:'#dd32e8',
                        width:5,
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#dd32e8',
                        borderColor:"rgba(221,50,232,.6)",
                        borderWidth:5,
                    }
                }


            }
        ]
    };
    myAge.setOption(ageOption);

    // 2、性质分类
    var myProperty=echarts.init(document.getElementById('property'));
    var propertyData=[8600,9600,5800,4230,9600,1500];
    var dataShadow=[];
    var xMax=Math.max.apply(null,propertyData) + 1000;
    for (var i = 0; i < propertyData.length; i++) {
        dataShadow.push(xMax);
    }
    propertyOption={
        title: {
            text: '性质分类',
            left:'5%',
            top:'4%',
            textStyle: {
                color:'#fff',
                fontFamily:"SourceHanSansCN Light ",
                fontSize:20,
                fontWeight:400
            }
        },
        color: ['#00e6fe'],
        yAxis: {
            type: 'category',
            data: ["纯老户", "劳动模范", "离退休干部", "优抚对象", "持证残疾人","低保家庭"],
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
        xAxis: {
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
            formatter:"会员人数： <br/>{b} : {c}"
        },
        grid: {
            left: '12%',
            right: '15%',
            bottom: "18%",
            top: '20%',
        },
        series : [
            {
                type:'bar',
                barGap: '-100%',
                barCategoryGap:'40%',
                data: dataShadow,
                itemStyle:{
                    normal: {color: '#2d3741'}
                },
            },
            {
                type: 'bar',
//                设置柱状的宽
//                 barWidth: '60%',
                name:'会员人数',
                label: {
                    normal: {
                        show: true,
                       position:'insideRight',

                        textStyle: {
                            color: "#fff"
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: [5, 5, 5, 5],
                        color: "#00e6fe"
                    }
                },
                data: propertyData
            }
        ]
    };
    myProperty.setOption(propertyOption);

    //3、网点总数
    var myNetwork=echarts.init(document.getElementById('network'));
    var data = [
        {name: '广东省', value: 40},
        {name: '湖南省', value: 6},
        {name: '广西省', value: 15},
        {name: '江西省', value: 14},
        {name: '安徽省', value: 10},
    ];
    var geoCoordMap={
    '长沙':[113,28.21],
    '深圳':[114.07,22.62],
    '南宁':[108.33,22.84],
    '南昌':[115.89,28.68],
    '合肥':[117.27,31.86],
}
    function convertData(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    var data = [
        {name: '广东省', value: 40,points:{'广东养老服务社':102123154,'深圳养老服务社':124789456}},
        {name: '湖南省', value: 6,points:{'广东养老服务社':102123154,'深圳养老服务社':124789456}},
        {name: '广西省', value: 15,points:{'广东养老服务社':102123154,'深圳养老服务社':124789456}},
        {name: '江西省', value: 14,points:{'广东养老服务社':102123154,'深圳养老服务社':124789456}},
        {name: '安徽省', value: 10,points:{'广东养老服务社':102123154,'深圳养老服务社':124789456}},
    ];
    var geoCoordMap={
        '湖南省':[113,28.21],
        '广东省':[114.07,22.62],
        '广西省':[108.33,22.84],
        '江西省':[115.89,28.68],
        '安徽省':[117.27,31.86],
    }
    function convertData(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    points:data[i].points
                });
            }
        }
        return res;
    };
    workOption1 = {
        title: {
            text: '网点总数',
            left:'5%',
            top:'4%',
            textStyle: {
                color:'#fff',
                fontFamily:"SourceHanSansCN Light ",
                fontSize:20,
                fontWeight:400
            }
        },
        geo: {
            map: 'china',
            roam: true,
            left:'3%',
            top:"5%",
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#1c262f',
                        fontSize:16,
                    }
                },
                emphasis:{
                    show:true,
                    textStyle:{
                        color:"#1c262f",
                        fontSize:16,
                    }
                }
            },
            itemStyle: {
                normal:{
                    color:'#2d4455',
                    borderColor: '#1c262f'
                },
                emphasis:{
                    color:"#2d4455"
                }

            }
        },
        series : [
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize:[20,25] ,
                symbol:'image://img/2.png',
                label: {
                    normal: {
                        // 此处需要修改
                        formatter: function (params) {
                            console.log(params);
                            var str=params.name+':'+'\n';
                            var p=params.data.points;
                            for(var k in p){
                                str+=(k+'---'+p[k]+'\n');
                            };
                            return str
                        },
                        position: 'right',
                        show: false,
                        textStyle:{
                           color:"#fff",
                            fontSize:14
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
            },

        ]
    };
    myNetwork.setOption(workOption1);




    //    响应式
    window.addEventListener("resize",function(){
        myAge.resize();
        myProperty.resize();
        myNetwork.resize();

    })

})