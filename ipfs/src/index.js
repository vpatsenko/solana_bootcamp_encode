import _ from 'lodash';
import { create } from "ipfs-http-client";
import { Buffer } from 'buffer';

const client = create('https://ipfs.infura.io:5001/api/v0');


async function upload() {

	let res;
	try {
		const text = document.getElementById('inputData').value;
		res = await client.add(text);
	} catch (e) {
		console.error(e);
	}


	const cid = res.cid.toString()

	const cidWrapper = document.createElement('div');
	cidWrapper.innerHTML = `your cid is ${cid}`;

	document.body.appendChild(cidWrapper);
}

async function retrive() {
	let cid = document.getElementById("inputCid").value;
	console.log(cid);

	let res = "";

	try {
		for await (const chunk of client.cat(cid)) {
			let str = Buffer.from(chunk.buffer).toString();
			res += str;
		}
	} catch (e) {
		console.log(e);
	}

	const resWrapper = document.createElement('div');
	resWrapper.innerHTML = `uploaded data: ${res}`;
	document.body.appendChild(resWrapper);
}

(async () => {

	const wrapperUpload = document.createElement('div');

	const inputData = document.createElement('input');
	inputData.id = "inputData";
	inputData.type = 'text';
	inputData.placeholder = 'Enter Data';

	const uploadButton = document.createElement('button');
	uploadButton.innerText = 'Upload';
	uploadButton.onclick = upload;

	wrapperUpload.appendChild(inputData);
	wrapperUpload.appendChild(uploadButton);


	const wrapperRetrive = document.createElement('div');

	const input = document.createElement('input');
	input.id = "inputCid";
	input.type = 'text';
	input.placeholder = 'Enter CID';

	const retriveButton = document.createElement('button');
	retriveButton.innerText = 'Retrive';
	retriveButton.type = "button";
	retriveButton.onclick = retrive;

	wrapperRetrive.appendChild(input);
	wrapperRetrive.appendChild(retriveButton);

	document.body.appendChild(wrapperUpload);
	document.body.appendChild(wrapperRetrive);

})()