<template>
<div>
<h2>列出超過15條狗的農場</h2>
<ul v-for="item in farm" v-if="item.dogs >= 25">
    <li>農夫的名子:{{item.farmer}}，養了{{item.dogs}}條的狗狗</li>
</ul>
</div>
</template>
<script>
export default {
    data(){
        return {
            farm:[
                {
                    farmer:"bob",
                    dogs: 50
                },{
                    farmer:"dodo",
                    dogs: 50
                },{
                    farmer:"cool",
                    dogs: 100
                },{
                    farmer:"soso",
                    dogs: 100
                }
            ]
        }
    }
}

</script>