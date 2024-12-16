const links = document.querySelectorAll('a[href]');
var linksList = []

links.forEach(link => {
    console.log(link.href);
    linksList.push(link.href);
});

// Convert the links array to a newline-separated string
const linksString = linksList.join("\n");

// Create a Blob containing the links data
const blob = new Blob([linksString], { type: "text/plain" });

// Create a download link
const a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "links.txt"; // Specify the desired filename
a.textContent = "Download Links";

// Append the link to the document
document.body.appendChild(a);

/*
// Create a Blob containing the JSON data
var blob = new Blob([jsonData], { type: "application/json" });

// Create a FileReader
var fileReader = new FileReader();

// Handle the 'load' event of the FileReader
fileReader.onload = function(event) {
    var fileContent = event.target.result;
    
    // Create a Blob with the file content
    var fileBlob = new Blob([fileContent], { type: "application/json" });
    
    // Create a URL for the Blob
    var fileURL = URL.createObjectURL(fileBlob);
    
    // You can use the 'fileURL' to download the file or perform any other actions
    console.log("File URL:", fileURL);
};

// Read the Blob as text
fileReader.readAsText(blob);

*/