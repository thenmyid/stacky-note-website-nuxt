import Vue from 'vue'
import { noteAPI } from '~/utils/endpoints/note/index'
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, url } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
import * as actionTypes from '~/store/addNote/actionTypes'

interface IData {
  title: string,
  author: string,
  link: string,
  image: string,
  description: string,
  type: string,
  stacks: Array<string>,
  typeList: Array<{
    label: string,
    value: string
  }>,
  isAgree: boolean,
  alert: {
    show: Boolean
    text: string
    type: string
  }
}

export default Vue.extend({
  mixins: [validationMixin],

  validations: {
    title: { required, maxLength: maxLength(150), minLength: minLength(30)},
    author: { required, maxLength: maxLength(50), minLength: minLength(10)},
    link: { required, maxLength: maxLength(155), minLength: minLength(10), url },
    image: { required, maxLength: maxLength(155), minLength: minLength(10), url},
    description: { required, maxLength: maxLength(300), minLength: minLength(50) },
    type: { required },
    stacks: { required },
    isAgree: {
      checked (val) {
        return val
      },
    },
  },

  data () {
    return {
      title: '',
      author: '',
      link: '',
      image: '',
      description: '',
      type: '',
      stacks: [],
      typeList: [
        { label: 'Article', value: 'articles' },
        { label: 'Book', value: 'books' },
        { label: 'Talk', value: 'talks' },
        { label: 'Example', value: 'examples' }
      ],
      isAgree: false,
      alert: {
        show: false,
        text: '',
        type: 'success'
      }
    } as IData
  },

  computed: {
    ...mapState('addNote', [
      'stackList'
    ]),
    isAgreeErrors () {
      const errors : Array<string> = []
      if (!this.$v.isAgree.$dirty) return errors
      !this.$v.isAgree.checked && errors.push('You must agree to continue!')
      return errors
    },
    typeErrors () {
      const errors : Array<string> = []
      if (!this.$v.type.$dirty) return errors
      !this.$v.type.required && errors.push('type is required')
      return errors
    },
    stackErrors () {
      const errors : Array<string> = []
      if (!this.$v.stacks.$dirty) return errors
      !this.$v.stacks.required && errors.push('Stack is required')
      return errors
    },
    titleErrors () {
      const errors : Array<string> = []
      if (!this.$v.title.$dirty) return errors
      !(this.$v.title.maxLength && this.$v.title.minLength) && errors.push('Title must between 30 to 150 characters long')
      !this.$v.title.required && errors.push('Title is required.')
      return errors
    },
    authorErrors () {
      const errors : Array<string> = []
      if (!this.$v.author.$dirty) return errors
      !(this.$v.author.maxLength && this.$v.author.minLength) && errors.push('Author must between 10 to 50 characters long')
      !this.$v.author.required && errors.push('Author is required.')
      return errors
    },
    linkErrors () {
      const errors: Array<string> = []
      if (!this.$v.link.$dirty) return errors
      !(this.$v.link.maxLength && this.$v.link.minLength) && errors.push('Link must between 10 to 255 characters long')
      !this.$v.link.required && errors.push('Link is required.')
      !this.$v.link.url && errors.push('The link must be in url format.')
      return errors
    },
    imageErrors () {
      const errors : Array<string> = []
      if (!this.$v.image.$dirty) return errors
      !(this.$v.image.maxLength && this.$v.image.minLength) && errors.push('Link must between 10 to 255 characters long')
      !this.$v.image.required && errors.push('Image is required.')
      !this.$v.image.url && errors.push('The image must be in url format.')
      return errors
    },
    descriptionErrors () {
      const errors : Array<string> = []
      if (!this.$v.description.$dirty) return errors
      !(this.$v.description.maxLength || this.$v.description.minLength) && errors.push('Note must between 50 to 300 characters long')
      !this.$v.description.required && errors.push('Note is required.')
      return errors
    },
  },

  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const params : noteAPI.CreateNoteParameter = {
          title: this.title,
          author: this.author,
          link: this.link,
          image: this.image,
          description: this.description,
          type: this.type,
          stacks: this.stacks
        }

        this.$store.dispatch(`addNote/${actionTypes.ADD_NOTE}`, params)
          .then(res => {
            console.log(res)
            this.alert = {
              show: true,
              text: `Your note's is successfully added.`,
              type: 'success'
            }
            this.clear()
          })
      }
    },
    clear () {
      this.$v.$reset()
      this.title = ''
      this.author = ''
      this.link = ''
      this.image = ''
      this.description = ''
      this.type = ''
      this.stacks = []
      this.isAgree = false
    },
  },

  mounted() { },
  async fetch ({store, params}) {
    await Promise.all([
      store.dispatch(`addNote/${actionTypes.GET_STACK_LIST}`)
    ])
  }
})
