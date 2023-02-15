<script>
  import { showLoaderStore } from "../stores.js";
</script>

<!-- HTML -->
<div class="loader">
  <div class="loader__content">
    <p>Progress: {$showLoaderStore}</p>
    <progress id="file" max="100" value={$showLoaderStore}> {$showLoaderStore}% </progress>
  </div>
</div>

<!-- CSS -->
<style lang="scss">
  .loader {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba($color: #000, $alpha: 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
      box-sizing: border-box;
      padding: 10px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
