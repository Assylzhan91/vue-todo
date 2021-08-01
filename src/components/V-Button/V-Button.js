export default {
  name: 'V-Button',
  props: {
    typeButton: {
      type: [String, Object]
    },
    classNames: {
      type: String
    },
    classWrapper: {
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
    },
    getClassWrapper () {
      return this.classWrapper ? this.classWrapper : 'btn-wrapper'
    }
  }
}
