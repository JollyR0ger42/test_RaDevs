<script>
  import Modal from "../components/Modal.svelte";
  import Loader from "../components/Loader.svelte";
  import { showModalStore, showLoaderStore } from "../stores.js";
</script>

<slot />
{#if $showModalStore}
  <Modal />
{/if}
{#if $showLoaderStore !== 100}
  <Loader />
{/if}
