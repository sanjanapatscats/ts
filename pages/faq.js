import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "",
  rows: [
    {
      title: "What is TalentSync?",
      content: `TalentSync is a decentralized autonomous organization (DAO) that aims to create a global community of freelancers, entrepreneurs, and investors. The DAO is designed to facilitate collaboration, innovation, and growth by providing a decentralized platform for freelancers to connect with potential clients, and entrepreneurs to showcase their projects and seek funding.`,
    },
    {
      title: "How does TalentSync work?",
      content:
        "TalentSync is a decentralized autonomous organization (DAO) that acts as an arbitrator in disputes between freelancers and clients. The DAO is built on the Ethereum blockchain and operates in a decentralized manner using smart contracts. The process begins with either the freelancer or client initiating a dispute by submitting the details of the disagreement to the DAO. Once the dispute is submitted, the DAO members can review the conversation and vote on the outcome. The decision is made by a majority vote of the DAO members, and the outcome is automatically enforced through the smart contract.",
    },
    {
      title: "How is DAO teasury handled?",
      content:
        "In TalentSync, the treasury is managed through a fee charged on transactions. When a client makes an offer, the DAO charges a 20% fee which goes into the treasury. Similarly, every time a freelancer is paid, 20% of the payment goes into the treasury.The funds in the treasury are then managed through a proposal system. DAO members can make a proposal to withdraw funds from the treasury for a specific purpose, such as funding a new project or hiring a developer. The proposal is then voted on by the DAO members and if it passes, the funds are withdrawn from the treasury and used for the proposed purpose. To ensure that only reputable DAO members have access to the funds, the DAO uses a reputation NFT system. Members can earn reputation by contributing to the DAO through voting and proposing initiatives. The more reputation a member has, the more weight their vote carries and the more funds they can withdraw from the treasury. This system incentivizes active participation and contribution to the DAO community.",
    },
    {
      title: "How can I earn rewards in TalentSync?",
      content:
        "Great question! In TalentSync, members can earn rewards by actively participating in the governance process. This includes voting on proposals, submitting proposals, and actively contributing to the community. Specifically, members who vote for successful proposals are rewarded with reputation tokens, which can be used to unlock higher-level NFTs. These NFTs can be traded for profits, providing an additional incentive for members to actively participate in the DAO's governance process. The amount that each member can withdraw is based on their reputation NFT, which is determined by their participation and success in previous DAO activities. The higher the reputation NFT, the more funds a member can withdraw. This ensures that members who have contributed more to the DAO have a greater say in how the funds are used.",
    },
  ],
};

const styles = {
  bgColor: "transparent",
  titleTextColor: "blue",
  rowTitleColor: "white",
  rowContentColor: "grey",
  arrowColor: "white",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const faq = () => {
  return (
    <div className="px-40 py-20 pt-40 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 min-h-screen text-white">
      <h1 className="text-white text-3xl font-extrabold">FAQ</h1>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default faq;
