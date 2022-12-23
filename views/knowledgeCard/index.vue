<template>


    <div style="text-align: center;">
        <div style="display: inline-block; margin-top: 30px;">
            <div style="font-size: 42px; margin-top: 16px;">知识卡片</div>
        </div>
        <br>

        <div style="display: inline-block; text-align: left; width: 70%;">选择学科：
            <a-select v-model:value="option" size="large">
                <a-select-option value="Option1">Option1</a-select-option>
                <a-select-option value="Option2">Option2</a-select-option>
            </a-select>
            <a-textarea style="width: 100%; margin-top: 10px;" :rows="12" placeholder="李白（701年－762年） ，字太白，号青莲居士，是唐代伟大的浪漫主义诗人，与杜甫并称为“李杜”，代表作有《望庐山瀑布》《梁甫吟》《静夜思》等多首" :maxlength="6" />

              
            <div style="text-align: right; width: 100%; margin-top: 10px;">
                <a-button type="primary" @click="showMsg"><span>提 交</span></a-button>
            </div>
            
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'
import { message } from 'ant-design-vue'
export default {
    name: "KnowledgeCard",

    setup() {
        return {
            option: ref('Option1'),
            value: ref("")
        }
    },

    methods: {
        showMsg() {
            
            message.info('接口未实现');
        }

    }

}
</script>
  
<style>

</style>