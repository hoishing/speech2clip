<script>
  import Button from './Button.svelte'
  import Textbox from './Textbox.svelte'
  import LangSelect from './LangSelect.svelte'
</script>

<style>
  footer {
    color: rgb(95, 95, 95);
    font-size: 0.7em;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-bottom: 1em;
  }
</style>

<LangSelect />
<Textbox />
<Button />

<footer>toggle start/stop: space bar</footer>
