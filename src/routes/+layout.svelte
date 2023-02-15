<script>
  import Modal from '../components/Modal.svelte'
  import {showModalStore} from '../stores.js'
</script>


<slot></slot>
{#if $showModalStore}
  <Modal />
{/if}
