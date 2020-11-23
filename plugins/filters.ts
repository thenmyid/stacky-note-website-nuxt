import Vue from 'vue'

Vue.filter('formatDate', (value : string) => {
  const date = new Date(value)
  return date.toLocaleString([], {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
})

Vue.filter('formatDateTime', (value : string) => {
  const date = new Date(value)
  return date.toLocaleString([], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
})