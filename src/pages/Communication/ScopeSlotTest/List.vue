<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      <!-- 由父组件传递内容结构进来 -->
      <slot :row="item" :$index="index">  <!-- slot的属性会自动传递给父组件 -->
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: Array
  }
}
</script>