'use server';

import { setServerCookie } from '@/lib/cookiesHelper';

export async function setCookieConsent(consent: 'granted' | 'denied') {
  setServerCookie('cookie_consent', consent, 365);
}