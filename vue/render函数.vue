<script>
// 渲染一个空的 类似template 伪代码
export default {
  render() {
    const defaultVnode = this.$slots.default && this.$slots.default[0];
    const denialVnode = this.$slots.denial && this.$slots.denial[0];
    if (this.hasAuth) return defaultVnode;
    if (!this.hasAuth && this.checkStatus === STATUS.SETTLED)
      return denialVnode;
    return null;
  },
};
</script>
