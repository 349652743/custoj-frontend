<template>
  <div class="problem" key="problem">
    <n-card>
      <div style="text-align: left;">
        <n-h2 style="margin-bottom: 20px;">题目列表</n-h2>
      </div>
      <n-space vertical :size="15">
        <n-grid cols="2 800:24" x-gap="0 800:20" item-responsive>
          <n-grid-item span="1 800:4">
            <search-box></search-box>
          </n-grid-item>
          <n-grid-item offset="0 800:10" span="0 800:4">
            <tag-selector></tag-selector>
          </n-grid-item>
          <n-grid-item span="0 800:6">
            <n-space :size="20" style="display: flex;align-items: center;">
              <n-switch style="margin: 0px;">
                <template #checked>Tag</template>
                <template #unchecked>Tags</template>
              </n-switch>
              <text-selector title="难度"></text-selector>
              <text-selector title="平台"></text-selector>
              <text-selector title="状态"></text-selector>
            </n-space>
          </n-grid-item>
        </n-grid>
        <problem-table class="table"></problem-table>
      </n-space>
    </n-card>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import SearchBox from "@/components/common/SearchBox.vue"
import TextSelector from "@/components/common/TextSelector.vue"
import ProblemTable from "@/components/ProblemTable.vue"
import TagSelector from "@/components/TagSelector.vue"

export default defineComponent( {
  components: {
    ProblemTable,
    SearchBox,
    TagSelector,
    TextSelector
  }
})
</script>
<style>
.table {
  width: 100%;
  padding: 0px;
}
</style>