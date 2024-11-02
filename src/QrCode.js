import {useRef, useState} from "react";
import {saveAs} from "file-saver";

const QrCode = ()=>{
	const rUrl = useRef();
	const [url, setUrl] = useState("");
	const [qrcode, setCode] = useState("");

	const hUrl = (event)=>{setUrl(event.target.value)}

	const gpr = (event)=>{
		event.preventDefault();
		let apiUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" +url;
		
		setCode(apiUrl);
	}

	const dpr = (event)=>{
		event.preventDefault();
		saveAs(qrcode, "download");
	}

	return(
	<>
		<center>
			<h1>QrCode Generator</h1>
			<form onSubmit = {gpr}>
				<input type = "text" placeholder = "Enter URL" onChange = {hUrl}/><br/><br/>
				<input type = "submit" value = "Generate QR"/>
			</form>
			<img src = {qrcode}/>

			<form onSubmit = {dpr}>
				<input type = "submit" value = "Download QR"/>
			</form>
		</center>
	</>
	)
}

export default QrCode;