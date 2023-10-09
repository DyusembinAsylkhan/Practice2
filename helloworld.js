import React from “react”;
import { useEffect, useState } from “react”;
import {
 helloWorldContract,
 connectWallet,
 updateMessage,
 loadCurrentMessage,
 getCurrentWalletConnected,
} from “./util/interact.js”;
import alchemylogo from “./alchemylogo.svg”;

//State variables
const [walletAddress, setWallet] = useState(“”);
const [status, setStatus] = useState(“”);
const [message, setMessage] = useState(“No connection to the network.”);
const [newMessage, setNewMessage] = useState(“”);

//called only once
useEffect(async () => { //TODO: implement
   
}, []);
function addSmartContractListener() { //TODO: implement
	
}
function addWalletListener() { //TODO: implement
	
}

const connectWalletPressed = async () => { //TODO: implement
 
};

const onUpdatePressed = async () => { //TODO: implement
 
};
