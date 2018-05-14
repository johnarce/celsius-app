export default {
  // api actions
  START_API_CALL: 'START_API_CALL',
  API_ERROR: 'API_ERROR',
  CLEAR_API_ERROR: 'CLEAR_API_ERROR',

  // navigation actions
  NAVIGATE: 'Navigation/NAVIGATE',

  // ui actions
  SHOW_MESSAGE: 'SHOW_MESSAGE',
  CLEAR_MESSAGE: 'CLEAR_MESSAGE',
  SET_HEADER_HEIGHT: 'SET_HEADER_HEIGHT',
  TOGGLE_CAMERA: 'TOGGLE_CAMERA',
  FLIP_CAMERA: 'FLIP_CAMERA',
  TAKE_CAMERA_PHOTO: 'TAKE_CAMERA_PHOTO',

  // loanRequest actions
  CREATE_LOAN_REQUEST_SUCCESS: 'CREATE_LOAN_REQUEST_SUCCESS',
  GET_LOAN_REQUEST_SUCCESS: 'GET_LOAN_REQUEST_SUCCESS',
  CANCEL_LOAN_REQUEST_SUCCESS: 'CANCEL_LOAN_REQUEST_SUCCESS',
  GET_SUPPORTED_CURRENCIES_SUCCESS: 'GET_SUPPORTED_CURRENCIES_SUCCESS',
  ACCEPT_LOAN_REQUEST_SUCCESS: 'ACCEPT_LOAN_REQUEST_SUCCESS',
  STATUS_LOAN_REQUEST_SUCCESS: 'STATUS_LOAN_REQUEST_SUCCESS',
  GET_LOAN_DETAILS_SUCCESS: 'GET_LOAN_DETAILS_SUCCESS',
  CREATE_LOAN_DETAILS_SUCCESS: 'CREATE_LOAN_DETAILS_SUCCESS',

  // portfolio actions
  CREATE_PORTFOLIO_SUCCESS: 'CREATE_PORTFOLIO_SUCCESS',
  GET_PORTFOLIO_SUCCESS: 'GET_PORTFOLIO_SUCCESS',
  GET_ESTIMATED_LOAN_SUCCESS: 'GET_ESTIMATED_LOAN_SUCCESS',

  // auth actions
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_BORROWER_SUCCESS: 'LOGIN_BORROWER_SUCCESS',
  GET_LOGGED_IN_BORROWER_SUCCESS: 'GET_LOGGED_IN_BORROWER_SUCCESS',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  REGISTER_USER_TWITTER_SUCCESS: 'REGISTER_USER_TWITTER_SUCCESS',
  LOGIN_USER_TWITTER_SUCCESS: 'LOGIN_USER_TWITTER_SUCCESS',
  REGISTER_USER_FACEBOOK_SUCCESS: 'REGISTER_USER_FACEBOOK_SUCCESS',
  LOGIN_USER_FACEBOOK_SUCCESS: 'LOGIN_USER_FACEBOOK_SUCCESS',
  REGISTER_USER_GOOGLE_SUCCESS: 'REGISTER_USER_GOOGLE_SUCCESS',
  LOGIN_USER_GOOGLE_SUCCESS: 'LOGIN_USER_GOOGLE_SUCCESS',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  REGISTER_BORROWER_SUCCESS: 'REGISTER_BORROWER_SUCCESS',
  REGISTER_EXISTING_BORROWER_SUCCESS: 'REGISTER_EXISTING_BORROWER_SUCCESS',
  SET_USER_LOCATION: 'SET_USER_LOCATION',
  SEND_RESET_LINK_SUCCESS: 'SEND_RESET_LINK_SUCCESS',

  // 3rd party user on-boarding
  TWITTER_GET_ACCESS_TOKEN: 'TWITTER_GET_ACCESS_TOKEN',
  TWITTER_SUCCESS: 'TWITTER_SUCCESS',
  TWITTER_CLOSE: 'TWITTER_CLOSE',
  TWITTER_OPEN: 'TWITTER_OPEN',
  FACEBOOK_SUCCESS: 'FACEBOOK_SUCCESS',
  GOOGLE_GET_ACCESS_TOKEN: 'GOOGLE_GET_ACCESS_TOKEN',
  GOOGLE_SUCCESS: 'GOOGLE_SUCCESS',
  GOOGLE_CLOSE: 'GOOGLE_CLOSE',
  GOOGLE_OPEN: 'GOOGLE_OPEN',

  // interest actions
  CREATE_INTEREST_SUCCESS: 'CREATE_INTEREST_SUCCESS',
  ACCEPT_INTEREST_SUCCESS: 'ACCEPT_INTEREST_SUCCESS',
  ACCEPT_INTEREST_REQUEST_SUCCESS: 'ACCEPT_INTEREST_REQUEST_SUCCESS',

  // user actions
  GET_USER_PERSONAL_INFO_SUCCESS: 'GET_USER_PERSONAL_INFO_SUCCESS',
  CREATE_USER_PERSONAL_INFO_SUCCESS: 'CREATE_USER_PERSONAL_INFO_SUCCESS',
  UPDATE_USER_PERSONAL_INFO: 'UPDATE_PERSONAL_USER_INFO',
  UPDATE_USER_PERSONAL_INFO_SUCCESS: 'UPDATE_PERSONAL_USER_INFO_SUCCESS',
  UPDATE_USER_PERSONAL_INFO_ERROR: 'UPDATE_PERSONAL_USER_INFO_ERROR',
  CHANGE_USER_PERSONAL_INFO: 'CHANGE_PERSONAL_USER_INFO',
  GET_USER_ADDRESS_INFO_SUCCESS: 'GET_USER_ADDRESS_INFO_SUCCESS',
  CREATE_USER_ADDRESS_INFO_SUCCESS: 'CREATE_USER_ADDRESS_INFO_SUCCESS',
  GET_USER_CONTACT_INFO_SUCCESS: 'GET_USER_CONTACT_INFO_SUCCESS',
  CREATE_USER_CONTACT_INFO_SUCCESS: 'CREATE_USER_CONTACT_INFO_SUCCESS',
  GET_USER_BANK_INFO_SUCCESS: 'GET_USER_BANK_INFO_SUCCESS',
  CREATE_USER_BANK_INFO_SUCCESS: 'CREATE_USER_BANK_INFO_SUCCESS',
  GET_USER_DOCUMENTS_SUCCESS: 'GET_USER_DOCUMENTS_SUCCESS',
  CREATE_USER_DOCUMENTS_SUCCESS: 'CREATE_USER_DOCUMENTS_SUCCESS',
  TOGGLE_TERMS_OF_USE: 'TOGGLE_TERMS_OF_USE',

}
