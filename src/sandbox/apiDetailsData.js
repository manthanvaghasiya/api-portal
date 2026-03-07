// apiDetailsData.js

// 1. Define common errors once so you don't repeat them 250 times!
const commonErrors = [
    { code: '8000', name: 'Invalid Encrypted Request', logs: 'Decryption Failure' },
    { code: '8001', name: 'Json Is Empty', logs: 'Json Schema Request Empty' },
    { code: '8002', name: 'Invalid Json', logs: 'Json Is Not Valid.' },
    { code: '8003', name: 'Data Size Limit Exceeded', logs: 'Field Is Not In The Format Mentioned.' },
    { code: '8004', name: 'Missing Required Field Data', logs: 'Mandatory Field Data Is Missing.' },
    { code: '8005', name: 'Missing Required Field', logs: 'Mandatory Field Is Missing.' },
    { code: '8006', name: 'Invalid Field Length', logs: 'Length Of Field Exceeds Defined Length.' },
    { code: '8007', name: 'Invalid Json,Open Curly Brace Missing.', logs: 'Open Brace Missing In Json.' },
    { code: '8008', name: 'Invalid Json,End Curly Brace Missing.', logs: 'Closing Brace Missing In Json.' },
    { code: '8009', name: 'Internal Server Error', logs: 'White Space Characters.' },
    { code: '8010', name: 'Internal Service Failure', logs: 'Routing Failure.' },
    { code: '8011', name: 'Backend Host Not Found', logs: 'Backend Host Not Found' },
    { code: '8012', name: 'Backend Connection Timeout', logs: 'When Connection Gets Timeout' },
    { code: '8013', name: 'Backend Read Timeout', logs: 'Timed Out For Reading The Response' },
    { code: '8014', name: 'Backend Bad Url', logs: 'Backend Bad Url' },
    { code: '8016', name: 'Decryption Failure', logs: 'Request Is Not Encrypted Properly' },
    { code: '8019', name: 'Respose Encryption Failure', logs: 'Response Cannot Be Encrypted' },
  ];
  
  // 2. Export all API details grouped by their URL slug
  export const apiDetails = {
    // SLUG 1: account-statement
    "account-statement": {
      title: "Account Statement",
      breadcrumbs: "Payments / Banking / Bank Statement",
      method: null, // No method badge for this one
      description: "This API is used to fetch the account statement (upto 2000 records) of all registered account numbers of the customers.",
      terminalType: "XML",
      codeSnippet: `<xml>\n  <ReferenceNumber>20190704000016</ReferenceNumber>\n  <MerchantId>FLP0000001</MerchantId>\n  <MerchantPassword>admin12345</MerchantPassword>\n  <MonthYear>042019</MonthYear>\n  <CardNumber>4336620020565646</CardNumber>\n  <TransactionRemark>FLIPKART Card</TransactionRemark>\n</xml>`,
      inputData: [
        { name: 'ReferenceNumber', type: 'alphanumeric', desc: 'Retrieval Reference Number.', mandatory: 'Y' },
        { name: 'MerchantID', type: 'alphanumeric', desc: 'Merchant Id.', mandatory: 'Y' },
        { name: 'MerchantPassword', type: 'alphanumeric', desc: 'Merchant Password.', mandatory: 'Y' },
        { name: 'CardNumber', type: 'alphanumeric', desc: 'Prepaid Card Number.', mandatory: 'N' },
        { name: 'MonthYear', type: 'numeric', desc: 'Month and Year for which account statement required in MMYYYY format.', mandatory: 'N' },
        { name: 'TransactionRemark', type: 'alphanumeric', desc: 'Remark provided during transaction..', mandatory: 'N' },
      ],
      outputData: [
        { name: 'Username', type: 'alphanumeric', desc: 'User Name' },
        { name: 'TransactionCode', type: 'numeric', desc: 'Transaction code' },
        { name: 'RRN', type: 'alphanumeric', desc: 'Retrieval Reference Number' },
        { name: 'CardNumber', type: 'alphanumeric', desc: 'Card Number' },
        { name: 'TotalDebitAmt', type: 'numeric', desc: 'Total Debit Amount' },
        { name: 'TotalCreditAmt', type: 'numeric', desc: 'Total Credit Amount' },
        { name: 'LedgerBalAmt', type: 'numeric', desc: 'Ledger Balance Amount' },
        { name: 'AvailableBalAmt', type: 'numeric', desc: 'Available Balance Amount' },
        { name: 'ResponseCode', type: 'alphanumeric', desc: 'Response Code : successful (00)' },
        { name: 'ResponseData', type: 'alphanumeric', desc: 'Information Holding Tag in failure cases' },
        { name: 'PreAuthTransactionDtl', type: 'alphanumeric', desc: 'PreAuthTransactionDtl will contain Preauth transactions details' },
        { name: 'PostedTransactionCount', type: 'numeric', desc: 'Posted Transaction Count in the statement.' },
        { name: 'PreAuthTransactionCount', type: 'numeric', desc: 'Pending Transaction Count.' },
        { name: 'PreAuthHoldAmt', type: 'numeric', desc: 'Total PreAuth Hold Amount' },
        { name: 'MCCGrpCode', type: 'numeric', desc: 'Merchant Group code' },
        { name: 'HoldAmount', type: 'numeric', desc: 'Holding Amount' },
      ],
      errorData: commonErrors
    },
  
    // SLUG 2: add-funds
    "add-funds": {
      title: "Add Funds API",
      breadcrumbs: "Payments / Wallet / Add Funds",
      method: "POST",
      description: "This API is used for funding wallet based on mobile number.",
      terminalType: "JSON",
      codeSnippet: `{\n  "MOBILE": "9652657567",\n  "CHANNEL": "POCKETS",\n  "AMOUNT": "1.00",\n  "RRN": "PKT0000020"\n}`,
      inputData: [
        { name: 'MOBILE', type: 'Number', desc: 'A valid 10 digit mobile number.', mandatory: 'Y' },
        { name: 'CHANNEL', type: 'String', desc: 'Respective channel code.', mandatory: 'Y' },
        { name: 'AMOUNT', type: 'Double', desc: 'Amount should not be more than 10000 per month Amount value is in rupee..', mandatory: 'Y' },
        { name: 'RRN', type: 'Alphanumeric', desc: 'unique reference number Example: PKT0000017 First three characters of the reference number should be channel code..', mandatory: 'Y' }
      ],
      outputData: [
        { name: 'STATUS', type: 'String', desc: 'Current Status' },
        { name: 'LOCALTRANDATE', type: 'String', desc: 'Transaction date (YYYYMMDD)' },
        { name: 'LOCALTRANTIME', type: 'String', desc: 'Transaction time' },
        { name: 'AVAILBALANCE', type: 'Number', desc: 'Available balance in the wallet after adding funds' },
        { name: 'CHANNEL', type: 'String', desc: 'Respective channel code' },
        { name: 'RRN', type: 'Alphanumeric', desc: 'unique reference number Example: PKT0000017 First three characters of the reference number should be channel code.' },
        { name: 'MESSAGE', type: 'String', desc: 'Description message' },
        { name: 'RESPONSE', type: 'Number', desc: 'Response code' }
      ],
      errorData: commonErrors
    },
  
    // SLUG 3: agent-login
    "agent-login": {
      title: "Agent Login",
      breadcrumbs: "Payments / BBPS / Agent / Agent Login",
      method: "POST",
      description: "This API is used by the agent to login, no authorization header is required to invoke this API. In case the user has not reset his password at least once, this API will provide agent data with password reset flag.",
      terminalType: "JSON",
      codeSnippet: `{\n  "loginHash": "UkI3NlJCMTJBR1Q1Mjc3OTU3MjY6cGFzc3dvcmQ="\n}`,
      inputData: [
        { name: 'LoginHash', type: 'nvarchar', desc: 'Basic Base64 encode .', mandatory: 'Y' }
      ],
      outputData: [
        { name: 'AgentID', type: 'varchar', desc: '20digit unique Agent ID of the Agent involved in the transaction' },
        { name: 'PasswordReset', type: 'varchar', desc: 'Whether password reset is required or not. For first time this value should be true to indicate password reset is required.' },
        { name: 'AgentFisrtName', type: 'varchar', desc: 'First name of agent.' },
        { name: 'AgentLastName', type: 'varchar', desc: 'Last name of agent.' },
        { name: 'AgentPhoneNumber', type: 'int', desc: '10digit Mobile number of the agent and starts with 7/8/9 .' },
        { name: 'AgentShopName', type: 'varchar', desc: 'Shop Name of the Agent' },
        { name: 'AgentRegisteredAdrline', type: 'varchar', desc: 'Registered address of agent.' },
        { name: 'AgentRegisteredCity', type: 'varchar', desc: 'Registered city of agent.' },
        { name: 'AgentRegisteredCountry', type: 'varchar', desc: 'Registered country of agent.' },
        { name: 'AgentRegisteredPinCode', type: 'int', desc: 'Registered pin code of the agent.' },
        { name: 'AgentRegisteredState', type: 'varchar', desc: 'Registered state of the agent.' },
        { name: 'AgentGeoCode', type: 'varchar', desc: 'Latitude and longitude of the Agent location – Represented in degrees with 4 digits after decimal' },
        { name: 'Latitude', type: 'varchar', desc: 'Latitude of the agent location.' },
        { name: 'Longitude', type: 'varchar', desc: 'Longitude of the agent location' },
        { name: 'AgentPaymentchannel', type: 'varchar', desc: 'Payment channel of the agent like ‘AGT’' },
        { name: 'TerminalId', type: 'int', desc: 'Id' },
        { name: 'ErrorMessages', type: 'int', desc: 'if any error messaged produced.' }
      ],
      errorData: commonErrors
    },

    //section - B
    // SLUG 4: bank-statement
    "bank-statement": {
        title: "bank-statement",
        breadcrumbs: "Payments / BBPS / Agent / Agent Login",
        method: "POST",
        description: "This API is used by the agent to login, no authorization header is required to invoke this API. In case the user has not reset his password at least once, this API will provide agent data with password reset flag.",
        terminalType: "JSON",
        codeSnippet: 
        `{
            "CORPID": "PRACHICIB1",
            "USERID": "USER3",
            "AGGRID": "TXBCIB01N",
            "ACCOUNTNO": "000405001257",
            "FROMDATE": "01-01-2016",
            "TODATE": "30-12-2016",
            "URN": "15639710001"
          }`,
        inputData: [
            { name: 'AGGRID', type: 'Alphanumeric', desc: 'Unique id created by ICICI for customer to perform authorized/regulated transactions.', mandatory: 'Y' },
            { name: 'CORPID', type: 'Alphanumeric', desc: 'Corporate ID assigned for the Corporate Internet Banking (CIB).', mandatory: 'Y' },
            { name: 'USERID', type: 'Alphanumeric', desc: 'User ID under Corporate ID in CIB.', mandatory: 'Y' },
            { name: 'ACCOUNTNO', type: 'Alphanumeric', desc: 'Account Number mapped to user.', mandatory: 'Y' },
            { name: 'FROMDATE', type: 'Date', desc: 'From date (DD-MM-YYYY).', mandatory: 'Y' },
            { name: 'TODATE', type: 'Date', desc: 'To date (DD-MM-YYYY).', mandatory: 'Y' },
            { name: 'URN', type: 'Alphanumeric', desc: 'URN provided at Registration time.', mandatory: 'Y' },
          ],
        outputData: [
            { name: 'AGGRID', type: 'Alphanumeric', desc: 'Unique id created for authorized transactions' },
            { name: 'CORPID', type: 'Alphanumeric', desc: 'Corporate ID assigned for CIB.' },
            { name: 'USERID', type: 'Alphanumeric', desc: 'User ID under Corporate ID' },
            { name: 'ACCOUNTNO', type: 'Alphanumeric', desc: 'Account Number mapped to user' },
            { name: 'URN', type: 'Alphanumeric', desc: 'URN provided at Registration time' },
            { name: 'Record', type: 'Nested JSON', desc: 'Contain bank statement records' },
            { name: 'MESSAGE', type: 'Text', desc: 'Error Message (Not available in Success)' },
            { name: 'RESPONSE', type: 'Text', desc: 'API Response: "SUCCESS" or "FAILURE"' },
          ],
        errorData: [
            { code: '8000', name: 'Invalid Encrypted Request', logs: 'Decryption Failure' },
            { code: '8001', name: 'Json Is Empty', logs: 'Json Schema Request Empty' },
            { code: '8002', name: 'Invalid Json', logs: 'Json Is Not Valid.' },
            { code: '8004', name: 'Missing Required Field Data', logs: 'Mandatory Field Data Is Missing.' },
            { code: '8005', name: 'Missing Required Field', logs: 'Mandatory Field Is Missing.' },
            { code: '8010', name: 'Internal Service Failure', logs: 'Routing Failure.' },
            { code: '8012', name: 'Backend Connection Timeout', logs: 'When Connection Gets Timeout' },
          ]
      }
  };