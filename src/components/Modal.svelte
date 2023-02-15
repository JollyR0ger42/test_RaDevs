<script>
  import { showModalStore } from "../stores.js";

  const closeModal = () => {
    showModalStore.set("");
  };
</script>

<div class="modal">
  <div class="modal__content">
    <div class="modal__content__text">{@html $showModalStore}</div>
    <button on:click={closeModal} class="modal__button">Close</button>
  </div>
</div>

<style lang="scss">
  .modal {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
      box-sizing: border-box;
      padding: 10px;
      min-width: 200px;
      min-height: 200px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
