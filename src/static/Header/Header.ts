import Component from "vue-class-component";
import Vue from "vue"

@Component
export default class Header extends Vue {
  shouldDisplay(): boolean {
    return false;
  }

  title = "yearsinpixels.com"
  shouldRender = true

  // Gets called when the Header is created
  created() {
    let route = this.$router.currentRoute.name
    console.log(route)

    if (["Login"].includes(<string>route)) {
      this.shouldRender = false;
    }
  }
}