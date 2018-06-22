<template>
    <div>
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p class="card-text" v-html="thecardbody"></p>
                <div v-if="parentmessage" class="card-text alert alert-warning" v-html="parentmessage"></div>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
        props: ['parentmessage'],
        data() {
            return {
                thecardtitle: 'Graph.vue card title',
                thecardbody: 'Graph.vue card body'
            }
        }
    }

</script>

<style>
</style>