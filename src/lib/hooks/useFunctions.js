import useWeb3Action from "./useWeb3Action";
import web3 from "../web3/web3";
import xStaker from "../web3/xStaker/xStaker";
import {  useState } from "react";

export default function useFunctions(account) {
  const [TokenAddress, setTokenAddress] = useState();
  const [isAddressEnrolled, setIsAddressEnrolled] = useState(false);
  const [isViewRewards, setIsViewRewards] = useState("");
  const [isStakeMasterBalance, setIsStakeMasterBalance] = useState('')
  const [stakeDetails, setStakeDetails] = useState([]);

  const {
    clear,
    error,
    isLoading,
    response,
    transact,
    call,
    transactionDone,
    transactionHash,
  } = useWeb3Action(web3, xStaker);



  async function getContractAddress(){
    console.log(await call(
      account, 
      { name: "getContractAddress" },
      [],
    ));
  }

  async function getxTokenAddress(account) {
    setTokenAddress(await call(account, { name: "xTokenCoreAddress" }, []));
  }

  async function enrollStakeMaster(account) {
    console.log('clicked')
    try {
      transact(
        account,
        { name: "enrollStakeMaster", stateMutability:"nonpayable"},
        [account]
      );
      console.log('enroll success')
    } catch (error) {
      console.log('this is error', error)
    }
 
  }

  async function stakeMasterEnrolled(account) {
    const enrolled = await call(account, { name: "stakeMasterEnrolled" }, [
      account,
    ]);
    setIsAddressEnrolled(enrolled.toString().toUpperCase());
  }

  async function claimRewards(account) {
    const claimRewards = transact(account, { name: "claimRewards" }, [account]);
    console.log("claimrewards", claimRewards);
  }

  async function viewRewards(account) {
    setIsViewRewards(await call(account, { name: "viewRewards" }, [account]));
  }

  async function stake(account, amount) {
    const stake = transact(
      account,
      { name: "stake", stateMutability: "payable" },
      [account, amount],
      "0"
    );
    console.log(stake);
  }

  async function unStake(account, amount) {
    const unStake = transact(
      account,
      { name: "unStake", stateMutability: "payable" },
      [account, amount],
      "0"
    );
    console.log(unStake);
  }


  async function getBalance(account) {
    web3.eth
      .getBalance(account)
      .then(console.log);
  }

  async function getStakeMasterBalance(account) {
    setIsStakeMasterBalance(await call(account, 
      { name: "getStakeMasterBalance", stateMutability: "nonpayable" },
       [ account]));
  }


  async function getStakers(account) {
    const info = (await call(account, 
      { name: "getStakers", stateMutability: "nonpayable" },
      [account]
      ));
      setStakeDetails(info)
        console.log(stakeDetails)
  }




 

  return {
    getxTokenAddress,
    TokenAddress,
    enrollStakeMaster,
    isAddressEnrolled,
    stakeMasterEnrolled,
    claimRewards,
    viewRewards,
    isViewRewards,
    stake,
    getBalance,
    getStakeMasterBalance,
    isStakeMasterBalance,
    getStakers,
    stakeDetails,
    unStake,
    getContractAddress
  };
}
