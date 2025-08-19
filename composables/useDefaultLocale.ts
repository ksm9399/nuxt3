export const useDefaultLocale = (fallback = 'en') => {
  const locale = ref(fallback)

  // navigator객체 서버에서 접근 불가
  // locale.value = navigator.language.split('-')[0]

  if (import.meta.server) {
    const reqLocale = useRequestHeader('accept-language')?.split(';')[0].split(',')[0]
    console.log('reqLocale: ',reqLocale)

    if (reqLocale) {
      locale.value = reqLocale;
    }
  }
  else if (import.meta.client) {
    locale.value = navigator.language.split('-')[0]
  }

  return locale
}