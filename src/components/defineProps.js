/* __placeholder__ */
/* first way */
// const emit = defineEmits(['updateParent'])
// const props = defineProps({
//     var1: {
//         type: String,
//         required: true,
//     }
// })
// /* second way - with single default */
// const props = defineProps({
//     modelValue: {
//         type: String,
//         required: true,
//     }
// })
// const emit = defineEmits(['update:modelValue'])
// /* third way - with multiple default */
// const props = defineProps({
//     var1: {
//         type: String,
//         required: true,
//     },
//     var2: {
//         type: String,
//         required: true,
//     },
// })
// const emit = defineEmits(['update:var1', 'update:var2'])
// /* Custom Modifiers */
// const props = defineProps({
//     modelValue: {
//         type: String,
//         required: true,
//     }
// })
// const emit = defineEmits(['update:modelValue'])
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
/* first way */
// const emit = defineEmits(['updateParent'])
// const props = defineProps({
//     var1: {
//         type: String,
//         required: true,
//     }
// })
// /* second way - with single default */
// const props = defineProps({
//     modelValue: {
//         type: String,
//         required: true,
//     }
// })
// const emit = defineEmits(['update:modelValue'])
// /* third way - with multiple default */
// const props = defineProps({
//     var1: {
//         type: String,
//         required: true,
//     },
//     var2: {
//         type: String,
//         required: true,
//     },
// })
// const emit = defineEmits(['update:var1', 'update:var2'])
// /* Custom Modifiers */
// const props = defineProps({
//     modelValue: {
//         type: String,
//         required: true,
//     }
// })
// const emit = defineEmits(['update:modelValue'])
const __VLS_componentsOption = {};
let __VLS_name!: 'MyComponent16_1';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.br; __VLS_intrinsicElements.br; __VLS_intrinsicElements.br;
{
const __VLS_0 = __VLS_intrinsicElements["h3"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
(__VLS_3.slots!).default;
}
{
const __VLS_5 = __VLS_intrinsicElements["input"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{ onInput: {} as any, }, type: ("text"), value: ((__VLS_ctx.var1)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ onInput: {} as any, }, type: ("text"), value: ((__VLS_ctx.var1)), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
let __VLS_10 = { 'input': __VLS_pickEvent(__VLS_9['input'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_7>).onInput) };
__VLS_10 = {
input: $event => {
__VLS_ctx.$emit('update:var1', $event.target.value);
// @ts-ignore
[var1, var1, $emit,];
}
};
}
{
const __VLS_11 = __VLS_intrinsicElements["br"];
const __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11);
const __VLS_13 = __VLS_12({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_12));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_13> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13)!;
let __VLS_15!: __VLS_NormalizeEmits<typeof __VLS_14.emit>;
}
{
const __VLS_16 = __VLS_intrinsicElements["input"];
const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
const __VLS_18 = __VLS_17({ ...{ onInput: {} as any, }, type: ("text"), value: ((__VLS_ctx.var2)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{ onInput: {} as any, }, type: ("text"), value: ((__VLS_ctx.var2)), });
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
let __VLS_20!: __VLS_NormalizeEmits<typeof __VLS_19.emit>;
let __VLS_21 = { 'input': __VLS_pickEvent(__VLS_20['input'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_17, typeof __VLS_18>).onInput) };
__VLS_21 = {
input: $event => {
__VLS_ctx.$emit('update:var2', $event.target.value);
// @ts-ignore
[var2, var2, $emit,];
}
};
}
{
const __VLS_22 = __VLS_intrinsicElements["br"];
const __VLS_23 = __VLS_elementAsFunctionalComponent(__VLS_22);
const __VLS_24 = __VLS_23({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_23));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_22, typeof __VLS_24> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24)!;
let __VLS_26!: __VLS_NormalizeEmits<typeof __VLS_25.emit>;
}
{
const __VLS_27 = __VLS_intrinsicElements["input"];
const __VLS_28 = __VLS_elementAsFunctionalComponent(__VLS_27);
const __VLS_29 = __VLS_28({ ...{ onInput: {} as any, }, type: ("text"), value: ((__VLS_ctx.modelValue)), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_27, typeof __VLS_29> & Record<string, unknown>) => void)({ ...{ onInput: {} as any, }, type: ("text"), value: ((__VLS_ctx.modelValue)), });
const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29)!;
let __VLS_31!: __VLS_NormalizeEmits<typeof __VLS_30.emit>;
let __VLS_32 = { 'input': __VLS_pickEvent(__VLS_31['input'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_29>).onInput) };
__VLS_32 = {
input: $event => {
__VLS_ctx.$emit('update:modelValue', $event.target.value);
// @ts-ignore
[modelValue, modelValue, $emit,];
}
};
}
{
const __VLS_33 = __VLS_intrinsicElements["br"];
const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
const __VLS_35 = __VLS_34({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_34));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_33, typeof __VLS_35> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
let __VLS_37!: __VLS_NormalizeEmits<typeof __VLS_36.emit>;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {};
},
});
