import Connect from "@/components/Connect";
import Feed from "@/components/Feed";
import Newsletter from "@/components/Newsletter";
export const revalidate = 10
export default function Home() {
  return (
    <main>
      <Newsletter />
      <Feed />
      <Connect />
    </main>
  )
}
