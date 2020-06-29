<template>
  <div class="produtos">
    <div class="content">
      <div class="ui black">
        <button @click="showModal" class="button black">Criar</button>
      </div>
      <modal v-show="show" @close="closeModal">
        <sub-categoria-adicionar @close="closeModal">
          <div class="ui classic">
            <button @click="closeModal" class="button classic">Esquece!</button>
          </div>
        </sub-categoria-adicionar>
      </modal>
    </div>
  </div>
</template>

<script>
import Modal from "../../components/Modal";
import SubCategoriaAdicionar from "../../components/SubCategoriaAdicionar";
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    showModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    }
  },
  components: {
    Modal,
    SubCategoriaAdicionar
  }
};
</script>