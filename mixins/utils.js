export default {
  methods: {
    goToSection: (section) => {
      window.location.hash = `#section-${section}`
    },
    callback: (isVisible, _entry, section) => {
      section.visible = isVisible
    },
  },
}
