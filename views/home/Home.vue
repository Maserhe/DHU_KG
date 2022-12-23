<template>

    <div style="margin-top: -60px;">
        <div class="header-warp">
            <header><h1 style="margin-bottom: 0px; color: #fff;">dhuKG</h1><p>Knowledge Graph of K12 Education</p><span class="jcjutp">&nbsp;基础教育知识图谱&nbsp;</span></header>
        <a-input-search
            v-model:value="value"
            placeholder="输入关键字"
            enter-button
            style="width: 540px"
            size="large"
            @search="showMsg"
        />
    </div>
    </div>



</template>

<script>
import { message } from 'ant-design-vue';
export default {
    name: 'Home',

    data() {
        return {
            value: ""
        }
    },
    methods: {
        showMsg() {
            if (this.value != "") {
                message.info('接口未实现');
                this.value=""
            }
        }
        
    }


}
</script>

<style lang="less" scoped>
.header-warp {
    background: url(../../src/assets/background.jpg) no-repeat top;
    padding-top: 60px;
    text-align: center;
    background-position: 50%;
    min-height: 650px;
    width: 100%;
    background-size: 100%;
    background-size: cover;
    padding-bottom: 100px;
    margin-top: 60px;
    color: #fff;

    font-size: 30px;
    font-weight: 300;
    text-align: center;
    letter-spacing: 2px;
}

.jcjutp {
    background-color: hsla(0,0%,100%,0);
    color: #fff;
    font-weight: 700;
    font-size: 21px;
    letter-spacing: 2px;
}

</style>