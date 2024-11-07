<script setup>
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
</script>

<template>
    <div class="layout-wrapper">
        <app-topbar></app-topbar>
        <div class="layout-main-container">
            <div class="layout-main">
                <NuxtPage />
            </div>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<style scoped>
</style>