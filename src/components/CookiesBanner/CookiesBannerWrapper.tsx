import { cookies } from 'next/headers'
import { CookiesBannerClient } from './CookiesBannerClient'


export default async function CookiesBannerWrapper() {
  const cookieStore = cookies()
  const cookieConsent = (await cookieStore).get('cookie_consent')?.value

  console.log("COOKIE CONSENT: ", cookieConsent)

  if (cookieConsent) {
    return null
  }

  return <CookiesBannerClient />
}
