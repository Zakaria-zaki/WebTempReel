<template>
</template>
<script>
export default {
    methods: {
    },
    mounted (){
      (function(d, m){
        var kommunicateSettings = {"appId":"3a909ff33ce0deab616101d01dac149ea","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
      console.log(document.getElementById('mck-sidebox-ft'));
    },
    data: function(){
    }
}
</script>