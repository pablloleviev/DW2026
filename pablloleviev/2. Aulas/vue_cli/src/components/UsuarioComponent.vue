<template>
    <div>
        <header v-if="!isLoading">
            <img :src="urlImg" width="100" height="100">
            <h2>{{ nome }}</h2>
        </header>
        <header v-show="!isLoading">
            <img :src="urlImg" width="100" height="100">
            <h2>{{ nome }}</h2>
        </header>
    </div>
</template>

<script>
export default{
    name: "UsuarioComponent",
    data()
    {
        return {
            isLoading: false,
            nome: "",
            urlImg: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        };
    },

    mounted()
    {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
            this.nome = "Loading...";
            this.urlImg = "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif";

            setTimeout(() => {
                this.isLoading = false;
                this.nome = "Fulano";
                this.urlImg = "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif";
            }, 3000);
        }, 3000);
    }
}
</script>