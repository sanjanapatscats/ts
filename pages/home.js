import React from "react";
import Brands from "../components/Explore/Brands";
import Deck from "../components/Explore/Deck";
import Header from "../components/Explore/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import 'material-icons/iconfont/material-icons.css'; 


const MainPage = () => (
  <main className="">
    <section class="bg-black opacity-95">
      <div class="grid max-w-screen-xl px-4 pt-20 pb-8 -mb-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div class="mr-auto place-self-center lg:px-0 md:px-20 px-10 lg:col-span-7">
          <h1 class="max-w-2xl text-white text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ''">
            The <span className="text-6xl text-orange-700">TalentSYnc</span>{" "}
            does one thing: <br />
            <span className="text-md mt-2">
              it replaces{" "}
              <span className="text-6xl text-orange-700">third-party</span> trust
              with mathematical{" "}
              <span className="text-6xl text-orange-700">proof</span> that
              something happened.
            </span>
          </h1>
          <p class="max-w-2xl mb-6 mt-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Join the Revolution of Decentralized Freelancing with TalentSync!
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/girl1.jpeg"
            alt="hero image"
            width={500}
            height={500}
            className="shadow rounded-2xl"
          />
        </div>
      </div>
    </section>

    <section class="bg-black opacity-95 lg:pl-20 md:px-20 sm:px-20 px-20">
      <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            src="/camera1.jpeg"
            alt="hero image"
            width={400}
            height={500}
            className="rounded-2xl imageHide"
          />
          <div class="text-white sm:text-lg">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-white ''">
              <span className="text-4xl text-orange-700">AI Assisted</span>{" "}
              Decentralized Governance
            </h2>
            <p class="mb-8 font-light text-white-400 lg:text-xl">
              The DAO operates through community consensus, where members can
              propose and vote on decisions, including disputes, project
              proposals, and treasury management. TalentSync also integrates
              with Chainlink Functions, which enables GPT-4 to make a decision
              and vote in a decentralised fashion.
            </p>

            <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7 ''"
            >
              <li class="flex space-x-3">
                <span class="material-icons">chevron_right</span>
                <span class="text-base font-medium leading-tight text-white ''">
                  Decentralized autonomous organization for freelancers and
                  clients
                </span>
              </li>
              <li class="flex space-x-3">
                <span class="material-icons">chevron_right</span>
                <span class="text-base font-medium leading-tight text-white ''">
                  Allows members to earn reputation tokens by voting on disputes
                  and engading with the community
                </span>
              </li>
              <li class="flex space-x-3">
                <span class="material-icons">chevron_right</span>
                <span class="text-base font-medium leading-tight text-white ''">
                  We're partnering with ChainLink Oracles to bring ChatGPT into
                  the fold
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div class="text-white sm:text-lg">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-white ''">
              We invest in the world’s potential
            </h2>
            <p class="mb-8 font-light lg:text-xl">
              Smart Contract Escrow enables trustless transactions between
              clients and freelancers, as the payment is held in escrow until
              the work is completed to the satisfaction of the client.
            </p>

            <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7 ''"
            >
              <li class="flex space-x-3">
                <span class="material-icons">chevron_right</span>
                <span class="text-base font-medium leading-tight text-white ''">
                  No middleman
                </span>
              </li>
              <li class="flex space-x-3">
                <span class="material-icons">chevron_right</span>
                <span class="text-base font-medium leading-tight text-white ''">
                  Dispute resolution through DAO proposals
                </span>
              </li>
              <li class="flex space-x-3">
                <span class="material-icons">chevron_right</span>
                <span class="text-base font-medium leading-tight text-white ''">
                  Transparent transactions
                </span>
              </li>
            </ul>
          </div>
          <Image
            src="/comm1.jpeg"
            alt="hero image"
            width={700}
            height={600}
            className="rounded-2xl imageHide"
          />
        </div>
      </div>
    </section>
  </main>
);

const Header2 = () => (
  <div className="bg-black opacity-95 lg:pl-0 md:px-20 sm:px-20 px-20 text-white">
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto">
          <a href="index.html">Arsha</a>
        </h1>

        <a href="index.html" class="logo me-auto">
          <img src="assets/img/logo.png" alt="" class="img-fluid" />
        </a>
      </div>
    </header>
  </div>
);

const HomePage = () => {
  return (
    <>
      <Header />
      <Brands />
      <MainPage />
      <Footer />
    </>
  );
};

export default HomePage;
