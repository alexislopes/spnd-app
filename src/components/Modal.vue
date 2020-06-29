
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  /* left: 0; */
  right: 0;
  display: flex;
  justify-content: center;
  align-items: initial;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  /* background-color: rgba(0, 0, 0, 0.75); */
  margin: 0.6rem;
  padding: 1rem;
  width: auto;
  border-radius: 6px;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 5px 0.5px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>