const WHATSAPP_NUMBER = '551999899436'
const WHATSAPP_MSG = 'Olá, vim do site e gostaria de mais informações.'

const ADDRESS_QUERY = 'Rua Dona Eglantina Botaccini Duarte, 35, Campinas, SP, Brazil'

export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MSG)}`
export const TEL_URL = `tel:+${WHATSAPP_NUMBER}`
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`
