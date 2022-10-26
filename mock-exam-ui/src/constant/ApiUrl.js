const PORT = "9002"
const API_VERSION = 'api'
const HOST = `http://localhost:${PORT}/${API_VERSION}`

export const API_GET_CURRENT_USER = `${HOST}/user/principal`

export const API_POST_SIGN_UP = `${HOST}/auth/sign-up`
export const API_POST_SIGN_IN = `${HOST}/auth/sign-in`

export const API_GET_ALL_PUBLIC_EXAMS = `${HOST}/exam`



