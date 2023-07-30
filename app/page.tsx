import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Ctalogs from "../components/Ctalogs";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      {/*
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
       <Login />

       */}

      <Header />
      <Slider />
      <Categories />
      <Ctalogs />
      <Footer />
    </>
  );
}
