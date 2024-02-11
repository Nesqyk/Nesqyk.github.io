import Image from "next/image";
import {inspect} from "util";
import styles from './styles.module.css';


export default function Home() {
  return (
      <div className="min-h-screen items-center flex justify-center">
          <div id="navBar" className="flex justify-between p-5"></div>
          <div className="flex flex-col items-right p-10">
              <Image
                  src="https://github.com/nesqyk.png"
                  alt="Profile Picture"
                  width={250}
                  height={200}
                  className="rounded-full border-4 border-blue-100"
              />

          </div>
          <div className="flex flex-col  ">
              <h1 className="text-4xl font-bold mt-4 text-blue-100">Hello, I'm <span className="text-blue-500">Nesqyk</span></h1>
              <p className="text-xl text-center mt-2 text-blue-100">A Filipino Pixel Artist / Student who is Interested in Tech Thing.</p>

          </div>
      </div>
      );
}


