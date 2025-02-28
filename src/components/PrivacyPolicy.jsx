import React from "react";
import { useNavigate } from "react-router-dom";

const privacyContent = `
PRIVACY POLICY STATEMENT

1. Privacy Policy Statement

We respect your privacy and the confidentiality of your personal information and data. This Privacy Policy Statement outlines what personal information and data we collect and how we use and protect it.

2. About Us 

ElevatePesa  is an online  lending company regulated by the Uganda Microfinance Regulatory Authority. We provide  lending products and other financial services (“Online Services”) accessible from our mobile application.

3. Agreement to Use of Personal Information and Data 

We will process your personal information with your consent or in accordance with the law.  Consent shall be given through our products and services agreements or terms of service. We  will only disclose your personal information if: 

• the law requires it; 

• we have a public duty to disclose the information; 

• our or your legitimate interests require disclosure; or 

• you agreed that we may disclose your information. 

4. Information We Collect 

4.1. We require personal information to operate and successfully provide our Online  Services. You provide us with personal information through our mobile application and  website which falls under the following categories: 

4.1.1. personal information such as registration information, billing and collection  information, and any information as a result of your communication and  commercial relationship with us, 

4.1.2. personal and device information collected automatically through the use of our  mobile application and website such as device information, log data, product  usage data, and information stored on the device such as installed applications,  SMS logs, contact lists, primary email address, third party account, and device phone number information; and 

4.1.3. personal information collected from third-party sources such as public databases (credit reference bureaus and identification registries), social network  accounts with your consent, and third-party data providers.  

4.2. We take steps to ensure your consent is obtained before personal information is  collected from you. 

5. How we use the Personal Information and Data 

We use, collect, store, process, and analyze the personal information and data that we collect from you for the following purposes:

● to improve our online lending products and services and your user experience; 

● for research and development; 

● for billing and collection; 

● to contact you regarding your account or send you system alert messages; 

● to give you information about our other online products and services; 

● to provide customer support; 

● to aid in credit analysis; 

● to verify your identity; 

● to meet legal requirements or respond to lawful requests by authorities; 

● to prosecute and defend our rights in a legal proceeding or enforce compliance with any agreement with us; 

● to give information to authorized third parties; and 

● for other related purposes in connection with our Online Services. 

By consenting to this Privacy Policy, you agree that we may process or store your data outside of Uganda, provided adequate measures are in place to secure your data.


6. Protecting Personal Information and Data 

6.1. We take appropriate technical and organizational measures to protect the personal  information and data provided by you from loss, misuse, unauthorized access,  disclosure, alteration, and destruction, taking into account the risks involved in the  processing and the nature of the personal information and data.  

6.2. Any personal information or data transmitted through the mobile application is  protected by Secure Socket Layer (SSL) encryption. Your personal information and  data can only be accessed by authorized third parties that need access to such  information and data to perform specified services.  

6.3. Where applicable, we shall request such third-party service providers to comply with  our privacy policies if they require access to any Personal
`;

const styles = {
  container: {
    maxWidth: "100%",
    // margin: "50px auto",
    padding: "20px",
    backgroundColor: "#1a1a2e",
    color: "white",
    // borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.6"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#ff4757",
    textAlign: "center"
  },
  paragraph: {
    fontSize: "1.1rem",
    marginBottom: "10px",
    opacity: 0.9
  },
  content: {
    whiteSpace: "pre-line" // Retains line breaks from the string
  }
};

function PrivacyPolicy() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <div style={styles.content}>{privacyContent}</div>
      <center>
        <button
          onClick={handleGoHome}
          style={{
            backgroundColor: "#ff4757",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "20px",
            display: "block",
            maxWidth: "100%"
          }}
        >
          Go Back to Home
        </button>
      </center>
    </div>
  );
}

export default PrivacyPolicy;
