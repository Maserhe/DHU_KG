<template>
    <div style="text-align: center;">
        <div style="display: inline-block; margin-top: 60px; margin-left: -30px;">
            <div style="float: left;">
                <img :src="require('@/assets/graph.png')" alt="logo" style="width:84px; height:84px;"/>
            </div>
            <div style="float: left; font-size: 42px; margin-top: 16px;">知识记忆类问题问答</div>

        </div>
            <br>
            <a-input-group compact>

                <a-select v-model:value="option" size="large">
                    <a-select-option value="Option1">Option1</a-select-option>
                    <a-select-option value="Option2">Option2</a-select-option>
                </a-select>
                <a-input-search
                    v-model:value="value"
                    placeholder="输入关键字"
                    enter-button
                    style="width: 540px"
                    size="large"
                    @search="showMsg"
                />
            </a-input-group>
    </div>
</template>
  
<script>
import { ref } from 'vue'
import { message } from 'ant-design-vue'
export default {
    name: "Qa",
    setup() {
        return {
            option: ref('Option1'),
            value: ref("")
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
  
