<template>
    <header>
        <div class="flex text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">
                <g-link to="/">
                    {{$static.metadata.siteName}}
                </g-link>
            </span>
        </div>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    name: "HeaderBar",
    components: {
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>