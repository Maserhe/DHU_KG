<template>
    <div style="text-align: center;">
        <div style="display: inline-block; margin-top: 60px; margin-left: -30px;">
            <div style="float: left;">
                <img :src="require('@/assets/graph.png')" alt="logo" style="width:84px; height:84px;"/>
            </div>
            <div style="float: left; font-size: 42px; margin-top: 16px;">基础教育知识图谱</div>
        </div>
            <br>   
            <a-input-search
                v-model:value="searchContent"
                placeholder="输入关键字"
                enter-button
                style="width: 540px"
                size="large"
                @search="clickSearch"
            />
    </div>
    <div style="height: 800px; background-color: #0b2838;">
        <svg  v-show="type === 1" class="keywords" @mousemove="listener($event)">
            <a href="javascript:void(0)" v-for="(tag,index) in tags" :key="index" @click="nodeClick(tag)">
            <text
                class="text"
                :x="tag.x"
                :y="tag.y"
                :font-size="20 * (600/(600-tag.z))"
                :fill-opacity="((400+tag.z)/600)"
                :fill="tag.color"
                >{{tag.text}}
            </text>
            </a>
        </svg>
        <Charts ref="charts" v-show="type === 2" :chartList="searchList" />
    </div>
</template>
 
<script>
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import { onMounted } from 'vue'
import { search, searchText } from '../../api/data'

import Charts from "../../src/components/Charts.vue"

export default {
    name: "Graph",
    components: {
        Charts,
    },
    setup() {
        return {
            option: ref('Option1'),
            searchContent: ref(""),
            type: 1,
        }
    }, 
    mounted(){
        this.resizeWindow()
        window.addEventListener('resize',this.resizeWindow)
        this.initTags()
        //使球开始旋转
        const interval = setInterval(() => {
            this.rotateX(this.speedX);
            this.rotateY(this.speedY);
        }, 17);
        
        onMounted(() => {
            interval&&clearInterval(interval)
            window.removeEventListener('resize',this.resizeWindow)
        })            
    },
    
    data(){
        return {
            tags:[],
            RADIUS:200,
            ZRADIUS:200,
            CX:1000,
            CY:460,
            speedX: Math.PI / 360,
            speedY: Math.PI / 360,
            searchList: []
        };
    },

    methods: {

        async clickSearch(text) {
			text || (text = this.searchContent);
            if(!text){
                this.type = 1
                return
            }
            try {
                let json = await searchText(text);
                if (json.data.code != 200) {
                    message.info('未查询到数据,请更改查询条件')
                    this.searchContent = ""
                    return 
                }
                this.searchList = [json.data.data]
                // let result = await search(text);
                this.type = 2

                // console.log(result, " === +++  ")
                // this.searchList = [].concat(result)
                
                // console.log(this.searchList, " ==== ")
                //console.log(JSON.stringify(result), " === ")
            } catch (error) {
                //alert('未查询到数据,请更改查询条件')
                message.info('未查询到数据,请更改查询条件')
            }
        },
        /**
         * 初始化标签数据
         */
        initTags(){
            const tagNames = ["人工智能","知识图谱","Linux系统","编译原理","东华大学", "文件管理", "应用开发","人工智能","知识图谱","Linux系统","编译原理","东华大学", "文件管理", "应用开发","人工智能","知识图谱","Linux系统","编译原理","东华大学", "文件管理", "应用开发"]
            //初始化标签位置
            let tags = [];
            const length = tagNames.length
            for (let i = 0; i < length; i++) {
                let tag = {};
                let k = -1 + (2 * (i + 1) - 1) / length;
                let a = Math.acos(k);
                let b = a * Math.sqrt(length * Math.PI);
                tag.text = tagNames[i];
                tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b);
                tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b);
                tag.z = this.ZRADIUS * Math.cos(a);
                tag.color =
                    "rgb(" +
                    parseInt(Math.random() * 255) +
                    "," +
                    parseInt(Math.random() * 255) +
                    "," +
                    parseInt(Math.random() * 255) +
                    ")";
                tags.push(tag);
            }
            this.tags = [].concat(tags);
        },

        /**
         * 标签点击
         */
        nodeClick(tag){
            console.log(tag);
        },

        /**
         * 自动滚动效果,计算滚动位置
         */
        rotateX(speedX) {
            var cos = Math.cos(speedX);
            var sin = Math.sin(speedX);
            for (let tag of this.tags) {
                var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY;
                var z1 = tag.z * cos + (tag.y - this.CY) * sin;
                tag.y = y1;
                tag.z = z1;
            }
        },
        /**
         * 自动滚动效果,计算滚动位置
         */
        rotateY(speedY) {
            var cos = Math.cos(speedY);
            var sin = Math.sin(speedY);
            for (let tag of this.tags) {
                var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
                var z1 = tag.z * cos + (tag.x - this.CX) * sin;
                tag.x = x1;
                tag.z = z1;
            }
        },
        /**
         * 响应鼠标移动
         */
        listener(event) {
            var x = event.clientX - this.CX;
            var y = event.clientY - this.CY;
            this.speedX =
                x * 0.0001 > 0
                ? Math.min(this.RADIUS * 0.00002, x * 0.0001)
                : Math.max(-this.RADIUS * 0.00002, x * 0.0001);
            this.speedY =
                y * 0.0001 > 0
                ? Math.min(this.RADIUS * 0.00002, y * 0.0001)
                : Math.max(-this.RADIUS * 0.00002, y * 0.0001);
        },
        /**
         * 监听窗体大小变化
         */
        resizeWindow(){
            let height = document.body.clientHeight
            let width = document.body.clientWidth
            
            // width = width*0.85;
            // if(width>800){
            //     this.CX = width/2
            // } 260 + 400
            this.CX = width/2
            // height = height - 800
            this.CY = 460
            let radius = Math.min(this.CY,this.CX)/2
            if(radius>200){
                this.RADIUS = radius
            }
            this.initTags()
            this.$emit('windowResize')
        }
    }
}
</script>

<style>
.container,.keywords{
    width: 100%;
    height:100%;
}
.keywords .text:hover{
    font-size: 200%;
}
</style>