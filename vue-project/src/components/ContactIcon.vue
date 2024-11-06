<!-- src/components/ContactIcon.vue -->
<template>
    <div class="col-md-4 text-center mb-4 mb-md-0">
      <i :class="`bi bi-${icon} contact-icon mb-3`"></i>
      <h3>{{ title }}</h3>
      <p v-if="isLink"><a :href="content" class="text-decoration-none">{{ contentText }}</a></p>
      <p v-else v-html="content"></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactIcon',
    props: {
      icon: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      isLink: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      contentText() {
        return this.isLink ? this.content.replace('mailto:', '') : this.content;
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-icon {
    font-size: 2rem;
    color: #ff6f61;
  }
  </style>
  