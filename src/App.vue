<template>
<div>
  <router-link to="/">首頁</router-link>
  <router-link :to="{name:'setGet'}">setGet</router-link>
  <router-view></router-view>
</div>
</template>