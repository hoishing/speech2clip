<script>
  export let listening
  $: title = listening ? 'stop' : 'start'
</script>

<button on:click>{title}</button>

<style>
  button {
    min-width: 150px;
    display: inline-block;
    padding: 8px 12px;
    font-family: inherit;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    user-select: none;
    border: 0;
    border-radius: 4px;
    color: white;
    background-color: #337ab7;
  }
</style>
