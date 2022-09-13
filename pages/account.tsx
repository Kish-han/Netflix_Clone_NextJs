import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Membership from '../components/Membership'
import useAuth from '../hooks/useAuth'
import useSubscription from '../hooks/useSubscription'
import payments, { goToBillingPortal } from '../lib/stripe'

interface Props {
  products: Product[]
}

function Account({ products }: Props) {
  console.log(products)
  const { user, logout, loading } = useAuth()
  const subscription = useSubscription(user)
  const [isBillingLoading, setBillingLoading] = useState(false)

  if (loading) return null

  console.log(subscription)
  return (
    <div className="">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="data:image/png;base64,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" />
      </Head>
      <header className={`bg-[#141414]`}>
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>
      <main className="mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">
              Member since {subscription?.created}
            </p>
          </div>
        </div>

        <Membership />

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
          <h4 className="text-lg text-[gray]">Plan Details</h4>
          {/* Find the current plan */}
          <div className="col-span-2 font-medium">
            {
              products.filter(
                (product) => product.id === subscription?.product
              )[0]?.name
            }
          </div>
          <p
            className="cursor-pointer text-blue-500 hover:underline md:text-right"
            onClick={goToBillingPortal}
          >
            Change plan
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
          <h4 className="text-lg text-[gray]">Settings</h4>
          <p
            className="col-span-3 cursor-pointer text-blue-500 hover:underline"
            onClick={logout}
          >
            Sign out of all devices
          </p>
        </div>
      </main>
    </div>
  )
}

export default Account

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message))

  return {
    props: {
      products,
    },
  }
}