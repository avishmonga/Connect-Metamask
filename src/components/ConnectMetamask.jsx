import React,{useState} from "react";
import { ethers } from "ethers";

const ConnectMetamask =  () =>{
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connectButtonText, setConnectButtonText] = useState('Connect Wallet');
    
    const connectWalletHandler = async() =>{
        if(window.ethereum && window.ethereum.isMetaMask) {
            try{
                let result = await window.ethereum.request({ method: 'eth_requestAccounts'})
                let bal = await window.ethereum.request({method: 'eth_getBalance', params: [result[0], 'latest']})
                setUserBalance(ethers.formatEther(bal));
                setDefaultAccount(result[0])
                setConnectButtonText("Wallet connected")
            }catch(err){
                console.log("err" , err)
            }

        }else{
            alert("Install metamask in your browser")
        }
    }
    return <>
    <div className="flex flex-col gap-7 text-left">
    <button onClick={connectWalletHandler} className="bg-indigo-700 p-4 font-mono text-white m-b-3 w-96">{connectButtonText}</button>

        <p className="text-indigo-700 font-mono">
            Address: {defaultAccount}
        </p>
        <p className="text-indigo-700 font-mono">
            Balance: {userBalance && userBalance + "ETH"} 
        </p>
    </div>
    
    </>
}

export default ConnectMetamask