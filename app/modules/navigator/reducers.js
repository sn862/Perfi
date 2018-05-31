import Navigator from '../../navigation/Navigator';
import settingTypes from '../settings/types';
import { getResetAction } from '../../utils/navHelpers';
import screens from '../../constants/screens';


const getResetState = (state, routeName) =>
  Navigator.router.getStateForAction(
    getResetAction([{ routeName }], null),
    state,
  );

const navigatorReducer = (state, action) => {
  switch (action.type) {
    case settingTypes.SIGN_IN:
      return getResetState(state, screens.DrawerRoot);
    default:
      return Navigator.router.getStateForAction(action, state);
  }
};

export default navigatorReducer;
