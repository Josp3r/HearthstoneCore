<template>
    <div id="Home" class="view">
        <div class="Box">
            <div class="Modes">
                <router-link id="ClassicBattle" :to="{ name: 'Battle', params: {} }">传统对战</router-link>
                <router-link id="TavernChess" :to="{ name: 'Battle', params: {} }">酒馆战棋</router-link>
                <router-link id="MercenaryWar" :to="{ name: 'Battle', params: {} }">佣兵战纪</router-link>
                <router-link id="Other" :to="{ name: 'Battle', params: {} }">其他模式</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="less">

</style>