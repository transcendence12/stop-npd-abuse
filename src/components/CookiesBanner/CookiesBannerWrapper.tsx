import { cookies } from 'next/headers'
import { CookiesBannerClient } from './CookiesBannerClient'

export default async function CookiesBannerWrapper() {
  const cookieStore = cookies()
  const cookieConsent = cookieStore.get('cookie_consent')?.value

  if (cookieConsent) {
    return null
  }

  return <CookiesBannerClient />
}
