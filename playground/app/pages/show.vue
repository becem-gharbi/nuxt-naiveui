<template>
  <div>
    <NMessageProvider>
      <NNotificationProvider>
        <NLoadingBarProvider>
          <NDialogProvider>
            <NSpace vertical>
              <NaiveColorModeSwitch />
              <Provided />
              <NSpace horizontal>
                <NButton>Default</NButton>
                <NButton secondary>
                  Secondary
                </NButton>
                <NButton quaternary>
                  Quaternary
                </NButton>
                <NButton tertiary>
                  Tertiary
                </NButton>
                <NButton text>
                  Text
                </NButton>
                <NButton type="primary">
                  Primary
                </NButton>
                <NButton type="success">
                  Success
                </NButton>
                <NButton type="error">
                  Error
                </NButton>
                <NButton type="warning">
                  Warning
                </NButton>
              </NSpace>
              <NInput placeholder="NInput" />
              <NInputNumber placeholder="NInputNumger" />
              <NSelect
                placeholder="NSelect"
                :options="selectOptions"
              />
              <NAutoComplete
                placeholder="NAutoComplete"
                :options="selectOptions"
              />
              <NCascader
                placeholder="NCascader"
                :options="cascaderOptions"
              />
              <NMention
                placeholder="NMention"
                :options="selectOptions"
              />
              <NPopconfirm>
                <template #trigger>
                  <NButton>NPopconfirm</NButton>
                </template>
              </NPopconfirm>
              <NPopover>
                <template #trigger>
                  <NButton>NPopover</NButton>
                </template>
                Popover
              </NPopover>
              <NPopselect :options="selectOptions">
                <NButton>NPopselect</NButton>
              </NPopselect>
              <NDropdown :options="treeOptions">
                <NButton>Dropdown</NButton>
              </NDropdown>
              <NTreeSelect :options="treeOptions" />
              <NTooltip>
                <template #trigger>
                  <NButton>Tooltip</NButton>
                </template>
                Toooltip
              </NTooltip>
              <NTree :data="treeOptions" />
              <NTimePicker />
              <NDynamicInput />
              <NDynamicTags />
              <NDatePicker />
              <NColorPicker />
              <NSwitch />
              <NSlider />
              <NCheckbox label="Checkbox" />
              <NCheckboxGroup>
                <NSpace>
                  <NCheckbox
                    label="CheckboxGroup1"
                    value="foo"
                  />
                  <NCheckbox
                    label="CheckboxGroup2"
                    value="bar"
                  />
                </NSpace>
              </NCheckboxGroup>
              <NCalendar />
              <NDivider />
              <NEmpty />
              <NEl>NEl</NEl>
              <NGradientText>NGradientText</NGradientText>
              <NH1 id="NH1">
                H1
              </NH1>
              <NHr />
              <NA>NA</NA>
              <NTag>NTag</NTag>
              <NText>NText</NText>
              <NBadge :value="999">
                NBadge
              </NBadge>
              <NButtonGroup>
                <NButton>Button Group</NButton>
              </NButtonGroup>
              <NBreadcrumb>
                <NBreadcrumbItem>NBreadcrumbItem1</NBreadcrumbItem>
                <NBreadcrumbItem>NBreadcrumbItem2</NBreadcrumbItem>
              </NBreadcrumb>
              <NUl>
                <NLi>Ul Li</NLi>
              </NUl>
              <NOl><NLi>Ol Li</NLi></NOl>
              <NBlockquote>NBlockquote</NBlockquote>
              <NEllipsis
                style="max-width: 80px"
                :tooltip="{ arrowPointToCenter: true }"
              >
                NEllipsis.....................
              </NEllipsis>
              <NProgress
                type="circle"
                :percentage="50"
              />
              <NRate />
              <NPageHeader subtitle="PageHeader Subtitle">
                <template #title>
                  PageHeader
                </template>
              </NPageHeader>
              <NP id="NP">
                NP
              </NP>
              <NSpin />
              <NIcon>Icon</NIcon>
              <NIconWrapper>
                <NIcon>Icon</NIcon>
              </NIconWrapper>
              <NPagination :page-count="100" />
              <NMenu :options="treeOptions" />
              <NAlert
                title="NAlert"
                type="info"
              >
                NAlert
              </NAlert>
              <NResult status="404" />
              <NList>
                <NListItem>ListItem</NListItem>
              </NList>
              <NTime
                :time="0"
                type="date"
              />
              <NTimeline>
                <NTimelineItem content="Oops" />
              </NTimeline>
              <NThing title="NThing" />
              <NCollapse
                default-expanded-names="1"
                accordion
              >
                <NCollapseItem
                  title="NCollapseItem1"
                  name="1"
                >
                  NCollapseItem1
                </NCollapseItem>
                <NCollapseItem
                  title="NCollapseItem2"
                  name="2"
                >
                  NCollapseItem2
                </NCollapseItem>
              </NCollapse>
              <NAvatar
                round
                size="medium"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
              />
              <NUpload><NButton>Upload</NButton></NUpload>
              <NUpload><NUploadDragger>NUploadDragger</NUploadDragger></NUpload>
              <NImage
                width="100"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
              />

              <NInputGroup>
                <NInput />
                <NInputGroupLabel>NInputGroupLabel</NInputGroupLabel>
              </NInputGroup>
              <NRow>
                <NCol span="24">
                  NRow + NCol
                </NCol>
              </NRow>
              <NLog :lines="['NLog1', 'NLog2']" />
              <NCountdown
                :duration="996"
                :precision="3"
              />
              <NNumberAnimation
                :from="996"
                :to="99"
              />
              <NStatistic
                label="NStatistic"
                value="NStatistic"
              />
              <NTable>
                <thead>
                  <tr>
                    <th>NTable</th>
                    <th>NTable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>NTable</td>
                    <td>NTable</td>
                  </tr>
                </tbody>
              </NTable>
              <NTabs>
                <NTabPane
                  name="NTabPane1"
                  tab="NTabPane1"
                >
                  NTabPane1
                </NTabPane>
                <NTabPane
                  name="NTabPane2"
                  tab="NTabPane2"
                >
                  NTabPane2
                </NTabPane>
              </NTabs>
              <NCard title="NCard" />
              <NDialog title="NDialog" />
              <NLayout has-sider>
                <NLayoutSider>NLayoutSider</NLayoutSider>
                <NLayoutContent>
                  <NLayoutHeader>NLayoutHeader</NLayoutHeader>
                  NLayoutContent
                  <NLayoutFooter>NLayoutFooter</NLayoutFooter>
                </NLayoutContent>
              </NLayout>
              <NSkeleton
                height="40px"
                width="33%"
              />
              Modal
              <NSwitch v-model:value="showModal" />
              <NModal
                v-model:show="showModal"
                preset="card"
                title="NModal"
              />
              Drawer
              <NSwitch v-model:value="showDrawer" />
              <NDrawer v-model:show="showDrawer">
                NDrawer
              </NDrawer>
              <NRadio
                name="NRadio"
                label="NRadio"
              />
              <NRadioGroup name="NRadioGroup">
                <NRadio
                  value="NRadioGroup1"
                  label="NRadioGroup1"
                />
                <NRadio
                  value="NRadioGroup2"
                  label="NRadioGroup2"
                />
              </NRadioGroup>
              <NRadioGroup name="NRadioButtonGroup">
                <NRadioButton
                  value="NRadioGroup1"
                  label="NRadioGroup1"
                />
                <NRadioButton
                  value="NRadioGroup2"
                  label="NRadioGroup2"
                />
              </NRadioGroup>
              <NCarousel autoplay>
                <NCarouselItem>
                  <img
                    class="carousel-img"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                  >
                </NCarouselItem>
                <NCarouselItem>
                  <img
                    class="carousel-img"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                  >
                </NCarouselItem>
              </NCarousel>
              <NDescriptions
                label-placement="top"
                title="NDescription"
              >
                <NDescriptionsItem>
                  <template #label>
                    NDescriptionsItem1
                  </template>
                  NDescriptionsItem1
                </NDescriptionsItem>
                <NDescriptionsItem label="NDescriptionsItem2">
                  NDescriptionsItem2
                </NDescriptionsItem>
                <NDescriptionsItem label="NDescriptionsItem3">
                  NDescriptionsItem3
                </NDescriptionsItem>
              </NDescriptions>
              NCollapseTransition
              <NSwitch v-model:value="showCollapseTransition" />
              <NCollapseTransition v-model:show="showCollapseTransition">
                NCollapseTransition<br>
                NCollapseTransition<br>
                NCollapseTransition
              </NCollapseTransition>
              NForm
              <NForm>
                <NFormItem label="FormItem">
                  <NInput />
                </NFormItem>
                <NFormItemRow>
                  <NFormItemCol
                    label="NFormItemCol"
                    span="12"
                  >
                    <NInput />
                  </NFormItemCol>
                </NFormItemRow>
                <NGrid :cols="4">
                  <NFormItemGi label="NFormItemGi">
                    <NInput />
                  </NFormItemGi>
                  <NFormItemGridItem label="NFormItemGridItem">
                    <NInput />
                  </NFormItemGridItem>
                  <NGi>NGi</NGi>
                  <NGridItem>NGridItem</NGridItem>
                </NGrid>
              </NForm>
              <NSteps :current="1">
                <NStep
                  title="NStep1"
                  description="NStep1"
                />
                <NStep
                  title="NStep2"
                  description="NStep2"
                />
              </NSteps>
              <NGlobalStyle />
              <NDivider>DIVIDER</NDivider>
              <NScrollbar style="height: 100px">
                NScrollbar<br>
                NScrollbar<br>
                NScrollbar<br>
                NScrollbar<br>
                NScrollbar<br>
                NScrollbar<br>
                NScrollbar<br>
                NScrollbar<br>
                NScrollbar<br>
                NScrollbar<br>
              </NScrollbar>
              <NAvatarGroup
                :options="[
                  {
                    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                  },
                  {
                    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
                  },
                  {
                    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                  },
                ]"
                :size="40"
                :max="2"
              />
              <NBackTop :visibility-height="500">
                BackTop
              </NBackTop>
              <NDataTable
                :columns="[
                  { key: 'label', title: 'Label' },
                  { key: 'labelX', title: 'LabelX' },
                ]"
                :data="selectOptions"
              />
              <NImageGroup>
                <NImage
                  width="100"
                  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                />
                <NImage
                  width="100"
                  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                />
              </NImageGroup>
              <NTransfer :options="selectOptions" />

              <NAnchor ignore-gap>
                <NAnchorLink
                  title="NAnchorLink NP"
                  href="#NP"
                />
                <NAnchorLink
                  title="NAnchorLink NH1"
                  href="#NH1"
                />
              </NAnchor>
              <NAffix
                :top="120"
                :trigger-top="60"
                :listen-to="affixListenTo"
              >
                <div>NAffix</div>
              </NAffix>
            </NSpace>
          </NDialogProvider>
        </NLoadingBarProvider>
      </NNotificationProvider>
    </NMessageProvider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from '#imports'

const selectOptions = [
  { label: 'label1', value: 'value1', key: 'key1', labelX: 'labelX1' },
  { label: 'label2', value: 'value2', key: 'key2', labelX: 'labelX2' },
]
const cascaderOptions = [
  {
    label: 'label1',
    value: 'value1',
    children: [{ label: 'label2', value: 'value2' }],
  },
]
const treeOptions = [
  {
    label: 'label1',
    key: 'key1',
    children: [{ label: 'label2', key: 'key2' }],
  },
]
const showModal = ref(false)
const showDrawer = ref(false)
const showCollapseTransition = ref(true)
const affixListenTo = () => document.documentElement
</script>

<style>
body {
  padding: 16px !important;
}
</style>
