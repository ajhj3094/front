<template lang="pug">
b-card.card-product(img-top :img-src='product.image')
  b-card-body
    b-card-title
      router-link(:to='"/product/" + product._id') {{ product.name }}
    b-card-sub-title {{ product.category }} - {{ '$' + product.price }}
    b-card-text(style='white-space: pre') {{ product.description }}
</template>

<script>
export default { // 不會有 data () .... 因為資料室外面傳進來的
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
