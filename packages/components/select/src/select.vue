<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  provide,
  reactive,
  toRefs,
  unref,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { ClickOutside } from '@ehop/directives'
import { useFocus, useLocale, useNamespace } from '@ehop/hooks'
import EhInput from '@ehop/components/input'
import EhTooltip from '@ehop/components/tooltip'
import EhScrollbar from '@ehop/components/scrollbar'
import EhTag from '@ehop/components/tag'
import EhIcon from '@ehop/components/icon'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@ehop/constants'
import { isIOS } from '@ehop/utils'
import EhOption from './option.vue'
import EhSelectMenu from './select-dropdown.vue'
import { useSelect, useSelectStates } from './useSelect'
import { selectKey } from './token'
import EhOptions from './options'
import type { SelectContext } from './token'
import { selectProps } from './select'
import '../style'

const COMPONENT_NAME = 'EhSelect'
export default defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    EhInput,
    EhSelectMenu,
    EhOption,
    EhOptions,
    EhTag,
    EhScrollbar,
    EhTooltip,
    EhIcon,
  },
  directives: { ClickOutside },
  props: selectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'remove-tag',
    'clear',
    'visible-change',
    'focus',
    'blur',
  ],

  setup(props, ctx) {
    const nsSelect = useNamespace('select')
    const nsInput = useNamespace('input')
    const { t } = useLocale()
    const states = useSelectStates(props)
    const {
      optionList,
      optionsArray,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,

      reference,
      input,
      iOSInput,
      tooltipRef,
      tags,
      selectWrapper,
      scrollbar,
      queryChange,
      groupQueryChange,
      handleMouseEnter,
      handleMouseLeave,
      showTagList,
      collapseTagList,
    } = useSelect(props, states, ctx)

    const { focus } = useFocus(reference)

    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine,
    } = toRefs(states)

    const wrapperKls = computed(() => {
      const classList = [nsSelect.b()]
      const _selectSize = unref(selectSize)
      if (_selectSize)
        classList.push(nsSelect.m(_selectSize))

      if (props.disabled)
        classList.push(nsSelect.m('disabled'))

      return classList
    })

    const selectTagsStyle = computed(() => ({
      maxWidth: `${unref(inputWidth) - 32}px`,
      width: '100%',
    }))

    const tagTextStyle = computed(() => {
      const maxWidth
        = unref(inputWidth) > 123
          ? unref(inputWidth) - 123
          : unref(inputWidth) - 75
      return { maxWidth: `${maxWidth}px` }
    })

    provide(
      selectKey,
      reactive({
        props,
        options,
        optionsArray,
        cachedOptions,
        optionsCount,
        filteredOptionsCount,
        hoverIndex,
        handleOptionSelect,
        onOptionCreate,
        onOptionDestroy,
        selectWrapper,
        selected,
        setSelected,
        queryChange,
        groupQueryChange,
      }) as unknown as SelectContext,
    )

    onMounted(() => {
      states.cachedPlaceHolder = (currentPlaceholder.value = props.placeholder || (() => t('eh.select.placeholder'))) as string
      if (
        props.multiple
        && Array.isArray(props.modelValue)
        && props.modelValue.length > 0
      )
        currentPlaceholder.value = ''

      useResizeObserver(selectWrapper, handleResize)
      if (props.remote && props.multiple)
        resetInputHeight()

      nextTick(() => {
        const refEl = reference.value && reference.value.$el
        if (!refEl)
          return
        inputWidth.value = refEl.getBoundingClientRect().width

        if (ctx.slots.prefix) {
          const prefix = refEl.querySelector(`.${nsInput.e('prefix')}`)
          prefixWidth.value = Math.max(
            prefix.getBoundingClientRect().width + 5,
            30,
          )
        }
      })
      setSelected()
    })

    if (props.multiple && !Array.isArray(props.modelValue))
      ctx.emit(UPDATE_MODEL_EVENT, [])

    if (!props.multiple && Array.isArray(props.modelValue))
      ctx.emit(UPDATE_MODEL_EVENT, '')

    const popperPaneRef = computed(() => {
      return tooltipRef.value?.popperRef?.contentRef
    })

    const onOptionsRendered = (v: any) => {
      optionList.value = v
    }

    return {
      isIOS,
      onOptionsRendered,
      tagInMultiLine,
      prefixWidth,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,

      reference,
      input,
      iOSInput,
      tooltipRef,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar,

      wrapperKls,
      selectTagsStyle,
      nsSelect,
      tagTextStyle,
      handleMouseEnter,
      handleMouseLeave,
      showTagList,
      collapseTagList,
    }
  },
})
</script>

