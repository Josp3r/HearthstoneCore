<template>
    <div class="minion">
        <div class="pic"></div>
        <div class="attack"></div>
        <div class="hp">{{  }}</div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

defineProps({
    pic: String,
    attack: Number,
    hp: Number,
})

const state = reactive({
    
})

</script>