<template>
   <div style="width: 120px; height: 31px; margin-left: 30px; float: left; font-size: 28px; font-weight: 700; line-height: 60px;"><a href="/">CSKG</a></div>
   <div style="line-height: 58px; position: absolute; right: 80px; cursor: pointer;">EN</div>
   <div style="line-height: 58px; position: absolute; right: 30px; cursor: pointer;">APIs</div>

   <a-menu v-model:selectedKeys="current" mode="horizontal" @click="clickMenu" :defaultSelectedKeys="[$route.path]">
    <a-menu-item key="home">首页</a-menu-item>
    <a-menu-item key="graph">知识图谱</a-menu-item>
    <a-menu-item key="qa">知识问答</a-menu-item>
    <a-menu-item key="knowledgeCard">知识卡片</a-menu-item>
    <a-menu-item key="team">团队</a-menu-item>
    <a-menu-item key="dashboard">数据统计</a-menu-item>
   </a-menu>
   
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Header',

    setup() {
        const current = ref(['home']);
        return {
            current,
        };
    },

    methods: {
        clickMenu( { key } ) {
            this.$router.push({
                path: key
            })
      }
    }
}
</script>

<style lang="less" scoped>

.ant-menu {
    line-height: 58px; 
    position: absolute; 
    right: 140px;
}

</style>
