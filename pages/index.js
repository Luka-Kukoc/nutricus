import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Auth } from '@supabase/auth-ui-react'
import Account from '../components/Account'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
export default function Home() {
  /* const session = useSession()
  const supabase = useSupabaseClient() */

  return (
    <div>Homepage</div>
    /*  <div className='container' style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme='dark' />
      ) : (
        <Account session={session} />
      )}
    </div> */
  )
}
