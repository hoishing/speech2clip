<script>
  import Button from './Button.svelte'
  import Textbox from './Textbox.svelte'
  import LangSelect from './LangSelect.svelte'
  import { errMsg, recognize } from './recog.js'

  let listening = false
  $: recognize(listening)

  const toggle = () => (listening = !listening)

  const shortcut = e => {
    if (e.keyCode == 32) toggle()
  }
</script>

<svelte:body on:keypress={shortcut} />

<LangSelect />
<Textbox {listening} />
<Button {listening} on:click={toggle} />

<footer>toggle start/stop: space bar</footer>

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
