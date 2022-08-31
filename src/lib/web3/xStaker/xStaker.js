import ABI from '../xStaker/XStaker.json'

export const CONTARCT_ADDRESS ="0x646929d64640dba01c942761BD80ab4876db2d79";


const xStaker =  (web3) =>  new web3.eth.Contract(ABI.abi, CONTARCT_ADDRESS);


export default xStaker;