/* eslint-disable no-case-declarations */
import ACTIONS from '../../config/constants/ACTIONS';
import { CAMERA_PHOTOS } from '../../config/constants/common';

const initialState = {
  userLocation: undefined,  // Why undefined instead of null?
  user: undefined,
  error: null,
  borrower: undefined,
  agreedToTermsOfUse: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_USER_SUCCESS:
      return {
        ...state,
        tokens: action.tokens,
        user: action.user,
      };

    case ACTIONS.GET_LOGGED_IN_BORROWER_SUCCESS:
    case ACTIONS.LOGIN_BORROWER_SUCCESS:
      return {
        ...state,
        borrower: action.borrower,
        user: action.borrower.user,
      };

    case ACTIONS.REGISTER_USER_SUCCESS:
    case ACTIONS.REGISTER_USER_TWITTER_SUCCESS:
    case ACTIONS.UPDATE_USER_SUCCESS:
    case ACTIONS.LOGIN_USER_GOOGLE_SUCCESS:
    case ACTIONS.LOGIN_USER_FACEBOOK_SUCCESS:
    case ACTIONS.LOGIN_USER_TWITTER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };

    case ACTIONS.REGISTER_BORROWER_SUCCESS:
      return {
        ...state,
        user: action.user,
        borrower: action.borrower,
      };

    case ACTIONS.REGISTER_EXISTING_BORROWER_SUCCESS:
      return {
        ...state,
        user: action.user,
        borrower: action.borrower,
      };

    case ACTIONS.SET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.userLocation,
      };

    case ACTIONS.TWITTER_GET_ACCESS_TOKEN:
      return {
        ...state,
        user: {
          ...state.user,
          twitter_oauth_token: action.twitter_tokens.oauth_token,
          twitter_oauth_secret: action.twitter_tokens.oauth_token_secret,
        },
      };

    case ACTIONS.TWITTER_SUCCESS:
      const names = action.twitter_user.name.trim().split(/\s+(?=[^\s]+$)/);
      return {
        ...state,
        user: {
          ...state.user,
          first_name: names[0] ? names[0].trim() : '',
          last_name: names[1] ? names[1].trim() : '',
          email: action.twitter_user.email,
          twitter_screen_name: action.twitter_user.screen_name,
          twitter_id: action.twitter_user.id_str,
          profile_picture: action.twitter_user.profile_image_url_https,
        },
      };

    case ACTIONS.FACEBOOK_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          first_name: action.facebook_user.first_name,
          last_name: action.facebook_user.last_name,
          email: action.facebook_user.email,
          facebook_id: action.facebook_user.id,
          access_token: action.facebook_user.accessToken,
        },
      };

    case ACTIONS.GOOGLE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          first_name: action.google_user.given_name,
          last_name: action.google_user.family_name,
          email: action.google_user.email,
          google_id: action.google_user.id,
          access_token: action.google_user.accessToken,
          profile_picture: action.google_user.picture,
        },
      };

    case ACTIONS.GET_USER_PERSONAL_INFO_SUCCESS:
    case ACTIONS.CREATE_USER_PERSONAL_INFO_SUCCESS:
    case ACTIONS.UPDATE_USER_PERSONAL_INFO_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.personalInfo,
        },
      };

      case ACTIONS.CHANGE_USER_PERSONAL_INFO:
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.key]: action.payload.value
        },
        error: null
      }

      case ACTIONS.UPDATE_USER_PERSONAL_INFO_ERROR:
      return {
        ...state,
        error: action.error
      }

    case ACTIONS.GET_USER_ADDRESS_INFO_SUCCESS:
    case ACTIONS.CREATE_USER_ADDRESS_INFO_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.addressInfo,
        },
      };

    case ACTIONS.GET_USER_CONTACT_INFO_SUCCESS:
    case ACTIONS.CREATE_USER_CONTACT_INFO_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.contactInfo,
        },
      };

    case ACTIONS.GET_USER_BANK_INFO_SUCCESS:
    case ACTIONS.CREATE_USER_BANK_INFO_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.bankInfo,
        },
      };

    case ACTIONS.GET_USER_DOCUMENTS_SUCCESS:
    case ACTIONS.CREATE_USER_DOCUMENTS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.documents,
        },
      };

    case ACTIONS.CREATE_LOAN_DETAILS_SUCCESS:
    case ACTIONS.GET_LOAN_DETAILS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          bank_name: action.loanDetails.bank_name,
          bank_routing_number: action.loanDetails.bank_routing_number,
          bank_account_number: action.loanDetails.bank_account_number,
        },
      };

    case ACTIONS.TAKE_CAMERA_PHOTO:
      switch (action.photoName) {
        case CAMERA_PHOTOS.DOCUMENT_FRONT:
          return setDocumentImage(state, 'front', action.photo);
        case CAMERA_PHOTOS.DOCUMENT_BACK:
          return setDocumentImage(state, 'back', action.photo);
        case CAMERA_PHOTOS.SELFIE:
          return setDocumentImage(state, 'selfie', action.photo);
        default:
          return { ...state };
      }

    case ACTIONS.TOGGLE_TERMS_OF_USE:
      return {
        ...state,
        agreedToTermsOfUse: !state.agreedToTermsOfUse,
      }

    case ACTIONS.UPLOAD_PLOFILE_IMAGE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profile_picture: action.image
        },
      }

    default:
      return state;

  }
}

function setDocumentImage(state, imageName, image) {
  return {
    ...state,
    user: {
      ...state.user,
      [imageName]: image,
    }
  }
}
