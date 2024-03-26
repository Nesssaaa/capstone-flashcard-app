import Image from "next/image";

export default function AnimatedFox() {
  return (
    <div>
      <div>
        <Image src="/fox.gif" alt="fox gif" width={300} height={300} />
      </div>
    </div>
  );
}
