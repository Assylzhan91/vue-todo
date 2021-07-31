export default {
  name: 'V-Button',
  props: {
    typeButton: {
      type: [String, Object]
    },
    classNames: {
      type: String
    },
    text: {
      type: String
    }
  },
  computed: {
    getClassNames () {
      return [
        this.classNames,
        this.typeButton
      ]
    }
  }
}
