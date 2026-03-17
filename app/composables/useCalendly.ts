const showCalendly = ref(false)

export const useCalendly = () => {
  function openCalendly() {
    showCalendly.value = true
  }

  function closeCalendly() {
    showCalendly.value = false
  }

  return {
    showCalendly,
    openCalendly,
    closeCalendly
  }
}
