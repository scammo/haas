<template>
  <div id="app">
    <b-container>
      <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand :to="'/'">Ha2S</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav class="ml-auto">
              <b-nav-item :to="'faq'">FAQ & Impressum</b-nav-item>
              <b-nav-item :to="'/'">Alle Hackathons</b-nav-item>
              <b-nav-item :to="'login'">Login</b-nav-item>

          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
      <router-view/>
    </b-container>
  </div>
</template>

<style lang="scss">
</style>
