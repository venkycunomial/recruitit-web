import Image from "next/image"


export function Logo(props) {
  return (
    <Image
      src="/images/recruitIT.png"
      alt="Cunomial"
      layout="fixed"
      height="40px"
      width="150px"
    />
  )
}
