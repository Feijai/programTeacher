import { SET_SIDEBAR } from '../constant'

interface ClickSideBarAction {
    type: string;
    payload: string
}

export const clickSideBarAction = (clickName: string) =>
    (dispatch: (arg: ClickSideBarAction) => (ClickSideBarAction)) => {
        dispatch({ type: SET_SIDEBAR, payload: clickName })
    }