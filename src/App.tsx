import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginModal from './component/LoginModal';
import { connect } from 'react-redux'
import { clickModalButtonAction } from './redux/actions/ModalAction'
import { ModalProps } from './globalInterFace'
import AllCalss from './pages/AllCalss';

const App: React.FC<ModalProps> = (props) => {
  const { modalState, getLoginModal } = props
  return (
    <>
      <Header modalState={modalState} getLoginModal={getLoginModal} />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/class" element={<AllCalss />} />
      </Routes>
      <Footer />
      <LoginModal modalState={modalState} getLoginModal={getLoginModal} />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  modalState: state.modalReducer.modalState,
})

export default connect(mapStateToProps, {
  getLoginModal: clickModalButtonAction,
})(App)
