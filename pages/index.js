import Head from "next/head";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-mainBG h-screen p-[40px]">
      <Head>
        <title>Whatsapp Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-appBG w-[100%] max-h-full shadow-mainShadow flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
