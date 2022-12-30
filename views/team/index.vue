<template>

<div style="text-align: center; padding: 60px 0px;">
        <div style="font-size: 42px; margin-bottom: 16px;">团队成员</div>

        <div style="margin: 10px auto;max-width: 1200px;overflow: hidden;"> 
            <a-row justify="space-around">
        <a-col :span="8">
            <div class="teamCard"><img :src="require('@/assets/team/syq.jpeg')" alt="">
                    <div style="font-size: 18px; font-weight: 700; margin-top: 8px;">史有群</div><span>
                        <i aria-label="图标: mail" class="anticon anticon-mail" style="color: rgb(24, 144, 255); font-size: 18px;">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em" fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z">
                                </path>
                            </svg>
                        </i>&nbsp;yqshi@dhu.edu.cn</span>
            </div>
        </a-col>
        <a-col :span="8">
            <div class="teamCard"><img :src="require('@/assets/team/ycr.jpeg')" alt="">
                    <div style="font-size: 18px; font-weight: 700; margin-top: 8px;">燕彩蓉</div><span>
                        <i aria-label="图标: mail" class="anticon anticon-mail" style="color: rgb(24, 144, 255); font-size: 18px;">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em" fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z">
                                </path>
                            </svg>
                        </i>&nbsp;cryan@dhu.edu.cn</span>
            </div>
        </a-col>
        <a-col :span="8">
            <div class="teamCard"><img :src="require('@/assets/team/yeh.jpeg')" alt="">
                    <div style="font-size: 18px; font-weight: 700; margin-top: 8px;">杨二贺</div><span>
                        <i aria-label="图标: mail" class="anticon anticon-mail" style="color: rgb(24, 144, 255); font-size: 18px;">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em" fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z">
                                </path>
                            </svg>
                        </i>&nbsp;2222703@mail.dhu.edu.cn</span>
            </div>
        </a-col>
    </a-row>
        </div>

        
</div>
</template>

<script>
export default {
    name: "Team"
}
</script>
<style lang="less" scoped>
.teamCard {
    float: center;
    width: 80%;
    padding: 20px;
    border-radius: 10px;
    background-color: #efefef;
    box-shadow: 0 0 10px rgb(0 2 2 / 50%);
    margin: 10px 5%;
    text-align: center;
    
    img {
        vertical-align: middle;
        height: 120px;
        width: 120px;
        border-radius: 50%;
        margin-top: 10px; 
    }
}
</style>
