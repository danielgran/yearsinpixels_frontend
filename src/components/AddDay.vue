<template>
<div>
  <div v-bind:class="{background: opened}">
  </div>
  <div id="addDay">
    <div id="content">
      <h2>Your day was...</h2>
      <form>
        <input type="text" placeholder="Title">
        <textarea placeholder="Notes">
        </textarea>
      <input type="button" value="Send" />
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AddDay",
  props: [
      'height',
  ],
  data: function() {
    return {
      opened: true
    };
  },
  methods: {

  },
  mounted() {
    document.getElementById('addDay').style.height = this.height;
  }
}
</script>

<style lang="scss" scoped>
#addDay {
  position: absolute;
  width: 100%;
  height: 80%;
  z-index: 20;

  transform: translate(-50%, -40px);
  transform: translate(-50%, -430px);
  background: #ECECEC;
  box-shadow: 0px 0px 100px rgba(1,1,1, 0.3);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
}

#content {
  margin: 22px;
}
#content h2 {
  color: #C08FC2;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  backdrop-filter: blur(3px);
}

form {
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

textarea, input {
  width: 100%;
  border: 1px solid grey;
  margin: 5px auto;
  font-size: 1rem;
}

textarea {
  height: 128px;
}

input[type=button] {
  height: 40px;
  width: 194px;
  margin: auto;
  padding: 0;

}

</style>