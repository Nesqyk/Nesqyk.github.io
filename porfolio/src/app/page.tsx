import Image from "next/image";
import {inspect} from "util";
import styles from './styles.module.css';


export default function Home() {
  return (
      <main className="flex min-y-screen items-center justify-start p-10">
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
