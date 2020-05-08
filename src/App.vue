<template>
  <div>
    <Header/>
    
    <router-view></router-view>

    <Footer v-show="!$route.meta.isHideFooter"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { reqFloors } from '@/api'

export default {
  name: 'App',

  async mounted () {
    this.$store.dispatch('getBaseCategoryList')
  },

  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
