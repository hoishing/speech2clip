<script>
  export let listening
  $: txt = listening ? '' : 'press spacebar to start'
</script>

<p>{txt}</p>

<style>
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    color: var(--txt-color);
  }
</style>
