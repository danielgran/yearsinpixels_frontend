<template>
  <div>
    <div id="footer">
      <div id="content">
        <div id="footer-parts">
          <div class="footer-section">
            <h4>Rechtliches</h4>
            <ul class="right-1">
              <li>
                <router-link to="/imprint">Impressum</router-link>
              </li>
              <li>
                <router-link to="/privacypolicy">Datenschutzerklärung</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div id="footer-footer">
          <p>© 2021 - {{ date_today.getFullYear() }} Daniel Gran</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Footer from "./Footer";

export default Footer;
</script>

<style scoped src="./Footer.css"/>
