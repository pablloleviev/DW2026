<template>
    <div>
        <img :src="urlImg" :alt="descricao" width="100" height="100">
    </div>
</template>

<script>
export default {
    name: "ImgComponent",
    data()
    {
        return {
            urlImg: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
            descricao: "Ícone de usuário"
        };
    }
}
</script>