<template>
  <div
    ref="selectWrapper"
    v-click-outside:[popperPaneRef]="handleClose"
    :class="wrapperKls"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click.stop="toggleMenu"
  >
    <EhTooltip
      ref="tooltipRef"
      :visible="dropMenuVisible"
      :placement="placement"
      :teleported="teleported"
      :popper-class="[nsSelect.e('popper'), popperClass]"
      :popper-options="popperOptions"
      :fallback-placements="['bottom-start', 'top-start', 'right', 'left']"
      :effect="effect"
      pure
      trigger="click"
      :transition="`${nsSelect.namespace.value}-zoom-in-top`"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :persistent="persistent"
      @show="handleMenuEnter"
    >
      <template #default>
        <div
          class="select-trigger"
          @mouseenter="inputHovering = true"
          @mouseleave="inputHovering = false"
        >
          <div
            v-if="multiple"
            ref="tags"
            :class="[
              nsSelect.e('tags'),
              nsSelect.is('disabled', selectDisabled),
            ]"
            :style="selectTagsStyle"
          >
            <transition
              v-if="collapseTags && selected.length"
              @after-leave="resetInputHeight"
            >
              <span
                :class="[
                  nsSelect.b('tags-wrapper'),
                  { 'has-prefix': prefixWidth && selected.length },
                ]"
              >
                <EhTag
                  v-for="item in showTagList"
                  :key="getValueKey(item)"
                  :closable="!selectDisabled && !item.isDisabled"
                  :size="collapseTagSize"
                  :hit="item.hitState"
                  :type="tagType"
                  disable-transitions
                  @close="deleteTag($event, item)"
                >
                  <span :class="nsSelect.e('tags-text')" :style="tagTextStyle">
                    {{ item.currentLabel }}
                  </span>
                </EhTag>
                <EhTag
                  v-if="selected.length > maxCollapseTags"
                  :closable="false"
                  :size="collapseTagSize"
                  :type="tagType"
                  disable-transitions
                >
                  <EhTooltip
                    v-if="collapseTagsTooltip"
                    :disabled="dropMenuVisible"
                    :fallback-placements="['bottom', 'top', 'right', 'left']"
                    :effect="effect"
                    placement="bottom"
                    :teleported="teleported"
                  >
                    <template #default>
                      <span :class="nsSelect.e('tags-text')">+ {{ selected.length - maxCollapseTags }}</span>
                    </template>
                    <template #content>
                      <div :class="nsSelect.e('collapse-tags')">
                        <div
                          v-for="item in collapseTagList"
                          :key="getValueKey(item)"
                          :class="nsSelect.e('collapse-tag')"
                        >
                          <EhTag
                            class="in-tooltip"
                            :closable="!selectDisabled && !item.isDisabled"
                            :size="collapseTagSize"
                            :hit="item.hitState"
                            :type="tagType"
                            disable-transitions
                            :style="{ margin: '2px' }"
                            @close="deleteTag($event, item)"
                          >
                            <span
                              :class="nsSelect.e('tags-text')"
                              :style="{
                                maxWidth: `${inputWidth - 75}px`,
                              }"
                            >{{ item.currentLabel }}</span>
                          </EhTag>
                        </div>
                      </div>
                    </template>
                  </EhTooltip>
                  <span v-else :class="nsSelect.e('tags-text')">+ {{ selected.length - maxCollapseTags }}</span>
                </EhTag>
              </span>
            </transition>
            <transition v-if="!collapseTags" @after-leave="resetInputHeight">
              <span
                :class="[
                  nsSelect.b('tags-wrapper'),
                  { 'has-prefix': prefixWidth && selected.length },
                ]"
              >
                <EhTag
                  v-for="item in selected"
                  :key="getValueKey(item)"
                  :closable="!selectDisabled && !item.isDisabled"
                  :size="collapseTagSize"
                  :hit="item.hitState"
                  :type="tagType"
                  disable-transitions
                  @close="deleteTag($event, item)"
                >
                  <span
                    :class="nsSelect.e('tags-text')"
                    :style="{ maxWidth: `${inputWidth - 75}px` }"
                  >{{ item.currentLabel }}</span>
                </EhTag>
              </span>
            </transition>
            <input
              v-if="filterable"
              ref="input"
              v-model="query"
              type="text"
              :class="[
                nsSelect.e('input'),
                nsSelect.is(selectSize),
                nsSelect.is('disabled', selectDisabled),
              ]"
              :disabled="selectDisabled"
              :autocomplete="autocomplete"
              :style="{
                marginLeft:
                  (prefixWidth && !selected.length) || tagInMultiLine
                    ? `${prefixWidth}px`
                    : '',
                flexGrow: 1,
                width: `${inputLength / (inputWidth - 32)}%`,
                maxWidth: `${inputWidth - 42}px`,
              }"
              @focus="handleFocus"
              @blur="handleBlur"
              @keyup="managePlaceholder"
              @keydown="resetInputState"
              @keydown.down.prevent="navigateOptions('next')"
              @keydown.up.prevent="navigateOptions('prev')"
              @keydown.esc="handleKeydownEscape"
              @keydown.enter.stop.prevent="selectOption"
              @keydown.delete="deletePrevTag"
              @keydown.tab="visible = false"
              @compositionstart="handleComposition"
              @compositionupdate="handleComposition"
              @compositionend="handleComposition"
              @input="debouncedQueryChange"
            >
          </div>
          <!-- fix: https://github.com/element-plus/element-plus/issues/11415 -->
          <input
            v-if="isIOS && !multiple && filterable && readonly"
            ref="iOSInput"
            :class="[
              nsSelect.e('input'),
              nsSelect.is(selectSize),
              nsSelect.em('input', 'iOS'),
            ]"
            :disabled="selectDisabled"
            type="text"
          >
          <EhInput
            :id="id"
            ref="reference"
            v-model="selectedLabel"
            type="text"
            :placeholder="
              typeof currentPlaceholder === 'function'
                ? currentPlaceholder()
                : currentPlaceholder
            "
            :name="name"
            :autocomplete="autocomplete"
            :size="selectSize"
            :disabled="selectDisabled"
            :readonly="readonly"
            :validate-event="false"
            :class="[nsSelect.is('focus', visible)]"
            :tabindex="multiple && filterable ? -1 : undefined"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="debouncedOnInputChange"
            @paste="debouncedOnInputChange"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"
            @keydown.down.stop.prevent="navigateOptions('next')"
            @keydown.up.stop.prevent="navigateOptions('prev')"
            @keydown.enter.stop.prevent="selectOption"
            @keydown.esc="handleKeydownEscape"
            @keydown.tab="visible = false"
          >
            <template v-if="$slots.prefix" #prefix>
              <div
                style="
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <slot name="prefix" />
              </div>
            </template>
            <template #suffix>
              <EhIcon
                v-if="iconComponent && !showClose"
                :class="[nsSelect.e('caret'), nsSelect.e('icon'), iconReverse]"
              >
                <component :is="iconComponent" />
              </EhIcon>
              <EhIcon
                v-if="showClose && clearIcon"
                :class="[nsSelect.e('caret'), nsSelect.e('icon')]"
                @click="handleClearClick"
              >
                <component :is="clearIcon" />
              </EhIcon>
            </template>
          </EhInput>
        </div>
      </template>
      <template #content>
        <EhSelectMenu>
          <EhScrollbar
            v-show="options.size > 0 && !loading"
            ref="scrollbar"
            tag="ul"
            :wrap-class="nsSelect.be('dropdown', 'wrap')"
            :view-class="nsSelect.be('dropdown', 'list')"
            :class="[
              nsSelect.is(
                'empty',
                !allowCreate && Boolean(query) && filteredOptionsCount === 0,
              ),
            ]"
          >
            <EhOption v-if="showNewOption" :value="query" :created="true" />
            <EhOptions @update-options="onOptionsRendered">
              <slot />
            </EhOptions>
          </EhScrollbar>
          <template
            v-if="
              emptyText
                && (!allowCreate || loading || (allowCreate && options.size === 0))
            "
          >
            <slot v-if="$slots.empty" name="empty" />
            <p v-else :class="nsSelect.be('dropdown', 'empty')">
              {{ emptyText }}
            </p>
          </template>
        </EhSelectMenu>
      </template>
    </EhTooltip>
  </div>
</template>
