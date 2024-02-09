import Image from "next/image";
import {inspect} from "util";
import styles from './styles.module.css';


export default function Home() {
  return (
      <main className="flex min-h-screen items-center justify-start p-10">
          <div style={{ background: 'linear-gradient(to right, #333, #555)' }} className="absolute top-0 left-0 w-full h-20 flex ">
              <Image
                  src="https://github.com/nesqyk.png"  // Replace with the actual URL
                  alt="Peach"
                  width={100}  // Specify the width
                  height={50}  // Specify the height
              />
              <h1 className="text-3xl md:text-4xl lg:text-3xl text-white mb-4 p-4">
                  Nesqyk
              </h1>
          </div>
          <div className={styles.animatedContainer}>
              <h1 className={styles.text}>
                  Who Am I?
              </h1>
              <p className="text-gray-600">
                  &apos;Who am I?&apos; is a question with no definite answer.
              </p>

          </div>
      </main>
  );
}
