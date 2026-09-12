<template>
 <div>
    <header>
        <p>Seja bem-vindo:{{nome}}</p>
        <img width="200" :height="200" :src="urlimgCorinthians" alt="Corinthians">
    </header>
 </div>
</template>

<script>

export default {
    name: "HomeComponent",
    data() {
        return {
            nome: "Pabllo",
            urlimgCorinthians: "https://i.pinimg.com/originals/37/42/ea/3742ea9936c0ee2c83650c863be57f9c.jpg",
            altura: 200,
        };
    },
    mounted(){
        setTimeout(() => {
            this.urlimgCorinthians = "https://tse4.mm.bing.net/th/id/OIP.7wIXjk4f-waox1-siGvp4QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        }, 5*1000);
    }

};
</script>
