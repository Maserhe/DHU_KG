<template>

    <div style="text-align: center; padding: 60px 0px;">
        <div style="font-size: 42px; margin-bottom: 16px;">团队成员</div>
        <div style="margin: 10px auto;max-width: 1200px;overflow: hidden;">
            <a-row justify="space-around">
                <a-col :span="8">
                    <div class="teamCard"><img :src="require('@/assets/team/syq.jpeg')" alt="">
                        <div style="font-size: 18px; font-weight: 700; margin-top: 8px;">史有群</div><span>
                            <i aria-label="图标: mail" class="anticon anticon-mail"
                                style="color: rgb(24, 144, 255); font-size: 18px;">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em"
                                    fill="currentColor" aria-hidden="true">
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
                            <i aria-label="图标: mail" class="anticon anticon-mail"
                                style="color: rgb(24, 144, 255); font-size: 18px;">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em"
                                    fill="currentColor" aria-hidden="true">
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
                            <i aria-label="图标: mail" class="anticon anticon-mail"
                                style="color: rgb(24, 144, 255); font-size: 18px;">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em"
                                    fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z">
                                    </path>
                                </svg>
                            </i>&nbsp;2222703@mail.dhu.edu.cn</span>
                    </div>
                </a-col>
            </a-row>
        </div>

        <div style="padding: 20px 5%; text-align: left;">
            <div style="font-size: 20px; margin-bottom: 10px;">团队成员在知识图谱构建方面发表的相关论文：</div>
            <div style="margin: 0px auto; border: 2px solid rgb(2, 158, 232); border-radius: 6px;">
                <div style="border-bottom: 1px solid rgb(2, 158, 232); padding: 14px;"><img
                        src="data:image/png;base64,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"
                        alt="" width="14px" height="14px"><span>XXX，《论文名XXXXX》XXXXXX</span>&nbsp;<a
                        href="javascript:;">论文PDF下载</a></div>
            </div>
        </div>


        <div style="padding: 20px 5%; text-align: left;">
            <div style="font-size: 20px; margin-bottom: 10px;">团队专利：</div>
            <div class="ant-table-wrapper">
                <div class="ant-spin-nested-loading">
                    <div class="ant-spin-container">
                        <div class="ant-table ant-table-default ant-table-scroll-position-left">
                            <div class="ant-table-content">
                                <div class="ant-table-body">
                                    <table class="">
                                        <colgroup>
                                            <col>
                                            <col>
                                            <col>
                                            <col>
                                        </colgroup>
                                        <thead class="ant-table-thead">
                                            <tr>
                                                <th class=""><span class="ant-table-header-column">
                                                        <div><span class="ant-table-column-title">专利名</span><span
                                                                class="ant-table-column-sorter"></span></div>
                                                    </span></th>
                                                <th class=""><span class="ant-table-header-column">
                                                        <div><span class="ant-table-column-title">发明人</span><span
                                                                class="ant-table-column-sorter"></span></div>
                                                    </span></th>
                                                <th class=""><span class="ant-table-header-column">
                                                        <div><span class="ant-table-column-title">申请日</span><span
                                                                class="ant-table-column-sorter"></span></div>
                                                    </span></th>
                                                <th class="ant-table-row-cell-last"><span
                                                        class="ant-table-header-column">
                                                        <div><span class="ant-table-column-title">申请号</span><span
                                                                class="ant-table-column-sorter"></span></div>
                                                    </span></th>
                                            </tr>
                                        </thead>
                                        <tbody class="ant-table-tbody">
                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="0">
                                                <td class="">XXXXXXXXXX</td>
                                                <td class="">人员1；人员2；人员3</td>
                                                <td class="">9999-99-99</td>
                                                <td class="">申请号XXXXXX</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="font-size: 20px; margin-top: 20px; margin-bottom: 10px;">团队软著：</div>
            <div class="ant-table-wrapper">
                <div class="ant-spin-nested-loading">
                    <div class="ant-spin-container">
                        <div class="ant-table ant-table-default ant-table-scroll-position-left">
                            <div class="ant-table-content">
                                <div class="ant-table-body">
                                    <table class="">
                                        <colgroup>
                                            <col>
                                            <col>
                                            <col>
                                            <col>
                                        </colgroup>
                                        <thead class="ant-table-thead">
                                            <tr>
                                                <th class=""><span class="ant-table-header-column">
                                                        <div><span class="ant-table-column-title">软著名</span><span
                                                                class="ant-table-column-sorter"></span></div>
                                                    </span></th>
                                                <th class=""><span class="ant-table-header-column">
                                                        <div><span class="ant-table-column-title">作者</span><span
                                                                class="ant-table-column-sorter"></span></div>
                                                    </span></th>
                                                <th class=""><span class="ant-table-header-column">
                                                        <div><span class="ant-table-column-title">开发完成日期</span><span
                                                                class="ant-table-column-sorter"></span></div>
                                                    </span></th>
                                                <th class="ant-table-row-cell-last"><span
                                                        class="ant-table-header-column">
                                                        <div><span class="ant-table-column-title">登记号</span><span
                                                                class="ant-table-column-sorter"></span></div>
                                                    </span></th>
                                            </tr>
                                        </thead>
                                        <tbody class="ant-table-tbody">
                                            <tr class="ant-table-row ant-table-row-level-0" data-row-key="0">
                                                <td class="">XXXXXXXXXXXXXXXX</td>
                                                <td class="">人员1；人员2；人员3</td>
                                                <td class="">9999-99-99</td>
                                                <td class="">专利号XXXX</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
