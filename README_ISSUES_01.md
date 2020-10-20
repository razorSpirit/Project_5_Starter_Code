Hi,
I am having trouble running the app for Project_5 StarNotary.
The issue is detailed below.

I appreciate any help to resolve this issue.

regards,
Tony


Issue:
 (1)  I am not able to get the contract instance when running the app.  
		Could not connect to contract or chain.  see : issue_index_js_01_02.jpg
        There are several errors when loading the app.  see: issue_index_js_01_01.jpg
         
           I have successfully deployed the contract to Rinkeby.
           https://rinkeby.etherscan.io/address/0x4b0b8a8062abb14b45f083e4f43daf0ed30abc90
  
        when using: index_save.js
        
(2) So, I modified index.js by hardcoding the account and the network and I was able to
       get the contract instance, but now I am getting eth_sendTransaction does not exist/is not                available.  see : issue_index_js_01_04.jpg
       Also, still seeing several errors when loading the app. see issue_index_js_01_01.jpg
  
  repository link:  https://github.com/razorSpirit/Project_5_Starter_Code

	The repository link 
	
	README.MD   has the required information for the project
	
	issue_index_js_01_01.jpg  chrome developer console - errors before app.start
	issue_index_js_01_02.jpg  chrome developer console - error from line 19
	issue_index_js_01_03.jpg  terminal console showing npm run dev
    issue_index_js_01_04.jpg  after modifying index.js , as explained above (2)