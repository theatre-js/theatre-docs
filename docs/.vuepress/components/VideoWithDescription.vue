<!-- Creates a <video /> with an aria-described-by attribute for better a11y.
Example: 
<VideoWtihDescription src="/path/from/.vuepress/plublic/file.mp4">Description (this must be in one line, otherwise parser will reak) </VideoWithDescription>
 -->
<template>
  <div>
    <video controls v-bind:src="src" v-bind:aria-describedby="descriptorId" v-bind:autoplay="autoplay" v-bind:class="cls" />
    <div v-bind:id="descriptorId" style="display: none;" aria-hidden="true">
      <slot/>
    </div>
  </div>
</template>

<style>
  video {
    width: 100%;
  }
  video.small {
    max-width: 300px;
  }
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    src: String,
    autoplay: {type: String, default: ""},
    cls: {type: String, default: ""}
  },
  computed: {
    descriptorId() {
      return (
        "aria-description-video--" +
        this.src.replace(/[^a-zA-Z0-9]{1}/g, "-").toLowerCase()
      );
    }
  }
});
</script>