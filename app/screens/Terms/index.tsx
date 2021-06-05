import React, { useState, useEffect } from 'react';
import { ScrollView, View, ActivityIndicator, StyleSheet } from 'react-native';
// import navigationStyle from '../../components/navigationStyle';
import { SafeBlueArea, Text } from '@components';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';

const Licensing = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { setOptions } = useNavigation();
	const { type } = useRoute().params;
	const { colors } = useTheme();

	useEffect(() => {
		setOptions({
			headerTitle: () => (
				// <TouchableOpacity disabled={isLoading} style={styles.save} onPress={() => {}}>
				<Text whiteColor style={{}}>
					{type}
				</Text>
				// </TouchableOpacity>
			),
			headerStyle: {
				borderBottomWidth: 0,
				elevation: 0,
				shadowOpacity: 0,
				shadowOffset: { height: 0, width: 0 },
				backgroundColor: colors.customHeader,
			},
		});
		setIsLoading(false);
	}, []);

	const renderTerms = () => (
		<View style={{ padding: 20 }}>
			<Text whiteColor>Customer Terms and Condition</Text>
			<View style={{ height: 20, opacity: 0 }} />
			{/* <Text whiteColor>Copyright (c) 2018-2020 FerhatPay</Text> */}
			<View style={{ height: 20, opacity: 0 }} />
			<Text whiteColor semibold style={{ marginBottom: 15 }}>
				1.Welcome
			</Text>
			<Text whiteColor style={styles.txt}>
				* This user agreement is a contract between you and XXXXX governing your use of your XXXXX account and
				its services.
			</Text>
			<Text whiteColor style={styles.txt}>
				* For an individual to hold an XXXXX account he/she must be of at least 16 years old and must be a
				student enrolled in one of Setif’s Universities of Ferhat Abbas .
			</Text>
			<Text whiteColor style={styles.txt}>
				* By opening and using XXXXX account you agree to comply with all the terms and conditions in this user
				agreement.
			</Text>
			<Text whiteColor style={styles.txt}>
				* Please read and fully understand each clause set out in these rules
			</Text>
			<Text whiteColor style={styles.txt}>
				* Note: We may revise this agreement and any of the policies time to time. The revised version will be
				effective at the time we post it.
			</Text>
			<View style={{ height: 20, opacity: 0 }} />
			<Text whiteColor semibold style={{ marginBottom: 15 }}>
				A. WHAT WE MEAN
			</Text>
			<Text whiteColor style={styles.txt}>
				1. Account means your XXXXX account administered by XXXXX
			</Text>
			<Text whiteColor style={styles.txt}>
				2. Agreement means the Application form together with these rules, which form a legally binding
				agreement between You and Us.
			</Text>
			<Text whiteColor style={styles.txt}>
				3. Cash means the Dinnars (DZD). Campus will announce if there is a change in currency in use by XXXXX.
			</Text>
			<Text whiteColor style={styles.txt}>
				4. Charges mean the fee you will pay for using the XXXXX Mobile Money Transfer services.
			</Text>
			<Text whiteColor style={styles.txt}>
				5. Credit means the transfer of E-money into your account.
			</Text>
			<Text whiteColor style={styles.txt}>
				6. Debit means the transfer of E-money out of your account.
			</Text>
			<Text whiteColor style={styles.txt}>
				7. Customer call centre means the XXXXX customer call centre
			</Text>
			<Text whiteColor style={styles.txt}>
				8. Deposit means the cash Deposit you make at the appointed XXXXX Agent outlet.
			</Text>
			<Text whiteColor style={styles.txt}>
				9. E-money means the electronic money created and issued by XXXXX which will equate to the deposits.
			</Text>
			<Text whiteColor style={styles.txt}>
				10. ID means for Algerian nationals an Algerian National Identity card, passport or Student ID card; and
				passport with a residence and/or work permit for foreigners.
			</Text>
			<Text whiteColor style={styles.txt}>
				11. Outlet/Agent means each entity registered by XXXXX to fulfil functions of Mobile Money Transfer.
			</Text>
			<Text whiteColor style={styles.txt}>
				12. PIN means the Personal Identification Number chosen by You.
			</Text>
			<Text whiteColor style={styles.txt}>
				13. Secret password means the secret password allocated to You upon activation of your account.
			</Text>
			<Text whiteColor style={styles.txt}>
				14. Services mean the XXXXX Mobile Money Transfer Services to be offered through XXXXX, which will
				enable You to perform transactions.
			</Text>
			<Text whiteColor style={styles.txt}>
				15. SMS means short message services.
			</Text>
			<Text whiteColor style={styles.txt}>
				16. Start PIN means the 4-6 digit PIN allocated to You that you must use to activate Your account and
				which you will always use when making money transfers through your cell phone.
			</Text>
			<Text whiteColor style={styles.txt}>
				17. Transactions mean one or more of the transactions listed in clause 4 below.
			</Text>
			<Text whiteColor style={styles.txt}>
				18. USSD means the Unstructured Supplementary Service Data menu on Your cellphone that lists all the
				services.
			</Text>
			<Text whiteColor style={styles.txt}>
				19. You/Your/ Yourself means You as the holder of the account.
			</Text>
			<Text whiteColor style={styles.txt}>
				20. We/ Us/Our means XXXXX or any XXXXX outlet.
			</Text>
			<View style={{ height: 20, opacity: 0 }} />
			<Text whiteColor semibold style={{ marginBottom: 15 }}>
				B. YOUR ACCOUNT
			</Text>
			<Text whiteColor>2: APPLYING FOR AN ACCOUNT</Text>
			<Text whiteColor style={styles.txt}>
				2.1: You may open an XXXXX account provided that you have “Carte se jour”, a valid student card of
				Setif, and other required documents which we demand and have completed the online application form/App.
			</Text>
			<Text whiteColor style={styles.txt}>
				2.2: If you would like to open an account via the app you must first download it.
			</Text>
			<Text whiteColor style={styles.txt}>
				2.3: To open account via online interface ,please visit the website :
			</Text>
			<Text whiteColor style={styles.txt}>
				2.4: After opening the installed app or online interface, a registration process begins under which you
				can apply electronically for the opening of the account.
			</Text>
			<Text whiteColor style={styles.txt}>
				2.5: By submitting an electronic account to XXXXX you are submitting a binding offer for the conclusion
				of a contract for the provision of an account with the functions described under the clause 1 of these
				terms and conditions.
			</Text>
			<Text whiteColor style={styles.txt}>
				2.6: To qualify you must be of at least 16 years old and have provided all the required documents .
			</Text>
			<Text whiteColor style={styles.txt}>
				2.7: We have the right to refuse to open an account.
			</Text>
			<Text whiteColor style={styles.txt}>
				2.8: You are allowed to open only one account.
			</Text>
			<Text whiteColor style={styles.txt}>
				NOTE: You are responsible for maintaining adequate security and control of any and all ID’s, passwords,
				personal identification numbers or any other codes that you use to access your XXXXX account and its
				services .You must keep your mailing address and other contact information current in your XXXXX account
				profile.
			</Text>
			<View style={{ height: 20, opacity: 0 }} />
			<Text whiteColor semibold style={{ marginBottom: 15 }}>
				3. ACTIVATING YOUR ACCOUNT
			</Text>
			<Text whiteColor>
				3.1: We are legally obliged to verify your identity prior to the opening of an account,you have the
				following options : (a)Carte se jour (b)Setif Student ID (c) Other required documents
			</Text>
			<Text whiteColor style={styles.txt}>
				3.2: Your account is activated once you fill the form and provide all required documents for
				registration.
			</Text>
			<Text whiteColor style={styles.txt}>
				3.3: Immediately after registering you for the services, you will be provided with a start pin which
				will be send to your email.
			</Text>
			<Text whiteColor style={styles.txt}>
				3.4: To activate your account for use you must firstly deposit a minimum amount of 50 dinars which is an
				floating amount and must not be withdrawn unless you require to terminate your account.
			</Text>
			<Text whiteColor style={styles.txt}>
				3.5: You can then buy E-money which will be provided by the XXXXX and it will credited to your account
				by making a cash payment to the agent after which you will be able to perform money transactions using
				your cellphone.
			</Text>
			<View style={{ height: 20, opacity: 0 }} />
			<Text whiteColor semibold style={{ marginBottom: 15 }}>
				4. USING YOUR ACCOUNT
			</Text>
			<Text whiteColor>
				4.1 If You have an XXXXX account You may transact within limits approved by regulatory authorities from
				time to time as follows:
			</Text>
			<Text whiteColor style={styles.txt}>
				4.1.1 Transaction Limit
			</Text>
			<Text whiteColor style={styles.txt}>
				4.1.2 Daily transactions limit
			</Text>
			<Text whiteColor style={styles.txt}>
				4.1.3 Monthly Limit
			</Text>
			<Text whiteColor style={styles.txt}>
				4.2 If You attempt to exceed the limit Your account may be viewed with suspicion and suspended.
			</Text>
			<Text whiteColor style={styles.txt}>
				4.3 You may not operate Your account on behalf of others and You must be and remain the sole owner of
				all E-money in Your account.
			</Text>
			<Text whiteColor style={styles.txt}>
				4.4 Your account cannot be transferred to another XXXXX Subscriber under any circumstances.
			</Text>
			<Text whiteColor style={styles.txt}>
				4.5 Your E-money balance does not earn interest.
			</Text>
			<Text whiteColor style={styles.txt}>
				4.6 You undertake not to use Your account to commit any offence under the Algerian law. Should it come
				to our attention that any such offence has been committed by You your account will be closed or
				suspended.
			</Text>
			<Text whiteColor style={styles.txt}>
				4.7 You shall immediately notify XXXXX of any change of personal details that You gave us when You
				opened Your account and completed the application form.
			</Text>
			<View style={{ height: 20, opacity: 0 }} />
			<Text whiteColor semibold style={{ marginBottom: 15 }}>
				5 DOING TRANSACTIONS ON YOUR ACCOUNT
			</Text>
			<Text whiteColor>
				5.1 You may perform the following XXXXX transactions with us using the following channels:
			</Text>
			<Text whiteColor style={styles.txt}>
				5.1.1 Exchanging cash for E-money at an appointed XXXXX Agent; and/or
			</Text>
			<Text whiteColor style={styles.txt}>
				5.1.2 Exchanging E-money for cash (cash withdrawal) at an appointed XXXXX Agent; and/or
			</Text>
			<Text whiteColor style={styles.txt}>
				5.1.3 Transferring E-money to another registered customer’s mobile phone; and/or
			</Text>
			<Text whiteColor style={styles.txt}>
				5.1.4 Purchasing prepaid airtime using E-Money; and/or
			</Text>
			<Text whiteColor style={styles.txt}>
				5.1.5 Purchasing tickets at the residential restaurant using E-Money.
			</Text>
			<Text whiteColor style={styles.txt}>
				5.2 We reserve the right to add more functions from time to time onto the Services and we will notify
				You of such additional transactions and functionalities through communications channels, such as email
				but not limited
			</Text>
			<Text whiteColor style={styles.txt}>
				5.3 When the transaction(s) are processed, Your account shall be debited or credited depending on
				whether You are depositing or withdrawing.
			</Text>
			<Text whiteColor style={styles.txt}>
				5.4 We will verify and confirm all transactions performed through Your account by sending You an Email.
			</Text>
			<Text whiteColor style={styles.txt}>
				5.5 In the event that You do not have enough E-money to enable a transaction and pay the relevant
				charges, the Transaction will be declined by us.
			</Text>
			<Text whiteColor style={styles.txt}>
				5.6 You are responsible for ensuring that the information You provide when doing transactions is
				correct. If You provide incorrect information You will have no claim against XXXXX, or any XXXXX Agency
				for any losses or damages you may incur.
			</Text>
			<Text whiteColor style={styles.txt}>
				5.7 You cannot perform an transaction to an unregistered customer, if by any means you do so your
				transaction will be rendered unsuccessful or invalid transaction.
			</Text>
			<View style={{ height: 20, opacity: 0 }} />
			<Text whiteColor semibold style={{ marginBottom: 15 }}>
				6 CLOSING OR SUSPENSION OF ACCOUNT
			</Text>
			<Text whiteColor>6.1 We will close Your account upon receiving a written request from you to do so.</Text>
			<Text whiteColor style={styles.txt}>
				6.2 We may at any time close the account or restrict access to Your Account without prior notice to you
				if:
			</Text>
			<Text whiteColor style={styles.txt}>
				6.2.1 We suspect fraud on Your account or if we are required to do so by law.
			</Text>
			<Text whiteColor style={styles.txt}>
				6.2.2 We become aware or have reason to believe that Your cellphone, SIM card or Your PIN used in
				relation to Your account is being or has been or is likely to be used in an unauthorised, unlawful,
				improper, or fraudulent manner, or for any criminal activities.
			</Text>
			<Text whiteColor style={styles.txt}>
				6.2.3 We become aware that any of Your registration information (as contained in customer application
				form) on record is incorrect or incomplete.
			</Text>
			<Text whiteColor style={styles.txt}>
				6.2.4 We believe that You are in breach of these Rules or are trying to compromise Our system or are
				interfering with any services provided by Us.
			</Text>
			<Text whiteColor style={styles.txt}>
				6.2.5 You open or try to open more than 2 accounts.
			</Text>
			<Text whiteColor style={styles.txt}>
				6.2.6 You have not performed any transaction for a period of ninety (90) days. Should You not perform
				transactions for a period of 12 months We may at Our discretion close Your account.
			</Text>
			<Text whiteColor style={styles.txt}>
				6.2.7 You have not performed any transaction for a period of 90 days. We will monitor Your account for a
				further 90 days, and then be entitled at our discretion to notify You that we consider Your account as
				being dormant, and encouraging You to perform transactions through your Account. Should You not perform
				transactions for another period of 6 months We may at Our discretion close Your account.
			</Text>
			<Text whiteColor style={styles.txt}>
				6.2.8 You cease to be an XXXXX subscriber.
			</Text>
			<Text whiteColor style={styles.txt}>
				6.2.9 You are declared insolvent, bankrupt or die, or issued with a Court order or under and/or a
				regulation or law that requires Us to do so.
			</Text>
			<Text whiteColor style={styles.txt}>
				6.3 Any credit balances in the account will be repaid under the following circumstances:
			</Text>
			<Text whiteColor style={styles.txt}>
				6.3.1 Upon presenting Yourself in person with satisfactory proof of identity at any outlet or agency.
			</Text>
			<Text whiteColor style={styles.txt}>
				6.3.2 In the event that You die, to the Executor of Your estate or if not Charity.
			</Text>
			<View style={{ height: 20, opacity: 0 }} />

			{/* <Text whiteColor>
				The above copyright notice and this permission notice shall be included in all copies or substantial
				portions of the Software.
			</Text> */}
			<View style={{ height: 20, opacity: 0 }} />

			<Text whiteColor>
				{/* We will not be responsible to You for any direct, indirect or consequent or special
				damages arising from any act or omission by XXXXX, or any XXXXX outlet for which we are responsible
				whether arising in contract, delict or statute if we close, restrict or suspend Your account in terms of
				clause 6 */}
				WE WILL NOT BE RESPONSIBLE TO YOU FOR ANY DIRECT, INDIRECT OR CONSEQUENT OR SPECIAL DAMAGES ARISING FROM
				ANY ACT OR OMISSION BY XXXXX, OR ANY XXXXX OUTLET FOR WHICH WE ARE RESPONSIBLE WHETHER ARISING IN
				CONTRACT, DELICT OR STATUTE IF WE CLOSE ,RESTRICT OR SUSPEND YOUR ACCOUNT IN TERMS OF CLAUSE 6.
			</Text>
		</View>
	);
	const renderPolicy = () => (
		<View style={{ padding: 20 }}>
			<Text whiteColor>Privacy Policy</Text>
			<View style={{ height: 20, opacity: 0 }} />

			{/* <Text whiteColor>Copyright (c) 2018-2020 BlueWallet Services</Text> */}
			<View style={{ height: 20, opacity: 0 }} />
			<Text whiteColor>
				Your privacy is important to FerhatPay so we have made a Privacy Policy available that outlines how we
				collect, use, disclose, transfer and store your personal information. In addition, we provide data and
				privacy information features in our products that ask to use your personal information. By installing
				and registering to Ferhatpay you agree to be bound to our privacy policy. If you have any questions and
				queries, you can contact us by any of the means set out in Contact us section. If you do not agree with
				this privacy policy, you should stop using Ferhatpay immediately.
			</Text>
			<Text whiteColor style={styles.txt}>
				Collection and Use of Personal Information: Personal information is data that can be used to identify or
				contact a single person who registered to Ferhatpay. You may be asked to provide your personal
				information anytime you are in contact with Ferhatpay and/or its services and other Ferhatpay affiliated
				companies. Ferhatpay and its affiliates may share this personal information with each other and use it
				consistent with this Privacy Policy. They may also combine it with other information to provide and
				improve our products, services, content and advertising.
			</Text>
			<Text whiteColor style={styles.txt}>
				What personal information we collect: When you create a Ferhatpay account, connect to our services,
				contact us including by social media or participate in an online survey. We may collect a variety of
				information including your name, mailing address, phone number, email address, location information, ID
				photo, student ID, age, identity documents, bank account information and profile information where the
				contact is via social media. When you share content with family and friends using Ferhatpay products and
				services, or invite others to participate in Ferhatpay services or forums. Ferhatpay may collect the
				information you provide about these people such as name, mailing address, email address, phone number.
				Ferhatpay will use such information to fulfill your requests, provide the relevant product or service,
				or for anti-fraud purposes. We ask for a government issued ID in circumstances of opening account and
				other needs which arise from the use of our services. This applies to all other Identity documents,
				which might be requested by us to fully approve a person’s identity as required by law.
			</Text>
			<Text whiteColor style={styles.txt}>
				How we use your personal information: We may use your personal information including Date of Birth, to
				verify identity, assist with identification of uses and to determine appropriate services. For example,
				we may use Date of Birth to determine the age of Ferhatpay account holders.We may also use personal
				information for internal purposes such as auditing, data analysis, research and development to improve
				Ferhatpay products and services, and customer communication. If you apply for a position at Ferhatpay or
				we receive your information in connection with a potential role at Ferhatpay, we may us your information
				to evaluate your candidacy to contact you. We use the personal information for fraud prevention. To
				promote safety, reduce financial risk and deal with fraud across our services and products. We can use
				your information to notify you of offers, promotions and updates regarding our products and services.
				Legal bases upon which we use your personal information:
			</Text>
			<Text whiteColor style={styles.txt}>
				We must have a legal basis (a valid legal reason) for using your personal information.
			</Text>
			<Text whiteColor style={styles.txt}>
				Our legal basis will be one of the following: Keeping to our contracts and agreements with you. We need
				certain information to provide our services and cannot provide them without this information. Legal
				obligations: In some cases, we have a legal responsibility to collect and store your personal
				information (for example, under money-laundering laws we must hold certain information about our
				customers). Legitimate interests: We sometimes collect and use your personal information, or share it
				with other organizations because they or we have a legitimate reason to have it and this is reasonable
				when balanced against your right to privacy. Consent: Where you have agreed to us collecting your
				information for example by using the Ferhatpay services and products. You are happy for us to use your
				personal information in certain way. We will inform you when your information is required to provide the
				services you request, or is required by law. For example, such as performing money transfer services, we
				may be unable to provide you with our services unless you provide certain personal information.
			</Text>
			<Text whiteColor style={styles.txt}>
				Retention of personal information:
			</Text>
			<Text whiteColor style={styles.txt}>
				Your personal information will be retained in accordance with statutory periods contained in regulations
				applicable to financial transactions including those in anti-money laundering, anti-terrorist financing
				and other laws applicable to us. Otherwise, we will retain your information only if necessary for
				specific purposes it was collected or to resolve any query you may raise. We will typically keep your
				information for no longer than the purpose(s) for which it was obtained, or retention is advisable for
				Ferhatpay’s legal position (for example, regarding applicable statutes of limitations, litigation or
				regulatory investigations).
			</Text>
			<Text whiteColor style={styles.txt}>
				How do we store and protect your personal information:
			</Text>
			<Text whiteColor style={styles.txt}>
				We will keep your personal information in accordance with our policies and for as long it is necessary
				to provide you with the Ferhatpay services or other purposes as set out in this Policy. In addition, we
				may retain your personal information for a longer period (including after you are no longer a user), if
				it is necessary to comply with laws and regulations applicable to us. We use a variety of security
				measures and technologies designed to help protect your personal information from unauthorized access
				use, disclosure, alteration or destruction consistent with applicable data protection and privacy laws
				and regulations. You are responsible for maintaining the security of your account information (name,
				password, etc) for Ferhatpay services in your possession or control.
			</Text>
			<Text whiteColor style={styles.txt}>
				How do we process personal information about children?
			</Text>
			<Text whiteColor style={styles.txt}>
				Our service is not directed towards children under 16years old neither does Ferhatpay knowingly collect
				information from children under 16. If you are under 16, please do not use Ferhatpay services or submit
				any personal information to us. If you are above 13 but below 16 years old, and where we have asked for
				your consent for collecting your information in order to provide services to you, you must ask your
				parents or guardian to read this policy and use our services or provide us with your information with
				prior express consent from your parents or guardian. If your guardian disagrees to your use of our
				services or provision of information to us in accordance with this policy, please stop immediately the
				use of our services and notify us promptly so that we can take appropriate actions. If you, acting as a
				guardian of a child, have relevant questions in respect of a child’s personal information. Please
				contact us using the details set out in Contact us section.
			</Text>
			<Text whiteColor style={styles.txt}>
				Third Party Services and Sites:
			</Text>
			<Text whiteColor style={styles.txt}>
				The Ferhatpay services and our website may provide links to other websites and services (including other
				online merchant sites) for your convenience and information. These services and websites may operate
				independently from us. Linked services and websites may have their own privacy policies, which we
				strongly suggest you review if you visit any linked websites. To the extent any linked websites you
				visit are not owned or controlled by us, we are not responsible for these websites or services content,
				any use of these services or websites by you, or the privacy practices of these services or websites.
				When we provide personal information to these websites, we require those third parties to handle it in
				accordance with relevant laws.
			</Text>
			<Text whiteColor style={styles.txt}>
				Your Rights:
			</Text>
			<Text whiteColor style={styles.txt}>
				You have the right to be told about how we use your personal information. You can ask to see the
				personal information we hold about you, this is called making a data subject access request. You can ask
				to correct your personal information if you think it is wrong. You can have incomplete or inaccurate
				information corrected. Before we update your file, we may need to check the accuracy of the new
				information you have provided. We inform you of any changes of the Privacy Policy amendments, which we
				may do from time to time. Contact us:
			</Text>
			<View style={{ height: 20, opacity: 0 }} />

			<View style={{ height: 20, opacity: 0 }} />

			<Text whiteColor>
				{/* We may decline to process requests that are frivolous/vexations, jeopardize the privacy of others are 
extremely impractical or for which access is not otherwise required by local law. We may also decline 
aspects of deletion or access requests if we believe doing so would undermine our legitimate use of data 
for anti-fraud and security purposes. */}
				WE MAY DECLINE TO PROCESS REQUEST THAT ARE FRIVOLOUS/VEXATIONS, JEOPARDIZE THE PRIVACY OF OTHERS ARE
				EXTREMELY IMPRACTICAL OR FOR WHICH ACCESS IS NOT OTHERWISE REQUIRED BY LOCAL LAW. WE MAY ALSO DECLINE
				ASPECTS OF DELETION OR ACCESS REQUESTS IF WE BELIVE DOING SO WOULD UNDERMINE OUR LEGITIMATE USE OF DATA
				FOR ANTI-FRAUD AND AND SECURITY PURPOSES.
			</Text>
		</View>
	);

	return isLoading ? (
		<ActivityIndicator />
	) : (
		<SafeBlueArea style={{}}>
			<ScrollView contentContainerStyle={{ marginTop: 60 }}>
				{type === 'Terms & Conditions' ? renderTerms() : renderPolicy()}
				<Text style={[{ textAlign: 'center', fontSize: 11, color: 'grey', marginTop: 30 }]}>
					{'Copyright (c) 2020-2021 FerhatPay'}
				</Text>
				<Text style={[{ textAlign: 'center', fontSize: 11, color: 'grey' }]}>{'Version 1.0.0'}</Text>
				<View style={{ height: 100, opacity: 0 }} />
			</ScrollView>
		</SafeBlueArea>
	);
};

const styles = StyleSheet.create({
	txt: { marginTop: 6, fontSize: 13 },
});
export default Licensing;
