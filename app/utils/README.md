#Ferhat Pay

--Decide the app that you want to download either Agent App or Client App
--You download the app from App store or Apple store
--Open App assign the relevant key depending on the app selected either Agent key or client key from database
--Select a language to continue into the app that you want to use.
--2 option Register and login
--provide mobile number --(to be used for Account Number) --account number purifier and generator

Run these commands on your local computer.
For an existing project …
Step 1: Navigate to your repository’s directory:

cd /path/to/your/repo
Step 2: Configure your local repository to push to the cPanel-hosted repository:

git remote add origin ssh://ferhmguw@ferhatpay.com:21098/home/ferhmguw/ferhatPayServer
git push -u origin master
To start a new project …
Step 1: Clone the cPanel-hosted repository to your local computer and navigate to its directory:

git clone ssh://ferhmguw@ferhatpay.com:21098/home/ferhmguw/ferhatPayServer
cd ferhatPayServer
Step 2: Create a README file:

echo "# README" >> README.md
Step 3: Commit the README file to the project:

git add README.md
git commit -m "Initial Commit"
git push -u origin master
