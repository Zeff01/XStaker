import { useEffect, useState } from "react";
import { injected } from "../components/wallet/connectors";
import { useWeb3React } from "@web3-react/core";

import networkIDNames from "../utils/networkNames";
import { toHex, truncateAddress } from "../utils/utils";
import useFunctions from "../lib/hooks/useFunctions";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import StakeMasterInfo from "./StakeMasterInfo";
import StakersInfo from "./StakersInfo";
import SignMessage from "./SignMessage";

const Home = () => {
  /*
  //account blockchain address
  //library web3 or ethers
  //connector the current connector, (*injected connecter what i used)
  //activate method to connect to wallet
  //deactivate disconnect to wallet
  */
  const { active, account, library, chainId, connector, activate, deactivate } =
    useWeb3React();

  const [signature, setSignature] = useState("");
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [error, setError] = useState("");
  const [balance, setBalance] = useState("");
  const [verified, setVerified] = useState();

  const {
    getxTokenAddress,
    enrollStakeMaster,
    TokenAddress,
    stakeMasterEnrolled,
    isAddressEnrolled,
    claimRewards,
    viewRewards,
    isViewRewards,
    stake,
    unStake,
    getBalance,
    getStakeMasterBalance,
    isStakeMasterBalance,
    getStakers,
    stakeDetails,
    getContractAddress,
  } = useFunctions();

  const connect = async () => {
    console.log("connect clicked");
    await activate(injected);
    localStorage.setItem("isWalletConnected", true);
  };
  const disconnect = async () => {
    console.log("disconnect clicked", account);

    await deactivate();
    localStorage.setItem("isWalletConnected", false);
  };

  const connectWalletOnPageLoad = async () => {
    if (localStorage?.getItem("isWalletConnected") === "true") {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    }
  };

  const handleInput = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  const signMessage = async () => {
    if (!library) return;
    try {
      console.log("signed", library);
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [message, account],
      });
      setSignedMessage(message);
      setSignature(signature);
    } catch (error) {
      setError(error);
    }
  };

  const verifyMessage = async () => {
    if (!library) return;
    try {
      const verify = await library.provider.request({
        method: "personal_ecRecover",
        params: [signedMessage, signature],
      });
      setVerified(verify === account.toLowerCase());
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getStakeMasterBalance(account);
  }, [getStakeMasterBalance]);

  useEffect(() => {
    connectWalletOnPageLoad();
  }, []);

  return (
    <div className="w-full h-full border-none p-0 m-0 flex border  bg-customize-bodybackground text-customize-textcolor ">
      <div>
        <Navbar />
      </div>

      <div className="col-span-2 w-full relative">
        <div></div>

        <Dashboard
          active={active}
          truncateAddress={truncateAddress}
          chainId={chainId}
          connect={connect}
          disconnect={disconnect}
          account={account}
          networkIDNames={networkIDNames}
          signMessage={signMessage}
          message={message}
          handleInput={handleInput}
          signature={signature}
        />
        <div className="grid grid-cols-3 gap-10 mt-10">
          <StakeMasterInfo
            isStakeMasterBalance={isStakeMasterBalance}
            getxTokenAddress={getxTokenAddress}
            account={account}
            TokenAddress={TokenAddress}
            stake={stake}
            unStake={unStake}
            claimRewards={claimRewards}
            viewRewards={viewRewards}
            isViewRewards={isViewRewards}
          />
          <StakersInfo
            getStakers={getStakers}
            account={account}
            stakeDetails={stakeDetails}
            enrollStakeMaster={enrollStakeMaster}
            stakeMasterEnrolled={stakeMasterEnrolled}
            isAddressEnrolled={isAddressEnrolled}
          />
    <SignMessage
    signMessage={signMessage}
    message={message}
    handleInput={handleInput}
    signature={signature}
    truncateAddress={truncateAddress}
    verifyMessage={verifyMessage}
    verified={verified}
    />
       
        </div>

        {/* <button onClick={() => getContractAddress()}>
            Contarct Address:
          </button> */}
      </div>
    </div>
  );
};

export default Home;
