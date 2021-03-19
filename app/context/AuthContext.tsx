import React, { createContext, useState } from 'react';
import { AdminActions } from '@actions';
import { useDispatch, useSelector } from 'react-redux';
// import {AuthActions} from '@actions';
// import {WEB_CLIENT_ID} from '@env';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [product_barcode, setProduct_barcode] = useState('');
	const [documentImages, setDocumentImages] = useState({
		id: '',
		profile: '',
	});
	const [prizeInclude, setPrizeInclude] = useState(false);
	//   const dispatch = useDispatch();
	//   const user = useSelector((state) => state.auth.user);

	//   const googleSignOut = async (resolve) => {
	//     await GoogleSignin.revokeAccess();
	//     await GoogleSignin.signOut();
	//     await destroyUserState();
	//     resolve({success: true});
	//   };
	//   const facebookSignOut = async (resolve) => {
	//     await LoginManager.logOut();
	//     await destroyUserState();
	//     resolve({success: true});
	//   };

	//   const destroyUserState = async () => {
	//     await dispatch(AuthActions.onLogout());
	//   };

	return (
		<AuthContext.Provider
			value={{
				adminKey: async () => {
					try {
						alert(123);
					} catch (error) {}
				},
				getImageUri: (val, type) => {
					setDocumentImages({
						...documentImages,
						[type]: val,
					});
				},
				documentImages,
				// recordProduct: async (data) => {
				//   return new Promise(async (resolve, reject) => {
				//     const reference = firestore().collection('Products');

				//     try {
				//       const promise = reference.add(data);
				//       promise.then(() => {
				//         resolve({success: true});
				//       });
				//     } catch (error) {
				//       reject(error);
				//     }
				//   });
				// },
				// getImageUri: async (photoURI, productName) => {
				//   return new Promise(async (resolve, reject) => {
				//     try {
				//       const storageRef = storage()
				//         .ref('Products')
				//         .child(productName + '-' + new Date().getTime());
				//       const task = storageRef.putFile(photoURI).then(() => {
				//         storageRef.getDownloadURL().then((downloadedUrl) => {
				//           resolve(downloadedUrl);
				//         });
				//       });
				//     } catch (error) {
				//       reject(error);
				//     }
				//   });
				// },
				// getProducts: async (query) => {
				//   return new Promise(async (resolve, reject) => {
				//     try {
				//       firestore()
				//         .collection('Products')
				//         .get()
				//         .then((products) => {
				//           resolve(products);
				//         });
				//     } catch (error) {
				//       reject(error);
				//     }
				//   });
				// },
				// editProduct: (data) => {
				//   setEditProduct(data);
				// },
				// editproducts,
				// IncludePrizePdf: (val) => {
				//   setPrizeInclude(val);
				// },
				// prizeInclude,
				// createCategory: (data) => {
				//   return new Promise(async (resolve, reject) => {
				//     const reference = firestore().collection('Category');
				//     try {
				//       const promise = reference.add(data);
				//       promise.then(() => {
				//         resolve({success: true});
				//       });
				//     } catch (error) {
				//       reject(error);
				//     }
				//   });
				// },
				// getCategories: async () => {
				//   return new Promise(async (resolve, reject) => {
				//     try {
				//       firestore()
				//         .collection('Category')
				//         .get()
				//         .then((category) => {
				//           resolve(category);
				//         });
				//     } catch (error) {
				//       reject(error);
				//     }
				//   });
				// },
				// updateSettings: async (data) => {
				//   const uuid = data.uid;
				//   delete data.uid;
				//   return new Promise(async (resolve, reject) => {
				//     const reference = firestore().collection('Users').doc(uuid);
				//     try {
				//       const promise = reference.update(data);
				//       promise.then(() => {
				//         dispatch(AdminActions.updateSettings(data));
				//         resolve({success: true});
				//       });
				//     } catch (error) {
				//       reject(error);
				//     }
				//   });
				// },
				// logout: async () => {
				//   return new Promise(async (resolve, reject) => {
				//     GoogleSignin.configure({
				//       webClientId: WEB_CLIENT_ID,
				//     });
				//     await setTimeout(async () => {
				//       try {
				//         await auth().signOut();
				//         user.providerId === 'google.com'
				//           ? googleSignOut(resolve)
				//           : facebookSignOut(resolve);
				//       } catch (error) {
				//         reject(error);
				//       }
				//     }, 2000);
				//   });
				// },
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

// {
//   idToken,
//   user
// }
