import Image from "next/image"

export function Logo(props) {
  return (
    <Image
      src="/images/cunomial-logo-new.png"
      alt="Cunomial Logo"
      layout="fixed"
      height="40px"
      width="160px"
    />
  )
}
