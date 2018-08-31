<template>
    <nav class="nav">
        <h2 class="title">douban</h2>
        <select class="city-dropdown" v-model="curCity">
            <option value="北京">北京</option>
            <option value="杭州">杭州</option>
            <option value="苏州">苏州</option>
        </select>
    </nav>
</template>
<script>
import { SET_CITY } from '../../store/types'

export default {
    name: 'douban-header',
    computed: {
        curCity: {
            get() { return this.$store.state.curCity },
            set(val) {
                console.log(val)
                this.$store.dispatch({
                    type: SET_CITY,
                    city: val,
                })
            }
        }
    }
}
</script>

<style scoped>
.nav {
    background-color: #396;
    min-height: 60px;
    max-height: 60px;
    line-height: 60px;
    padding: 0 32px;
    overflow: hidden;
}
.nav h2 {
    margin: 0;
}
.title {
    display: inline;
    padding: 0 32px;
}
.city-dropdown {
    height: 36px;
    float: right;
    margin: 14px 0;
}
</style>