const byteSize = (str) => {
  // write your code here
	const blob= new Blob([str]);
	let StringByteSize=blob.size;
	return StringByteSize;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
